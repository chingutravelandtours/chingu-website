"use client";

import { useState } from "react";

export default function AgentRegisterPage() {

  const [form, setForm] = useState({
    name: "",
    agency: "",
    email: "",
    phone: "",

    address: "",
    registration: "",
    permit: "",
    dot: "",

    password: "",
    confirmPassword: "",

    governmentId: null as File | null,
    businessRegistration: null as File | null,
    mayorPermit: null as File | null,
    dotCertificate: null as File | null,

    agreement: false,
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const {
      name,
      value,
      type,
      checked,
      files
    } = e.target;


    setForm((prev)=>({

      ...prev,

      [name]:
        type === "checkbox"
          ? checked

          : type === "file"
          ? files?.[0] ?? null

          : value

    }));

  };



  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();


    if(form.password !== form.confirmPassword){

      alert("Passwords do not match.");
      return;

    }


    if(!form.agreement){

      alert(
        "Please accept verification agreement."
      );

      return;

    }


    alert(
      "Application submitted. Your account is pending verification."
    );


    console.log(form);

  };



  const inputClass = `
    mt-2
    w-full
    bg-white
    text-black
    border
    border-gray-300
    rounded-xl
    px-4
    py-3
    outline-none
    focus:border-red-500
    focus:ring-2
    focus:ring-red-100
  `;



  return (

<main className="
min-h-screen
bg-gray-50
px-5
py-12
">


<div className="
w-full
max-w-lg
mx-auto
">


{/* HEADER */}

<div className="
text-center
mb-8
">


<p className="
text-red-600
font-semibold
uppercase
tracking-[4px]
text-sm
">
CHINGU Travel and Tours
</p>


<h1 className="
mt-3
text-4xl
font-bold
text-gray-900
">
B2B Partner Registration
</h1>


<p className="
mt-3
text-gray-500
">
Apply as a verified CHINGU Travel Partner.
</p>


</div>



<div className="
bg-white
rounded-2xl
shadow-md
border
p-8
">



<form
onSubmit={handleSubmit}
className="space-y-5"
>



<h2 className="
text-xl
font-bold
text-gray-900
">
Personal Information
</h2>



<input
name="name"
placeholder="Full Name"
value={form.name}
onChange={handleChange}
required
className={inputClass}
/>



<input
name="email"
type="email"
placeholder="Email Address"
value={form.email}
onChange={handleChange}
required
className={inputClass}
/>



<input
name="phone"
placeholder="Mobile Number"
value={form.phone}
onChange={handleChange}
required
className={inputClass}
/>





<h2 className="
text-xl
font-bold
text-gray-900
mt-8
">
Travel Agency Information
</h2>




<input
name="agency"
placeholder="Agency Name"
value={form.agency}
onChange={handleChange}
required
className={inputClass}
/>



<input
name="address"
placeholder="Business Address"
value={form.address}
onChange={handleChange}
required
className={inputClass}
/>



<input
name="registration"
placeholder="DTI / SEC Registration Number"
value={form.registration}
onChange={handleChange}
required
className={inputClass}
/>



<input
name="permit"
placeholder="Business / Mayor's Permit Number"
value={form.permit}
onChange={handleChange}
required
className={inputClass}
/>



<input
name="dot"
placeholder="DOT Accreditation Number (Optional)"
value={form.dot}
onChange={handleChange}
className={inputClass}
/>





<h2 className="
text-xl
font-bold
mt-8
">
Verification Documents
</h2>



<div className="
bg-gray-50
rounded-xl
p-5
border
space-y-5
">


<div>

<label className="
text-sm
font-semibold
text-gray-700
">
Government ID *
</label>


<input
type="file"
name="governmentId"
accept="image/*,.pdf"
onChange={handleChange}
required
className={inputClass}
/>

</div>




<div>

<label className="
text-sm
font-semibold
text-gray-700
">
Business Registration (DTI / SEC) *
</label>


<input
type="file"
name="businessRegistration"
accept="image/*,.pdf"
onChange={handleChange}
required
className={inputClass}
/>

</div>




<div>

<label className="
text-sm
font-semibold
text-gray-700
">
Mayor's Permit *
</label>


<input
type="file"
name="mayorPermit"
accept="image/*,.pdf"
onChange={handleChange}
required
className={inputClass}
/>

</div>




<div>

<label className="
text-sm
font-semibold
text-gray-700
">
DOT Certificate (Optional)
</label>


<input
type="file"
name="dotCertificate"
accept="image/*,.pdf"
onChange={handleChange}
className={inputClass}
/>

</div>



</div>






<h2 className="
text-xl
font-bold
mt-8
">
Account Security
</h2>




<input
type="password"
name="password"
placeholder="Create Password"
value={form.password}
onChange={handleChange}
required
className={inputClass}
/>



<input
type="password"
name="confirmPassword"
placeholder="Confirm Password"
value={form.confirmPassword}
onChange={handleChange}
required
className={inputClass}
/>






<label className="
flex
gap-3
items-start
text-sm
text-gray-600
">


<input
type="checkbox"
name="agreement"
checked={form.agreement}
onChange={handleChange}
className="mt-1"
/>



<span>

I agree that CHINGU Travel and Tours may verify
my submitted information and documents before approval.

</span>


</label>






<button
type="submit"
className="
w-full
bg-red-600
text-white
py-3
rounded-xl
font-semibold
hover:bg-red-700
transition
"
>

Submit For Verification

</button>





</form>


</div>


</div>


</main>

  );

}
