import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

const Home: Component = () => {
  const [name, setName] = createSignal('');
  return (
    <>
      <div class="flex h-full justify-center m-4">
        <div class="flex flex-col gap-16">
          <div class="flex flex-row h-14 w-80 justify-center border-1 border-white rounded-md bg-white hover:shadow-xl shadow-xl hover:shadow-indigo-400 shadow-indigo-300 transition-all">
            <input
              type="text"
              placeholder="Visual Novel's name"
              class="flex h-full w-full justify-start px-4 ring-0 focus:ring-0 focus:shadow-none focus:outline-none border-none focus:border-none"
              onInput={(event) => {
                setName(event.currentTarget.value);
              }}
            />
            <button class="w-20 bg-indigo-500 rounded-tr-md rounded-br-md">
              <h1 class="text-white">
                Search
              </h1>
            </button>
          </div>
          <h1 class="text-2xl">Current Name : { name }</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
