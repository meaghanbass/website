import Head from "next/head";
import Layout from "../layout";
import WorkHero from "../components/work-hero";

export default function Work() {
  return (
    <div>
      <Head>
        <title>Meaghan Bass | Work</title>
        <meta name="description" content="Meaghan is a digital creator specializing in design, development, and 3D animations." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <WorkHero />
      </Layout>
    </div>
  );
}
