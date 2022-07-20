import type { Component } from "solid-js"
import { FaBrandsGithub } from "solid-icons/fa"

const Footer: Component = () => {
  return (
    <>
      <footer class="flex flex-col justify-center items-center gap-3 -mt-14">
        <a href="https://www.github.com/gusb3ll/yuriko" target="_blank" rel="noreferrer">
          <FaBrandsGithub color="black" size="28px" />
        </a>
        <p class="select-none">Made with 💖 by Gusbell</p>
      </footer>
    </>
  )
}

export default Footer