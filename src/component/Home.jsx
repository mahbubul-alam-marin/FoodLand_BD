import React from "react";
import hero from "../assets/picture/Hero omatoes-sauce-plate 1.svg";
import profile from "../assets/picture/profile.jpg";
import healty from "../assets/picture/Healty.svg";
import Breakfast from "../assets/picture/Breakfast.svg";
import Choco from "../assets/picture/chocolate.svg";
import Meat from "../assets/picture/meat.svg";
import Lunch from "../assets/picture/lunch.svg";
import Dessert from "../assets/picture/Dessert.svg";
import Ads from "../assets/picture/Ads.svg";
import Pasta from "../assets/picture/BaconPasta.svg";
import Burger from "../assets/picture/burger.svg";
import ChickenBalls from "../assets/picture/chickenBalls.svg";
import ChickenRice from "../assets/picture/ChickenRice.svg";
import Fish from "../assets/picture/fish.svg";
import ManPic from "../assets/picture/ManPic.svg"
import FruityPancake from "../assets/picture/fruityPancake.svg";
import MixedSalad from "../assets/picture/MixedSalad.svg";
import Strawberry from "../assets/picture/Strawberry.svg";
import { MdTimer, MdSlowMotionVideo } from "react-icons/md";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";

const Home = () => {
  const Catagories = [
    {
      id: 1,
      Url: Breakfast,
      title: "Breakfast",
    },
    {
      id: 2,
      Url: healty,
      title: "Healthy",
    },

    {
      id: 3,
      Url: Meat,
      title: "Meat",
    },
    {
      id: 4,
      Url: Lunch,
      title: "Lunch",
    },
    {
      id: 5,
      Url: Dessert,
      title: "Dessert",
    },

    {
      id: 6,
      Url: Choco,
      title: "Chocolate",
    },
  ];

  const Cards = [
    {
      id: 1,
      Url: Burger,
      des: "Gig and juicy Wagyu Beef Cheeseburger",
      title: "Chicken",
    },
    {
      id: 2,
      Url: Fish,
      des: "Fresh Lime Roasted Salmon with Ginger Sauce",
      title: "Fish",
    },
    {
      id: 3,
      Url: Strawberry,
      des: "Strawberry Oatmeal Pancake with Honey Syrup",
      title: "Breakfast",
    },
    {
      id: 4,
      Url: MixedSalad,
      des: "Fresh and Healthy Mixed Mayonnaise Salad",
      title: "Healthy",
    },
    {
      id: 5,
      Url: ChickenBalls,
      des: "Chicken Meatballs with Cream Cheese",
      title: "Meat",
    },
    {
      id: 6,
      Url: Ads,
      des: " ",
      title: " ",
    },
    {
      id: 7,
      Url: FruityPancake,
      des: "Fruity Pancake with Orange & Blueberry",
      title: "Sweet",
    },
    {
      id: 8,
      Url: ChickenRice,
      des: "The Best Easy One Pot Chicken and Rice",
      title: "Snack",
    },
    {
      id: 9,
      Url: Pasta,
      des: "The Creamiest Creamy Chicken and Bacon Pasta",
      title: "Noodles",
    },
  ];
  const excludedIds = [6];

  return (
    <div>
      {/** section 01 */}
      <section className="">
        <div className="py-5 px-5">
          <div className="grid grid-cols-2 ">
            <div className="bg-[#E7FAFE] text-left pl-5 pt-10 space-y-5 rounded-l-2xl">
              <p className="flex bg-black text-white w-fit px-2 rounded-2xl font-semibold">
                <BsFillJournalBookmarkFill className="py-2 w-10 h-10" />
                <span className="px-2 py-2 ">Hot Recipes</span>
              </p>

              <h1 className="text-6xl font-semibold py-2 w-md leading-snug">
                Spicy delicious chicken wings
              </h1>

              <p className="text-2xl text-gray-500 w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                accusantium voluptas nisi sunt delectus facere sequi! Quibusdam
                maxime consequatur.
              </p>

              <div className="flex space-x-4 pb-5">
                <p className="flex bg-gray-200 rounded-2xl w-fit px-2">
                  <MdTimer className="py-2 w-10 h-10" />
                  <span className="py-2 pr-2 text-gray-500">30 Minutes</span>
                </p>
                <p className="flex bg-gray-200 rounded-2xl w-fit px-2">
                  <ImSpoonKnife className="py-2 w-10 h-10" />
                  <span className="py-2 pr-2 text-gray-500">Chicken</span>
                </p>
              </div>

              <div className="flex py-2">
                <div className="flex items-center space-x-4 p-4 rounded-lg w-fit">
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      John Smith
                    </h3>
                    <p className="text-sm text-gray-500">15 March 2022</p>
                  </div>
                </div>
                <div className=" pl-20 p-4 items-center space-x-4 cursor-pointer">
                  <butto className="flex  font-semibold bg-black rounded-2xl w-fit text-white">
                    <span className="p-2 "> View Recipes </span>{" "}
                    <MdSlowMotionVideo className="p-2 w-10 h-10" />{" "}
                  </butto>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center h-full">
              <img
                src={hero}
                alt="Spicy Chicken Wings"
                className="w-full h-full object-cover rounded-r-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/** sections 02 */}

      <section className="py-10">
        <div className="px-5">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold ">Categories</h1>
            <p className="bg-gray-300 rounded-2xl p-2 cursor-pointer">
              View All Categories
            </p>
          </div>

          <div className="grid grid-cols-6 py-10">
            {Catagories.map((item) => (
              <div key={item.id} className="flex flex-col items-center p-5">
                <img
                  src={item.Url}
                  alt=""
                  className="items-center justify-between w-fit h-20"
                />
                <p className="p-5 font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/** sections 03 */}

      <section className="pb-10">
        <div className="px-5">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-5xl font-semibold py-5">
              Simple and tasty recipes
            </h1>
            <p className="text-gray-500 text-lg max-w-lg mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliquip enim
              ad minim.
            </p>
          </div>

          <div className="grid grid-cols-3 py-6">
            {Cards.map((link) => (
              <div key={link.id} className="m-5">
                <div>
                  <img src={link.Url} alt="" className="w-368 " />
                </div>
                {!excludedIds.includes(link.id) && (
                  <>
                    <p className="text-2xl text-left font-semibold py-4 max-w-md">
                      {link.des}
                    </p>
                    <div className="flex space-x-2 pb-5">
                      <p className="flex bg-gray-200 rounded-2xl w-fit px-1">
                        <MdTimer className="py-2 w-10 h-10" />
                        <span className="py-2 pr-2 text-gray-500">
                          30 Minutes
                        </span>
                      </p>
                      <p className="flex bg-gray-200 rounded-2xl w-fit px-1">
                        <ImSpoonKnife className="py-2 w-10 h-10" />
                        <span className="py-2 pr-2 text-gray-500">
                          {link.title}
                        </span>
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/** Sections 04 */}

      <section className="pb-10">
        <div className="grid grid-cols-2 px-5">
          <div className="text-left my-20">
            <h1 className="text-5xl w-lg py-4 font-semibold ">Everyone can be a
            chef in their own kitchen</h1>

            <p className="text-gray-500 w-lg pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, rerum pariatur. Itaque incidunt, mollitia vitae vel autem et ratione, ipsam eum fuga quasi voluptate temporibus consequuntur.</p>

            <button className="bg-black rounded-2xl cursor-pointer px-4 py-2 text-white "> Learn More</button>
          </div>
          <div>
            <img src={ManPic} alt="" />
          </div>

        </div>

      </section>








    </div>
  );
};

export default Home;
