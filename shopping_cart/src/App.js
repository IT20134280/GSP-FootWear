import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
 
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/c" element={<Cart />}/>
           </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
