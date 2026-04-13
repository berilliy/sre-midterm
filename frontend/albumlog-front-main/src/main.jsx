import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import AlbumPage from './pages/AlbumPage.jsx';
import CreateReviewPage from './pages/CreateReviewPage.jsx';
import LoginPage from './pages/authorization/LoginPage.jsx';
import SigninPage from './pages/authorization/SigninPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import HomeController from './controllers/HomeController.jsx';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <HomeController />,
    errorElement: <ErrorPage />
  },
  {
    path: '/albums/:albumArtist/:albumName',
    element: <AlbumPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/reviews/:reviewId',
  },
  {
    path: '/reviews/create/:albumArtist/:albumName',
    element: <CreateReviewPage />
  },
  {
    path: '/user/login',
    element: <LoginPage />
  },
  {
    path: '/user/signin',
    element: <SigninPage />
  },
  {
    path: '/user/:userId',
    element: <ProfilePage />
  },
  {
    path: '/search/:searchId', 
    element: <SearchPage />
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
