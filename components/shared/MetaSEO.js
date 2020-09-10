import Head from "next/head";
const Meta = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.desc} />
    <meta
      property="og:type"
      content={props.type && props.type !== "" ? props.type : "website"}
    />
    <meta name="og:title" property="og:title" content={props.title} />
    <meta
      name="og:description"
      property="og:description"
      content={props.desc}
    />
    <meta property="og:site_name" content="VCare - Personalized Virtual Healthcare" />
    <meta
      property="og:url"
      content={`${process.env.NEXT_PUBLIC_WEB_URL}${props.canonical}`}
    />
    <meta name="twitter:card" content={`${props.canonical}`} />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.desc} />
    <meta name="twitter:site" content="@vcare" />
    <meta name="twitter:creator" content="@vcare" />
    <link rel="icon" type="image/png" href="/public/favicon.png" />
    <link rel="apple-touch-icon" href="/public/favicon.png" />
    {props.css && <link rel="stylesheet" href={`${props.css}`} />}
    {props.image && props.image !== "" ? (
      <meta property="og:image" content={`${props.image}`} />
    ) : (
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_WEB_URL}/logo.png`}
      />
    )}
    {props.image && <meta name="twitter:image" content={`${props.image}`} />}
    {props.canonical && <link rel="canonical" href={`${props.canonical}`} />}
    {props.js && <script type="text/javascript" src={`${props.js}`}></script>}
  </Head>
);
export default Meta;
