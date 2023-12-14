import * as React from "react"
import { mainWrapper, innerWrapper } from './index.module.css'

const IndexPage = () => {
  return (
    <main className={`${mainWrapper} absolute inset-0 bottom-0 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120]`}>
      <div className={`${innerWrapper} absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5`}></div>
      <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          Enter your symptoms and get an instant diagnosis and treatment advice.
        </h1>
        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
          Analyze the <code className="font-mono font-medium text-sky-500 dark:text-sky-400">symptoms</code> and also takes into account <code className="font-mono font-medium text-sky-500 dark:text-sky-400">medical tests</code> and data from the medical record, if available
        </p>
        <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
          <a className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400" href="/docs/installation">
            Get started
          </a>
          <button type="button" className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true"><path d="m19 19-3.5-3.5"></path><circle cx="11" cy="11" r="6"></circle></svg>
            <span className="flex-auto">Quick search...</span>
            <kbd className="font-sans font-semibold dark:text-slate-500">
              <abbr title="Command" className="no-underline text-slate-300 dark:text-slate-500">⌘</abbr> K</kbd>
          </button>
        </div></div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
