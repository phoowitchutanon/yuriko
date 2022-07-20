import type { Component } from 'solid-js';

import Footer from '../components/footer';

const Home: Component = () => {
  return (
    <>
      <div class="flex h-[90vh] justify-center items-center">
        <h1 class="md:text-12xl text-8xl tracking-wide font-medium select-none hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all ease-in-out duration-750">
          Yuriko
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;
