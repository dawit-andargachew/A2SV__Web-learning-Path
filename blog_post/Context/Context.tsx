// 'use client'

// import React, { createContext, useState } from "react";

// interface Blog {
//   id: number;
//   body: string;
//   title: string;
//   userId: number;
// }

// interface MyContextProps {
//   blogList: Blog[];
//   setBlogList: (blogs: Blog[]) => void;
// }

// export const MyContext = createContext<MyContextProps>({
//   blogList: [],
//   setBlogList: () => {},
// });

// type BlogContextProviderProps = {
//     children: React.ReactNode;
//   };

// export const MyContextProvider = ({ children }: BlogContextProviderProps) => {
//   const [blogList, setBlogList] = useState<Blog[]>([]);

//   return (
//     <MyContext.Provider value={{ blogList, setBlogList }}>
//       {children}
//     </MyContext.Provider>
//   );
// };













"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type StateType = {
  id: number;
  body: string;
  title: string;
  userId: number;
};

type ActionType = {
  type: string;
};

const initialState: StateType = {
  id: 0,
  body: " ",
  title: " ",
  userId: 0,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    // case "add":
    //   return {add a contex and I pass a blog };
    // case "delete":
    //   return {delete a conetxt with id};
    // case 'update':
    //   return {update the contex when I pass specific blog with id}

    default:
      return state;
  }
};

export const CounterContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const CounterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
