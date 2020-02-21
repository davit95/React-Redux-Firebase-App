import React from 'react'
import { Link } from 'react-router-dom'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({ projects }) => {
  const data = projects.map(project => 
    <Link to={`/project/${project.id}`} key={project.id}>
      <ProjectSummary project={project} />
    </Link>
  )
	return (
		<div className="project-list section">
			{ projects && data }
		</div>
	)
}

export default ProjectList
