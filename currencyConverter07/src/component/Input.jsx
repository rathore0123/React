import React from 'react'

function Input({
    amount,
    onAmountChange,
}){
    return(
        <div>
            <input
            type="number"
            placeholder='Enter Amount'
            value={amount}
            min={1}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            className='bg-gray-200 border-none outline-none rounded-lg px-3 py-2 w-full text-amber-500 mt-4 text-2xl font-semibold'
            />
        </div>
    )
}

export default Input;