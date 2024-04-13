import { createRoot } from "react-dom/client";

import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom'

import App from "./App";

import Home from "./Screens/home/Home";

import About from "./Screens/about/About.jsx";

import Contact from "./Screens/contact/Contact";

import User from "./components/user/User"

import Github, { githubInfoLoader } from './Screens/github/Github.jsx'

import './index.css';

// Create a BrowserRouter instance with routes
// const router = createBrowserRouter([
//     {
//         path: "/", // Root path
//         element: <App />, // Render the App component at the root level

//         children: [
//             {
//                 path: "/", // Child route for the root path, renders Home component
//                 element: <Home />
//             },
//             {
//                 path: "/about", // Child route for "/about" path, renders About component
//                 element: <About />
//             },
//             {
//                 path: "/contact", // Child route for "/contact" path, renders Contact component
//                 element: <Contact />
//             },
//         ]
//     }
// ]);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='user/:_id' element={<User />} />
            <Route
                loader={githubInfoLoader}
                path='github'
                element={<Github />}
            />

        </Route >
    )
)
// Render the RouterProvider with the configured router
createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);