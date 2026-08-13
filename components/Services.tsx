import Link from "next/link";

import {
  Plane,
  Hotel,
  FileCheck,
  Globe2,
  Ship,
} from "lucide-react";


const services = [
  {
    title: "Flight Booking",
    description:
      "Find convenient flights and competitive fares for your next journey.",
    icon: Plane,
    link: "/flight",
  },

  {
    title: "Hotel Booking",
    description:
      "Book comfortable stays for business trips, holidays, and family vacations.",
    icon: Hotel,
    link: "/hotel",
  },

  {
    title: "Visa Assistance",
    description:
      "Get guidance and assistance with your visa requirements and travel documents.",
    icon: FileCheck,
    link: "/visa",
  },

  {
    title: "Tour Packages",
    description:
      "Discover carefully selected tour packages and unforgettable travel experiences.",
    icon: Globe2,
    link: "/tour-packages",
  },

  {
    title: "Cruise Packages",
    description:
      "Experience unforgettable cruise journeys with carefully selected ocean travel packages.",
    icon: Ship,
    link: "/cruise",
  },
];


export default function Services() {
  return (
    <section className="bg-white py-20 px-6">

      <div className="max-w-7xl mx-auto">


        {/* HEADER */}

        <div className="text-center mb-12">

          <p className="
            text-red-600
            font-semibold
            uppercase
            tracking-widest
          ">
            What We Offer
          </p>


          <h2 className="
            mt-2
            text-4xl
            font-bold
            text-gray-900
          ">
            Our Services
          </h2>


          <p className="
            mt-4
            max-w-2xl
            mx-auto
            text-gray-600
          ">
            From flights and hotels to visa assistance, tour packages, and cruises,
            CHINGU 
            Travel and Tours is here to make your journey easier.
          </p>

        </div>




        {/* SERVICE CARDS */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-5
          gap-6
        ">


          {services.map((service) => {

            const Icon = service.icon;


            return (

              <div
                key={service.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-gray-100
                  bg-white
                  p-7
                  shadow-md
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  flex
                  flex-col
                  h-full
                "
              >


                {/* ICON */}

                <div className="
                  w-14
                  h-14
                  rounded-xl
                  bg-red-50
                  flex
                  items-center
                  justify-center
                  group-hover:bg-red-600
                  transition-colors
                  duration-300
                ">

                  <Icon
                    size={28}
                    className="
                      text-red-600
                      group-hover:text-white
                      transition-colors
                      duration-300
                    "
                  />

                </div>




                {/* TITLE */}

                <h3 className="
                  mt-6
                  text-xl
                  font-bold
                  text-gray-900
                ">
                  {service.title}
                </h3>




                {/* DESCRIPTION */}

                <p className="
                  mt-3
                  text-gray-600
                  leading-relaxed
                  h-24
                ">
                  {service.description}
                </p>




                {/* LEARN MORE */}

                <Link
                  href={service.link}
                  className="
                    mt-auto
                    pt-5
                    text-red-600
                    font-semibold
                    hover:text-red-700
                    transition
                  "
                >
                  Learn More →
                </Link>



              </div>

            );

          })}


        </div>


      </div>

    </section>
  );
}
