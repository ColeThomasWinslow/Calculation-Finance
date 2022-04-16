import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import MortgageComp from "./components/MortgageComp/MortgageComp";
import SavingComp from "./components/SavingsComp/SavingComp";
import LoanComp from "./components/LoanComp/LoanComp";

import Footer from "./components/Footer/Footer";
import BlogComponent from "./components/Blog/BlogComponent";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Mortgage" element={<MortgageComp />} />
          <Route path="/Savings" element={<SavingComp />} />
          <Route path="/Loan" element={<LoanComp />} />
          <Route path="/Blog" element={<BlogComponent />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
