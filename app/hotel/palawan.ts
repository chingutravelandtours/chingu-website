Pasted text.txt
Document
anong trabaho ng gumagawa nito
ano lalagay ko sa caption
ito yung website ko gawan mo ako ng picture na pwede ko lagay sa post ko
Edit
pwede mo ba itong ayusin kasi yung icon may barko at airplane hotel lang sana ito kahit wala ng mga icon
Edit

Para sa CHINGU Travel and Tours – Palawan Hotel Listing, puwede mong ilagay ang mga sample hotels/resorts na ito:

export const palawanHotels = [
  {
    name: "El Nido Resorts Pangulasian Island",
    location: "El Nido, Palawan",
    price: "$500 / Night",
    image: "/hotels/palawan/pangulasian.jpg",
    rating: "★★★★★",
    room: "Island Villa",
  },


  {
    name: "Lagen Island Resort",
    location: "El Nido, Palawan",
    price: "$450 / Night",
    image: "/hotels/palawan/lagen.jpg",
    rating: "★★★★★",
    room: "Water Cottage",
  },


  {
    name: "Miniloc Island Resort",
    location: "El Nido, Palawan",
    price: "$400 / Night",
    image: "/hotels/palawan/miniloc.jpg",
    rating: "★★★★★",
    room: "Deluxe Room",
  },


  {
    name: "Two Seasons Coron Island Resort",
    location: "Coron, Palawan",
    price: "$300 / Night",
    image: "/hotels/palawan/two-seasons.jpg",
    rating: "★★★★★",
    room: "Water Villa",
  },


  {
    name: "Club Paradise Palawan",
    location: "Coron, Palawan",
    price: "$250 / Night",
    image: "/hotels/palawan/club-paradise.jpg",
    rating: "★★★★★",
    room: "Beachfront Room",
  },


  {
    name: "Princesa Garden Island Resort",
    location: "Puerto Princesa, Palawan",
    price: "$150 / Night",
    image: "/hotels/palawan/princesa-garden.jpg",
    rating: "★★★★☆",
    room: "Garden Villa",
  },


  {
    name: "Astoria Palawan",
    location: "Puerto Princesa, Palawan",
    price: "$120 / Night",
    image: "/hotels/palawan/astoria.jpg",
    rating: "★★★★☆",
    room: "Family Room",
  },


  {
    name: "Coron Westown Resort",
    location: "Coron, Palawan",
    price: "$100 / Night",
    image: "/hotels/palawan/coron-westown.jpg",
    rating: "★★★★☆",
    room: "Superior Room",
  },
];

Folder ng pictures:

public
└── hotels
    └── palawan
        ├── pangulasian.jpg
        ├── lagen.jpg
        ├── miniloc.jpg
        ├── two-seasons.jpg
        ├── club-paradise.jpg
        ├── princesa-garden.jpg
        ├── astoria.jpg
        └── coron-westown.jpg

Para sa booking website mo, magandang hatiin ang Palawan sa:

El Nido Hotels
Coron Hotels
Puerto Princesa Hotels
San Vicente / Port Barton Hotels

Mas magiging professional ang dating kaysa isang malaking listahan lang.

paano gagana ang search bar sa hote

Para gumana ang search bar ng hotel booking, kailangan may 3 bagay:

Hotel database/list (halimbawa palawanHotels)
User input (kung ano ang hinahanap niya: Palawan, El Nido, Coron)
Filter function (hahanapin ng code ang tugma at ipapakita lang ang resulta)

Halimbawa:

1. Hotel data

data/hotels/palawan.ts

export const palawanHotels = [
  {
    name: "El Nido Resorts Pangulasian Island",
    location: "El Nido, Palawan",
    price: "$500 / Night",
    image: "/hotels/palawan/pangulasian.jpg",
  },


  {
    name: "Two Seasons Coron Island Resort",
    location: "Coron, Palawan",
    price: "$300 / Night",
    image: "/hotels/palawan/two-seasons.jpg",
  },


  {
    name: "Astoria Palawan",
    location: "Puerto Princesa, Palawan",
    price: "$120 / Night",
    image: "/hotels/palawan/astoria.jpg",
  },
];
2. Search input

Sa hotel page:

const [destination, setDestination] = useState("");
const [searched, setSearched] = useState(false);

Input:

<input
  type="text"
  placeholder="Where do you want to stay?"
  value={destination}
  onChange={(e)=>setDestination(e.target.value)}
  className="border rounded-xl px-5 py-4 w-full"
/>
3. Search button
<button
onClick={()=>setSearched(true)}
className="bg-red-600 text-white px-8 py-4 rounded-xl"
>
Search Hotels
</button>
4. I-filter ang hotels

Kapag nag-search ng:

Palawan

Makikita:

El Nido Resorts Pangulasian Island
Two Seasons Coron Island Resort
Astoria Palawan

Code:

const results = palawanHotels.filter((hotel)=>
  hotel.location
  .toLowerCase()
  .includes(destination.toLowerCase())
);
5. I-display ang result
{searched && results.map((hotel,index)=>(


<div key={index}>


<img
src={hotel.image}
className="w-full h-52 object-cover"
/>


<h2>
{hotel.name}
</h2>


<p>
{hotel.location}
</p>


<p>
{hotel.price}
</p>


</div>


))}

Ang magiging flow ng customer:

User opens website


↓
Hotel Booking page


↓
Type:
"Palawan"


↓
Click Search Hotels


↓
System searches database


↓
Lalabas:
El Nido Hotels
Coron Hotels
Puerto Princesa Hotels

Para sa CHINGU Travel and Tours, ang next level na setup ay:

Destination
   |
   ├── Philippines
   |       ├── Palawan
   |       ├── Boracay
   |       └── Cebu
   |
   └── International
           ├── China
           ├── Japan
           └── Korea

Kaya kapag nag-type ang customer ng "Palawan", automatic lalabas lahat ng Palawan hotels.

pahingi ng buong code na ilalagay sa palawan.tx

Kung gagawa ka ng file:

data/hotels/palawan.ts

Ito ang buong code. Ito ay hotel data lamang (hindi page), kaya ito ang babasahin ng search system mo kapag naghanap ang user ng Palawan.

export const palawanHotels = [
  {
    id: 1,
    name: "El Nido Resorts Pangulasian Island",
    location: "El Nido, Palawan",
    country: "Philippines",
    price: "$500 / Night",
    image: "/hotels/palawan/pangulasian.jpg",
    rating: 5,
    room: "Island Villa",
    amenities: [
      "Free Breakfast",
      "Beach Access",
      "Swimming Pool",
      "Airport Transfer",
    ],
  },




  {
    id: 2,
    name: "Lagen Island Resort",
    location: "El Nido, Palawan",
    country: "Philippines",
    price: "$450 / Night",
    image: "/hotels/palawan/lagen.jpg",
    rating: 5,
    room: "Water Cottage",
    amenities: [
      "Breakfast Included",
      "Private Beach",
      "Kayaking",
      "Restaurant",
    ],
  },




  {
    id: 3,
    name: "Miniloc Island Resort",
    location: "El Nido, Palawan",
    country: "Philippines",
    price: "$400 / Night",
    image: "/hotels/palawan/miniloc.jpg",
    rating: 5,
    room: "Deluxe Room",
    amenities: [
      "Island Tour",
      "Beach Activities",
      "Pool",
      "Free WiFi",
    ],
  },




  {
    id: 4,
    name: "Two Seasons Coron Island Resort",
    location: "Coron, Palawan",
    country: "Philippines",
    price: "$300 / Night",
    image: "/hotels/palawan/two-seasons.jpg",
    rating: 5,
    room: "Water Villa",
    amenities: [
      "Private Island",
      "Beach Front",
      "Spa",
      "Restaurant",
    ],
  },




  {
    id: 5,
    name: "Club Paradise Palawan",
    location: "Coron, Palawan",
    country: "Philippines",
    price: "$250 / Night",
    image: "/hotels/palawan/club-paradise.jpg",
    rating: 5,
    room: "Beachfront Room",
    amenities: [
      "Private Beach",
      "Diving",
      "Pool",
      "Breakfast",
    ],

Folder ng images:

public
└── hotels
    └── palawan
        ├── pangulasian.jpg
        ├── lagen.jpg
        ├── miniloc.jpg
        ├── two-seasons.jpg
        ├── club-paradise.jpg
        ├── princesa-garden.jpg
        ├── astoria.jpg
        └── coron-westown.jpg

Pagkatapos sa hotel/page.jsx mo, i-import mo:

import { palawanHotels } from "@/data/hotels/palawan";

Tapos puwede na siyang gamitin ng search bar para hanapin ang:

Palawan
El Nido
Coron
Puerto Princesa

Mas scalable ito kapag magdadagdag ka na ng:

data/hotels/
├── palawan.ts
├── boracay.ts
├── cebu.ts
├── japan.ts
└── china.ts

Hindi mo na kailangang baguhin ang main hotel page kapag dumami ang destinations.
