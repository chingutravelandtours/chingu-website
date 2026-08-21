"use client";

import { useState } from "react";
import Link from "next/link";

export default function GaelWidget(){

const [open,setOpen]=useState(false);


return (

<>

<button

onClick={()=>setOpen(!open)}

className="
fixed
bottom-6
right-6
z-50
w-16
h-16
rounded-full
bg-red-600
shadow-xl
overflow-hidden
border-4
border-white
"

>

<img

src="/images/hero/gael.png"

className="
w-full
h-full
object-cover
"

/>

</button>




{
open && (

<div className="
fixed
bottom-24
right-6
z-50
w-80
bg-white
rounded-3xl
shadow-xl
border
border-red-100
overflow-hidden
">


<div className="
bg-red-600
text-white
p-4
">

<h3 className="
text-xl
">

GAEL

</h3>


<p className="
text-sm
">

Chingu AI Travel Assistant

</p>

</div>



<div className="
p-5
text-gray-700
">

<p>

Hi! I'm Gael. How can I help you with your travel plans?

</p>



<Link

href="/gael-ai"

className="
block
mt-4
bg-red-600
text-white
text-center
py-3
rounded-xl
"

>

Open Full Chat

</Link>


</div>



</div>

)

}


</>

);

}
