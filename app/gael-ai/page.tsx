"use client";

import { useState } from "react";
import {
  Luggage,
  Plane,
  Hotel,
  FileCheck,
  Headset,
  Send,
  Trash2,
} from "lucide-react";

export default function GaelPage() {

  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([
    {
      role: "gael",
      text: "Hi! I'm Gael, your Chingu Travel Assistant. 🌎✈️\n\nI can help you with tour packages, flights, hotels, visa assistance, and customized travel experiences.",
    },
  ]);


  const menu = [
    {
      title: "Tour Packages",
      icon: Luggage,
    },
    {
      title: "Flight Inquiry",
      icon: Plane,
    },
    {
      title: "Hotel Reservation",
      icon: Hotel,
    },
    {
      title: "Visa Assistance",
      icon: FileCheck,
    },
    {
      title: "Talk to Chingu Team",
      icon: Headset,
    },
  ];


  async function sendMessage() {

    if (!message.trim()) return;


    const userMessage = message;


    setChat(prev => [
      ...prev,
      {
        role:"user",
        text:userMessage
      }
    ]);


    setMessage("");


    try {


      const response = await fetch("/api/chat",{

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          message:userMessage
        })

      });


      const data = await response.json();


      setChat(prev=>[
        ...prev,
        {
          role:"gael",
          text:data.reply || "Sorry, I cannot answer right now."
        }
      ]);



    } catch(error){


      setChat(prev=>[
        ...prev,
        {
          role:"gael",
          text:"Sorry, something went wrong. Please try again."
        }
      ]);


    }

  }



  function clearChat(){

    setChat([
      {
        role:"gael",
        text:"Hi! I'm Gael, your Chingu Travel Assistant. How can I help you today?"
      }
    ]);

  }



return (

<main className="
min-h-screen
bg-white
flex
items-center
justify-center
p-5
">


<div className="
w-full
max-w-6xl
bg-white
rounded-3xl
shadow-xl
border
border-red-100
overflow-hidden
grid
md:grid-cols-[280px_1fr]
">



{/* SIDEBAR */}

<div className="
p-6
border-r
bg-white
">


<div className="
text-center
">


<div className="
w-24
h-24
mx-auto
rounded-full
border-4
border-red-600
overflow-hidden
">

<img

src="/images/hero/gael.png"

className="w-full h-full object-cover"

/>

</div>


<h1 className="
mt-4
text-4xl
font-bold
text-red-600
">

GAEL

</h1>


<p className="
text-gray-600
">

Chingu AI Travel Assistant

</p>



<div className="
mt-4
inline-flex
items-center
gap-2
bg-green-50
text-green-600
px-4
py-2
rounded-full
">

<span className="
w-3
h-3
bg-green-500
rounded-full
">
</span>

Online

</div>



</div>




<div className="
mt-8
space-y-3
">


{
menu.map((item)=>{

const Icon=item.icon;


return (

<button

key={item.title}

className="
w-full
flex
items-center
justify-between
p-4
rounded-xl
border
border-red-300
text-red-600
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


<Icon size={22}/>


<span className="
font-semibold
">

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




<div className="
mt-16
text-center
">


<h3 className="
font-bold
text-red-600
">

Chingu Travel and Tours

</h3>


<p className="
text-sm
text-gray-500
">

Philippines & UAE Office

</p>


</div>



</div>





{/* CHAT AREA */}


<div className="flex flex-col">


<div className="
p-6
border-b
flex
justify-between
items-center
">


<div>

<h2 className="
text-2xl
font-bold
text-red-600
">

GAEL

</h2>


<p className="text-gray-500">
AI Travel Assistant
</p>


</div>



<button

onClick={clearChat}

className="
flex
items-center
gap-2
border
border-red-300
text-red-600
px-4
py-2
rounded-xl
"

>

<Trash2 size={18}/>

Clear Chat

</button>


</div>




<div className="
flex-1
p-6
space-y-5
overflow-y-auto
min-h-[500px]
bg-gray-50
">


{
chat.map((item,index)=>(


<div

key={index}

className={

item.role==="user"

?
"flex justify-end"

:
"flex justify-start"

}


>


<div

className={

item.role==="user"

?
"bg-red-600 text-white rounded-2xl px-5 py-4 max-w-xl"

:
"bg-red-50 border border-red-100 rounded-2xl px-5 py-4 max-w-xl"

}

>

{item.text}

</div>


</div>


))

}



</div>





<div className="
p-5
border-t
flex
gap-3
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
px-5
py-4
outline-none
focus:border-red-600
"

/>



<button

onClick={sendMessage}

className="
bg-red-600
text-white
px-6
rounded-xl
flex
items-center
gap-2
font-semibold
"

>


<Send size={18}/>

Send


</button>


</div>



<p className="
text-center
text-xs
text-gray-400
pb-4
">

🔒 Gael AI may make mistakes. Please verify important information with our travel experts.

</p>



</div>



</div>


</main>


);


}
