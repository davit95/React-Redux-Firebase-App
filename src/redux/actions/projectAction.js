export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(
      dispatch({
        type: 'ADD_PROJECT',
        project
      })
    ).catch((err) => {
      dispatch({
        type: 'ADD_PROJECT_FAIL',
        err
      })
    })
  }
}