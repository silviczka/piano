import '../AboutPage/AboutPage.css';
import PageTemplate from '../../components/UI/PageTemplate/PageTemplate';
import foxImg from './img/sittingFox.webp';

const InfoPage = () => {
  return (
    <PageTemplate>
      <div className="about-header">Technické informace</div>
      <p className="about-text">
        Aplikace funguje buď jako <strong>virtuální piano</strong> na displeji
        tabletu, nebo ji můžete propojit na stolním počítači/laptopu s{' '}
        <strong>reálnou klaviaturou</strong> (Akai MPK Mini mkII) přes MIDI
        rozhraní. Vyhledejte aktivní oktávy pomocí tlačítek na zařízení.
        <br />
        Když se v prohlížeči zamítne <strong> připojení MIDI kontroleru</strong>
        , nebo zařízení nereaguje, resetujte nastavení v prohlížeči. <br />
        (např. pro Google Chrome v.137.0.7151.69 postupujte následovně: <br />
        Nastavení &gt; Ochrana soukromí a zabezpečení &gt; Nastavení webu &gt;
        piano-hackaton.netlify.app Zablokované oprávnění &gt; Ovládání a
        přeprogramování zařízení MIDI <br />
        nebo Resetovat oprávnění hromadně) <br />
        Prohlížeč Safari nemá podporu připojení MIDI zařízení. MIDI zařízení jde
        připojit jenom k počítači.
      </p>
      {/* <div className="about-text about-text__cursive">
        Autorky: Denisa Polesná, Silvia Stražovcová
      </div> */}
      <img className="menu-fox-img" src={foxImg} alt="sitting fox" />
    </PageTemplate>
  );
};

export default InfoPage;
