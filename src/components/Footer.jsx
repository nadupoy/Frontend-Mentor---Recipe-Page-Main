import { links } from "../constants";

const Footer = () => {
  return (
    <footer>
      <p>
        Challenge by{" "}
        <a href={links.frontendMentor} target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href={links.gitHub} target="_blank">
          gsampao
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
