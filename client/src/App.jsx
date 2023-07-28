import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Layout from './components/Layout';
import Profile from './pages/Profile';
import Collaborate from './pages/Collaborate';
import Discussion from './pages/Discussion';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route index element={<Home />} />
    <Route element={<Layout />}>
      <Route path="profile" element={<Profile />} />
      <Route path="collaborate" element={<Collaborate />} />
      <Route path="discussion" element={<Discussion />} />
    </Route>
  </Route>
));

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
