import Head from "next/head";
import Layout from "../layout";
import WorkHero from "../components/work-hero";

export default function Work() {
  return (
    <div>
      <Head>
        <title>Meaghan Bass | Work</title>
        <meta name="description" content="Check out my work!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <WorkHero />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { page: "Work" },
  };
}
