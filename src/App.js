import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import { Provider } from 'react-redux';
import store from './Redux/Store'
import { createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import firebase from "firebase/app" 
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div><h5 className="grey-text text-darken-3 center">Loading...</h5></div>;
  return children
}


const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  attachAuthIsReady: true, // attaches auth is ready promise to store
};


const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

function App() {
  return (
    <ReactReduxFirebaseProvider {...rrfProps}>
    <Provider store={store}>
    <BrowserRouter>
    <AuthIsLoaded>
       <div className="App">
         <Navbar></Navbar>
         <Switch>
           <Route exact path='/' component={Dashboard}></Route>
           <Route path='/project/:id' component={ProjectDetails}></Route>
           <Route path='/signin' component={SignIn}></Route>
           <Route path='/signup' component={SignUp}></Route>
           <Route path='/create' component={CreateProject}></Route>
         </Switch>
       </div>
       </AuthIsLoaded>
     </BrowserRouter>
     </Provider>
     </ReactReduxFirebaseProvider>
  );
}

export default App;
