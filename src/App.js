import UseStatev1function from "./Hooks/UseState/UseStatev1function"; 
import UseStatev1class from "./Hooks/UseState/UseStatev1class";
import UseEffects from "./Hooks/UseState/UseRef/UseEffects/UseEffects";  
import UseMemo from "./Hooks/UseState/UseMemo/UseMemo";
import UseMemoExtwo from "./Hooks/UseState/UseMemo/UseMemoExtwo";
import UseRef from "./Hooks/UseState/UseRef/UseRef";

function App() {
  return (
    <div className="App">
     <UseStatev1function/>
     <UseStatev1class/>
     <UseEffects/>
     <UseMemo/>
     <UseMemoExtwo/>
     <UseRef/>
    </div>
  );
}

export default App;
