"use client";

const hotels = [
  {
    name: "Atlantis The Palm",
    location: "Dubai, UAE",
    image: "/images/hotels/atlantis.jpg",
    rating: "★★★★★",
    price: "From AED 1,200 / night",
    amenities: "Pool • Spa • Breakfast • Beach Access",
  },

  {
    name: "Rove Downtown Dubai",
    location: "Dubai, UAE",
    image: "/images/hotels/rove.jpg",
    rating: "★★★★☆",
    price: "From AED 450 / night",
    amenities: "WiFi • Restaurant • City View",
  },

  {
    name: "Tokyo Grand Hotel",
    location: "Tokyo, Japan",
    image: "/images/hotels/tokyo.jpg",
    rating: "★★★★★",
    price: "From AED 600 / night",
    amenities: "Breakfast • WiFi • Near Station",
  },

  {
    name: "Marina Bay Hotel",
    location: "Singapore",
    image: "/images/hotels/singapore.jpg",
    rating: "★★★★★",
    price: "From AED 800 / night",
    amenities: "Pool • Gym • Restaurant",
  },

  {
    name: "Boracay Beach Resort",
    location: "Philippines",
    image: "/images/hotels/boracay.jpg",
    rating: "★★★★☆",
    price: "From AED 300 / night",
    amenities: "Beach Front • Breakfast • Pool",
  },

  {
    name: "Seoul City Hotel",
    location: "South Korea",
    image: "/images/hotels/seoul.jpg",
    rating: "★★★★★",
    price: "From AED 500 / night",
    amenities: "WiFi • Breakfast • City Center",
  },
];


export default function HotelsPage() {


  return (

    <main className="min-h-screen bg-gray-50 py-16 px-5">


      <div className="max-w-7xl mx-auto">



        {/* HEADER */}

        <div className="text-center mb-12">

          <p className="
            text-red-600
            uppercase
            tracking-widest
            font-semibold
          ">
            CHINGU Travel and Tours
          </p>


          <h1 className="
            text-5xl
            font-bold
            text-gray-900
            mt-3
          ">
            Featured Hotels
          </h1>


          <p className="
            text-gray-600
            mt-4
          ">
            Discover comfortable stays selected for your next adventure.
          </p>


        </div>






        {/* HOTEL CARDS */}


        <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">


          {hotels.map((hotel)=>(


            <div
              key={hotel.name}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-md
                hover:shadow-xl
                transition
              "
            >



              <img

                src={hotel.image}

                alt={hotel.name}

                className="
                  w-full
                  h-64
                  object-cover
                "

              />




              <div className="p-6">



                <h2 className="
                  text-2xl
                  font-bold
                  text-gray-900
                ">
                  {hotel.name}
                </h2>




                <p className="
                  text-gray-600
                  mt-2
                ">
                  {hotel.location}
                </p>




                <p className="
                  text-red-600
                  mt-3
                  font-semibold
                ">
                  {hotel.rating}
                </p>





                <p className="
                  mt-3
                  font-bold
                  text-gray-900
                ">
                  {hotel.price}
                </p>





                <p className="
                  mt-3
                  text-gray-600
                  text-sm
                ">
                  {hotel.amenities}
                </p>





                <button
                  className="
                    mt-6
                    w-full
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    py-3
                    rounded-xl
                    font-semibold
                  "
                >

                  View Details →

                </button>



              </div>



            </div>


          ))}


        </div>


      </div>


    </main>

  );
}
