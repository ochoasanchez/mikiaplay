import escudoFeliz from "../assets/images/escudo-feliz.gif";
import escudoTriste from "../assets/images/escudo-triste.gif";
import escudoBurla from "../assets/images/escudo-burla.gif";

function getResultMessage(scoreValue: number, game: string) {
  const badMessage = "Hoy como que no es tu día de suerte";
  const regularMessage = "Vas por buen camino ¡Quizás la próxima!";
  const goodMessage = "Estamos en una academia de genios y tú pareces el líder";

  if (game === "trivia") {
    if (scoreValue < 3) {
      return {
        image: escudoTriste,
        message: badMessage,
      };
    } else if (scoreValue < 5) {
      return {
        image: escudoBurla,
        message: regularMessage,
      };
    } else {
      return {
        image: escudoFeliz,
        message: goodMessage,
      };
    }
  }

  // Memory
  if (scoreValue / 1000 <= 30) {
    return {
      image: escudoFeliz,
      message: goodMessage,
    };
  } else if (scoreValue / 1000 < 50) {
    return {
      image: escudoBurla,
      message: regularMessage,
    };
  } else {
    return {
      image: escudoTriste,
      message: badMessage,
    };
  }
}

export { getResultMessage };
