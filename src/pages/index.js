import * as React from "react"
import { mainWrapper, innerWrapper } from './index.module.css'

const IndexPage = () => {
  return (
    <main className={`${mainWrapper} absolute inset-0 bottom-0 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120]`}>
      <div class={`${innerWrapper} absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5`}></div>
      <div class="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <h1 class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          Enter your symptoms and get an instant diagnosis and treatment advice.
        </h1>
        <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
          Analyze the <code class="font-mono font-medium text-sky-500 dark:text-sky-400">symptoms</code> and also takes into account <code class="font-mono font-medium text-sky-500 dark:text-sky-400">medical tests</code> and data from the medical record, if available
        </p>
        <div class="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
          <a class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400" href="/docs/installation">
            Get started
          </a>
          <button type="button" class="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true"><path d="m19 19-3.5-3.5"></path><circle cx="11" cy="11" r="6"></circle></svg>
            <span class="flex-auto">Quick search...</span>
            <kbd class="font-sans font-semibold dark:text-slate-500">
              <abbr title="Command" class="no-underline text-slate-300 dark:text-slate-500">⌘</abbr> K</kbd>
          </button>
        </div></div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
