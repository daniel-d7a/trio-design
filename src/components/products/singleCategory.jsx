import SingleCategoryElement from "../atoms/singleCategoryElement";
import { useLoaderData } from "react-router-dom";

export default function SingleCategory({name, products}) {

  const data = useLoaderData()

  name = name || data.name
  products = products || data.products;

  return <>
    <div className="capitalize my-8">
      <h3 className="text-center text-4xl mb-4 font-bold">{name}</h3>
      <div className="flex flex-wrap gap-2 p-3 justify-center items-center">
        {products.map((product) => <SingleCategoryElement category={name} name={product.name} img={product.img} />)}
      </div>
    </div>
  </>
}