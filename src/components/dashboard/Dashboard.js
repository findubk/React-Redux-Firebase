import React from 'react'
import ProjectList from '../projects/ProjectList'
import Notification from './Notification'
import {useSelector} from 'react-redux'
import {useFirestoreConnect} from 'react-redux-firebase'
import { Redirect } from 'react-router'

 function Dashboard(props) {
   
  useFirestoreConnect([
    {collection:'projects',orderBy:['createdAt','desc']}
  ])
  
  const projects = useSelector(state => state.firestore.ordered.projects)
  const auth = useSelector(state => state.firebase.auth)
  
  if(!auth.uid) return <Redirect to='./signin'/>

    return (
         
            <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects}></ProjectList>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification></Notification>
          </div>
        </div>
      </div>
        
    )
}



export default Dashboard