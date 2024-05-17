import { links } from "../constants";

const Footer = () => {
  return (
    <footer className="text-center text-xs mb-4">
      <p className="text-wenge-brown">
        Challenge by{" "}
        <a
          href={links.frontendMentor}
          target="_blank"
          className="text-nutmeg no-underline hover:cursor-pointer hover:font-bold visited:text-nutmeg visited:no-underline"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href={links.gitHub}
          target="_blank"
          className="text-nutmeg no-underline hover:cursor-pointer hover:font-bold visited:text-nutmeg visited:no-underline"
        >
          gsampao
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
