import "../styles/aplictation.scss";
// import PropTypes from "prop-types";
import Head from "next/head";
import React from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
// import { motion } from "framer-motion";
import Layout from "../components/Layout";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        {/* eslint-disable-next-line  */}
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
