"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Params {
  params: { id: number };
}

const Page = ({ params }: Params) => {
  // const router = useRouter();
  // const { id } = router.query;
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${params.id}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-200 p-6  my-20  w-9/12 mx-auto rounded-lg shadow-xl mt-10">
      {!data && (
        <div className="w-8/12 mx-auto my-5 text-center text-7xl text-gray-600">
          Loading...
        </div>
      )}
      <p className="font-mono text-4xl font-bold text-gray-700">
        {data && data.title}
      </p>
      <p className=" mt-4 w-10/12 py-4 font-mono t px-2">
        {data && data.title}
        {data && data.title}
        {data && data.title}
        {data && data.title}
        {data && data.title}
        {data && data.title}
        {data && data.title}
        {data && data.title}
        {data && data.title}

        <br />
        <br />
        <br />
        {data && data.title}
        {data && data.title}
        {data && data.title}
        {data && data.title}
        {data && data.title}
        {data && data.title}
        {data && data.title}
        {data && data.title}
        {data && data.title}

        <br />
        <br />
        <br />
        {data && data.title}
        {data && data.title}
        {data && data.title}
        {data && data.title}
        {data && data.title}
        {data && data.title}
        {data && data.title}
        {data && data.title}
        {data && data.title}

        <br />
      </p>
    </div>
  );
};

export default Page;
