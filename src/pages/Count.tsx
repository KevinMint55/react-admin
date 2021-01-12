import React, { useState } from 'react';
import Test from 'components/Test';
import { Button, Select } from 'antd';

const { Option } = Select;

const Count = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((preCount: number) => preCount + 1);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      当前count值：{count}
      <br />
      <Select defaultValue="lucy" style={{ width: 160 }} onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Button type="primary" onClick={handleClick}>
        增加1
      </Button>
      <Test count={count} />
    </div>
  );
};

export default Count;
