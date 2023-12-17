import * as React from "react"
import { mainWrapper, innerWrapper, fileInput, symptomsInput } from './index.module.css'
import { useQuery } from '@apollo/client';
import { useForm } from "react-hook-form"
const GET_DIAGNOSE_QUERY = gql`
  query getDiagnose($symptoms: String!, $medicalCard: File, $medicalTests: File) {
      getDiagnose(symptoms: $symptoms, medicalCard: $medicalCard, medicalTests: $medicalTests)
  }
`;

const IndexPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    
  };

  return (
    <main className={`${mainWrapper} absolute inset-0 bottom-0 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120]`}>
      <div className={`${innerWrapper} absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5`}></div>
      <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          Enter your symptoms and get an instant diagnosis and treatment advice.
        </h1>
        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
          AI system analyze the <code className="font-mono font-medium text-sky-500 dark:text-sky-400">symptoms</code> and also takes into account <code className="font-mono font-medium text-sky-500 dark:text-sky-400">medical tests</code> and <code className="font-mono font-medium text-sky-500 dark:text-sky-400">medical record</code> data, if available
        </p>
        <div className="mt-6 sm:mt-10 flex flex-col justify-center items-center text-sm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='headache, temperature...' type="text" {...register("symptoms", { required: true })} className={`${symptomsInput} text-left space-x-5 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700`}>
            </input>
            <div className='flex space-x-3 justify-center'>
              <div>
                <label className="block my-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Analyses (Optional)</label>
                <input {...register("medicalTests")} className={`${fileInput} block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help`} id="file_input" type="file" />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG, PDF, (max. 25mb).</p>
              </div>
              <div>
                <label className="block my-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Medical card (Optional)</label>
                <input {...register("medicalСard")}  className={`${fileInput} block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help`} id="file_input" type="file" />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG, PDF, (max. 25mb).</p>
              </div>
            </div>
            <button type='submit' className="bg-slate-900 mt-10 w-64 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
              Get started
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
