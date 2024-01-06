'use client'


import { useRouter } from "next/navigation"

export default function Home() {
 const router = useRouter();
  return (
    <>
      <section>
          <h1>useRouter</h1>
          <button className="border px-2 py-4" onClick={() => router.push("About")}>Go to About Page</button>
          <button className="border px-2 py-4" onClick={() => router.push("contact")}>Go to contact Page</button>
          <button className="border px-2 py-4" onClick={() => router.push("movie")}>Go to Movie Page</button>
      </section>
    </>
  )
}
