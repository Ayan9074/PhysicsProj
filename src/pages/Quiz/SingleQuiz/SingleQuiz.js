import React, { Component } from "react";
import "./SingleQuiz.css";
import QuestionBox from "./../../../components/QuestionBox/QuestionBox";
import ResultBox from "./../../../components/ResultBox/ResultBox";
import Instruction from './../../../components/Instruction/Instruction'

class SingleQuiz extends React.Component {
  state = {
    questionData: [],
    progress: 0,
    score: 0,
    time: Date.now() + 180000,
    showInstruction: true
  };

  finishTimer = () => {
    setTimeout(() => {
      this.setState({
        progress: 5
      })
    }, 180000)
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    let fetchedQuestion = [
      {
        prompt: "What is a superconductor?",
        answers: ["A material that conducts electricity with high resistance", "A material that conducts electricity with no resistance", "A type of semiconductor", "A type of insulator"],
        correct: 1,
      },
      {
        prompt: "At what temperature do most superconductors operate?",
        answers: ["Room temperature", "High temperature", "Below 150K", "None of the above"],
        correct: 2,
      },
      {
        prompt: "What phenomenon causes the expulsion of magnetic fields from a superconductor?",
        answers: ["Meissner effect", "Quantum locking", "Hall effect", "Faraday's law of induction"],
        correct: 0,
      },
      {
        prompt: "Which material is known for its high-temperature superconductivity?",
        answers: ["Aluminum", "Lead", "Yttrium Barium Copper Oxide", "Silicon"],
        correct: 2,
      },
      {
        prompt: "What is one of the applications of superconductors?",
        answers: ["Power lines", "Heat engines", "Thermal insulators", "Light bulbs"],
        correct: 0,
      },
    ];

    this.setState({
      questionData: fetchedQuestion,
    });
  };

  checkAnswer = (index) => {
    if (!this.state.questionData[this.state.progress]) {
      return;
    }
    var correct = this.state.questionData[this.state.progress].correct;
    var newScore = 0,
        newProgress = 0;
    if (correct === index) {
      newScore = this.state.score + 1;
      this.setState({ score: newScore });
      newProgress = this.state.progress + 1;
      this.setState({ progress: newProgress });
    } else {
      newProgress = this.state.progress + 1;
      this.setState({ progress: newProgress });
    }
  };

  resetQuiz = () => {
    this.setState({ score: 0, progress: 0, time: Date.now() + 180000 });
    this.finishTimer()
  };

  render() {
    var questionDatum = this.state.questionData[this.state.progress];

    if (this.state.showInstruction) {
      return (
        <Instruction closeInstruction={() => {
            this.setState({ showInstruction: false, time: Date.now() + 180000 })
            this.finishTimer()
          }} 
        />
      )
    }

    if (this.state.questionData.length > this.state.progress) {
      return (
        <div>
          <QuestionBox
            questionIndex={this.state.progress + 1}
            answers={questionDatum.answers}
            answerCallback={this.checkAnswer}
            questionDatum={questionDatum}
            time={this.state.time}
            attempted={this.state.progress}
            notattempted={this.state.questionData.length - this.state.progress}
          />
        </div>
      );
    } else {
      return (
        <ResultBox
          resetQuiz={this.resetQuiz}
          correct={this.state.score}
          incorrect={this.state.questionData.length - this.state.score}
          total={this.state.questionData.length}
          score={(this.state.score / this.state.questionData.length) * 100}
        />
      );
    }
  }
}

export default SingleQuiz;
