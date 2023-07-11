"use client";

import { useState } from "react";
import { MdCalculate, MdConstruction, MdMonetizationOn, MdMoney } from "react-icons/md";

export default function Categories() {
  const [category, setCategory] = useState(0);

  return (
    <div className="categories">
      <div className="selectCategory flex flex-col bg-gray-900 h-12 overflow-hidden">
        <div className="categoriesWrapper flex h-full">
          <div
            className="ssa w-1/3 text-center flex items-center justify-center text-white cursor-pointer font-semibold"
            onClick={() => setCategory(0)}>
            SSA
          </div>
          <div
            className="enem w-1/3 text-center flex items-center justify-center text-white cursor-pointer font-semibold"
            onClick={() => setCategory(1)}>
            ENEM
          </div>
          <div
            className="tools w-1/3 text-center flex items-center justify-center text-white cursor-pointer font-semibold"
            onClick={() => setCategory(2)}>
            FERRAMENTAS
          </div>
        </div>
        <div className="indicatorWrapper bg-gray-300 h-0.5">
          <div
            className="indicator w-1/3 h-0.5 bg-white relative bottom-0 ease-in-out duration-300 rounded"
            style={{ left: `${(100 / 3) * category || 0}%` }}></div>
        </div>
      </div>
      <div className="pages flex overflow-x-hidden">
        <div
          className="ssa shrink-0 w-full ease-in-out duration-300"
          style={{
            marginLeft: `-${100 * category || 0}%`,
            opacity: `${category == 0 ? 1 : 0}`,
          }}>
          <div className="items flex flex-col gap-4 p-5">
            <a
              href="/calculadora/ssa"
              className="calculators bg-gradient-to-r from-blue-500 to-blue-700 flex rounded-md p-2 gap-2 shadow-lg">
              <MdCalculate className="text-white text-3xl" />
              <div className="content flex flex-col">
                <h2 className="title text-white text-xl font-bold">Calculadora</h2>
                <p className="desc text-white text-sm">
                  Descubra quanto você precisa tirar no SSA3.
                </p>
              </div>
            </a>
            <a
              href="/isencoes"
              className="calculators bg-gradient-to-r from-violet-700 to-indigo-700 flex rounded-md p-2 gap-2 shadow-lg">
              <MdMonetizationOn className="text-white text-3xl" />
              <div className="content flex flex-col">
                <h2 className="title text-white text-xl font-bold">Isenções </h2>
                <p className="desc text-white text-sm">
                  Veja se seu sua isenção foi ou não aprovada.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div
          className="enem shrink-0 w-full ease-in-out duration-300"
          style={{
            opacity: `${category == 1 ? 1 : 0}`,
          }}>
          <div className="items flex flex-col gap-4 p-5">
            <a className="construction flex gap-2 bg-gray-300 rounded-md p-2 items-center justify-center">
              <MdConstruction className="text-white text-3xl" />
              <div className="content flex flex-col">
                <h2 className="title text-white text-xl font-bold">Em breve...</h2>
              </div>
              <MdConstruction className="text-white text-3xl" />
            </a>
          </div>
        </div>
        <div
          className="tools shrink-0 w-full ease-in-out duration-300"
          style={{
            opacity: `${category == 2 ? 1 : 0}`,
          }}>
          <div className="items flex flex-col gap-4 p-5">
            <a className="construction flex gap-2 bg-gray-300 rounded-md p-2 items-center justify-center">
              <MdConstruction className="text-white text-3xl" />
              <div className="content flex flex-col">
                <h2 className="title text-white text-xl font-bold">Em breve...</h2>
              </div>
              <MdConstruction className="text-white text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
