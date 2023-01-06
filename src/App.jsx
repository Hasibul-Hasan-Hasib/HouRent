import './App.css';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import NotFound from './pages/notFound/NotFound';
import Login from './pages/login/Login';
import Properties from './pages/properties/Properties';
import Property from './pages/property/Property';
import AuthContext from './contexts/AuthProvider';
import Main from './shared/Main/Main';
import AdminLogin from './pages/adminLogin/AdminLogin';
import Saved from './pages/saved/Saved';
import Booking from './pages/booking/Booking';
import Admin from './shared/Admin/Admin';
import Users from './pages/adminPanel/Users';
import PrivateOutlet from './shared/PrivateOutlet/PrivateOutlet';
import Posts from './pages/adminPanel/Posts';
import AddPost from './shared/AddPost/AddPost';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'properties',
          element: <Properties />,
        },
        {
          path: 'properties/:id',
          element: <Property />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          element: <PrivateOutlet />,
          children: [
            {
              path: '/bookings',
              element: <Booking />
            },
            {
              path: '/posts',
              element: <Posts />
            },
            {
              path: '/add-posts',
              element: <AddPost />
            },
            {
              path: '/saved',
              element: <Saved />
            },
          ],
        },
        {
          path: 'login',
          element: <Login />
        },
      ]
    },
    {
      path: '/admin-login',
      element: <AdminLogin />
    },
    {
      path: 'admin',
      element: <Admin />,
      children: [
        {
          element: <PrivateOutlet type='admin' />,
          children: [
            {
              path: '/admin/users',
              element: <Users />
            },
            {
              path: 'admin/posts',
              element: <Posts />
            },
            {
              path: 'admin/bookings',
              element: <Posts />
            },
          ],
        },
      ]
    },
    { path: '*', element: <NotFound /> }
  ])
  return (
    <div>
      <AuthContext>
        {/* <RouterProvider router={router}></RouterProvider> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />}>
              <Route index element={<Home />}></Route>
              <Route path='properties' element={<Properties />} />
              <Route path='properties/:id' element={<Property />} />
              <Route path='blog' element={<Blog />}></Route>
              <Route path='about' element={<About />}></Route>
              <Route path='contact' element={<Contact />}></Route>
              <Route path='login' element={<Login />} />
              <Route path='' element={<PrivateOutlet />}>
                <Route path='saved' element={<Saved />}></Route>
                <Route path='my-posts' element={<Posts />}></Route>
                <Route path='my-posts/add-posts' element={<AddPost />}></Route>
                <Route path='bookings' element={<Booking />}></Route>
              </Route>
            </Route>

            <Route path='admin-login' element={<AdminLogin />} />
            <Route path='admin' element={<Admin />}>
              <Route path='' element={<PrivateOutlet type='admin' />}>
                <Route index element={<Users />} />
                <Route path='users' element={<Users />} />
                <Route path='posts' element={<Posts />} />
                <Route path='posts/add-posts' element={<AddPost />}></Route>
                <Route path='bookings' element={<Booking />} />
                <Route path='comments' element={<Posts />} />
              </Route>
            </Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContext>
    </div>
  );
}

export default App;
