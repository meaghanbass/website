import Head from "next/head";
import Layout from "../layout";
import AboutHero from "../components/about-hero";

export default function About() {
  return (
    <div>
      <Head>
        <title>Meaghan Bass | About Me</title>
        <meta name="description" content="A little bit about me." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <AboutHero />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { page: "About" },
  };
}
