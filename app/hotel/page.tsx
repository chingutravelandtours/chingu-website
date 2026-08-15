Pasted text.txt
Document
anong trabaho ng gumagawa nito
ano lalagay ko sa caption
ito yung website ko gawan mo ako ng picture na pwede ko lagay sa post ko
Edit
pwede mo ba itong ayusin kasi yung icon may barko at airplane hotel lang sana ito kahit wala ng mga icon
Edit

Depende kung ano ang ilalagay mo sa palawan.tsx.

Kung ang ibig mong gawin ay maglagay ng listahan ng hotels para sa Palawan, tama ang idea na gumawa ng hiwalay na file, pero mas magandang pangalan ay:

palawan.ts

o

palawanHotels.ts

dahil data lang siya, hindi isang page.

Example:

data
 └── hotels
      ├── palawan.ts
      ├── boracay.ts
      └── cebu.ts

Sa palawan.ts:

export const palawanHotels = [
  {
    name: "El Nido Beach Resort",
    location: "Palawan, Philippines",
    price: "$150 / Night",
    image: "/hotels/palawan/elnido.jpg",
  },


  {
    name: "Coron Island Resort",
    location: "Palawan, Philippines",
    price: "$120 / Night",
    image: "/hotels/palawan/coron.jpg",
  },


];

Tapos sa page.jsx mo:

import { palawanHotels } from "@/data/hotels/palawan";

Pero kung gusto mo gumawa ng sariling page na mabubuksan sa browser, halimbawa:

/hotel/palawan

ang tamang structure ay:

app
 └── hotel
      └── palawan
           └── page.tsx

Hindi palawan.tsx lang.

So:

Hotel list/data → palawan.ts ✅
Website page ng Palawan hotels → app/hotel/palawan/page.tsx ✅

Para sa CHINGU Travel and Tours booking system, mas irerekomenda ko:

data/hotels/palawan.ts

para madali kang magdagdag ng Boracay, Cebu, Japan, China, etc.

pahingi ng code

Kung gagawa ka ng Palawan hotel data file para sa CHINGU Travel and Tours, ito ang code.

Gumawa ng file:

data/hotels/palawan.ts

Ilagay ito:

export const palawanHotels = [
  {
    name: "El Nido Beach Resort",
    location: "El Nido, Palawan",
    country: "Philippines",
    price: "$150 / Night",
    image: "/hotels/palawan/elnido.jpg",
    rating: "★★★★★",
    room: "Deluxe Room",
  },


  {
    name: "Coron Island Resort",
    location: "Coron, Palawan",
    country: "Philippines",
    price: "$120 / Night",
    image: "/hotels/palawan/coron.jpg",
    rating: "★★★★★",
    room: "Premium Villa",
  },


  {
    name: "Puerto Princesa Hotel",
    location: "Puerto Princesa, Palawan",
    country: "Philippines",
    price: "$80 / Night",
    image: "/hotels/palawan/puerto-princesa.jpg",
    rating: "★★★★☆",
    room: "Standard Room",
  },
];

Folder ng pictures:

public
└── hotels
    └── palawan
        ├── elnido.jpg
        ├── coron.jpg
        └── puerto-princesa.jpg

Tapos gamitin mo sa app/hotel/page.jsx:

Sa taas:

import { palawanHotels } from "@/data/hotels/palawan";

Palitan yung:

const hotels = [
...
];

ng:

const hotels = palawanHotels;

Ngayon kapag nagdagdag ka ng ibang destination:

data
└── hotels
    ├── palawan.ts
    ├── boracay.ts
    ├── cebu.ts
    ├── japan.ts
    └── china.ts

Mas magiging parang totoong hotel booking database ang structure ng CHINGU website mo.

gawan mo ako ng code sa hotels na walang cards sa baba

Kung ang gusto mo ay Hotel Booking page lang muna at walang hotel cards/list sa baba, ito ang mas malinis na code. Lalabas lang ang search interface, tapos saka mo na ikakabit ang hotel results page kapag ready na.

app/hotel/page.jsx

"use client";


export default function HotelBooking() {


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
            md:text-6xl
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










        {/* SEARCH BOX */}


        <div className="
          mt-12
          bg-white
          rounded-3xl

Result:

CHINGU TRAVEL AND TOURS


Hotel Booking
Find the perfect stay for your next journey.




--------------------------------


Destination
[ City, hotel or property ]


Check-in / Check-out
[ Select dates ]


Guests
[ Add travelers ]


       Search Hotels


--------------------------------

Walang lalabas na hotel cards sa baba. Kapag ready ka na, saka natin gagawin ang:

/hotel/results
Palawan hotels
Boracay hotels
China hotels
booking details page

Mas malinis ito para sa unang landing page.
