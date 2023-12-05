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
  // await waitload(2);
  return {
    props: { page: "Contact" },
  };
}

// function waitload(sec) {
//   return new Promise((resolve) => setTimeout(resolve, sec * 1000));
// }
