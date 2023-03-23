export default function ContactElement({ img, link }) {
  return (
    <>
      <a
        href={link}
        className="p-4 mt-4 cursor-pointer transition rounded-full hover:bg-light-green"
      >
        <img src={img} className="w-20" />
      </a>
    </>
  );
}
