import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
