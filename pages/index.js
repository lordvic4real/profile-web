import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Banner from "../components/home/banner";
import Meta from "../components/shared/MetaSEO";
import MyService from "../components/home/services";
import Portfolio from "../components/home/portfolio";
import About from "../components/home/about";
import Skills from "../components/home/skills";

export default function Home() {
  return (
    <>
      <Meta
        // title={`${process.env.NEXT_PUBLIC_APP_NAME} - Home `}
        title="Home "
        desc="my profile"
        canonical="/"
        type=""
        image=""
      />
      <Banner />
      <MyService />
      <Portfolio />
      <About />
      <Skills />
    </>
  );
}
