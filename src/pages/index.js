import * as React from "react"
import { fileInput, symptomsInput, errorText } from './index.module.css'
import { navigate } from "gatsby";
import { useForm } from "react-hook-form"
import Layout from "../components/layout"

const maxFileSizeMb = 10

const IndexPage = () => {
  const { register, handleSubmit, formState: { errors }, clearErrors, setError } = useForm();
  const medicalTestsInput = register('medicalTests');
  const medicalCardInput = register("medicalCard")
  const { ref: refSymptoms, ...symptomsInput } = register("symptoms", { required: true })
  const symptomsRef = React.useRef(null)

  const onSubmit = formData => {
    let variables = {
      symptoms: formData.symptoms
    }
    if (formData.medicalTests && formData.medicalTests.length > 0) {
      variables.medicalTests = formData.medicalTests[0]
    }
    if (formData.medicalCard && formData.medicalCard.length > 0) {
      variables.medicalTests = formData.medicalCard[0]
    }
    navigate("/result", { state: { variables: variables } })
  }

  const onChangeFile = (fieldName, event) => {
    clearErrors(fieldName)
    if (event.target.files[0]?.type === undefined) return;
    if (!['image/png', "image/jpeg", "application/pdf"].includes(event.target.files[0].type)) {
      setError(fieldName, {
        type: "fileType",
        message: "Invalid file type"
      });
      return;
    }
    if (event.target.files[0].size / (1024 * 1024) > maxFileSizeMb) {
      setError(fieldName, {
        type: "fileSize",
        message: "Max file size is 10mb"
      });
      return;
    }
    if (fieldName === 'medicalTests') {
      medicalTestsInput.onChange(event)
    } else {
      medicalCardInput.onChange(event)
    }
  }

  if (errors.symptoms) {
    symptomsRef.current.focus()
  }

  return (
    <Layout>
      <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          Enter your symptoms and get an instant diagnosis and treatment advice.
        </h1>
        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
          AI system analyze the <code className="font-mono font-medium text-sky-500 dark:text-sky-400">symptoms</code> and also takes into account <code className="font-mono font-medium text-sky-500 dark:text-sky-400">medical tests</code> and <code className="font-mono font-medium text-sky-500 dark:text-sky-400">medical record</code> data, if available
        </p>
        <div className="mt-6 sm:mt-10 flex flex-col justify-center items-center text-sm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='headache, temperature...' autoFocus type="text" {...symptomsInput} ref={(e) => { refSymptoms(e); symptomsRef.current = e;}} className={`${symptomsInput} w-full text-left space-x-5 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700`}>
            </input>
            <div className='flex space-x-3 justify-center'>
              <div>
                <label className="block my-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Analyses (Optional)</label>
                <input {...medicalTestsInput} onChange={(e) => { medicalTestsInput.onChange(e); onChangeFile('medicalTests', e)}} className={`${fileInput} block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help`} id="file_input" type="file" />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">PNG, JPG, PDF, (max. {maxFileSizeMb}mb).</p>
                <p className={errorText}>{errors?.medicalTests?.message}</p>
              </div>
              <div>
                <label className="block my-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Medical card (Optional)</label>
                <input {...medicalCardInput} onChange={(e) => { medicalCardInput.onChange(e); onChangeFile('medicalCard', e) }} className={`${fileInput} block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help`} id="file_input" type="file" />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">PNG, JPG, PDF, (max. {maxFileSizeMb}mb).</p>
                <p className={errorText}>{errors?.medicalCard?.message}</p>
              </div>
            </div>
            <div className='flex space-x-3 justify-center'>
              <button type="submit" className="bg-slate-900 w-64 mt-10 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
                Get started
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
