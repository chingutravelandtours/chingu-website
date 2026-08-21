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

  const [loading, setLoading] = useState(false);


  const [chat, setChat] = useState<
  {
    sender: "gael" | "user";
    text: string;
  }[]
>([
  {
    sender: "gael",
    text: "Hi! I'm Gael, your Chingu Travel Assistant."
  }
]);



  const menu = [

    {
      title: "Tour Packages",
      icon: Luggage,
      message:
        "I would like to know about your tour packages."
    },

    {
      title: "Flight Inquiry",
      icon: Plane,
      message:
        "I need help finding a flight."
    },

    {
      title: "Hotel Reservation",
      icon: Hotel,
      message:
        "I need help with hotel reservation."
    },

    {
      title: "Visa Assistance",
      icon: FileCheck,
      message:
        "I need visa assistance."
    },

    {
      title: "Talk to Chingu Team",
      icon: Headset,
      message:
        "I want to talk to Chingu Team."
    },

  ];





  async function sendMessage(customMessage?: string) {


    const userMessage = customMessage || message;


    if (!userMessage.trim()) return;



    setChat((prev)=>[
      ...prev,
      {
        sender:"user",
        text:userMessage
      }
    ]);



    setMessage("");

    setLoading(true);



    try {


      const response = await fetch("/api/chat",{

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({

          message:userMessage

        })

      });



      const data = await response.json();



      setChat((prev)=>[

        ...prev,

        {
          sender:"gael",
          text:
          data.reply ||
          "Thank you for contacting Chingu Travel and Tours."
        }

      ]);



    }

    catch(error){


      setChat((prev)=>[

        ...prev,

        {
          sender:"gael",
          text:
          "I'm sorry, our assistant is temporarily unavailable. Please contact Chingu Team."
        }

      ]);


    }


    finally{

      setLoading(false);

    }


  }








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


            <div className="
              w-32
              h-32
              rounded-full
              overflow-hidden
              bg-white
            ">


              <img

                src="/images/hero/gael.png"

                alt="Gael AI"

                className="
                  w-full
                  h-full
                  object-cover
                "

              />


            </div>





            <div>


              <h1 className="
                text-4xl
                font-medium
                text-red-600
                animate-pulse
              ">

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








        {/* CHAT AREA */}


        <div className="
          p-6
          space-y-4
          max-h-[420px]
          overflow-y-auto
        ">


          {chat.map((item,index)=>(


            <div

              key={index}

              className={

                item.sender === "user"

                ?

                "bg-red-600 text-white ml-10 rounded-2xl p-4"

                :

                "bg-red-50 text-gray-700 mr-10 rounded-2xl p-4"

              }

            >

              {item.text}


            </div>


          ))}




          {loading && (

            <div className="
              bg-red-50
              text-gray-600
              rounded-2xl
              p-4
              mr-10
            ">

              Gael is typing...

            </div>

          )}



        </div>









        {/* QUICK BUTTONS */}


        <div className="
          px-6
          space-y-3
        ">


          {menu.map((item)=>{


            const Icon=item.icon;


            return (

              <button

                key={item.title}

                onClick={()=>sendMessage(item.message)}

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
                    size={24}
                    className="text-red-600"
                  />


                  {item.title}


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
          p-6
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
              rounded-xl
              px-5
              py-4
              text-gray-700
              outline-none
              focus:border-red-600
            "

          />



          <button

            onClick={()=>sendMessage()}

            className="
              bg-red-600
              text-white
              px-6
              rounded-xl
              font-medium
            "

          >

            Send


          </button>


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


    </main>

  );

}
