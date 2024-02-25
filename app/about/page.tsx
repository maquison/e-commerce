'use client'

import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter()

  return (
    <>
      Somos uma loja.
      <br />
      <div className="flex flex-col w-full h-screen items-center justify-center">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button" onClick={() => router.push('/')}>
          Voltar
        </button>
      </div>
    </>

  );
}