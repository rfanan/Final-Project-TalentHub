import { Button } from "@material-tailwind/react";
import React from "react";

export default function Modal({ data, addToCart }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Button
        variant="filled"
        size="small"
        className="rounded-full bg-[#66785F]"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Pesan
      </Button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Detail Food</h3>
                  <button onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="flex px-6 gap-5 justify-center items-center">
                  <img
                    className="h-72 bg-cover rounded-2xl"
                    src={data.imageUrl}
                    alt="food"
                  />
                  <div>
                    <h3 className="text-3xl font-semibold">{data.nameFood}</h3>
                    <p className="my-4 text-gray-500 text-md leading-relaxed">
                      {data.deskrip}
                    </p>
                    <p className="text-gray-900 text-lg text-left">
                      Rp. {data.price}
                    </p>
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <Button
                    variant="outlined"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      addToCart(data);
                    }}
                  >
                    add to cart
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
