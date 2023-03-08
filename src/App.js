// import UseStatev1function from "./Hooks/UseState/UseStatev1function"; 
// import UseStatev1class from "./Hooks/UseState/UseStatev1class";
// import UseEffects from "./Hooks/UseState/UseRef/UseEffects/UseEffects";  
// import UseMemo from "./Hooks/UseState/UseMemo/UseMemo";
// import UseMemoExtwo from "./Hooks/UseState/UseMemo/UseMemoExtwo";
// import UseRef from "./Hooks/UseState/UseRef/UseRef";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./routes/Login";
import Main from "./routes/Main";
import About from "./routes/About";
import Header from "./routes/Header";
 

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
       <Routes>
          <Route path="/" element={<Main/>}> </Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
       </Routes>
    </BrowserRouter>



     {/* <UseStatev1function/>
     <UseStatev1class/>
     <UseEffects/>
     <UseMemo/>
     <UseMemoExtwo/>
     <UseRef/> */}
    </div>
  );
}

export default App;
