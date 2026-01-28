import { faLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState(null);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const res = await fetch(
          "https://openexchangerates.org/api/currencies.json"
        );
        const data = await res.json();
        console.log("API response:", data);
        setCurrencies(data);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchCurrencies();
  }, []);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const res = await fetch(
          `https://v6.exchangerate-api.com/v6/9a97af8db3773ebbd5805742/latest/${fromCurrency}`
        );
        console.log(fromCurrency);
        const data = await res.json();
        const rate = data.conversion_rates[toCurrency];
        console.log(`${fromCurrency} to ${toCurrency} with ${rate}`);
        setResult(amount * rate);
      } catch (error) {
        console.log("Error fetching exchange rates: ", error);
      }
    };
    fetchExchangeRate();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="justify-center items-center flex flex-col">
      <div className="p-8 mt-8 inline-block">
        <h2 className="text-2xl font-bold text-white mb-4 text-left">
          Result: {result}
        </h2>
        <div className="justify-center items-center flex gap-2">
          <div className="bg-cyan-900 p-2 w-50 rounded-lg text-white mb-4  hover:bg-cyan-800">
            Amount
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              placeholder="$1.00"
              className="text-gray-300"
            />
          </div>
          <div className="bg-cyan-900 p-2 w-50 rounded-lg text-white mb-4 flex-col flex hover:bg-cyan-800">
            From
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="focus:outline-none text-gray-400"
            >
              {Object.entries(currencies).map(([key, value]) => (
                <option key={key} value={key}>
                  {key.toUpperCase()} - {value}
                </option>
              ))}
            </select>
          </div>
          <FontAwesomeIcon
            icon={faLeftRight}
            className="text-white mb-3 cursor-pointer hover:text-gray-400"
            onClick={() => {
              setToCurrency(fromCurrency);
              setFromCurrency(toCurrency);
            }}
          />
          <div className="bg-cyan-900 p-2 w-50 rounded-lg text-white mb-4 flex-col flex  hover:bg-cyan-800">
            To
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="focus:outline-none text-gray-400 "
            >
              {Object.entries(currencies).map(([key, value]) => (
                <option key={key} value={key}>
                  {key.toUpperCase()} - {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
