import { useState, useEffect } from "react";
import arrow from "../../assets/left.svg";

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

  const [index, setIndex] = useState(0);
  const [isClicking, setIsClicking] = useState(false);

  const clickFunction = clickDebouncer();

  let timer;

  useClickEffect();
  useCarousel();

  return (
    <>
      <section>
        <div className="w-[80%] m-auto h-full mb-4 flex items-center justify-center">
          <div id="carousel" className="relative w-full h-[80vh] md:h-96 ">
            <img
              onClick={() => {
                setIsClicking(true);
                setIndex((index - 1 + 3) % 3);
                scrollFade("backward");
              }}
              src={arrow}
              className="w-10 cursor-pointer absolute z-50 top-1/2 -left-10 -translate-y-1/2"
            />
            <img
              onClick={() => {
                setIsClicking(true);
                setIndex((index + 1) % 3);
                scrollFade();
              }}
              src={arrow}
              className="w-10 rotate-180 cursor-pointer absolute z-50 top-1/2 -right-10 -translate-y-1/2"
            />
            {imgs.map((_, i) => (
              <div
                key={`asdf${i}`}
                className="carousel-div w-full h-full top-0 left-0 m-auto absolute"
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

  function clickDebouncer() {
    return function () {
      clearTimeout(timer);
      // console.log("timer debounced");
      timer = setTimeout(() => {
        setIsClicking(false);
      }, 1500);
    };
  }

  function scrollFade(direction = "forward") {
    console.log(index);

    const carousel = document.getElementById("carousel");
    const images = carousel?.querySelectorAll(".carousel-div img");
    const beforeScrollIndex = (index - 1 + 3) % 3;

    if (direction === "forward") {
      images[index].style.opacity = 100;
      images[index].style.zIndex = 10;

      images[beforeScrollIndex].style.opacity = 0;
      images[beforeScrollIndex].style.zIndex = 0;
    } else {
      images[beforeScrollIndex].style.opacity = 100;
      images[beforeScrollIndex].style.zIndex = 10;

      images[index].style.opacity = 0;
      images[index].style.zIndex = 0;
    }
  }

  function useClickEffect() {
    useEffect(() => {
      if (isClicking) {
        clickFunction();
      }
      return () => {
        clearTimeout(timer);
      };
    });
  }

  function useCarousel() {
    useEffect(() => {
      const carousel = document.getElementById("carousel");
      const images = carousel?.querySelectorAll(".carousel-div img");
      images[0].style.opacity = 100;
      images[0].style.zIndex = 10;
    }, []);

    useEffect(() => {
      let interval;

      // console.log("is clicking: ", isClicking);
      if (isClicking) {
        clearInterval(interval);
      } else {
        interval = setInterval(() => {
          setIndex((index + 1) % 3);
          scrollFade();
        }, 3500);
      }
      return () => {
        clearInterval(interval);
      };
    }, [index, isClicking]);
  }
}
