import App from "next/app";
import Container from "../components/containers";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Container Component={Component} pageProps={pageProps} />;
  }
}

export default MyApp;
