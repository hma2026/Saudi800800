"use client";

import { useEffect, useRef } from "react";

const vertexShader = `
attribute vec3 a_position;
attribute vec3 a_color;
uniform float u_time;
uniform vec2 u_pointer;
uniform float u_aspect;
varying vec3 v_color;
void main() {
  float ay = u_time * .08 + u_pointer.x * .42;
  float ax = u_pointer.y * .24;
  mat3 ry = mat3(cos(ay),0.,sin(ay), 0.,1.,0., -sin(ay),0.,cos(ay));
  mat3 rx = mat3(1.,0.,0., 0.,cos(ax),-sin(ax), 0.,sin(ax),cos(ax));
  vec3 p = rx * ry * a_position;
  float depth = 11.5 - p.z;
  vec2 projected = p.xy / depth * 2.25;
  projected.x /= u_aspect;
  gl_Position = vec4(projected, 0., 1.);
  gl_PointSize = clamp(29. / depth, 1.2, 5.5);
  v_color = a_color;
}`;

const fragmentShader = `
precision mediump float;
varying vec3 v_color;
void main() {
  vec2 uv = gl_PointCoord - .5;
  float d = length(uv);
  if (d > .5) discard;
  float glow = smoothstep(.5, 0., d);
  gl_FragColor = vec4(v_color * (1.1 + glow * .65), glow * .86);
}`;

function shader(gl: WebGLRenderingContext, type: number, source: string) {
  const result = gl.createShader(type);
  if (!result) return null;
  gl.shaderSource(result, source);
  gl.compileShader(result);
  return result;
}

export function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", { alpha: true, antialias: true });
    if (!canvas || !gl) return;

    const vs = shader(gl, gl.VERTEX_SHADER, vertexShader);
    const fs = shader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    const program = gl.createProgram();
    if (!vs || !fs || !program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const data: number[] = [];
    const point = (x: number, y: number, z: number, gold = true) => {
      data.push(x, y, z, ...(gold ? [0.9, 0.72, 0.31] : [0.06, 0.7, 0.48]));
    };
    for (let i = 0; i < 760; i += 1) {
      const t = (i / 760) * Math.PI * 10;
      const r = 3.9 + Math.sin(t * 2) * 0.28;
      point(Math.cos(t) * r, Math.sin(t * 2) * 1.45, Math.sin(t) * 2.0, i % 5 !== 0);
    }
    for (let i = 0; i < 430; i += 1) {
      const t = (i / 430) * Math.PI * 2;
      point(Math.cos(t) * 5.05, Math.sin(t) * 1.25, Math.sin(t) * 2.7 - 1.4, true);
    }
    for (let i = 0; i < 260; i += 1) {
      point((Math.random() - .5) * 14, (Math.random() - .5) * 9, (Math.random() - .5) * 9, i % 4 === 0);
    }

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    const stride = 6 * Float32Array.BYTES_PER_ELEMENT;
    const position = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 3, gl.FLOAT, false, stride, 0);
    const color = gl.getAttribLocation(program, "a_color");
    gl.enableVertexAttribArray(color);
    gl.vertexAttribPointer(color, 3, gl.FLOAT, false, stride, 3 * Float32Array.BYTES_PER_ELEMENT);
    const time = gl.getUniformLocation(program, "u_time");
    const pointer = gl.getUniformLocation(program, "u_pointer");
    const aspect = gl.getUniformLocation(program, "u_aspect");
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

    let px = 0;
    let py = 0;
    const move = (event: PointerEvent) => {
      px = event.clientX / window.innerWidth - .5;
      py = event.clientY / window.innerHeight - .5;
    };
    window.addEventListener("pointermove", move, { passive: true });
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio, 1.8);
      canvas.width = Math.floor(canvas.clientWidth * ratio);
      canvas.height = Math.floor(canvas.clientHeight * ratio);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    const start = performance.now();
    let frame = 0;
    const render = (now: number) => {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(time, (now - start) / 1000);
      gl.uniform2f(pointer, px, py);
      gl.uniform1f(aspect, canvas.width / canvas.height);
      gl.drawArrays(gl.POINTS, 0, data.length / 6);
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      observer.disconnect();
      if (buffer) gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return <canvas className="three-canvas" ref={canvasRef} aria-hidden="true" />;
}
