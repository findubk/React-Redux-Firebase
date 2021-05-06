import React from 'react'
import { Link } from 'react-router-dom'
import ProjectSummary from './ProjectSummary'

function ProjectList({projects}) {
    return (
        <div className="project-list section">
            { projects && projects.map(project =>{
                return (
                    <Link to={'/project/'+project.id} key={project.id}>
                    <ProjectSummary project={project} key={project.id}/>
                    </Link>
                )
            })}
            </div>
    )
}

export default ProjectList
