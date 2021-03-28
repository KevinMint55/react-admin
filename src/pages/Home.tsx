import React, { useState } from 'react';
import './Home.less';
import styles from './Home.module.less';

const Home = () => {
  const [name] = useState<Array<number>>([1, 2, 3, 4]);
  console.log(styles);

  return (
    <div className={styles.home}>
      { name.map((v) => (<div className={styles.item} key={v}>{v}</div>))}
    </div>
  );
};

export default Home;
