import Head from "next/head";
import Layout from "../layout";
import AboutHero from "../components/about-hero";
import Three from "../components/three";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Meaghan Bass | My Work</title>
        <meta name="description" content="Meaghan is a digital creator specializing in design, development, and 3D animations." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Three />
      </Layout>
    </div>
  );
}
