// import { useState } from "react";
// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// export default function App() {
//   const [step, setstep] = useState(1);
//   const [isopen, setIsopen] = useState(true);
//   function setfalse() {
//     setIsopen((s) => !s);
//   }

//   function onclick_next() {
//     if (step < 3) {
//       setstep((s) => s + 1);
//     }
//   }

//   function onclick_prev() {
//     if (step > 1) {
//       setstep((s) => s - 1);
//     }
//   }

//   return (
//     <>
//       <button className="close" onClick={setfalse}>
//         x
//       </button>
//       {isopen && (
//         <div className="steps">
//           hello React
//           <div className="numbers">
//             <div className={`${step >= 1 ? "active" : ""}`}>1</div>
//             <div className={`${step >= 2 ? "active" : ""}`}>2</div>
//             <div className={`${step >= 3 ? "active" : ""}`}>3</div>
//           </div>
//           <p className="message">
//             step {step}: {messages[step - 1]}
//           </p>
//           <div classname="buttons">
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={onclick_prev}
//             >
//               previous
//             </button>
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={onclick_next}
//             >
//               next
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

// function handleclick(){
//   setSelectId(...)

//   ////    onlcick={()=>handleclick(item.id)}
// }

function FlashCards() {
  const [selectid, setSelectId] = useState(null);
  return (
    <div className="flashcards">
      {questions.map((item) => (
        <div
          key={item.id}
          onClick={() => setSelectId(item.id !== selectid ? item.id : null)}
          className={item.id === selectid ? "selected" : ""}
        >
          <p>{item.id === selectid ? item.answer : item.question}</p>
        </div>
      ))}
    </div>
  );
}
