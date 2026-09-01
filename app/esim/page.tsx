const countries = [
  { name: "Aland Islands", flag: "🇦🇽", plans: 75 },
  { name: "Albania", flag: "🇦🇱", plans: 70 },
  { name: "Algeria", flag: "🇩🇿", plans: 53 },
  { name: "Andorra", flag: "🇦🇩", plans: 58 },
  { name: "Angola", flag: "🇦🇴", plans: 53 },
  { name: "Anguilla", flag: "🇦🇮", plans: 59 },
  { name: "Antigua and Barbuda", flag: "🇦🇬", plans: 59 },
  { name: "Argentina", flag: "🇦🇷", plans: 53 },
  { name: "Armenia", flag: "🇦🇲", plans: 53 },
  { name: "Aruba", flag: "🇦🇼", plans: 26 },
  { name: "Australia", flag: "🇦🇺", plans: 68 },
  { name: "Austria", flag: "🇦🇹", plans: 73 },
  { name: "Azerbaijan", flag: "🇦🇿", plans: 54 },
  { name: "Bahamas", flag: "🇧🇸", plans: 68 },
  { name: "Bahrain", flag: "🇧🇭", plans: 59 },
  { name: "Bangladesh", flag: "🇧🇩", plans: 53 },
  { name: "Barbados", flag: "🇧🇧", plans: 80 },
];

export default function EsimPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            eSIM
          </h1>

          <p className="text-gray-500 mt-2">
            Choose your destination to view available eSIM plans.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

          {countries.map((country) => (
            <a
              key={country.name}
              href={`/esim/${country.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="
                bg-white
                border
                border-gray-200
                rounded-xl
                p-6
                text-center
                hover:shadow-lg
                hover:-translate-y-1
                transition
              "
            >
              <div className="text-4xl mb-3">
                {country.flag}
              </div>

              <h2 className="font-bold text-gray-900">
                {country.name}
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                Plans: {country.plans}
              </p>
            </a>
          ))}

        </div>

      </div>
    </main>
  );
}
