"use client";

import { useState } from "react";


export default function HotelBooking() {


  const [searched, setSearched] = useState(false);
  const [destination, setDestination] = useState("");


  const hotels = [
    {
      name: "Grand Hyatt Shanghai",
      location: "Shanghai, China",
      price: "$180 / Night",
      image: "/hotels/shanghai.jpg",
    },

    {
      name: "InterContinental Beijing",
      location: "Beijing, China",
      price: "$150 / Night",
      image: "/hotels/beijing.jpg",
    },

    {
      name: "Wyndham Chongqing",
      location: "Chongqing, China",
      price: "$120 / Night",
      image: "/hotels/chongqing.jpg",
    },
  ];



  return (

    <main className="
      min-h-screen
      bg-gray-50
      px-5
      py-16
    ">


      <div className="
        max-w-6xl
        mx-auto
      ">


        {/* HEADER */}

        <div className="text-center">


          <p className="
            text-red-600
            font-semibold
            uppercase
            tracking-[4px]
            text-sm
          ">
            CHINGU TRAVEL AND TOURS
          </p>


          <h1 className="
            mt-4
            text-5xl
            font-bold
            text-gray-900
          ">
            Hotel Booking
          </h1>


          <p className="
            mt-4
            text-gray-500
            text-lg
          ">
            Find the perfect stay for your next journey.
          </p>


        </div>





        {/* SEARCH CARD */}


        <div className="
          mt-12
          bg-white
          rounded-3xl
          shadow-md
          border
          border-gray-100
          p-8
        ">


          <div className="
            grid
            grid-cols-1
            md:grid-cols-4
            gap-6
            items-end
          ">


            {/* DESTINATION */}

            <div>

              <label className="
                font-bold
                text-gray-900
              ">
                Destination
              </label>


              <input
                type="text"
                value={destination}
                onChange={(e)=>setDestination(e.target.value)}
                placeholder="City, hotel or property"
                className="
                  mt-3
                  w-full
                  bg-gray-50
                  rounded-xl
                  px-5
                  py-4
                  border
                  border-gray-100
                  outline-none
                "
              />

            </div>





            {/* DATE */}

            <div>

              <label className="
                font-bold
                text-gray-900
              ">
                Check-in / Check-out
              </label>


              <input
                type="text"
                placeholder="Select dates"
                className="
                  mt-3
                  w-full
                  bg-gray-50
                  rounded-xl
                  px-5
                  py-4
                  border
                  border-gray-100
                  outline-none
                "
              />

            </div>





            {/* GUEST */}

            <div>

              <label className="
                font-bold
                text-gray-900
              ">
                Guests
              </label>


              <input
                type="number"
                placeholder="Add travelers"
                className="
                  mt-3
                  w-full
                  bg-gray-50
                  rounded-xl
                  px-5
                  py-4
                  border
                  border-gray-100
                  outline-none
                "
              />

            </div>





            {/* BUTTON */}

            <button
              onClick={()=>setSearched(true)}
              className="
                bg-red-600
                hover:bg-red-700
                text-white
                font-semibold
                rounded-full
                px-8
                py-4
                shadow-md
              "
            >
              Search Hotels
            </button>



          </div>


        </div>







        {/* HOTEL RESULT ONLY AFTER SEARCH */}


        {searched && (

          <div className="mt-12">


            <h2 className="
              text-3xl
              font-bold
              text-gray-900
            ">
              Hotel Results
            </h2>




            <div className="
              mt-8
              grid
              grid-cols-1
              md:grid-cols-3
              gap-6
            ">



              {hotels
              .filter((hotel)=>
                hotel.location
                .toLowerCase()
                .includes(destination.toLowerCase())
                ||
                destination === ""
              )
              .map((hotel,index)=>(


                <div
                  key={index}
                  className="
                    bg-white
                    rounded-2xl
                    overflow-hidden
                    shadow-md
                    border
                    border-gray-100
                  "
                >


                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="
                      w-full
                      h-56
                      object-cover
                    "
                  />



                  <div className="p-6">


                    <h3 className="
                      text-xl
                      font-bold
                      text-gray-900
                    ">
                      {hotel.name}
                    </h3>


                    <p className="
                      mt-2
                      text-gray-500
                    ">
                      {hotel.location}
                    </p>


                    <p className="
                      mt-3
                      text-red-600
                      font-bold
                    ">
                      {hotel.price}
                    </p>



                    <button
                      className="
                        mt-5
                        w-full
                        bg-red-600
                        text-white
                        py-3
                        rounded-xl
                        font-semibold
                      "
                    >
                      Book Now
                    </button>



                  </div>


                </div>


              ))}



            </div>


          </div>

        )}




      </div>


    </main>

  );

}
