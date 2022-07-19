import type { Component } from "solid-js";
import { Link } from "solid-app-router"

const Nav: Component = () => {
  return (
    <>
      <nav class="flex min-w-screen h-12 items-center bg-indigo-600">
        <div class="flex flex-row gap-4 px-8">
          <Link href="/" class="flex items-center px-4 py-1 hover:bg-indigo-700 rounded-md transition-all cursor-pointer no-underline">
            <h1 class="text-xl text-white">
              Home
            </h1>
          </Link>
          <Link href="/search" class="flex items-center px-4 py-1 hover:bg-indigo-700 rounded-md transition-all cursor-pointer no-underline">
            <h1 class="text-xl text-white">
              Search
            </h1>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Nav