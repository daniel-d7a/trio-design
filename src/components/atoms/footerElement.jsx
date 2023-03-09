import { HashLink } from "react-router-hash-link";

export default function FooterElement({ header, content }) {
  return (
    <>
      <div className="flex-col flex mb-4 ">
        <h3 className="font-bold text-3xl">{header}</h3>
          {content.map(({ text, link }) => (
            <HashLink className="text-xl ml-4" to={link}>{text}</HashLink>
          ))}
      </div>
    </>
  );
}
