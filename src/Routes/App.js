import "./App.css";
import Question from "../Components/Question";

function App() {
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
  return (
    <div className="App">
      <h1>Fill in Some Personal Info to Continue</h1>
      <Question />
    </div>
  );
}

export default App;
