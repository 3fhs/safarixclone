import Header from "./componenents/header/Header";
import Footer from "./componenents/footer/Footer";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import LogIn from "./pages/login/LogIn";
import Register from "./pages/register/Register";
import SingleTour from "./pages/tourspage/SingleTour";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tours/singel/:id" element={<SingleTour />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
