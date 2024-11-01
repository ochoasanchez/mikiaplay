import { trivias } from "../utils/questions.constants";

const getTriviaQuestions = () => {
  const triviaList = trivias; // Assuming 'trivias' is your array of trivia objects

  // Shuffle the trivia list randomly
  triviaList.sort(() => Math.random() - 0.5);

  // Return a random trivia from the shuffled list
  return triviaList[Math.floor(Math.random() * triviaList.length)] || null;
};

export { getTriviaQuestions };
