"use client";

import { useState } from "react";
import {
  Luggage,
  Plane,
  Hotel,
  FileCheck,
  Headset
} from "lucide-react";

export default function GaelPage() {

  const [message, setMessage] = useState("");

  const menu = [
    {
      title: "Tour Packages",
      icon: Luggage,
    },
    {
      title: "Flight Inquiry",
      icon: Plane,
    },
    {
      title: "Hotel Reservation",
      icon: Hotel,
    },
    {
      title: "Visa Assistance",
      icon: FileCheck,
    },
    {
      title: "Talk to Chingu Team",
      icon: Headset,
    },
  ];


  return (

    <main className="
      min-h-screen
      bg-gray-50
      flex
      items-center
      justify-center
      p-4
    ">


      <div className="
        w-full
        max-w-xl
        bg-white
        rounded-3xl
        shadow-xl
        border
        border-red-100
        overflow-hidden
      ">


        {/* HEADER */}

        <div className="
          p-6
          flex
          items-center
          justify-between
          border-b
        ">


          <div className="
            flex
            items-center
            gap-4
          ">


            {/* GAEL IMAGE */}

            <div className="
              w-20
              h-20
              rounded-full
              overflow-hidden
              bg-white
              flex-shrink-0
            ">

              <img
                src="/images/hero/gael.png"
                alt="Gael AI Travel Assistant"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

            </div>




            <div>

              <h1
  className="
    text-4xl
    font-medium
    text-red-600
    animate-gael
  "
>
  GAEL
</h1>


              <p className="
                text-gray-600
                text-sm
              ">
                Chingu AI Travel Assistant
              </p>


            </div>


          </div>





          {/* ONLINE STATUS */}

          <div className="
            flex
            items-center
            gap-2
            text-gray-600
            text-sm
          ">

            <span className="
              w-3
              h-3
              bg-green-500
              rounded-full
            ">
            </span>

            Online

          </div>


        </div>






        {/* CONTENT */}

        <div className="p-6">


          <div className="
            bg-red-50
            rounded-2xl
            p-5
            text-gray-700
          ">


            <p className="
              text-lg
              font-medium
              text-gray-900
            ">
              Hi! I'm Gael, your Chingu Travel Assistant.
            </p>



            <p className="
              mt-4
              leading-relaxed
            ">
              I can help you with tour packages,
              flights, hotels, visa assistance,
              and customized travel experiences.
            </p>


          </div>







          {/* MENU */}

          <div className="
            mt-6
            space-y-3
          ">


            {menu.map((item)=>{

              const Icon = item.icon;


              return (

                <button
                  key={item.title}

                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    px-6
                    py-4
                    rounded-xl
                    border
                    border-red-400
                    text-gray-700
                    font-normal
                    text-lg
                    hover:bg-red-600
                    hover:text-white
                    transition
                  "
                >


                  <div className="
                    flex
                    items-center
                    gap-3
                  ">


                    <Icon
                      size={25}
                      strokeWidth={2}
                      className="text-red-600"
                    />


                    <span>
                      {item.title}
                    </span>


                  </div>


                  <span>
                    ›
                  </span>


                </button>

              );

            })}


          </div>







          {/* INPUT */}

          <div className="
            mt-8
            flex
            gap-3
          ">


            <input

              value={message}

              onChange={(e)=>setMessage(e.target.value)}

              placeholder="Ask Gael anything..."

              className="
                flex-1
                border
                border-gray-200
                rounded-xl
                px-5
                py-4
                text-gray-700
                outline-none
                focus:border-red-600
              "

            />



            <button

              className="
                bg-red-600
                text-white
                px-6
                rounded-xl
                font-medium
                hover:bg-red-700
                transition
              "

            >

              Send

            </button>



          </div>





        </div>







        {/* FOOTER */}

        <div className="
          text-center
          py-5
          border-t
        ">


          <h3 className="
            text-red-600
            font-medium
          ">
            Chingu Travel and Tours
          </h3>


          <p className="
            text-gray-500
            text-sm
          ">
            Philippines & UAE Office
          </p>


        </div>



      </div>


      {/* ANIMATION */}

      <style jsx>{`

        @keyframes gaelFloat {
  0% {
    transform: rotateY(-15deg) translateY(0px);
  }

  50% {
    transform: rotateY(15deg) translateY(-4px);
  }

  100% {
    transform: rotateY(-15deg) translateY(0px);
  }
}

.animate-gael {
  animation: gaelFloat 4s ease-in-out infinite;
  transform-style: preserve-3d;
}


      `}</style>


    </main>

  );
}
