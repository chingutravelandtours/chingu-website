"use client";

import { useState } from "react";

export default function AgentRegisterPage() {

  const [form, setForm] = useState({
    name: "",
    agency: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",

    address: "",
    dti: "",
    permit: "",
    dot: "",

    governmentId: "",
    businessRegistration: "",
    mayorPermit: "",
    dotCertificate: "",
    authorizationLetter: "",

    agreement: false,
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
        ? checked
        : value,
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

      alert("Please accept the verification agreement.");
      return;

    }


    alert(
      "Registration submitted. Your account is pending verification."
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

    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-12">

      <div className="w-full max-w-lg">


        <div className="text-center mb-8">

          <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
           B2B Registration
          </h1>

          <p className="mt-3 text-gray-500">
            Submit your details for B2B Travel Partners verification.
          </p>

        </div>



        <div className="
          bg-white
          rounded-2xl
          shadow-md
          border
          p-8
        ">


        <form onSubmit={handleSubmit} className="space-y-5">



          <h2 className="text-xl font-bold">
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



          <h2 className="text-xl font-bold mt-8">
            Agency Information
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
            name="dti"
            placeholder="DTI / SEC Registration Number"
            value={form.dti}
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



          <h2 className="text-xl font-bold mt-8">
            Upload Verification Documents
          </h2>



          <label className="block text-sm font-semibold">
            Government ID
          </label>

          <input
            type="file"
            name="governmentId"
            onChange={handleChange}
            required
            className={inputClass}
          />



          <label className="block text-sm font-semibold">
            Business Registration (DTI/SEC)
          </label>

          <input
            type="file"
            name="businessRegistration"
            onChange={handleChange}
            required
            className={inputClass}
          />



          <label className="block text-sm font-semibold">
            Mayor's Permit
          </label>

          <input
            type="file"
            name="mayorPermit"
            onChange={handleChange}
            required
            className={inputClass}
          />



          <label className="block text-sm font-semibold">
            DOT Certificate (Optional)
          </label>

          <input
            type="file"
            name="dotCertificate"
            onChange={handleChange}
            className={inputClass}
          />



          <label className="block text-sm font-semibold">
            Authorization Letter (Optional)
          </label>

          <input
            type="file"
            name="authorizationLetter"
            onChange={handleChange}
            className={inputClass}
          />



          <h2 className="text-xl font-bold mt-8">
            Security
          </h2>


          <input
            type="password"
            name="password"
            placeholder="Password"
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



          <label className="flex gap-3 items-start text-sm text-gray-600">

            <input
              type="checkbox"
              name="agreement"
              checked={form.agreement}
              onChange={handleChange}
              className="mt-1"
            />

            <span>
              I agree that CHINGU Travel and Tours may verify
              my submitted information and documents for agent approval.
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
