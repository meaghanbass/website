import Head from "next/head";
import Layout from "../layout";
import AboutHero from "../components/about-hero";

export default function About() {
  return (
    <div>
      <Head>
        <title>Meaghan Bass | About Me</title>
        <meta name="description" content="Meaghan is a digital creator specializing in design, development, and 3D animations." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <AboutHero />
      </Layout>
    </div>
  );
}
