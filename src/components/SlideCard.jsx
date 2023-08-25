import React, { useEffect, useState } from "react";
import { worksCardData } from "../constants/data";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const SlideCard = () => {
  const [card, setCard] = useState(worksCardData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = card.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, card]);

  return (
    <section>
      <div className="overflow-hidden">
        {card.map((item, cardIndex) => {
          const { id, img, title, desq } = item;
          let position = "nextSlide";
          if (cardIndex === index) {
            position = "activeSlide";
          }
          if (
            cardIndex === index - 1 ||
            (index === 0 && cardIndex === card.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <div
              className={`mt-10  w-1/3 h-auto opacity-0 transition-all duration-300 ease-linear ${position}`}
              key={id}
            >
              <img src={img} alt={title} />
              <h3 className="font-bold sm:text-xl text-lg w-4/5 mb-2.5">
                {title}
              </h3>
              <p className="sm:text-[16px] text-base">{desq}</p>
            </div>
          );
        })}
        <div className="flex justify-between">
        <span  onClick={() => setIndex(index - 1)} className="bg-white drop-shadow-xl text-[#757575] p-2 text-2xl rounded-md cursor-pointer">
          <BsArrowLeftShort />
        </span>
        <span  onClick={() => setIndex(index + 1)} className="gradient drop-shadow-xl text-white p-2 text-2xl rounded-md sm:mr-4 cursor-pointer">
          <BsArrowRightShort />
        </span>
      </div>
      </div>
    </section>
  );
};

export default SlideCard;
