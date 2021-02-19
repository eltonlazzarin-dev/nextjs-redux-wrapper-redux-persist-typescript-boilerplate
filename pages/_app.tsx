import '../styles/globals.css';
import { AppProps } from 'next/app';
import { wrapper } from "../configureStore";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }:AppProps) {
  const store:any = useStore();
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <Component {...pageProps} />
    </PersistGate>
  ) 
}

export default wrapper.withRedux(MyApp);
