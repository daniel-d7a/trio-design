import FooterElement from "../atoms/footerElement";

export default function Footer() {
  const footerData = [
    {
      header: "Home",
      content: [
        {
          text: "home",
          link: "/",
        },
        {
          text: "Products",
          link: "/products",
        },
        {
          text: "Contact Us",
          link: "/contact",
        },
      ],
    },
    {
      header: "Categories",
      content: [
        {
          text: "indoor",
          link: "/products/indoor",
        },
        {
          text: "outdoor",
          link: "/products/outdoor",
        },
        {
          text: "hospitality",
          link: "/products/hospitality",
        },
      ],
    },
    {
      header: "Contact us",
      content: [
        {
          text: "whatsapp",
          link: "https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%252B201007504678%26data%3DAWBXtv_uBk8YoHIBdZgd2JjATOj4ouq6MDXz5J4nDuOYL5az8OgYKTXPY-aG7PN-zY3poilJkp2e4bZluORqMnbZJUQuW3UZcpCfBpwuaCGG56e8bWYFnqvSp3fO1ucyyr-5vvvTbmftmfVlvcHYvlGsIr3S5QFLqjBplZF1e9flj4eT3pZpnUelubMT53sPiyklIOGCPsoawiIsFG9PFpgzrq__NmhsjQpHZbPAiOmDuyEftWRjm6DxmenzLZqRs2OXtfSFFZlIYYb3ka_e5w%26source%3DFB_Page%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwAR3OoZEgVpxi-VlTGXEB48tcy1efE-lC1B98QzcO0pLmdyajKzCJZX-TT8I&h=AT2A5wHoJ_GpUDn9CuYzuH5RujSsY8IApL4G_Aq1rG_GwfEp7ibg3mA-9RRdUZIyePIkklTXFLv1Ida_6D3lViBDBwBsmZTdchj3kASVabFZKqPZEg1G565xRhKh1JRDY855qQ",
        },
        {
          text: "facebook",
          link: "https://www.facebook.com/profile.php?id=100087017378525",
        },
        {
          text: "instagram",
          link: "https://www.instagram.com/triodesigns53/",
        },
        {
          text: "phone",
          link: "tel:+201007504678",
        },
        {
          text: "email",
          link: "",
        },
      ],
    },
  ];

  return (
    <>
      <footer className="bg-dark-green pt-6 rounded-t-[3rem] mt-10 md:mt-10 capitalize">
        <ul className=" sm:ml-4 sm:flex sm:text-left text-center justify-around items-start">
          {footerData.map(({ header, content }, i) => {
            return (
              <li key={`asdf${i}`} >
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
