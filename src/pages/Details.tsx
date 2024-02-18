import { Button } from "@nextui-org/react";
import React from "react";
import { useSearchParams } from "react-router-dom";
import OrderModal from "../components/OrderModal";

const Details: React.FC = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productId");

  const productData = {
    id: "CARD-99121",
    name: "Amazon Gift Card",
    brand: "Amazon",
    usageInstructions: "To use this card login to www.cardinfo.com",
    termsAndConditions: "Following are terms and conditions for this card",
    giftCardInformation:
      "This card allows you to buy products from cardinfo.com",
    fromValue: 1,
    toValue: 1000,
    currency: "AED",
    cardFaceImage:
      "https://cdn.pixabay.com/photo/2022/05/27/02/27/mango-7224193_1280.jpg",
    productId: 21312,
    categories: ["Lifestyle"],
  };

  return (
    <div className="p-8">
      <div className="bg-white shadow-xl max-w-[800px] w-full mx-auto rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{productData.name}</h2>
          <span className="text-gray-600">{productData.brand}</span>
        </div>
        <div className="mb-4">
          <img
            src={productData.cardFaceImage}
            alt={productData.name}
            className="w-full h-[300px] object-contain object-center rounded-lg"
          />
        </div>

        <div>
          <OrderModal />
        </div>
        <div className="mb-4">
          <p className="font-semibold">Usage Instructions:</p>
          <p>{productData.usageInstructions}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Terms and Conditions:</p>
          <p>{productData.termsAndConditions}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Gift Card Information:</p>
          <p>{productData.giftCardInformation}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Value:</p>
          <p>
            {productData.fromValue} - {productData.toValue}{" "}
            {productData.currency}
          </p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Categories:</p>
          <p>{productData.categories.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
