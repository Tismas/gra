import * as React from "react";
import styled from "styled-components";

const { useEffect } = React;

const Login = () => {
  const r = 20;
  const textWidth = Math.floor(241 * 1.2);
  const textHeight = Math.floor(51 * 2);
  let vx = 8;
  let vy = 4;

  const scratchEffect = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    cx = (canvas.width - textWidth) / 2,
    cy = canvas.height / 2
  ) => {
    const bx = (canvas.width - textWidth) / 2;
    const by = (canvas.height - textHeight) / 2;
    const image = ctx.getImageData(
      bx - r,
      by - r,
      textWidth + 4 * r,
      textHeight + 4 * r
    );
    const xb = bx - r;
    const yb = by - r;
    const xe = bx + textWidth + 3 * r;
    const ye = by + textHeight + 3 * r;
    for (let y = yb; y < ye; y++) {
      for (let x = xb; x < xe; x++) {
        const i = ((y - yb) * (textWidth + 4 * r) + (x - xb)) * 4;
        const dx = cx - x;
        const dy = cy - y;
        const dist = dx * dx + dy * dy;
        if (dist <= r * r) {
          image.data[i + 0] = 0;
          image.data[i + 1] = 0;
          image.data[i + 2] = 0;
          image.data[i + 3] = 0;
        }
      }
    }
    ctx.putImageData(image, bx - r, by - r);
    if (cy > by + textHeight) {
      vy = -vy;
      vx = -4;
    } else if (cy < by) {
      vy = -vy;
      vx = 8;
    }
    if (cx > bx + textWidth && cy < canvas.height / 2) {
      return;
    }
    setTimeout(() => scratchEffect(canvas, ctx, cx + vx, cy + vy), 0);
  };

  useEffect(() => {
    const canvas = document.getElementById("scratch") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    ctx.fillStyle = "#919191";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    scratchEffect(canvas, ctx);
  });

  setTimeout(() => {
    window.location.replace('/map');
  }, 3000);

  return (
    <>
      <Logo>Scralk</Logo>
      <Canvas id="scratch" />
    </>
  );
};

const Logo = styled.div`
  color: #107cc9;
  font-family: OpenSans;
  font-weight: bold;
  font-size: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
`;
const Canvas = styled.canvas`
  display: block;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
`;

export default Login;
