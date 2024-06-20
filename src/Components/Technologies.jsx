import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiSqlalchemy } from "react-icons/si";

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 bg-gradient-to-r from-cyan-300 via-slate-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent text-center">
        Technologies
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptLine className="text-7xl text-yellow-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFlask className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSqlalchemy className="text-7xl text-lime-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-yellow-400" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
