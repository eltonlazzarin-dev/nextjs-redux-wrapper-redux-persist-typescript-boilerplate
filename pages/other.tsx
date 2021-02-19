import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../redux/counter/actions";

export default function Other() {
  const router = useRouter();
  const globalState = useSelector((state:any) => state.counter.counter);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const handleClickIncrement = () => {
    dispatch(incrementCounter(globalState))
  }

  const handleClickDecrement = () => {
    dispatch(decrementCounter(globalState))
  }

  const navigateClick = () => {
    router.push('/');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        This is the homepage
      </div>
      <div>
        Counter: {globalState}
      </div>
      <button className={styles.button} onClick={handleClickIncrement}>
        Increment
      </button>
      <button className={styles.button} onClick={handleClickDecrement}>
        Decrement
      </button>
      <div className={styles.navigation} onClick={navigateClick}>
        Navigate the homepage
      </div>
    </div>
  )
}
