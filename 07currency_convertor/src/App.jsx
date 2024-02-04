import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [toCurrency, setToCurrency] = useState("usd");
  const [fromCurrency, setFromCurrency] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencies = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(currencies);
  return (
    <>
      <div
        id="main"
        className="flex h-screen w-screen bg-slate-400 justify-center items-center flex-wrap bg-[url('https://images.pexels.com/photos/7130472/pexels-photo-7130472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover"
      >
        <div className="flex flex-col flex-wrap rounded-xl w-1/2 p-16 bg-transparent border-2 space-y-8">
          <div className="relative flex flex-col space-y-4 w-full">
            <button className="rounded-lg border-white border-2 shadow-xl text-white text-xl absolute z-10 px-4 py-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600"
            onClick={()=>{
            setFromCurrency(toCurrency)
            setToCurrency(fromCurrency)
            setAmount(convertedAmount)
            setConvertedAmount(amount)
            }}>swap</button>
            <div
              id="to"
              className="rounded-xl flex flex-col w-full space-y-4 bg-white p-4 flex-wrap overflow-hidden"
            >
              <div
                id="top"
                className="flex place-content-between w-full text-gray-400 text-xl flex-wrap"
              >
                <div>From</div>
                <div>Currency Type</div>
              </div>

              <div
                id="bottom"
                className="flex place-content-between w-full text-xl flex-wrap"
              >
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => {
                    setAmount(Number(e.target.value));
                  }}
                  className="rounded-xl border-white"
                />
                <select
                  value={fromCurrency}
                  onChange={(e) =>
                    setFromCurrency && setFromCurrency(e.target.value)
                  }
                  className="rounded-xl py-2 px-1 bg-gray-100"
                >
                  {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div
              id="from"
              className="rounded-xl flex flex-col w-full space-y-4 bg-white p-4 flex-wrap overflow-hidden"
            >
              <div
                id="top"
                className="flex place-content-between w-full text-gray-400 text-xl flex-wrap"
              >
                <div>To</div>
                <div>Currency Type</div>
              </div>
              <div
                id="bottom"
                className="flex place-content-between w-full text-xl flex-wrap"
              >
                <input
                  type="number"
                  disabled={true}
                  value={convertedAmount}
                  onChange={(e) => {
                    setAmount(Number(e.target.value));
                  }}
                  className="bg-white"
                />
                <select
                  value={toCurrency}
                  onChange={(e) =>
                    setToCurrency && setToCurrency(e.target.value)
                  }
                  className="rounded-xl py-2 px-1 bg-gray-100"
                >
                  {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <button
            className="bg-blue-700 px-20 py-5 text-2xl text-white rounded-xl w-full"
            onClick={() => {
              setConvertedAmount(amount * currencies[toCurrency]);
            }}
          >
            Convert USD to INR
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
