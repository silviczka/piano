import "./AboutPage.css";
import PageTemplate from "../../components/UI/PageTemplate/PageTemplate";
import foxImg from "./img/sittingFox.webp";

const AboutPage = () => {
  return (
    <PageTemplate>
      <div className="about-header">O projektu</div>
      <p className="about-text">
        Vzdělávací webová aplikace určená především pro tablety, která pomáhá
        dětem naučit se hrát na klavír hravou formou. Na obrazovce se zobrazuje
        notová osnova, po které plynou noty podle známých melodií – dítě má za
        úkol stisknout správnou klávesu ve správný čas. Aplikace funguje buď
        jako virtuální piano na displeji tabletu, nebo ji můžete propojit na
        stolním počítači/laptopu s reálnou klaviaturou přes MIDI rozhraní.
      </p>
      <div className="about-text about-text__cursive">
        Autorky: Denisa Polesná, Silvia Stražovcová
      </div>
      <img className="menu-fox-img" src={foxImg} alt="sitting fox" />
    </PageTemplate>
  );
};

export default AboutPage;
