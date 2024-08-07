import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { DashboardOne } from './pages/dashboard 1/DashboardOne';
import { DashboardTwo } from './pages/dashboard 2/DashboardTwo';
import ErrorPage from './ErrorPage';

function App() {
  const routes=createBrowserRouter([
    {path:"/", element:<Navbar/>, errorElement:<ErrorPage/>, children:[
      {index:true, element:<DashboardOne/>},
      {path:"/compare", element:<DashboardTwo/>}
  ]}
  ]);
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
