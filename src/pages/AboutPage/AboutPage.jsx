import './AboutPage.css';
import PageTemplate from '../../components/UI/PageTemplate/PageTemplate';
import foxImg from './img/sittingFox.webp';

const AboutPage = () => {
  return (
    <PageTemplate>
      <div className="about-header">O projektu</div>
      <p className="about-text">
        Vítejte v naší <strong>vzdělávací webové aplikaci</strong> určené
        především pro tablety, která má za cíl pomáhat dětem naučit se hrát na
        klavír hravou formou. Ve hře se na obrazovce zobrazuje notová osnova, po
        které plynou noty podle známých melodií – dítě má za úkol stisknout
        správnou klávesu ve správný čas.
      </p>
      <p className="about-text">
        Pro začátek doporučujeme <strong>tréninkový mód</strong>, kde nota čeká
        v kontrolní zóně, dokud hráč netrefí správnou klávesu. Barevné
        podsvícení klávesy slouží jako nápověda.
      </p>
      <p className="about-text">
        V <strong>herním módu</strong> slouží jako nápověda štítky na klávesách,
        které lze zapnout pomocí tlačítek v horním menu. Hra dáva hráči za úkol
        správně a včas zahrát notu, když se nachází v kontrolné zóně. Obtížnost
        písniček je označena počtem hvězdiček. <br />
        <strong>
          1 hvězdička = jednoduchá, 2 hvězdičky = středně pokročilá, 3 hvězdičky
          = pokročilá
        </strong>
        <br />
        Přejeme příjemnou zábavu!
      </p>
      <div className="about-text about-text__cursive">
        Autorky: Denisa Polesná, Silvia Stražovcová
      </div>
      <img className="menu-fox-img" src={foxImg} alt="sitting fox" />
    </PageTemplate>
  );
};

export default AboutPage;
