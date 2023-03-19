import { Link } from "react-router-dom";

export default function FooterElement({ header, content }) {
  return (
    <>
      <div className=" flex-col flex mb-4 ">
        <h3 className="font-bold text-3xl">{header}</h3>
        {content.map(({ text, link }, i) => (
          <Link key={`asdf${i}`} className="text-xl sm:ml-4" to={link}>
            {text}
          </Link>
        ))}
      </div>
    </>
  );
}
