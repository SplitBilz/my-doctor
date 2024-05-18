import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1> Landing page </h1>
  },
  {
    path: '/login',
    element: <Login />
  }
 
])


function App() {
  return (
     <RouterProvider  router={router}/>
  );
}

export default App;
