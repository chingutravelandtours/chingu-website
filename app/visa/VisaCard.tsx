type Props = {
  visa: {
    country: string;
    image: string;
    title: string;
    description: string;
    processing: string;
    fee: string;
  };
};

export default function VisaCard({ visa }: Props) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-md
        border
        border-gray-100
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >

      {/* COUNTRY IMAGE */}
      <img
        src={visa.image}
        alt={visa.country}
        className="
          w-full
          h-48
          object-cover
        "
      />


      <div className="p-6">


        {/* TITLE + PRICE */}
        <div className="flex justify-between items-start gap-3">

          <h2
            className="
              text-xl
              font-bold
              text-gray-900
            "
          >
            {visa.country}
          </h2>


          <span
            className="
              bg-red-50
              text-red-600
              text-xs
              font-bold
              px-3
              py-1
              rounded-full
              whitespace-nowrap
            "
          >
            {visa.fee}
          </span>

        </div>



        {/* VISA NAME */}
        <h3
          className="
            mt-4
            font-semibold
            text-gray-800
          "
        >
          {visa.title}
        </h3>



        {/* DESCRIPTION */}
        <p
          className="
            mt-2
            text-sm
            text-gray-500
            leading-relaxed
          "
        >
          {visa.description}
        </p>



        {/* PROCESSING */}
        <div
          className="
            mt-4
            text-sm
            text-gray-600
          "
        >
          <span className="font-semibold">
            Processing:
          </span>{" "}
          {visa.processing}
        </div>



        {/* BUTTON */}
        <button
          className="
            mt-6
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
          Apply Now →
        </button>


      </div>

    </div>
  );
}
