import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'

const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <div className="container section project-details" >
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project title - {project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by The {`${project.authorFirstName} ${project.authorLastName}`}</div>
            <div>{ moment(project.createdAt.toDate().toString()).calendar() }</div>
          </div>
        </div>
      </div >
    )
  } else {
    return (
      <div>... loading</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)