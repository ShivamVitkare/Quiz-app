import axios from "axios";
import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
 <>

      

   
      <div className="app" >
        <Header />
        <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          }
        />

        <Route
          path="/quiz"
          element={
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          }
        />

        <Route path="/result" element={<Result name={name} score={score} />} />
        </Routes>
      </div>
      <Footer />
    
      </>
  );
}

export default App;
