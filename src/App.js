import UseStatev1function from "./Hooks/UseState/UseStatev1function"; 
import UseStatev1class from "./Hooks/UseState/UseStatev1class";
import UseEffects from "./Hooks/UseState/UseRef/UseEffects/UseEffects";  
import UseMemo from "./Hooks/UseState/UseMemo/UseMemo";

function App() {
  return (
    <div className="App">
     <UseStatev1function/>
     <UseStatev1class/>
     <UseEffects/>
     <UseMemo/>
    </div>
  );
}

export default App;
