"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function GaelPage() {

  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([
    {
      role: "gael",
      text: "Hi! I'm Gael, your Chingu Travel Assistant.\n\nI can help you with tour packages, flights, hotels, visa assistance, and customized travel experiences."
    }
  ]);

  const [loading, setLoading] = useState(false);


  async function sendMessage() {

    if (!message.trim()) return;


    const userText = message;


    setChat(prev => [
      ...prev,
      {
        role: "user",
        text: userText
      }
    ]);


    setMessage("");
    setLoading(true);



    try {

      const res = await fetch("/api/chat", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          message: userText
        })

      });


      const data = await res.json();


      setChat(prev => [
        ...prev,
        {
          role: "gael",
          text:
          data.reply ||
          "I'm sorry, I cannot answer right now."
        }
      ]);



    } catch {

      setChat(prev => [
        ...prev,
        {
          role:"gael",
          text:"I'm having trouble connecting. Please try again."
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
items-center
justify-center
p-4
">


<div className="
w-full
max-w-md
bg-white
rounded-3xl
shadow-xl
border
border-red-100
overflow-hidden
">


{/* HEADER */}

<div className="
px-5
py-4
border-b
flex
items-center
justify-between
">


<div className="
flex
items-center
gap-3
">


<img

src="/images/hero/gael.png"

alt="Gael"

className="
w-16
h-16
rounded-full
object-cover
border-2
border-red-600
"

/>


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
bg-green-500
rounded-full
"></span>

Online

</div>


</div>





{/* CHAT */}

<div className="
p-5
space-y-4
h-[420px]
overflow-y-auto
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

"bg-red-600 text-white rounded-2xl px-4 py-3 max-w-xs text-sm"

:

"bg-red-50 text-gray-700 rounded-2xl px-4 py-3 max-w-xs text-sm"

}

>

{item.text}

</div>


</div>


))

}



{
loading &&

<div className="
bg-red-50
text-gray-500
rounded-2xl
px-4
py-3
text-sm
">

Gael is typing...

</div>

}


</div>






{/* INPUT */}

<div className="
border-t
p-4
flex
gap-2
">


<input

value={message}

onChange={(e)=>setMessage(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter"){
sendMessage();
}

}}

placeholder="Ask Gael anything..."

className="
flex-1
border
border-gray-200
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
hover:bg-red-700
"

>

<Send size={18}/>

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
