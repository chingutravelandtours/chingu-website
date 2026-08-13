import Link from "next/link";

export default function Navbar() {

  return (

    <nav className="
      w-full
      bg-white
      shadow-sm
      px-8
      py-4
      flex
      items-center
      justify-between
    ">


      {/* LOGO */}

      <Link href="/" >

        <h1
          className="
            text-red-700
            font-bold
            text-2xl
            tracking-wide
            hover:scale-105
            transition-transform
            duration-300
          "
        >
          CHINGU
        </h1>

      </Link>





      {/* MENU */}

      <div className="
        flex
        items-center
        gap-8
        text-gray-700
        font-medium
      ">


        <Link
          href="/"
          className="
            hover:text-red-600
            transition
          "
        >
          Home
        </Link>



        <Link
          href="/services"
          className="
            hover:text-red-600
            transition
          "
        >
          Services
        </Link>



        <Link
          href="/hotels"
          className="
            hover:text-red-600
            transition
          "
        >
          Hotels
        </Link>



        <Link
          href="/visa"
          className="
            hover:text-red-600
            transition
          "
        >
          Visa
        </Link>



        <Link
          href="/contact"
          className="
            hover:text-red-600
            transition
          "
        >
          Contact Us
        </Link>




        <Link

          href="/login"

          className="
            bg-red-600
            text-white
            px-6
            py-2
            rounded-full
            hover:bg-red-700
            transition
          "

        >
          Login

        </Link>



      </div>



    </nav>

  );

}
