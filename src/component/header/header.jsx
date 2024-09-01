import "./header.scss";

export default function Header() {
  return (
    <header className=" bg-gray-50 lg:bg-gray-950">
      <div
        id="logo"
        className="grid place-content-center max-w-7xl p-3 lg:px-8 mx-auto lg:place-content-start"
      >
        <a
          href="#"
          className="p-2 mx-auto text-base font-semibold md:text-lg lg:text-xl lg:text-gray-100 "
        >
          kizzyCV Builder
        </a>
      </div>
    </header>
  );
}
