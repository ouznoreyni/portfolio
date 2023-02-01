import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Experience from "../components/sections/experience";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";
import { Seo } from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
