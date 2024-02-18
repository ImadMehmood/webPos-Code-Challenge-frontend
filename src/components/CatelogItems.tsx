import React, { useState } from "react";

import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import { Link, Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const CatelogItems = () => {
  const list = [
    {
      name: "Orange",

      productId: 23,
      currency: "USD",
      img: "https://cdn.pixabay.com/photo/2022/05/27/02/27/mango-7224193_1280.jpg",
      fromValue: "5.50",

      toValue: "1000",
      giftCardInformation:
        "This card allows you to buy products from cardinfo.com",
      categories: "Lifestyle",
    },
    {
      name: "Tangerine",

      productId: 23,
      currency: "USD",
      img: "https://cdn.pixabay.com/photo/2022/05/27/02/27/mango-7224193_1280.jpg",
      fromValue: "3.00",

      toValue: "1000",
      giftCardInformation:
        "This card allows you to buy products from cardinfo.com",
      categories: "Lifestyle",
    },
    {
      name: "Raspberry",

      productId: 23,
      currency: "USD",
      img: "https://cdn.pixabay.com/photo/2022/05/27/02/27/mango-7224193_1280.jpg",
      fromValue: "10.00",
      toValue: "1000",
      giftCardInformation:
        "This card allows you to buy products from cardinfo.com",
      categories: "Lifestyle",
    },
    {
      name: "Lemon",

      productId: 23,
      currency: "USD",
      img: "https://cdn.pixabay.com/photo/2022/05/27/02/27/mango-7224193_1280.jpg",
      fromValue: "5.30",

      toValue: "1000",
      giftCardInformation:
        "This card allows you to buy products from cardinfo.com",
      categories: "Lifestyle",
    },
    {
      name: "Avocado",

      productId: 23,
      currency: "USD",
      img: "https://cdn.pixabay.com/photo/2022/05/27/02/27/mango-7224193_1280.jpg",
      fromValue: "15.70",
      toValue: "1000",
      giftCardInformation:
        "This card allows you to buy products from cardinfo.com",
      categories: "Lifestyle",
    },
    {
      name: "Lemon 2",

      productId: 23,
      currency: "USD",
      img: "https://cdn.pixabay.com/photo/2022/05/27/02/27/mango-7224193_1280.jpg",
      fromValue: "8.00",

      toValue: "1000",
      giftCardInformation:
        "This card allows you to buy products from cardinfo.com",
      categories: "Lifestyle",
    },
    {
      name: "Banana",

      productId: 23,
      currency: "USD",
      img: "https://cdn.pixabay.com/photo/2022/05/27/02/27/mango-7224193_1280.jpg",
      fromValue: "7.50",

      toValue: "1000",
      giftCardInformation:
        "This card allows you to buy products from cardinfo.com",
      categories: "Lifestyle",
    },
    {
      name: "Watermelon",
      productId: 23,
      currency: "USD",
      img: "https://cdn.pixabay.com/photo/2022/05/27/02/27/mango-7224193_1280.jpg",
      fromValue: "12.20",
      toValue: "1000",
      giftCardInformation:
        "This card allows you to buy products from cardinfo.com",
      categories: "Lifestyle",
    },
  ];

  const [showHover, setShowHover] = useState<any>(null);

  return (
    <div className="grid grid-cols-1 place-content-center place-items-center sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {list.map((item, index) => (
        <Link   key={index} to={`/catelog/details?productId=${item?.productId}`}>
          <div
          
            className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-[350px] w-full cursor-pointer"
            onMouseEnter={() => setShowHover(index)}
            onMouseLeave={() => setShowHover(null)}
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[300px] object-center object-cover"
              />
              <div className="absolute   top-4 right-5 ">
                <Button className="bg-webGreen text-white">
                  {item?.categories}
                </Button>
              </div>

              {showHover === index && (
                <div className="absolute  left-0 bottom-0 right-0 bg-webDarkBlue/70 h-[100px] text-center p-7">
                  <p className="text-white">{item?.giftCardInformation}</p>
                </div>
              )}
            </div>
            <div className="p-4 bg-webDarkBlue text-white flex justify-between items-center ">
              <div>
                <div className="flex gap-2">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>{item?.currency}</p>
                </div>
                <div className="flex gap-2">
                  <span>from</span>
                  <p>${item?.fromValue}</p>
                  <span>to</span>
                  <p>${item?.toValue}</p>
                </div>
              </div>
              <Button className="bg-webGreen">
                <ShoppingCartIcon className="w-9 text-white" />
              </Button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CatelogItems;
