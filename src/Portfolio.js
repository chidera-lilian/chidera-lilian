import React from "react";
import { createRoot } from "react-dom/client";
import ProjectsArray from "./ProjectsArray";
//import { BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';



export default function Portfolio(props) {
    const [allProjects, setAllProjects] = React.useState(ProjectsArray)

    

    const projects = allProjects.map(function(project) {
        return (
            <div className="project" key={project.id}>
                <a href={project.href}>{project.title}</a>
                <p className="stack">{project.techstack}</p>
            </div>
        )
    })
    return (
        <section className={props.showElement ? "portfolio" : "top"}>
            <h1>My Projects</h1>
            <div className="projects">
            {projects}
            </div>
            
        </section>
    )
}

//