import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import phone from "../../assets/phone.svg";
import mail from "../../assets/email.svg";
import whatsapp from "../../assets/whatsapp.svg";
import ContactElement from "../atoms/contactElement";

export default function Contact() {
  const contactData = [
    {
      link: "https://www.facebook.com/profile.php?id=100087017378525",
      img: facebook,
      key: 0,
    },
    {
      link: "https://www.instagram.com/triodesigns53/",
      img: instagram,
      key: 1,
    },
    {
      link: "tel:+201007504678",
      img: phone,
      key: 2,
    },
    {
      link: "",
      img: mail,
      key: 3,
    },
    {
      link: "https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%252B201007504678%26data%3DAWBXtv_uBk8YoHIBdZgd2JjATOj4ouq6MDXz5J4nDuOYL5az8OgYKTXPY-aG7PN-zY3poilJkp2e4bZluORqMnbZJUQuW3UZcpCfBpwuaCGG56e8bWYFnqvSp3fO1ucyyr-5vvvTbmftmfVlvcHYvlGsIr3S5QFLqjBplZF1e9flj4eT3pZpnUelubMT53sPiyklIOGCPsoawiIsFG9PFpgzrq__NmhsjQpHZbPAiOmDuyEftWRjm6DxmenzLZqRs2OXtfSFFZlIYYb3ka_e5w%26source%3DFB_Page%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwAR3OoZEgVpxi-VlTGXEB48tcy1efE-lC1B98QzcO0pLmdyajKzCJZX-TT8I&h=AT2A5wHoJ_GpUDn9CuYzuH5RujSsY8IApL4G_Aq1rG_GwfEp7ibg3mA-9RRdUZIyePIkklTXFLv1Ida_6D3lViBDBwBsmZTdchj3kASVabFZKqPZEg1G565xRhKh1JRDY855qQ",
      img: whatsapp,
      key: 4,
    },
  ];

  return (
    <>
      <section className="text-black capitalize">
        <h2 className="text-4xl mt-14 text-center">get in touch</h2>
        <div className="flex flex-wrap justify-evenly p-4 sm:w-3/4 mx-auto">
          {contactData.map(({ link, img, key }) => (
            <ContactElement link={link} img={img} key={key} />
          ))}
        </div>
      </section>
    </>
  );
}
