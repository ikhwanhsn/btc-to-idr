const btcToIdr = async (
  amount: number,
  state: React.Dispatch<React.SetStateAction<number>>
) => {
  const btcPrice = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=idr"
  );
  const btc = await btcPrice.json();
  state(amount * btc.bitcoin.idr);
};

export { btcToIdr };
