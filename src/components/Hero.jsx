import {logo}  from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col '>
        <nav className='flex justify-between items-center w-full mb-10 pt-3 '>
            <img src='{logo}' alt='sumz_logo' className='w-28 object-contain'/>
            <button type='button'onClick={() => window.open('https://github.com/Ejiscoxpres')}
            className='black_btn'
            >
              Github

            </button>
            </nav>
            <h1 className='header_text'>
              Summarize Articles with <br className='max-md:hidden' />
              <span className='orange_gradient'> OpenAi GPT-4</span>

            </h1>
            <h2 className='praise'>
            JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go. This means that a JSX element can be saved in a variable, passed to a function, stored in an object or array… you name it.

Here’s an example of a JSX element being saved in a variable:

            </h2>

    </header>
  )
}

export default Hero