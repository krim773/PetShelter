import {
  Home,
  CreateProfile,
  Profile,
  EditProfile,
  NotFoundPage,
} from "./pages/index";
import "./App.css";
//importar react router dom para crear multimples rutas
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";




 // routes le pasara cual url debe pasar al visitar

function App() {
  return(

    <div>
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<CreateProfile />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/edit" element={<EditProfile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App;
