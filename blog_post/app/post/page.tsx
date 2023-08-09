"use client";

import React, { useContext } from "react";
import BlogPost from "../blogpost";
import { useEffect, useState } from "react";
import axios from "axios";
import { Data } from "../model";
import { CounterContext } from "@/Context/Context";

const Home = () => {
  const { state, dispatch } = useContext(CounterContext);
  const blogPost = {
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  };

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      {data &&
        data.map((d: Data) => (
          <div className="container mx-auto p-4 my-2 ">
            <BlogPost key={d.id} title={d.title} id={d.id} body={d.body} />
          </div>
        ))}
    </div>
  );
};

export default Home;
