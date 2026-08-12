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
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:-translate-y-2 transition duration-300">
      {/* IMAGE */}
      <img
        src={visa.image}
        alt={visa.country}
        className="w-full h-44 object-cover"
      />

      <div className="p-5">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold text-gray-900">
            {visa.country}
          </h2>

          <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full">
            {visa.fee}
          </span>
        </div>

        <h3 className="mt-4 font-semibold text-gray-800">
          {visa.title}
        </h3>

        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          {visa.description}
        </p>

        <div className="mt-4 text-sm text-gray-600">
          <span className="font-semibold">Processing: </span>
          {visa.processing}
        </div>

        <button className="mt-5 w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition">
          Apply Now &rarr;
        </button>
      </div>
    </div>
  );
}
