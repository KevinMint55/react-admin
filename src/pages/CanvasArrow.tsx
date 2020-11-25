import React, { useEffect, useRef } from 'react';

const Arrow = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  console.log(canvas);
  useEffect(() => {
    const ctx = canvas.current?.getContext('2d');
    if (ctx) {
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 100);
      // ctx.stroke();
      ctx.moveTo(0, 100);
      ctx.lineTo(100, 100);
      ctx.stroke();
    }
  }, []);

  console.log(canvas);

  const style = {
    width: 300,
    height: 300,
    marginLeft: '300px',
  };

  return <canvas ref={canvas} style={style} />;
};

export default Arrow;
