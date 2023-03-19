import { useState, useEffect } from "react";

export default function Carousel() {

  const sofa1 =
    "https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1673455389/shop-fabric_ho4yn7.jpg";
  const sofa2 =
    "https://d3930c7dxygvzp.cloudfront.net/media/catalog/product/c/h/chesterfield-modern-velluto-14-s_1__1_1.jpg?store=default&image-type=image";
  const sofa3 =
    "https://images.sofology.co.uk/c_scale,w_460,q_70,dpr_3,fl_lossy,f_auto/productmedia/lifestyle/sku001018982.jpg";

  const chair1 =
    "https://media.istockphoto.com/id/1402151474/photo/chair-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=PaLVMKuYHrW2dgkzFmyY-Yy4CuQbI6Oml4BQstIycH4=";
  const chair2 =
    "https://images.unsplash.com/photo-1622880355742-af182a61b362?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80";
  const chair3 =
    "https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

  const imgs = [chair1, chair2, chair3];
  const bigImgs = [sofa1, sofa2, sofa3];

  function scrollFade(i) {
    const carousel = document.getElementById("carousel");
      const images = carousel?.querySelectorAll("img");
      images[i].style.opacity = 100;
      images[i].style.zIndex = 10;

      const beforeScrollIndex = (i - 1 + 3) % 3;

      images[beforeScrollIndex].style.opacity = 0;
      images[beforeScrollIndex].style.zIndex = 0;
  }

  useEffect(() => {
    const carousel = document.getElementById("carousel");
    const images = carousel?.querySelectorAll("img");
    images[0].style.opacity = 100;
    images[0].style.zIndex = 10;

    let i = 1;
    const carouselInterval = setInterval(() => {
      scrollFade(i);
      i = (i + 1) % 3;
    }, 3500);

    return () => {
      clearInterval(carouselInterval);
    }

  }, []);

  return (
    <>
      <section>
        <div className="w-[80%] m-auto h-full mb-10 flex items-center justify-center">
          <div id="carousel" className="relative w-full h-[80vh] md:h-96 ">
            {imgs.map((_, i) => (
              <div
                key={`asdf${i}`}
                className="w-full h-full top-0 left-0 m-auto absolute"
              >
                <picture>
                  <source
                    media="(min-width:640px)"
                    className="object-cover"
                    srcSet={bigImgs[i]}
                  />
                  <img
                    src={imgs[i]}
                    className={`w-full h-full md:h-96 z-0 transition-all duration-1000 opacity-0 object-cover`}
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
