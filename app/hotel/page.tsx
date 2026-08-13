"use client";

export default function HotelPage() {


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
            Hotel Booking Inquiry
          </h1>



          <p className="
            mt-4
            text-gray-600
          ">
            Find the perfect accommodation for your next journey.
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






          {/* CUSTOMER DETAILS */}


          <div className="
            grid
            md:grid-cols-2
            gap-6
          ">



            <div>

              <label className={labelStyle}>
                Guest Name
              </label>


              <input

                type="text"

                placeholder="Enter guest name"

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







            <div>

              <label className={labelStyle}>
                Number of Guests
              </label>


              <input

                type="number"

                placeholder="Example: 2"

                className={inputStyle}

              />

            </div>



          </div>









          {/* HOTEL DETAILS */}



          <div className="
            grid
            md:grid-cols-2
            gap-6
            mt-6
          ">




            <div>


              <label className={labelStyle}>
                Destination / City
              </label>


              <input

                type="text"

                placeholder="Example: Dubai, Japan, Korea"

                className={inputStyle}

              />


            </div>







            <div>


              <label className={labelStyle}>
                Preferred Hotel (Optional)
              </label>


              <input

                type="text"

                placeholder="Hotel name"

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
                Check-in Date
              </label>


              <input

                type="date"

                className={inputStyle}

              />


            </div>






            <div>


              <label className={labelStyle}>
                Check-out Date
              </label>


              <input

                type="date"

                className={inputStyle}

              />


            </div>



          </div>









          {/* ROOM TYPE */}



          <div className="mt-6">


            <label className={labelStyle}>
              Room Type
            </label>



            <select className={inputStyle}>


              <option>
                Select Room Type
              </option>


              <option>
                Single Room
              </option>


              <option>
                Double Room
              </option>


              <option>
                Family Room
              </option>


              <option>
                Suite Room
              </option>



            </select>



          </div>









          {/* REQUEST */}



          <div className="mt-6">


            <label className={labelStyle}>
              Special Request
            </label>



            <textarea

              placeholder="Breakfast, airport transfer, view preference, etc."

              className="
                w-full
                h-32
                p-4
                rounded-xl
                border
                border-gray-300
                text-black
                placeholder:text-gray-500
                focus:outline-none
                focus:border-red-600
              "

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

            Request Hotel Quote →

          </button>





        </div>




      </div>



    </main>


  );

}
