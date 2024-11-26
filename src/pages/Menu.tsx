// import icons from "../assets/images/icons.png";
import { ActionButton } from "../components/ActionButton";
import FooterIcons from "../components/FooterIcons";
import Logo from "../components/Logo";
import { MainSubtitle } from "../components/MainSubitle";
import { MainTitle } from "../components/MainTitle";

// TODO: Video or image background

export function Menu() {
  const title = `¡Es hora de la verdad!`  
  
  return (
    <main className="animate-fade-in gap-8 px-4 sm:px-12">
      <Logo />

      <MainTitle text={title} uppercase/>
      <MainSubtitle text="¿A qué quieres enfrentarte?" />

      <div className="flex w-full flex-col gap-4">
        <ActionButton url="/trivia" text="Desafío mental" />
        <ActionButton url="/memory" text="Mikia memory challenge" />
        <ActionButton
          url="/"
          text="Volver al Inicio"
          className="btn-alternate"
        />
      </div>

      <FooterIcons />
    </main>
  );
}