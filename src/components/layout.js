import React from "react"
import { mainWrapper, innerWrapper } from './layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={`${mainWrapper} absolute inset-0 bottom-0 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120]`}>
      <div className={`${innerWrapper} absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5`}></div>
      {children}
    </div>
  )
}
