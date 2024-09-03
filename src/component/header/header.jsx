import "./header.scss";

export default function Header() {
  return (
    <header
      id="Logo-header"
      className=" bg-gray-50 lg:bg-gray-950  fixed  w-full z-30"
    >
      <div
        id="logo"
        className="grid place-content-center max-w-7xl p-3 lg:px-8 mx-auto lg:place-content-start"
      >
        <a
          href="#"
          className="py-2 mx-auto text-base text-gray-900 font-semibold md:text-lg lg:text-xl lg:text-gray-100 "
        >
          kizzys<span className="text-indigo-700">CV</span> Builder
        </a>
      </div>
    </header>
  );
}
