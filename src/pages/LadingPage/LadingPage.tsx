import { useState } from "react";
import Figure from "../../components/icons/figureLadingPage.svg";
import Scroll from "../../components/icons/scroll.svg";
import { HeaderStyle, ContentStyle, FooterStyle } from "./style";
import { MenuMobile } from "../../components/MenuMobile";
import { RiMenuFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <HeaderStyle>
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}></MenuMobile>
        <h1>2Give</h1>
        <nav>
          <ul>
            <li>
              <Link to={""}>Home</Link>
            </li>
            <li>
              <Link to={""}>Sobre nós</Link>
            </li>
            <li>
              <Link to={""}>Contato</Link>
            </li>
          </ul>
          <button className="btn">Login</button>
          <button className="btn">Cadastro</button>
          <RiMenuFill
            onClick={() => setMenuIsVisible(true)}
            className="mobile"
            color="#F0386B"
            size={30}
          />
        </nav>
      </HeaderStyle>
      <ContentStyle>
        <main>
          <div className="titlePage">
            <h2>Conheça a </h2>
            <h2 className="colorPink">2Give</h2>
          </div>
          <p>
            Crie e participe de eventos que podem mudar o mundo de outras
            pessoas. O mundo precisa de mais soliedariedade, seja um motivador!
          </p>
          <Link to={""}>
            <button>Criar projeto</button>
          </Link>
        </main>
        <img
          className="mainImage"
          src={Figure}
          alt="figura com pessoas interagindo"
        />
      </ContentStyle>
      <FooterStyle>
        <img src={Scroll} alt="mouse com seta para rolagem" />
      </FooterStyle>
    </>
  );
};
