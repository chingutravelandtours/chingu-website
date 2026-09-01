const countries = [
  { name: "Aland Islands", flag: "🇦🇽" },

];

export default function EsimPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            eSIM
          </h1>

          <p className="text-gray-500 mt-3">
            Choose your destination to view available eSIM plans.
          </p>
        </div>

        {/* COUNTRIES */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-6
            gap-4
          "
        >
          {countries.map((country) => (
            <a
              key={country.name}
              href={`/esim/${country.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="
                group
                bg-white
                border
                border-gray-200
                rounded-2xl
                p-5
                text-center
                hover:border-red-400
                hover:shadow-lg
                hover:-translate-y-1
                transition-all
                duration-200
              "
            >

              {/* FLAG */}
              <div
                className="
                  text-4xl
                  mb-3
                  transition-transform
                  duration-200
                  group-hover:scale-110
                "
              >
                {country.flag}
              </div>

              {/* COUNTRY NAME */}
              <h2
                className="
                  font-bold
                  text-gray-900
                  text-sm
                  md:text-base
                "
              >
                {country.name}
              </h2>

              {/* PLAN COUNT */}
              <p className="text-xs md:text-sm text-gray-500 mt-2">
                {country.plans} Plans
              </p>

            </a>
          ))}
        </div>

      </div>
    </main>
  );
}
