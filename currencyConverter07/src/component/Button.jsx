import React from 'react'

function Button({
    label,
    click,
    className
}) {
    return (
        <button className={`border-none rounded-lg px-3 py-2 text-white text-2xl font-semibold uppercase mt-8 ${className}`}
            type='submit'
            value={label}
            onClick={((e) =>{
                e.preventDefault();
                click()
            })}
        >
            {label}
        </button>
    )
}

export default Button;