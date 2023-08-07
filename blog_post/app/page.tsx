import React from "react";
import Navbar from "./navbar";
import BlogPost from "./blogpost";
import Footer from "./footer";

const Home = () => {
  const blogPost = {
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  };

  return (
    <div className="flex flex-col min-h-screen justify-end ">
      <div className="items-start mt-0 mb-auto">
        <Navbar />
      </div>
      <div className="container mx-auto p-2 my-2 ">
        <BlogPost title={blogPost.title} body={blogPost.body} />
      </div>
      <div className="items-end mb-0 mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
