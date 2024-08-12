import image from "../assets/element-4.png";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/Logo.png";
import { RiSearch2Line } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";
import shoppingBag from "../assets/shopping-bag.png";
import profile from '../assets/profile.png'

const Navbar = () => {
  return (
    <div className="border-b-[1px]">
      <div className="flex items-center justify-center md:justify-between px-6 md:px-[150px] py-3 bg-black h-[24px] md:h-[32px] w-[100%]">
        <div className="flex gap-x-[10px] h-[14px] md:h-[16px] w-[120px] md:w-[138px]">
          <img
            src={image}
            alt="element"
            className="h-[14px] md:h-[16px] w-[14px] md:w-[16px]"
          />
          <span className="text-[11px] md:text-[12px] text-[#EB4C6B] h-[14px] w-[96px] md:w-[112px] font-normal leading-[14.4px]">
            Lorem ipsum dolor
          </span>
        </div>
        <div className="flex gap-x-[10px] h-[14px] md:h-[16px] w-[120px] md:w-[138px] hidden md:block md:flex">
          <img
            src={image}
            alt="element"
            className="h-[14px] md:h-[16px] w-[14px] md:w-[16px]"
          />
          <span className="text-[12px] text-[#EB4C6B] w-[96px] md:w-[112px] font-normal leading-[14.4px]">
            Lorem ipsum dolor
          </span>
        </div>
        <div className="flex gap-x-[10px] h-[14px] md:h-[16px] w-[120px] md:w-[138px] hidden md:block md:flex">
          <img
            src={image}
            alt="element"
            className="h-[14px] md:h-[16px] w-[14px] md:w-[16px]"
          />
          <span className="text-[12px] text-[#EB4C6B] w-[96px] md:w-[112px] font-normal leading-[14.4px]">
            Lorem ipsum dolor
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-[55px] md:h-[188px] max-h-[188px] px-3 md:pl-[96px] md:pr-[60px] py-[41px] md:py-[46px]">
        <div className="flex items-center justify-between w-[100%]">
          <div className="flex gap-x-[8px] md:hidden">
            <button type="button" aria-label="hamburger" className="">
              <RxHamburgerMenu />
            </button>
            <img
              src={logo}
              alt="logo"
              className="h-[20.1px] w-[20.1px]"
            />
          </div>
          <img
            src={logo}
            alt="logo"
            className="h-[36px] w-[36px] hidden md:block"
          />
          <h1 className="text-[20px] md:text-[36px] font-extrabold tracking-[1px] font-inter md:ml-[110px]">
            LOGO
          </h1>
          <div className="flex gap-x-[12px] md:gap-x-[24px]">
            <button type="button">
              <RiSearch2Line className="h-[20px] w-[20px] md:h-[24px] md:w-[24px]" />
            </button>
            <button type="button">
              <BsHeart className="h-[20px] w-[20px] md:h-[24px] md:w-[24px]" />
            </button>
            <button type="button">
              <img
                src={shoppingBag}
                className="h-[20px] w-[20px] md:h-[24px] md:w-[24px]"
              />
            </button>
            <button type="button">
              <img
                src={profile}
                className="hidden md:block h-[20px] w-[20px] md:h-[24px] md:w-[24px]"
              />
            </button>
            <select className="hidden md:block border-none">
                <option>ENG</option>
                <option>HIN</option>
                <option>TEL</option>
            </select>
          </div>
        </div>
        <div className="hidden md:block md:flex gap-[64px] pt-10">
            <p className="text-sm font-medium">SHOP</p>
            <p className="text-sm font-medium">SKILLS</p>
            <p className="text-sm font-medium">STORIES</p>
            <p className="text-sm font-medium">ABOUT</p>
            <p className="text-sm font-medium">CONTACT US</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
