import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";
import { useRouter } from "next/router";

function projects() {
  const router = useRouter();

  React.useEffect(() => {
    // Redirect to home page since projects section is currently disabled
    router.replace("/");
  }, [router]);

  // Return null or a loading state while redirecting
  return null;

  // Original component code kept for future re-enabling
  // return (
  //   <Page
  //     currentPage="Projects"
  //     meta={{ title: "Projects", desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects." }}
  //   >
  //     <Heading />
  //     <Projects />
  //     <More />
  //   </Page>
  // );
}

export default projects;
