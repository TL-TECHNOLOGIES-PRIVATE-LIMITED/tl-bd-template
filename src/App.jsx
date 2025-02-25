import { useEffect, useState } from "react";
import "./App.css";
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from "react-router-dom";
import LoadingSpinner from "./components/spinners/LoadingSpinner";
import LandingPage from "./pages/LandingPage";
import ChatBotModal from "./components/chatbot/ChatBotModel";
import ErrorPage from "./pages/ErrorPage";
import WebsitePage from "./pages/WebsitePage";


export default function App() {
  // <======================================== NOTES START ==============================================>

  // Libraries used :   "tailwind-css" for css
  // Read the documentaion in their respective sites for the above mentioned libraries before making changes in the code.
  // To run the code: npm run dev
  // First install all dependencies :- npm intsall
  // Then run the code :- npm run dev

  // created date : 14-OCT-2024 || created by : Gurudas P R  || module : 1 ||
  // modified date : -|| modified by : || module : 1 ||
  // modified date : - || modified by :  || module : 1 ||

  // Technical summary(Pre-setups) created date/by :  Gurudas P R  ||
  // Domain :   || https://enquiry.keraladrives.com/
  // Hosting :   || vercel || 
  // SSL :   || cloudflare ||

  // Phase summary :   || created date/by :  Gurudas P R   ||
  // Phase 1 :  SetUps ||
  // Phase 2 :  Development/Main page creation ||
  // Phase 3 :  Production  ||

  // <======================================== NOTES END ==============================================>

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000); 
    };

    handleRouteChange();
  }, [location.pathname]);

  useEffect(() => {
    // Hide the loading spinner after the initial load
    const initialLoadTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000); //3500

    return () => clearTimeout(initialLoadTimeout);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>

        <Route>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/cookie-policy" element={<ErrorPage/>} />
          <Route path="/demo-website" element={<WebsitePage/>} />
          <Route path="*" element={<ErrorPage/>} />

        </Route>
        
      </>

    )
  )
  return (
    <>
      {loading ? <LoadingSpinner /> : <RouterProvider router={router} />}
      
    </>
  )
}