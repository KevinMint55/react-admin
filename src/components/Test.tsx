import React from 'react';

interface IProps {
  count: number;
}

const Test = (props: IProps) => (
  <div>
    <h1>哈哈哈</h1>
    当前count值：{props.count}
    <br />
  </div>
);

export default Test;
