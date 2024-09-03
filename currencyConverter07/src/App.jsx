import { useEffect, useState } from 'react'
import { Select, Button, Input } from './component'
import { useCurrencyList } from './hooks'

function App() {
  const [amount, setAmount] = useState(1)
  const [currencyfrom, setCurrencyFrom] = useState("USD")
  const [currencyto, setCurrencyTo] = useState("INR")
  const [rate, setRate] = useState(null)
  const [convertingAmount, setConvertingAmount] = useState(false)

  const currencyList = useCurrencyList()

  function swap() {
    setCurrencyFrom(currencyto)
    setCurrencyTo(currencyfrom)
  }

  async function currencyRate(currencyfrom, currencyto, amount) {
    try {
      setConvertingAmount(true);
      let curr = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currencyfrom}&to=${currencyto}`)
      let currobject = await curr.json();
      setRate(currobject.rates[currencyto]);
    } catch (error) {
      console.error(error);
    } finally {
      setConvertingAmount(false);
    }
  }

  function convert() {
    if (!amount) return;
    currencyRate(currencyfrom, currencyto, amount);
  }

  useEffect(() => {
    setRate(null);
  }, [currencyfrom, currencyto, amount]);

  return (
    <>
      <div className='bg-blue-200 flex justify-center items-center h-screen w-screen'>
        <div className='w-6/12 h-auto bg-gray-800 p-4 rounded-lg'>
          <h1 className='text-center font-bold text-amber-600 text-4xl underline'>Currency Converter</h1>
          <div className='w-full flex gap-4'>
            <Select
              label="From"
              selectCurrency={currencyfrom}
              onCurrencyChange={setCurrencyFrom}
              currencyOptions={currencyList}
            />
            <Button
              label="Swap"
              click={swap}
            />
            <Select
              label="To"
              selectCurrency={currencyto}
              onCurrencyChange={setCurrencyTo}
              currencyOptions={currencyList}
            />
          </div>
          <div className=''>
            <Input
              amount={amount}
              onAmountChange={setAmount}
            />
          </div>
          <div className='text-green-500 text-2xl font-bold py-3 px-2 mt-3'>
            {!convertingAmount && rate && (
              <h2>{amount} {currencyfrom} = {amount * rate} {currencyto}</h2>
            )}
          </div>
          <Button
            label={`Convert ${currencyfrom} to ${currencyto}`}
            className={`bg-blue-300 m-auto w-full ${convertingAmount ? "animate-bounce" : ""}`}
            click={convert}
          />
        </div>
      </div>
    </>
  )
}

export default App
