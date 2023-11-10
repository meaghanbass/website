import Head from "next/head";
import Layout from "../layout";
import HomeHero from "../components/home-hero";
import HomeAbout from "../components/home-about";
import HomeExpertise from "../components/home-expertise";
import HomeWork from "../components/home-work";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meaghan Bass | Digital. Creative. Construction</title>
        <meta name="description" content="Meaghan is a digital creator specializing in design, development, and 3D animations." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <HomeHero />
        <HomeAbout />
        <HomeExpertise />
        <HomeWork />
      </Layout>
    </div>
  );
}
