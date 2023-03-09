import chair1 from "../../assets/mock/chair.png";
import chair2 from "../../assets/mock/chair2.png";
import chair3 from "../../assets/mock/chair3.png";
import sofa1 from "../../assets/mock/sofa.png";
import sofa2 from "../../assets/mock/sofa2.png";
import sofa3 from "../../assets/mock/sofa3.png";
import arrow from "../../assets/left.svg";

import { useState, useEffect } from "react";

export default function Carousel() {
  const imgs = [chair1, chair2, chair3];
  const bigImgs = [sofa1, sofa2, sofa3];

  function scrollFade(i) {
    const carousel = document.getElementById("carousel");
    const images = carousel.querySelectorAll("img");
    images[i].style.opacity = 100;
    images[i].style.zIndex = 10;

    const beforeScrollIndex = (i - 1 + 3) % 3;

    images[beforeScrollIndex].style.opacity = 0;
    images[beforeScrollIndex].style.zIndex = 0;
  }

  useEffect(() => {
    const carousel = document.getElementById("carousel");
    const images = carousel.querySelectorAll("img");
    images[0].style.opacity = 100;
    images[0].style.zIndex = 10;

    let i = 1;
    setInterval(() => {
      scrollFade(i);
      i = (i + 1) % 3;
    }, 2000);
  }, []);

  return (
    <>
      <section>
        <div className="w-full h-full mb-10 flex items-center justify-center">
          <div id="carousel" className="w-full mb-[135vw] sm:mb-[63vw]">
            {imgs.map((_, i) => (
              <div className="w-full h-full m-auto relative">
                <picture>
                  <source media="(min-width:640px)" srcSet={bigImgs[i]} />
                  <img
                    src={imgs[i]}
                    className={`w-full z-0 transition-all opacity-0 object-cover absolute`}
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
