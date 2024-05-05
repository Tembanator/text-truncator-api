import React, { useState } from 'react'

const Expander = ({ children, numberOfWords, expandButtonText, collapseButtonText }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    let displayText = isExpanded ? children : children.split(' ').slice(0, numberOfWords).join(' ') + '...'
    return (
        <div
            className=''
        >
            <p
                className={`text-justify my-6`}>
                {displayText}
            </p>
            <button
                onClick={() => setIsExpanded(prev => !prev)}
                className='bg-[#492E87] font-medium px-6 py-3 text-lg'>{isExpanded ? collapseButtonText : expandButtonText}</button>
        </div>
    )
}

export default Expander
