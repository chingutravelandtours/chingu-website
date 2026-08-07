export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        <h1 className="text-3xl font-bold text-red-700">
          CHINGU Travel and Tours
        </h1>

       <nav className="flex items-center gap-6">
    <a href="#" className="hover:text-red-600 font-medium">
    Home
  </a>

  <a href="#contact" className="hover:text-red-600 font-medium">
    Contact Us
  </a>

  <a
    href="/login"
    className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700"
  >
    Login
  </a>
</nav>
      </div>
    </header>
  );
}