import Head from "next/head";
import Layout from "../layout";
import ContactForm from "../components/contact-form";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Meaghan Bass | Contact</title>
        <meta name="description" content="Meaghan is a digital creator specializing in design, development, and 3D animations." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <ContactForm />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { page: "Contact" }, // is passed up to the custom app as pageProps
  };
}
