// import Head from "next/head";
import Banner from "../components/portfolio/banner";
import Meta from "../components/shared/MetaSEO";
import AllPortfolios from "../components/portfolio/portfolio";

export default function Portfolio() {
  return (
    <>
      <Meta
        title="Portfolio "
        desc="my profile"
        canonical="/"
        type=""
        image=""
      />
      <Banner />
      <AllPortfolios />
    </>
  );
}
