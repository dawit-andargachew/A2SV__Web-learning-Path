import { Route, Routes } from "react-router-dom";
import { EditContact } from "./components/Pages/EditContact";
import AddContact from "./components/Pages/AddContact";
import { NavBar } from "./components/NavBar";
import Home from "./components/Pages/Home";
import { ContactDetails } from "./components/Pages/ContactDetails";
import { PersonProvider } from "./context/UserContext";

function App() {
  return (
    <div>
      <NavBar />

      <div className=" w-10/12 mx-auto my-5">
        <PersonProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit/id" element={<EditContact />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/detail" element={<ContactDetails />} />
            {/* <Route path="/books" element={<BookList />} /> */}
          </Routes>
        </PersonProvider>
      </div>
      {/* <One /> */}
    </div>
  );
}

export default App;
