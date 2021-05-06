

const initialState={
    projects:[
        {id:'1' , title:'Project 1' , content:'blah blah blah'},
        {id:'2' , title:'Project 2' , content:'blah blah blah'},
        {id:'3' , title:'Project 3' , content:'blah blah blah'},
        {id:'4' , title:'Project 4' , content:'blah blah blah'}
    ]
}


const projectReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'CREATE_PROJECT':
           // console.log('created project',action.project)
            return state
            break;
        case 'CREATE_PROJECT_ERROR':
               // console.log('created project error',action.err)
                return state
                break;    
        default:
            return state
            break;
    }
    return state
}

export default projectReducer