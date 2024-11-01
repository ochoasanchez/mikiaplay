import { ActionButton } from "./ActionButton";

const Score = ({
  result,
  message,
  image,
}: {
  result: string;
  message: string;
  image: string;
}) => {

  return (
    <div
      id="confetti"
      className="trivia-score relative flex h-lvh w-full flex-col items-center px-4 text-center md:px-0"
    >
      <div className="flex h-3/5 flex-col items-center justify-center">
        <img src={image} className="w-8/12" alt="Result" />
        <p className="w-10/12 text-5xl sm:text-5xl">{result}</p>
      </div>
      <div className="orange-circle flex h-2/5 gap-y-8">
        <div className="w-8/12 pt-16">
          <p className="score-message font-splash animate-bounce text-4xl sm:text-6xl">
            {message}
          </p>
        </div>
        <div className="flex">
          <ActionButton
            url="/menu"
            text="Volver al menú"
            className="ml-4 w-fit bg-white text-orange-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Score;
