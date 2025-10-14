import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-[#D9C9B6] p-10">
      <header
        className="w-full flex items-start justify-between
        "
      >
      <div className="flex flex-col mb-10 gap-5 text-start">
          <h1 className="font-departure-mono text-4xl font-semibold">EXPLAINING THINGS</h1>
        <p className="font-departure-mono text-md max-w-md">
          Entenda o mundo a sua volta, explicações simples para curiosidades de
          todos os dias.
        </p>
      </div>
      <div className="text-sm font-departure-mono uppercase">september 24, 2025</div>
      </header>
      <div>
        <Image src="/images/logo.png" alt="Logo" width={200} height={200} />
      </div>
    </div>
  );
}
