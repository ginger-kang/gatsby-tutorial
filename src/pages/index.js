import { Link } from "gatsby";
import * as React from "react";

const IndexPage = () => {
  return (
    <main>
      <title>Gatsby tutorial</title>
      <h1>Let's learn a Gatsby</h1>
      <Link to="/about">About</Link>
    </main>
  );
};

export default IndexPage;
