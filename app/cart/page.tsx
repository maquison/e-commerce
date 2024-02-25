'use client'

import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Cart() {
  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <main className="flex-1 overflow-y-scroll">
          <Navbar />
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}