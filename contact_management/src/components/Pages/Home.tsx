import React, { useContext } from "react";
import { PersonContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { personList, setPersonList } = useContext(PersonContext);

  // const data = [
  //   { name: "John Doe", age: 25, department: "Marketing" },
  //   { name: "Jane Smith", age: 30, department: "Sales" },
  //   { name: "Mike Johnson", age: 35, department: "Finance" },
  //   { name: "Sarah Thompson", age: 28, department: "Human Resources" },
  //   { name: "Alex Brown", age: 32, department: "Operations" },
  // ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <ul className="space-y-4">
        {personList.map((person, index) => (
          <Link
          to={'/ed'}
            key={index}
            className="bg-gray-700 px-6 py-4 rounded-lg text-gray-300 shadow-md"
          >
            <h3 className="text-lg font-medium mb-1">{person.fullName}</h3>
            <p className="text-gray-400 text-lg">
              <span className="mr-5 text-base font-semibold">
                {" "}
                Age: {person.age}{" "}
              </span>{" "}
              <span className="mr-5 text-base font-semibold">
                {" "}
                Department: {person.department}{" "}
              </span>
            </p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
