import Head from "@docusaurus/Head";
import Features from "@site/src/components/Features";
import Hero from "@site/src/components/Hero";
import Languages from "@site/src/components/Languages";
import Layout from "@theme/Layout";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <Layout description="Open Source Contributor, Mentor and Automation Architect">
      <Head>
        <title>Ramesh Babu Prudhvi</title>
      </Head>
      <Hero />
      <Languages />
      <Features />
    </Layout>
  );
}
