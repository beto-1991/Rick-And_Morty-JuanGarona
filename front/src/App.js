import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";
// import characters from './data.js'

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false);
  // const username = "garonajuan@hotmail.com";
  // const password = "Password1";

  // function login(userData) {
  //   if (userData.password === password && userData.username === username) {
  //     setAccess(true);
  //     navigate("/home");
  //   }
  // }

  function login(userData) {
    const { username, password } = userData;
    const URL = "http://localhost:3001/login/";
    axios(URL + `?email=${username}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    });
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //   function onSearch(character) {  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>CON BACK END ERROR
  //     let idArr = characters.map(element => element.id);
  //     fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
  //        .then((response) => response.json())
  //        .then((data) => {
  //           if (data.name) {
  //             if(!idArr.includes(data.id)){
  //               setCharacters((oldChars) => [...oldChars, data]);
  //               navigate('/home')
  //             }

  //           } else {
  //              window.alert('No hay personajes con ese ID');
  //           }
  //        });
  //  }

  const onSearch = (id) => {
    let idArr = characters.map((element) => element.id);
    fetch(`http://localhost:3001/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (!idArr.includes(data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
            navigate("/home");
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = function onClose(id) {
    setCharacters(characters.filter((personaje) => personaje.id !== id));
  };

  return (
    <div
      className="App"
      style={{
        padding: "25px",
        backgroundColor: "#8BF5FA",
        minHeight: "900px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>{location.pathname !== "/" && <Nav onSearch={onSearch} />}</div>
      <div>
        <Routes>
          <Route
            path="/home"
            element={<Cards onClose={onClose} characters={characters} />}
          >
            Home
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/" element={<Form login={login} />}>
            Form
          </Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </div>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
