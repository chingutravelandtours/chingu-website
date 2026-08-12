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

    <div className="
      bg-white
      rounded-2xl
      overflow-hidden
      shadow-md
      border
      border-gray-100
      hover:-translate-y-2
      transition
    ">

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


        <div className="flex justify-between">

          <h2 className="
            text-xl
            font-bold
            text-gray-900
          ">
            {visa.country}
          </h2>


          <span className="
            text-red-600
            bg-red-50
            px-3
            py-1
            rounded-full
            text-xs
            font-bold
          ">
            {visa.fee}
          </span>

        </div>


        <h3 className="
          mt-4
          font-semibold
          text-gray-800
        ">
          {visa.title}
        </h3>


        <p className="
          mt-2
          text-sm
          text-gray-500
        ">
          {visa.description}
        </p>


        <p className="
          mt-4
          text-sm
          text-gray-600
        ">
          <b>Processing:</b> {visa.processing}
        </p>


        <button className="
          mt-6
          w-full
          bg-red-600
          text-white
          py-3
          rounded-xl
          font-semibold
          hover:bg-red-700
        ">
          Apply Now →
        </button>


      </div>

    </div>

  );
}
