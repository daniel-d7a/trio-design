import { useLoaderData } from "react-router-dom";

export default function SingleProduct() {
  const product = useLoaderData();

  const { img, name, details } = product;
  const { images, material, color, description, dimensions, weight } = details;
  console.log(details);

  return (
    <>
      <main>
        <h3 className="text-center font-bold capitalize text-4xl mt-8 md:mb-10 md:text-6xl">
          {name}
        </h3>
        <div className="md:flex ">
          <div className="p-4 md:w-1/2">
            <img src={img} className="w-full" />
            <div className="flex  mt-4 justify-between">
              {images.map((image) => (
                <img src={image} className="w-[30%] " />
              ))}
            </div>
          </div>
          <div className="mt-8 md:w-1/2">
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
                {description.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8 text-xl ">
              <h4 className="ml-5 text-2xl mb-3 font-semibold">Dimensions</h4>
              <ul className="ml-10 list-disc capitalize">
                {Object.entries(dimensions).map(([key, val]) => (
                  <li>
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
