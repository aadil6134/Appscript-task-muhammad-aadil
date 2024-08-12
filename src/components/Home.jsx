import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import smallFooter from "../assets/Frame 136422.png";
import largeFooter from "../assets/Footer.png";

const Home = () => {
  const [productsList, setProductsList] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const buttonText = showResults ? "< HIDE FILTER" : "> SHOW FILTER";

  useEffect(() => {
    const getProducts = async () => {
      const apiUrl = "https://fakestoreapi.com/products";
      const response = await axios.get(apiUrl);
      // console.log(response);
      setProductsList(response.data);
    };
    getProducts();
  }, []);
  console.log(productsList);
  const count = productsList.length;

  return (
    <>
      <div className="px-3 md:pl-[96px] md:pr-[60px] ">
        <div className="flex flex-col items-center justify-center py-10">
          <div className="flex flex-col items-center justify-center text-center w-[343px] md:w-[521px] text-wrap">
            <h2 className="font-normal text-[24px] text-[24px] md:text-[40px] tracking-wide">
              DISCOVER OUR PRODUCTS
            </h2>
            <p className="text-[16px] md:text-[22px] pt-6 break-normal max-w-[343px] md:max-w-[521px]">
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between px-[30px] border-[1px] border-slate-300 w-[100%] mt-7 border-x-0">
          <button type="button" className="border-none md:hidden">
            FILTER
          </button>
          <div className="hidden md:block md:flex gap-3">
            <p className="font-bold text-sm ">{`${count} items`}</p>
            <button
              className="border-none"
              onClick={() => setShowResults(!showResults)}
            >
              {buttonText}
            </button>
          </div>
          <select className="border-none text-md text-wrap">
            <option className="text-sm mt-10">RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR </option>
            <option>PRICE: HIGH TO LOW</option>
            <option>PRICE: LOW TO HIGH</option>
          </select>
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-0 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {productsList.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <img
          src={smallFooter}
          alt="small-footer"
          className="md:hidden w-[100%] object-cover"
        />
        <img
          src={largeFooter}
          alt="small-footer"
          className="hidden md:block object-cover"
        />
      </div>
    </>
  );
};

export default Home;
