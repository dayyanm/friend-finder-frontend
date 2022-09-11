import "./App.css";
import Question from "../Components/Question";
import { useAuth } from "../Contexts/AuthContext";
import { useState } from "react";
import axios from "axios";

function App() {
    const { token } = useAuth();
    const [answers, setAnswers] = useState([]);

    const questionList = [
        "How old are you?",
        "What year of University are you in?",
        "Whats your faculty?",
        "Do you like fitness?",
        "What are your hobbies?",
        "What would you describe your sociability as?",
        "What would you request as your last meal on Death Row?",
        "Favorite animal?",
        "Which of these languages do you speak? (This can have multiple selections)",
    ];
    const answerList = [
        ["18-20", "21-23", "24-26", "27+"],
        ["1", "2", "3", "4", "5+"],
        ["Science", "Engineering", "Arts", "Education"],
        ["Yes", "No"],
        [
            "Reading",
            "Watching TV",
            "Gaming",
            "Fine arts (Paintings, drawings, theater…)",
            "Gym/Sports",
            "Programming",
            "Outdoor Activities",
        ],
        ["Low", "Medium", "High"],
        [
            "Burgers and Fries",
            "Fried Chicken",
            "Korean BBQ/Korean",
            "Chinese/Chinese Hot Pot",
            "Thai",
            "Indian",
            "A caesar salad/vegetarian",
        ],
        [
            "Dogs",
            "Cats",
            "Reptilians",
            "Hamsters or some type of gerbil/rodent",
            "Other",
        ],
        [
            "English",
            "French",
            "Chinese",
            "Korean",
            "Japanese",
            "Spanish",
            "German",
            "Hindi",
        ],
    ];

    const updateAnswer = (i, newAns) => {
        const tempAns = [...answers];
        tempAns[i] = newAns;
        setAnswers(tempAns);
    };

    const generateQuestions = () => {
        let qList = [];

        for (let i = 0; i < questionList.length; i++) {
            qList.push(
                <Question
                    key={i}
                    id={i}
                    q={questionList[i]}
                    a={answerList[i]}
                    change={updateAnswer}
                />
            );
        }

        return qList;
    };

    const submt = async () => {
        if (answers.length === 9 && !answers.includes(undefined)) {
            axios.post(
                process.env.REACT_APP_API_URL + "api/createUserPreferences",
                {
                    faculty: answers[2],
                    age: answers[0],
                    year: answers[1],
                    fitness: answers[3],
                    sociability: answers[5],
                    lastMeal: answers[6],
                    animal: answers[7],
                    languages: answers[8],
                },
                {
                    headers: {
                        Authorization: { Authorization: `Bearer ${token}` },
                    },
                }
            );
        }
    };

    return (
        <div className="App">
            <h1>Fill in Some Personal Info to Continue</h1>
            <div className="question-container-main">{generateQuestions()}</div>
            <div className="submit-btn-container">
                <button id="submit-btn" onClick={submt}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default App;
