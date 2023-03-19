import { useLoaderData } from "react-router-dom";
import { useRef } from "react";
export default function SingleProduct() {
  const product = useLoaderData();

  const { img, name, details } = product;
  const { images, material, color, description, dimensions, weight } = details;

  const mainImg = useRef(null);

  return (
    <>
      <main className="text-black ">
        <h3 className="text-center font-bold capitalize text-4xl mt-8 mb-4 md:mb-10 md:text-6xl">
          {name}
        </h3>
        <div className="sm:flex bg-beige mx-4 p-2 pb-6">
          <div className="p-4 sm:w-1/2">
            <div className="w-full sm:h-96 h-64">
              <img
                ref={mainImg}
                src={img}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex  mt-4 justify-between">
              {[...images, img].map((image, i) => (
                <img
                  key={`asdf${i}`}
                  src={image}
                  className="w-[23%] "
                  onClick={(e) => {
                    mainImg.current.src = e.target.src;
                  }}
                />
              ))}
            </div>
          </div>
          <div className="pt-4 mt-4 sm:w-1/2 h-full">
            <div className=" m-4 text-xl sm:text-2xl flex">
              <div className="flex flex-col w-1/2 justify-center items-center">
                <p className="capitalize font-semibold ">Color</p>
                <p className="capitalize font-light">{color}</p>
              </div>
              <div className="flex flex-col w-1/2 justify-center items-center">
                <p className="capitalize font-semibold">material</p>
                <p className="capitalize font-light ">{material}</p>
              </div>
            </div>
            <div className="mt-8 text-xl ">
              <h4 className="ml-5 text-2xl mb-3 font-semibold">Description</h4>
              <ul className="ml-10 list-disc">
                {description.map((item, i) => (
                  <li key={`asdf${i}`}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8 text-xl ">
              <h4 className="ml-5 text-2xl mb-3 font-semibold">Dimensions</h4>
              <ul className="ml-10 list-disc capitalize">
                {Object.entries(dimensions).map(([key, val], i) => (
                  <li key={`asdf${i}`}>
                    <span className="font-semibold">{key}</span>: {val} cm
                  </li>
                ))}
                <li>
                  <span className="font-semibold">weight</span>: {weight} kg
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// <p className="capitalize font-semibold">
//   color: <span className="font-normal">{color}</span>
// </p>
// <p className="capitalize font-semibold">
//   material: <span className="font-normal">{material}</span>
// </p>
