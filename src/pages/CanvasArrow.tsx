import React, { useEffect, useRef } from 'react';
import { CanvasDetail } from 'types';
import store from 'store';

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

  // console.log(store);
  store.dispatch({ type: 'INCREMENT' });
  store.dispatch({ type: 'INCREMENT' });
  store.dispatch({ type: 'INCREMENT' });
  store.dispatch({ type: 'INCREMENT' });

  const style: CanvasDetail = {
    width: 300,
    height: 200,
    // marginLeft: '300px',
  };

  return <canvas ref={canvas} style={style} />;
};

export default Arrow;
