import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './pages/Login';
import Signup from './pages/signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>landing page</h1>
  },
  {
    path: '/login',
    element: <Login />
  },
   {
     path: '/signup',
     element: <Signup/>
   }
 
])


function App() {
  return (
     <RouterProvider  router={router}/>
  );
}

export default App;
