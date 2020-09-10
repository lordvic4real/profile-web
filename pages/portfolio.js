// import Head from "next/head";
import Banner from "../components/portfolio/banner";
import Meta from "../components/shared/MetaSEO";

export default function Portfolio() {
  return (
    <>
      <Meta
        title={`${process.env.NEXT_PUBLIC_APP_NAME} - portfolio `}
        desc="my profile"
        canonical="/"
        type=""
        image=""
      />
      <Banner />
    </>
  );
}
