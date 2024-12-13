import React, { useEffect, useState } from "react";
import "./App.css";
import Modal from "./modal";
import bg from "./assets/bg.jpg";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

function App() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
git 
  const [dataFood, setDataFood] = useState([]);
  async function getData() {
    const url = "http://localhost:3000/Food";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);

      setDataFood(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  //? handle cart
  const [cart, setCart] = useState([]);

  function addToCart(Food) {
    setCart([...cart, Food]);
    console.log(Food);
  }

  return (
    <>
      {/* cart */}
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full text-3xl font-bold text-[#66785F]">Foodcurt</h1>
        <div className="p-4">
          <div className="flex justify-end">
            <Button onClick={openDrawer}>cart {cart.length}</Button>
            <Drawer
              placement="right"
              open={open}
              onClose={closeDrawer}
              className="p-4"
            >
              <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  Cart
                </Typography>
                <IconButton
                  variant="text"
                  color="blue-gray"
                  onClick={closeDrawer}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </IconButton>
              </div>
              {cart.map((data) => {
                return (
                  <>
                    <div>
                      <div className="flex py-3">
                        <div className="bg-cover h-20 w-20">
                          <img src={data.imageUrl} className="rounded-md" />
                        </div>
                        <div>
                          <div className="text-lg">{data.nameFood}</div>
                          <div className="">Rp. {data.price}</div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              <Button>Checkout</Button>
            </Drawer>
          </div>
        </div>
      </div>
      {/* end cart */}
      <div className="bg-[#F8FAFC]">
        {/* <div className="w-full ">
          <div className="flex items-center justify-center ">
            <img
              src={bg}
              className="h-[30rem] py-2 bg-cover text-center rounded-3xl"
              alt=""
            />
          </div>
        </div> */}
        <div className="w-full ">
          <div className="flex items-center justify-center py-5">
            <div className="container ">
              <p className="py-5 text-4xl font-semibold">Aneka Menu</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 gap-y-10">
                {dataFood.map((Food) => {
                  return (
                    <>
                      <div className="bg-[#F5F7F8] rounded-2xl" key="id">
                        <div className="flex justify-center items-center">
                          <img
                            className=" bg-contain rounded-t-2xl"
                            src={Food.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="px-4 py-2 ">
                          <div className="pb-7">
                            <p className="font-bold text-lg">{Food.nameFood}</p>
                            <p className="text-gray-600 text-xs truncate">
                              {Food.deskrip}
                            </p>
                          </div>
                          <div className="flex justify-between items-center">
                            <p className="text-base font-medium">
                              Rp. {Food.price}
                            </p>
                            <Modal data={Food} addToCart={addToCart} />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
