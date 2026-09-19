export default function Hero() {
  return (
    <section
      className="
        relative
        h-[650px]
        flex
        items-center
        justify-center
        text-center
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: "url('/images/hero/travel.jpg.png')",
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>



      {/* Content */}

      <div
        className="
          relative
          z-10
          px-6
        "
      >


        <p
          className="
            text-white
            font-semibold
            text-sm
            tracking-[2px]
            uppercase
          "
        >
          WELCOME TO CHINGU TRAVEL AND TOURS
        </p>





        






        <h2
          className="
            mt-5
            text-white
            text-5xl
            md:text-7xl
            font-extrabold
            leading-tight
          "
        >
          Explore the World
          <br />
          With Confidence
        </h2>






       


      </div>



    </section>
  );
}
