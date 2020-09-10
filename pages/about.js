import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Banner from "../components/about/banner";
import Meta from "../components/shared/MetaSEO";

export default function About() {
  return (
    <>
      <Meta
        title={`${process.env.NEXT_PUBLIC_APP_NAME} - about `}
        desc="my profile"
        canonical="/"
        type=""
        image=""
      />
      <Banner />
    </>
  );
}
