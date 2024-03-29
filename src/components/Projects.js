import React, { useState } from "react";
import { useProjectsValue, useSelectedProjectValue } from "../context";
import { IndividualProject } from "./IndividualProject";

export const Projects = ({ activeValue = false }) => {
    const [active, setActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();

    return (
        projects && 
        projects.map((project) => (
            <li 
            key={project.projectId}
            data-doc-id={project.docId}
            data-testid="project-action"
            className={
                active === project.projectId 
                ? "active sidebar__project" 
                : "sidebar__project"
            }
            
            >
                <div
                role="button"
                tabIndex={0}
                onKeyDown={() => {
                    setActive(project.projectId);
                    setSelectedProject(project.projectId);
                }}
                onClick={() => {
                    setActive(project.projectId);
                    setSelectedProject(project.projectId);
                }} 
                aria-label={`Select ${project.name} as the task project`}
                >
                    <IndividualProject project={project}/>
                </div>
                
            </li>
        ))
    )
}