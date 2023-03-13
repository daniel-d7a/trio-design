import { Link } from "react-router-dom";
export default function SingleCategoryElement({ category, name, img }) {
  
  const url = window.location.pathname;

  return (
    <>
      <Link
        to={url === "/products" ? `./${category}/${name}` : `./${name}`}
        className="w-[48%] box-border h-60 md:h-96 p-2"
      >
        <div className="h-[80%]">
          <img src={img} className="w-full h-full object-cover" />
        </div>
        <p className="font-semibold text-lg mt-2 md:mt-6 text-center">{name}</p>
      </Link>
    </>
  );
}
