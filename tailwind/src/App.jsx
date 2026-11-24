import React, { useState } from 'react'

const App = () => {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  return (
    <div className={`${theme} min-h-screen  text-slate-900 dark:text-primary dark:bg-background`}>
      <div className='flex justify-between items-center h-12 px-5'>
            <div className='font-bold'>Logo</div>
            {/* Desctop navigation */}
            <div className=' hidden sm:flex items-center gap-2'>
              <span>Home</span>
              <span>About</span>
              <span>Contact</span>
              
               <button className='text-xl text-slate-900 cursor-pointer hidden sm:block' onClick={()=>setTheme(theme==='light'?'dark':'light')}>{
                theme === 'light' ? '🌙' : '☀'
                }</button>
            </div>
            
           <button className='text-xl cursor-pointer block sm:hidden' onClick={()=>setOpen(!open)}>☰</button>
       
          
 
      </div>
           {/* Mobile navigation button */}
          {open && <div className='flex gap-2 dark:bg-background dark:text-primary text-slate-900 flex-col text-center  align-items p-4 sm:hidden'>
              <span>Home</span>
              <span>About</span>
              <span>Contact</span>
              <button className='text-xl cursor-pointer block sm:hidden' onClick={()=>setTheme(theme==='light'?'dark':'light')}>{
                theme === 'light' ? '🌙' : '☀'
                }</button>
            </div>
            } 
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-primary p-6 gap-6 text-center font-semibold text-2xl sm:text-lg  dark:bg-background '>
        <div className='bg-slate-500 p-4 rounded hover:bg-slate-700 hover:scale-105 transition-all duration-300'>Future one</div>
        <div className='bg-slate-500 p-4 rounded hover:bg-slate-700'>Future two</div>
        <div className='bg-slate-500 p-4 rounded hover:bg-slate-700'>Future three</div>
        <div className='bg-slate-500 p-4 rounded hover:bg-slate-700'>Future four</div>
        <div className='bg-slate-500 p-4 rounded hover:bg-slate-700'>Future five</div>
        <div className='bg-slate-500 p-4 rounded hover:bg-slate-700'>Future six</div>
      </div>

      <section className='py-24 text-center px-10'>
        <h1 className='text-6xl font-display'>Hi, I',m <span className='text-brand'>Sam</span></h1>
        <a href="#" className='bg-brand text-white px-6 py-3 my-5 rounded-lg block max-w-sm mx-auto'>Contact me</a>
      </section>
      <section id='project' className='py-5 px-10 '>
        <h2 className='text-4xl font-display font-bold pb-2'>Projects</h2>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 '>
          <article className='rounded-xl border overflow-hidden group hover:shadow-lg'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjPJY_nkgiu4OvIqlDNpPRq_k28LsWELoELE5g-9j1BSc7hrzv6zLecWm&s=10" alt="" className='transition group-hover:scale-105' />
            <div className='p-2'>
              <h3 className='font-bold'>Task board</h3>
              <p className='text-sm text-slate-500'>Libe forecast for my city</p>
              <a href="#" className='text-brand'>Live Demo</a>
              <a href="#" className='text-brand ml-2'>Code</a>
            </div>
          </article>
          <article className='rounded-xl border overflow-hidden group hover:shadow-lg'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNVoINC8oqDVHYVA3niFkD9gv1sXQgKYfPPoXth7zj-d3Pf4EXPtbeMt2&s=10" alt="" className='transition group-hover:scale-105' />
            <div className='p-2'>
              <h3 className='font-bold'>Recipe App</h3>
              <p className='text-sm text-slate-500'>Libe forecast for my city</p>
              <a href="#" className='text-brand'>Live Demo</a>
              <a href="#" className='text-brand ml-2'>Code</a>
            </div>
          </article>
          <article className='rounded-xl border overflow-hidden group hover:shadow-lg'>
            <img src="https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg?w=1280&h=720&crop=1" alt="" className='transition group-hover:scale-105' />
            <div className='p-2'>
              <h3 className='font-bold'>Wheather App</h3>
              <p className='text-sm text-slate-500'>Libe forecast for my city</p>
              <a href="#" className='text-brand'>Live Demo</a>
              <a href="#" className='text-brand ml-2'>Code</a>
            </div>
          </article>
        </div>
      </section>
      <section id='skils' className='py-10 px-10'>
         <h2 className='text-4xl font-display font-bold pb-2'>Skills</h2>
         <div className='flex flex-wrap gap-3'>
          <span className='px-4 py-1 rounded-full bg-slate-100 dark:text-slate-700'>HTML</span>
          <span className='px-4 py-1 rounded-full bg-slate-100 dark:text-slate-700'>CSS</span>
          <span className='px-4 py-1 rounded-full bg-slate-100 dark:text-slate-700'>JavaScript</span>
          <span className='px-4 py-1 rounded-full bg-slate-100 dark:text-slate-700'>React</span>
          <span className='px-4 py-1 rounded-full bg-slate-100 dark:text-slate-700'>Node.js</span>
          <span className='px-4 py-1 rounded-full bg-slate-100 dark:text-slate-700'>Express</span>
          <span className='px-4 py-1 rounded-full bg-slate-100 dark:text-slate-700'>SQL</span>
          <span className='px-4 py-1 rounded-full bg-slate-100 dark:text-slate-700'>MySQL</span>
         </div>
      </section>
      <section id='contact' className='py-10 px-10'>
       <h2 className='text-4xl font-display font-bold pb-2'>Contact</h2>
       <form className='grid gap-4 max-w-lg'>
          <input placeholder='Name' className=' w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand' />
          <input placeholder='Email' className=' w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand' />
          <textarea  placeholder='Message' className=' w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand'></textarea>
          <button className='bg-brand text-white px-6 py-3 rounded-lg hover:opacity-90'>Send</button>
       </form>
      </section>
   
  </div>
  )
}

// https://www.youtube.com/watch?v=SWCgy9RH3Jk&t=4s

export default App