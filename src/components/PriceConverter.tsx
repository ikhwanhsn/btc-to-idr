"use client";

import { btcToIdr } from "@/app/services/btcToIdr";
import { useState } from "react";

const PriceConverter = () => {
  const [amountBTC, setAmountBTC] = useState(0);
  const [amountIDR, setAmountIDR] = useState(0);

  return (
    <main className="flex justify-center items-center min-h-screen gap-24">
      <section className="flex flex-col justify-center items-center gap-y-3">
        <h1 className="text-3xl font-bold">BTC</h1>
        <input
          type="number"
          className="w-24 text-2xl text-center"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAmountBTC(e.target.value === "" ? 0 : Number(e.target.value))
          }
          placeholder="0"
          value={amountBTC === 0 ? "" : amountBTC}
        />
      </section>
      <section>
        <button
          className="btn btn-primary"
          onClick={() => btcToIdr(amountBTC, setAmountIDR)}
        >
          Convert
        </button>
      </section>
      <section className="flex flex-col justify-center items-center gap-y-3">
        <h1 className="text-3xl font-bold">IDR</h1>
        <p className="w-12 text-2xl">{amountIDR.toLocaleString("id-ID")}</p>
      </section>
    </main>
  );
};

export default PriceConverter;
