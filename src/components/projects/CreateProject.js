import React, {useState,useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import {createProject} from '../../Redux/project/projectActions'


 function CreateProject  (props) {
    

      const [title, settitle] = useState('')
      const [content, setcontent] = useState('')
      const [projectDetails, setprojectDetails] = useState([])
      
      const dispatch = useDispatch()
      const profile = useSelector(state => state.firebase.profile)
      const authorId = useSelector(state => state.firebase.auth.uid)
      
      useEffect(() => {
        setprojectDetails({
          title:title,
          content:content,
          authorFirstName:profile.firstName,
          authorLastName:profile.lastName,
          authorId:authorId
      })
        
      }, [title,content,profile])

     
      
     const handleChange = (e) => {
        if(e.target.id=='title'){
          settitle(e.target.value)
      }else{
        setcontent(e.target.value)
        
      }
      }
     const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProject(projectDetails))
        props.history.push('/')
       }

       const auth = useSelector(state => state.firebase.auth)
  
       if(!auth.uid) return <Redirect to='./signin'/>
        return (
          <div className="container">
            <form className="white" onSubmit={handleSubmit}>
              <h5 className="grey-text text-darken-3">Create a New Project</h5>
              <div className="input-field">
                <input type="text" id='title' onChange={handleChange} />
                <label htmlFor="title">Project Title</label>
              </div>
              <div className="input-field">
                <textarea id="content" className="materialize-textarea" onChange={handleChange}></textarea>
                <label htmlFor="content">Project Content</label>
              </div>
              <div className="input-field">
                <button className="btn pink lighten-1">Create</button>
              </div>
            </form>
          </div>
        )
      }





export default  CreateProject
