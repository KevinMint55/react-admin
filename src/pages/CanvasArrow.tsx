import React, { useEffect, useRef } from 'react';
import { CanvasDetail } from 'types';
import { useDispatch } from 'react-redux';
import { DemoAtions } from 'actions';

const Arrow = () => {
  const dispatch = useDispatch();
  const canvas = useRef<HTMLCanvasElement>(null);
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

  dispatch(DemoAtions.actionA());

  const style: CanvasDetail = {
    width: 300,
    height: 200,
    // marginLeft: '300px',
  };

  return <canvas ref={canvas} style={style} />;
};

export default Arrow;
