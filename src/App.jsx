import { useState, useEffect } from "react";
import "./app.scss";

import Header from "./component/header/header";
import { FilterSection } from "./component/filtersection/filtersection";

import { MultiForm } from "./component/multiform/multiform";
export default function App() {
  const headerRef = document.getElementById("Logo-header");
  const [headerHeight, setHeaderHeight] = useState(0);

  function calculateHeaderHeight() {
    const headerRef = document.getElementById("Logo-header");
    if (headerRef) {
      setHeaderHeight(headerRef.clientHeight);
    }
  }

  useEffect(() => {
    // Calculate header height on initial render
    calculateHeaderHeight();

    window.addEventListener("DOMContentLoaded", calculateHeaderHeight);
    // Add event listener to recalculate header height on window resize
    window.addEventListener("resize", calculateHeaderHeight);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", calculateHeaderHeight);
    };
  }, []);

  return (
    <div className="App bg-gray-50 h-full">
      <Header ref={headerRef} />
      <div className="bg-white" style={{ paddingTop: `${headerHeight}px` }}>
        <FilterSection />
      </div>

      <main style={{ paddingTop: `${headerHeight}px` }}>
        <MultiForm />
      </main>
    </div>
  );
}
