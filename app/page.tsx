'use client'

import { useRouter } from "next/navigation";
import Card from "./components/card";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  const router = useRouter()

  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <main className="flex-1 overflow-y-scroll">
          <Navbar />
          <div className="grid grid-cols-4 gap-4 pt-24 px-10">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className="grid grid-cols-4 gap-4 pt-10 px-10">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className="grid grid-cols-4 gap-4 pt-10 px-10 pb-52">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </>
  )
}
