"use client";

export default function TourPackagesPage() {


  const packages = [
    {
      duration: "5D4N",
      slots: "1 slots",
      name: "Discover Osaka + Kyoto + Nara",
      destination: "Japan (3 in 1)",
      departure: "Sep. 26–30, 2026",
      city: "MNL",
      price: "₱56,637",
      deposit: "₱18,900"
    },

    {
      duration: "5D4N",
      slots: "4 slots",
      name: "Osaka + Kyoto + Nara",
      destination: "Japan (3 in 1)",
      departure: "Oct. 9–13, 2026",
      city: "MNL",
      price: "₱56,637",
      deposit: "₱18,900"
    },

    {
      duration: "5D4N",
      slots: "2 slots",
      name: "Discover Osaka + Kyoto + Nara",
      destination: "Japan (3 in 1)",
      departure: "Oct. 15–19, 2026",
      city: "MNL",
      price: "₱56,637",
      deposit: "₱18,900"
    },

    {
      duration: "5D4N",
      slots: "27 slots",
      name: "Japan Osaka Nara Kyoto",
      destination: "Japan",
      departure: "Nov. 19–23, 2026",
      city: "CEB",
      price: "₱56,637",
      deposit: "₱18,900"
    },

    {
      duration: "8D7N",
      slots: "30 slots",
      name: "Cebu Tokyo Hakone",
      destination: "Japan",
      departure: "Dec. 10–17, 2026",
      city: "CEB",
      price: "₱86,637",
      deposit: "₱28,900"
    }
  ];



  return (

    <main className="
    min-h-screen
    bg-gray-100
    p-8
    ">


      <div className="
      max-w-7xl
      mx-auto
      ">



        {/* HEADER */}

        <div className="
        bg-white
        rounded-2xl
        p-8
        shadow-sm
        flex
        justify-between
        items-center
        ">


          <div>

            <h1 className="
            text-4xl
            font-bold
            text-red-600
            ">
              Tour Packages
            </h1>


            <p className="
            text-gray-500
            mt-2
            ">
              Manage your travel packages, departure dates and rates.
            </p>

          </div>



          <button className="
          bg-red-600
          text-white
          px-6
          py-3
          rounded-xl
          ">
            + Add New Package
          </button>


        </div>






        {/* STATS */}

        <div className="
        grid
        grid-cols-1
        md:grid-cols-4
        gap-5
        mt-6
        ">


          {[
            ["Total Packages","12"],
            ["Upcoming Departures","24"],
            ["Total Slots Available","106"],
            ["Active Packages","12"]

          ].map((item,index)=>(

            <div
            key={index}
            className="
            bg-white
            rounded-xl
            p-6
            shadow-sm
            "
            >

              <p className="
              text-gray-500
              ">
                {item[0]}
              </p>


              <h2 className="
              text-3xl
              font-bold
              text-red-600
              mt-2
              ">
                {item[1]}
              </h2>

            </div>

          ))}



        </div>







        {/* SEARCH */}

        <div className="
        bg-white
        mt-6
        rounded-xl
        p-5
        shadow-sm
        ">


          <input

          placeholder="Search packages..."

          className="
          border
          rounded-xl
          px-5
          py-3
          w-full
          outline-none
          "

          />


        </div>







        {/* PACKAGES */}


        <div className="
        space-y-4
        mt-6
        ">



        {
          packages.map((item,index)=>(


            <div

            key={index}

            className="
            bg-white
            rounded-2xl
            shadow-sm
            p-6
            flex
            items-center
            justify-between
            "

            >



              <div className="
              flex
              gap-5
              items-center
              ">


                <div>

                  <span className="
                  bg-red-100
                  text-red-600
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-bold
                  ">
                    {item.duration}
                  </span>


                  <p className="
                  text-green-600
                  text-sm
                  mt-3
                  ">
                    {item.slots}
                  </p>


                </div>




                <div>


                  <h2 className="
                  text-xl
                  font-bold
                  ">
                    {item.name}
                  </h2>


                  <p className="
                  text-gray-500
                  ">
                    {item.destination}
                  </p>


                </div>




              </div>






              <div className="
              grid
              grid-cols-4
              gap-10
              text-sm
              ">


                <div>
                  <p className="text-gray-400">
                    DEPARTURE
                  </p>
                  <b className="text-red-600">
                    {item.departure}
                  </b>
                </div>



                <div>
                  <p className="text-gray-400">
                    CITY
                  </p>
                  <b>
                    {item.city}
                  </b>
                </div>



                <div>
                  <p className="text-gray-400">
                    PACKAGE FROM
                  </p>

                  <b className="text-red-600">
                    {item.price}
                  </b>

                </div>



                <div>
                  <p className="text-gray-400">
                    DEPOSIT
                  </p>

                  <b>
                    {item.deposit}
                  </b>

                </div>


              </div>






              <div className="
              flex
              flex-col
              gap-2
              ">


                <button className="
                border
                border-red-600
                text-red-600
                px-5
                py-2
                rounded-lg
                ">
                  ✏ Edit
                </button>


                <button className="
                bg-red-600
                text-white
                px-5
                py-2
                rounded-lg
                ">
                  🗑 Delete
                </button>


              </div>



            </div>


          ))
        }


        </div>



      </div>


    </main>

  );

}
