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


const [message,setMessage] = useState("");

const [chat,setChat] = useState([
{
role:"gael",
text:"Hi! I'm Gael, your Chingu Travel Assistant.\n\nI can help you with tour packages, flights, hotels, visa assistance, and customized travel experiences."
}
]);


const [loading,setLoading] = useState(false);



const menu=[
{
title:"Tour Packages",
icon:Luggage
},
{
title:"Flight Inquiry",
icon:Plane
},
{
title:"Hotel Reservation",
icon:Hotel
},
{
title:"Visa Assistance",
icon:FileCheck
},
{
title:"Talk to Chingu Team",
icon:Headset
}
];




async function sendMessage(){


if(!message.trim()) return;


const userText=message;


setChat(prev=>[
...prev,
{
role:"user",
text:userText
}
]);


setMessage("");

setLoading(true);


try{


const response = await fetch("/api/chat",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
message:userText
})

});


const data=await response.json();


setChat(prev=>[
...prev,
{
role:"gael",
text:data.reply
}
]);


}

catch(error){


setChat(prev=>[
...prev,
{
role:"gael",
text:"Sorry, I cannot connect right now."
}
]);


}


setLoading(false);


}





return (

<main className="
min-h-screen
bg-gray-50
flex
justify-center
items-center
p-4
">


<div className="
w-full
max-w-md
bg-white
rounded-3xl
shadow-lg
border
border-red-100
overflow-hidden
">


{/* HEADER */}

<div className="
px-6
py-5
border-b
flex
justify-between
items-center
">


<div>


<h1 className="
text-3xl
text-red-600
font-normal
">

GAEL

</h1>


<p className="
text-sm
text-gray-500
">

Chingu AI Travel Assistant

</p>


</div>



<div className="
flex
items-center
gap-2
text-sm
text-gray-600
">

<span className="
w-3
h-3
rounded-full
bg-green-500
">
</span>

Online

</div>


</div>





{/* CHAT */}

<div className="
p-5
space-y-4
max-h-[500px]
overflow-y-auto
">



{
chat.map((item,index)=>(


<div

key={index}

className={
item.role==="user"
?
"bg-red-600 text-white rounded-2xl p-4 ml-auto max-w-xs text-sm"
:
"bg-red-50 text-gray-700 rounded-2xl p-4 text-sm"
}


>


{item.text}


</div>


))

}




{
loading &&

<div className="
bg-red-50
rounded-2xl
p-4
text-gray-500
text-sm
">

Gael is typing...

</div>

}



</div>





{/* MENU */}

<div className="
px-5
space-y-3
">


{
menu.map((item)=>{


const Icon=item.icon;


return(

<button

key={item.title}

className="
w-full
flex
items-center
justify-between
px-5
py-3
rounded-xl
border
border-red-300
text-gray-600
text-sm
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

size={20}

className="text-red-600"

/>


<span>

{item.title}

</span>


</div>


<span>
›
</span>


</button>


)


})

}


</div>





{/* INPUT */}

<div className="
p-5
flex
gap-2
">


<input

value={message}

onChange={(e)=>setMessage(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter")
sendMessage();

}}

placeholder="Ask Gael anything..."

className="
flex-1
border
rounded-xl
px-4
py-3
text-sm
outline-none
focus:border-red-600
"

/>



<button

onClick={sendMessage}

className="
bg-red-600
text-white
px-5
rounded-xl
text-sm
"

>

Send

</button>


</div>





{/* FOOTER */}

<div className="
border-t
text-center
py-4
">


<p className="
text-red-600
text-sm
">

Chingu Travel and Tours

</p>


<p className="
text-gray-500
text-xs
">

Philippines & UAE Office

</p>


</div>



</div>



</main>


);

}
