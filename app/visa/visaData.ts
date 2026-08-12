type Props = {
  visa: {
    country: string;
    image: string;
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
        transition
      "
    >

      <img
        src={visa.image}
        alt={visa.country}
        className="
          w-full
          h-48
          object-cover
        "
      />

      <div className="p-5">

        <h2 className="
          text-xl
          font-bold
          text-gray-900
        ">
          {visa.country}
        </h2>

        <p className="mt-3 text-sm text-gray-500">
          Processing Time
        </p>

        <p className="font-semibold text-gray-800">
          {visa.processing}
        </p>

        <p className="mt-3 text-sm text-gray-500">
          Starting Fee
        </p>

        <p className="font-bold text-red-600">
          {visa.fee}
        </p>


        <button
          className="
            mt-5
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
