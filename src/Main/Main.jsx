import React from "react";
import Header from "../components/layout/Header";
import Slider from "../components/jwellryhome/Slider";
import { Gridsystem } from "../components/jwellryhome/Gridsystem";
import { Timeless } from "../components/jwellryhome/Timeless";
import { Jwelleryvdo } from "../components/jwellryhome/Jwelleryvdo";
import Collections from "../components/jwellryhome/Collections";
import { Refer } from "../components/jwellryhome/Refer";
import { Jwelleryvdo2 } from "../components/jwellryhome/Jwelleryvdo2";
import { Appoinment } from "../components/jwellryhome/Appoinment";

const Main = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Gridsystem />
      <Timeless />
      <Jwelleryvdo/>
      <Collections/>
      <Refer/>
      <Jwelleryvdo2/>
      <Appoinment/>
    </div>
  );
};

export default Main;
