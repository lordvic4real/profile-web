// import Head from "next/head";
import Banner from "../components/contact/banner";
import Meta from "../components/shared/MetaSEO";

export default function Contact() {
  return (
    <>
      <Meta
        title={`${process.env.NEXT_PUBLIC_APP_NAME} - contact `}
        desc="my profile"
        canonical="/"
        type=""
        image=""
      />
      <Banner />
    </>
  );
}
