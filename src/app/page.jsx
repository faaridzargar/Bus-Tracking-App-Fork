import React from "react";
import BusTrackingUI from "@/components/BusTrackingUI";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Login from "@/components/Login";
import { Card } from "@/components/ui/card";

export default function page() {
  return (
    <>
      <Navbar />
      {/* <Login /> */}
      <Card>
        <BusTrackingUI />
      </Card>
      <Footer />
    </>
  );
}
