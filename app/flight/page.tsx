"use client";

import { useState } from "react";

export default function FlightPage() {

  const [tripType, setTripType] = useState("Round Trip");


  const inputStyle =
    "w-full p-4 rounded-xl border border-gray-300 text-black placeholder:text-gray-500 bg-white focus:outline-none focus:border-red-600";


  const labelStyle =
    "block mb-2 font-semibold text-gray-900";


  return (

    <main className="min-h-screen bg-gray-50 py-16 px-5">


      <div className="max-w-5xl mx-auto">



        {/* HEADER */}

        <div className="text-center mb-12">


          <p className="
            text-red-600
            uppercase
            tracking-widest
            font-semibold
            text-sm
          ">
            CHINGU Travel and Tours
          </p>



          <h1 className="
            mt-3
            text-5xl
            font-bold
            text-gray-900
          ">
            Flight Booking Inquiry
          </h1>



          <p className="
            mt-4
            text-gray-600
          ">
            Request your flight quotation and let us find the best options for your journey.
          </p>


        </div>





        {/* FORM CARD */}


        <div className="
          bg-white
          rounded-3xl
          shadow-lg
          border
          border-gray-200
          p-8
        ">




          {/* NAME DETAILS */}


          <div className="
            grid
            md:grid-cols-2
            gap-6
          ">


            <div>

              <label className={labelStyle}>
                Agent Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className={inputStyle}
              />

            </div>




            <div>

              <label className={labelStyle}>
                Agency Name
              </label>

              <input
                type="text"
                placeholder="CHINGU Travel and Tours"
                className={inputStyle}
              />

            </div>





            <div>

              <label className={labelStyle}>
                Email
              </label>

              <input
                type="email"
                placeholder="Enter email address"
                className={inputStyle}
              />

            </div>





            <div>

              <label className={labelStyle}>
                Contact Number
              </label>

              <input
                type="text"
                placeholder="Enter phone number"
                className={inputStyle}
              />

            </div>


          </div>







          {/* TRIP TYPE */}


          <div className="
            flex
            gap-3
            mt-8
          ">


            {
              [
                "Round Trip",
                "One Way",
                "Multi City"

              ].map((type)=>(


                <button

                  key={type}

                  onClick={()=>setTripType(type)}

                  className={`
                    px-6
                    py-3
                    rounded-full
                    border
                    font-semibold
                    transition

                    ${
                      tripType === type

                      ? 
                      "bg-red-600 text-white border-red-600"

                      :

                      "bg-white text-black border-gray-300"
                    }
                  `}

                >

                  {type}

                </button>


              ))
            }


          </div>









          {/* ROUTE */}



          <div className="
            grid
            md:grid-cols-2
            gap-6
            mt-8
          ">



            <div>

              <label className={labelStyle}>
                Departure
              </label>


              <input

                type="text"

                placeholder="Example: Manila"

                className={inputStyle}

              />


            </div>





            <div>


              <label className={labelStyle}>
                Destination
              </label>


              <input

                type="text"

                placeholder="Example: Dubai"

                className={inputStyle}

              />


            </div>


          </div>









          {/* DATE */}



          <div className="
            grid
            md:grid-cols-2
            gap-6
            mt-6
          ">


            <div>


              <label className={labelStyle}>
                Departure Date
              </label>


              <input

                type="date"

                className={inputStyle}

              />


            </div>





            <div>


              <label className={labelStyle}>
                Return Date
              </label>


              <input

                type="date"

                className={inputStyle}

              />


            </div>


          </div>









          {/* PASSENGERS */}



          <div className="
            grid
            md:grid-cols-2
            gap-6
            mt-6
          ">



            <div>


              <label className={labelStyle}>
                Number of Passengers
              </label>


              <input

                type="number"

                placeholder="Example: 2"

                className={inputStyle}

              />


            </div>






            <div>


              <label className={labelStyle}>
                Cabin Class
              </label>


              <select className={inputStyle}>


                <option>
                  Select Cabin
                </option>


                <option>
                  Economy
                </option>


                <option>
                  Premium Economy
                </option>


                <option>
                  Business Class
                </option>


                <option>
                  First Class
                </option>


              </select>


            </div>


          </div>









          {/* MESSAGE */}



          <div className="mt-6">


            <label className={labelStyle}>
              Comments / Special Request
            </label>



            <textarea

              placeholder="Write your request..."

              className="
                w-full
                h-32
                p-4
                rounded-xl
                border
                border-gray-300
                text-black
                placeholder:text-gray-500
                bg-white
                focus:outline-none
                focus:border-red-600
              "

            />


          </div>









          {/* AIRLINE */}



          <div className="mt-6">


            <label className={labelStyle}>
              Preferred Airlines (Optional)
            </label>



            <input

              type="text"

              placeholder="Example: Emirates, Qatar Airways"

              className={inputStyle}

            />


          </div>








          {/* BUTTON */}



          <button

            className="
              mt-8
              w-full
              py-4
              rounded-xl
              bg-red-600
              hover:bg-red-700
              text-white
              font-bold
              transition
            "

          >

            Request Flight Quote →

          </button>





        </div>



      </div>


    </main>

  );

}
