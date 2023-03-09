import FooterElement from "../atoms/footerElement";

export default function Footer() {
  const footerData = [
    {
      header: "Home",
      content: [
        {
          text: "home",
          link: "main",
        },
        {
          text: "about us",
          link: "about",
        },
        {
          text: "categories",
          link: "categories",
        },
      ],
    },
    {
      header: "Categories",
      content: [
        {
          text: "indoor",
          link: "indoor",
        },
        {
          text: "outdoor",
          link: "outdoor",
        },
        {
          text: "hospitality",
          link: "hospitality",
        },
      ],
    },
    {
      header: "Contact us",
      content: [
        {
          text: "whatsapp",
          link: "whatsapp",
        },
        {
          text: "facebook",
          link: "facebook",
        },
        {
          text: "instagram",
          link: "instagram",
        },
        {
          text: "phone",
          link: "instagram",
        },
        {
          text: "email",
          link: "instagram",
        },
      ],
    },
  ];

  return (
    <>
      <footer className="text-black mt-20 capitalize">
        <ul className=" ml-4 sm:flex justify-around items-start">
          {footerData.map(({ header, content }) => {
            return (
              <li>
                <FooterElement header={header} content={content} />
              </li>
            );
          })}
        </ul>
        <div className=" text-center border-t-2 mx-10 py-4">
          <p>trio designs &#174; 2023</p>
          <p>
            website made by{" "}
            <a className="underline" href="https://www.linkedin.com/in/eyad-alsherif-741177216/">
              Eyad Alsherif
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
