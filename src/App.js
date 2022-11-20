import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import NotFound from './pages/notFound/NotFound';
import Login from './pages/login/Login';
import Properties from './pages/properties/Properties';
import Property from './pages/property/Property';
import AuthContext from './contexts/AuthProvider'
import Main from './shared/Main/Main';
import AdminLogin from './pages/adminLogin/AdminLogin';
import AdminPanel from './pages/adminPanel/AdminPanel';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/properties',
          element: <Properties />
        },
        {
          path: '/property',
          element: <Property />
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/about',
          element: <About />
        },
        // {
        //   path: '/:userName/booking',
        //   element: <Booking />
        // },
        // {
        //   path: '/:userName/saved',
        //   element: <Profile />
        // },
        {
          path: '/login',
          element: <Login />
        },
      ]
    },
    {
      path: '/admin-login',
      element: <AdminLogin />
    },
    {
      path: '/admin-panel',
      element: <AdminPanel />
    },
    { path: '*', element: <NotFound /> }
  ])
  return (
    <div>
      <AuthContext>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext>
    </div>
  );
}

export default App;
