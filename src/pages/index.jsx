import React from "react";
import MDXContent from "@theme/MDXContent";
import Layout from "@theme/Layout";
import Index from "./_index.mdx";

export default function Home() {
  return (
    <Layout>
      <MDXContent>
        <Index />
      </MDXContent>
    </Layout>
  );
}
