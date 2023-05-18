import React, { PropsWithChildren } from "react";
import Navbar from "./navbar";
const Toplayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default Toplayout;
