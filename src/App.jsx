import { useState } from 'react'
import img from './assets/side.jpg'
import Expander from './components/Expander';
function App() {
  const [numberOfWords, setNumberOfWords] = useState(10)
  const [expandButtonText, setExpandButtonText] = useState('Show more')
  const [collapseButtonText, setCollapseButtonText] = useState('Show less')

  let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, eaque quia natus cum beatae, consequuntur cupiditate harum perferendis magnam voluptatibus sequi quasi, quo nisi modi eos sint tempore voluptate dolorum. Corporis vero consequuntur neque ducimus in non tempore blanditiis sunt magnam aut expedita harum omnis, molestias repellendus atque sit ad."


  return (
    <>
      <div className="flex flex-col w-full sm:max-w-[800px] mx-auto justify-center text-slate-300 p-8">
        <h1 className="text-center mb-16 text-6xl font-semibold">Text truncation</h1>
        <div className='grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 items-center w-full rounded-lg shadow-lg bg-[#0A1D56] h-[100%]'>
          <div
            className="bg-[url('./assets/top.jpg')] sm:bg-[url('./assets/side.jpg')] w-full bg-cover h-full bg-center"
          ></div>
          <div className='p-4'>
            <div className='flex flex-col space-y-4 '>
              <p className='font-medium'>Words to display when collapsed: {numberOfWords}</p>
              <input
                type="range"
                min={1}
                max={25}
                value={numberOfWords}
                onChange={(e) => setNumberOfWords(e.target.value)}
              />
              <input
                className='text-gray-800 px-2 focus:border-0 focus:outline-none py-1'
                value={expandButtonText}
                onChange={e => setExpandButtonText(e.target.value)}
                type="text"
                placeholder='Expand button text ...' />
              <input
                className='text-gray-800 px-2 focus:border-0 focus:outline-none py-1'
                value={collapseButtonText}
                onChange={e => setCollapseButtonText(e.target.value)}
                type="text"
                placeholder='Collapse button text ...' />
            </div>
            <Expander
              expandButtonText={expandButtonText}
              collapseButtonText={collapseButtonText}
              numberOfWords={numberOfWords}
            >{text}</Expander>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
