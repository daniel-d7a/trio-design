import { Link } from "react-router-dom";
export default function CategoryElement({ url, imgBg }) {

  const absolute_url = `/products/${url}`
  return (
    <>
      <Link to={absolute_url} className="category w-2/5 relative">
        <div className="w-full h-32 md:h-56  rounded-md overflow-hidden">
          <img
            src={imgBg}
            className="object-cover w-full h-full scale-125 transition-all"
          />
        </div>
        <p className="w-full rounded-md capitalize md:text-3xl text-xl text-white font-thin absolute top-0 left-0 backdrop-saturate-50 backdrop-blur-sm hover:opacity-0 transition flex items-center justify-center h-full">
          {url}
        </p>
      </Link>
    </>
  );
}
