'use client'

import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Product() {
  const router = useRouter()

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