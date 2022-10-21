import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import ManageContacts from "./components/ManageContacts";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts-management" element={<ManageContacts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
