import { Link } from "react-router-dom";
export default function CategoryElement({ text, imgBg }) {
  return (
    <>
      <Link to={text} className="category w-2/5 relative">
        <div className="w-full h-32 md:h-56 overflow-hidden">
          <img src={imgBg} className="object-cover  w-full h-full scale-125 transition-all" />
        </div>
        <p className="w-full text-white font-bold absolute top-0 left-0 backdrop-saturate-50 backdrop-blur-sm hover:opacity-0 transition flex items-center justify-center h-full">
          {text}
        </p>
      </Link>
    </>
  );
}
