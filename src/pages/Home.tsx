import React, { useState } from 'react';
import './Home.less';

const Home = () => {
  const [name] = useState<Array<number>>([1, 2, 3, 4]);

  return (
    <div className="home">
      { name.map((v) => (<div className="item" key={v}>{v}</div>))}
    </div>
  );
};

export default Home;
