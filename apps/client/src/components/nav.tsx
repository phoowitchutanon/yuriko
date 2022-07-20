import type { Component } from "solid-js"
import { Link } from "solid-app-router"
import { FaBrandsGithub } from "solid-icons/fa"

const Nav: Component = () => {
  return (
    <>
      <nav class="flex w-screen h-12 items-center bg-indigo-600">
        <div class="flex w-full justify-between">
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
          <div class="flex flex-row items-center gap-4 px-8">
            <a class="mt-2" href="https://www.github.com/gusb3ll/yuriko" target="_blank">
              <FaBrandsGithub color="white" size="32px" />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav