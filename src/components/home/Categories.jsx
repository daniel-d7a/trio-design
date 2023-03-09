import wood from "./../../assets/mock/wood.png";
import steel from "./../../assets/mock/steel.png";
import indoor from "./../../assets/mock/indoor.png";
import outdoor from "./../../assets/mock/outdoor.png";
import home from "./../../assets/mock/home.png";
import hospitality from "./../../assets/mock/hospitality.png";
import CategoryElement from "../atoms/categoryElement";

export default function Categories() {
  const categoryData = [
    {
      text: "indoor",
      img: indoor,
      key: 0,
    },
    {
      text: "outdoor",
      img: outdoor,
      key: 1,
    },
    {
      text: "home",
      img: home,
      key: 2,
    },
    {
      text: "hospitality",
      img: hospitality,
      key: 3,
    },
    {
      text: "steel",
      img: steel,
      key: 4,
    },
    {
      text: "wood",
      img: wood,
      key: 5,
    },
  ];

  return (
    <>
      {/* TODO: add on click to category buttons */}
      {/* TODO: check the categories  */}
      <h2 className="text-black text-center text-4xl my-8">Categories</h2>
      <div className="text-black flex flex-wrap gap-4 justify-center">
        {categoryData.map(({ text, img, key }) => (
          <CategoryElement imgBg={img} text={text} key={key} />
        ))}
      </div>
    </>
  );
}
