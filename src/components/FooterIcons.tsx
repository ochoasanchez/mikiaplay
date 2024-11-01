import pollo from "../assets/images/icono-pollo.svg";
import cerdo from "../assets/images/icono-cerdo.svg";
import fabrica from "../assets/images/icono-fabrica.svg";

export default function FooterIcons() {
  // const navigate = useNavigate();

  // const handleClickTrivia = () => {
  //   navigate("/trivia/scoreboard");
  // };

  // const handleClickMemory = () => {
  //   navigate("/memory/scoreboard");
  // };

  // const handleClickRaffle = () => {
  //   navigate("/sorteo");
  // };

  // if (clickable) {
  //   return (
  //     <div className="flex gap-x-12">
  //       <img
  //         className="w-16 sm:w-36 opacity-30"
  //         src={pollo}
  //         onClick={handleClickTrivia}
  //       />
  //       <img
  //         className="w-16 sm:w-36 opacity-30"
  //         src={cerdo}
  //         onClick={handleClickMemory}
  //       />
  //       <img
  //         className="w-16 sm:w-36 opacity-30"
  //         src={fabrica}
  //         onClick={handleClickRaffle}
  //       />
  //     </div>
  //   );
  // }

  return (
    <div className="flex gap-x-12">
      <img className="w-16 sm:w-36 opacity-30" src={pollo} />
      <img className="w-16 sm:w-36 opacity-30" src={cerdo} />
      <img className="w-16 sm:w-36 opacity-30" src={fabrica} />
    </div>
  );
}
