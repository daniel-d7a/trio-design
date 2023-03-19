import { Link } from "react-router-dom";
export default function SingleCategoryElement({ category, name, img }) {
  

  return (
    <>
      <Link
        to={`/products/${category}/${name}`}
        className="w-[48%] box-border h-60 md:h-96 p-2 bg-beige pb-4"
      >
        <div className="h-[80%] ">
          <img src={img} className="w-full h-full object-cover" />
        </div>
        <p className="font-semibold text-xl md:text-2xl mt-4 md:mt-6 text-center">
          {name}
        </p>
      </Link>
    </>
  );
}
