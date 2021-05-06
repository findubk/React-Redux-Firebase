import moment from 'moment'
import React from 'react'

function ProjectSummary({project}) {
    return (
        <div>
             <div className="card z-depth-0 projext-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                    <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary
