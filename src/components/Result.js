import { Button } from "@mui/material";
import { useEffect } from "react";
import { useHistory, useNavigate } from "react-router";


const Result = ({ name, score }) => {
  const navigate = useNavigate

  useEffect(() => {
    if (!name) {
      navigate.push("/");
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <h1>Hello {name} Your Score is</h1>
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
