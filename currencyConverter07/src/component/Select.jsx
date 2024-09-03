import React from "react";
import { useId } from "react";

function Select({
    label,
    selectCurrency,
    onCurrencyChange,
    currencyOptions = [],
}) {

    const selectId = useId()
    return (
        <div className="bg-white rounded-lg p-3 text-gray-400 font-semibold text-xl w-1/2 mt-8">
            <label className="px-2 mb-2 block" htmlFor={selectId}>{label}</label>
            <div className="border-[1px] border-gray-500 rounded-lg ">
                <select className="w-full border-none outline-none rounded-lg px-2"
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    id={selectId} value={selectCurrency}
                >
                    {currencyOptions.map((currency) => (<option key={currency}
                        value={currency}>
                        {currency}
                    </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Select;