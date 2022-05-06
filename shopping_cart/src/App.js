import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
 
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        
           <Route path="/">
             <h1>Hello</h1>
           </Route>
        
       
      </div>
    </BrowserRouter>
  );
}

export default App;
