import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <h1>Let's learn a Gatsby</h1>
      <StaticImage alt="yorozuya" src="../images/yorozuya.jpeg" />
    </Layout>
  );
};

export default IndexPage;
