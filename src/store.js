import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  projects: [
    {
      id: "project_a",
      name: "Project A",
      startDate: "2023-01-01",
      endDate: "2023-06-01",
      manager: "John Doe",
      description: "This is Project A",
      favorite: true,
    },
    {
      id: "project_b",
      name: "Project B",
      startDate: "2023-03-01",
      endDate: "2023-09-01",
      manager: "Jane Smith",
      description: "This is Project B",
      favorite: true,
    },
    {
      id: "project_c",
      name: "Project C",
      startDate: "2023-03-01",
      endDate: "2023-09-01",
      manager: "Jane Smith",
      description: "This is Project C",
      favorite: false,
    },
    {
      id: "project_d",
      name: "Project D",
      startDate: "2023-03-01",
      endDate: "2023-09-01",
      manager: "Jane Smith",
      description: "This is Project D",
      favorite: false,
    },
    {
      id: "project_e",
      name: "Project E",
      startDate: "2023-03-01",
      endDate: "2023-09-01",
      manager: "Jane Smith",
      description: "This is Project E",
      favorite: false,
    },
    {
      id: "project_f",
      name: "Project F",
      startDate: "2023-03-01",
      endDate: "2023-09-01",
      manager: "Jane Smith",
      description: "This is Project F",
      favorite: false,
    },
    {
      id: "project_g",
      name: "Project G",
      startDate: "2023-03-01",
      endDate: "2023-09-01",
      manager: "Jane Smith",
      description: "This is Project G",
      favorite: false,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PROJECT":
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.payload.id ? action.payload : project
        ),
      };
    default:
      return state;
  }
};

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
