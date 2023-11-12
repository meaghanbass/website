import Head from "next/head";
import Layout from "../layout";
import ContactForm from "../components/contact-form";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Meaghan Bass | Contact</title>
        <meta name="description" content="Contact me!" />
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
    props: { page: "Contact" },
  };
}
