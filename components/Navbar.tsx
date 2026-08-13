import Link from "next/link";

export default function Navbar() {

  return (

    <nav
      className="
        w-full
        bg-white
        px-8
        py-4
        flex
        items-center
        justify-between
        shadow-sm
      "
    >


      {/* LOGO */}

      <Link href="/">

        <h1
          className="
            text-red-700
            font-bold
            text-xl
            hover:scale-105
            transition-transform
            duration-300
          "
        >
          CHINGU Travel and Tours
        </h1>

      </Link>





      {/* MENU */}

      <div
        className="
          flex
          items-center
          gap-8
          text-gray-700
          text-sm
          font-medium
        "
      >


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
          href="/b2b"
          className="
            hover:text-red-600
            transition
          "
        >
          B2B Portal
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
            px-5
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
