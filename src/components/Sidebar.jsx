import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { useStore } from "../store";

const Sidebar = () => {
  const { state } = useStore();
  const favoriteProjects = state.projects.filter((project) => project.favorite);

  return (
    <div className="w-60 h-screen bg-gray-100 border-r xl:block hidden">
      <h2 className="text-xl mt-20 ml-4 p-4">Favorite Projects</h2>
      <ul className="list-disc pl-6">
        {favoriteProjects.map((project) => (
          <li key={project.id} className="ml-12 mt-2">
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
