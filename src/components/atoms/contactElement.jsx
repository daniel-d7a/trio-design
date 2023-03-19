export default function ContactElement({ img, link }) {
  return (
    <>
      <a href={link} className="p-4 mt-4 cursor-pointer transition rounded-full hover:bg-white">
        <img src={img} className="w-20"/>
      </a>
    </>
  );
}
