import * as React from "react"
import { gql, useQuery } from '@apollo/client';
import Layout from "../components/layout"
import { HashLoader } from 'react-spinners'
import { wrapper, loaderText } from './result.module.css'
const GET_DIAGNOSE_QUERY = gql`
  query getDiagnose($symptoms: String!, $medicalCard: File, $medicalTests: File) {
      getDiagnose(symptoms: $symptoms, medicalCard: $medicalCard, medicalTests: $medicalTests)
  }
`;

const ResultPage = (props) => {
  const { loading, error, data } = useQuery(GET_DIAGNOSE_QUERY, { variables: props.location.state?.variables } );
  if(!loading) {
    var splitData = data.getDiagnose.split(/(Diagnosis:|Indications for medication:|Contradictions:)/)
  }

  return <div className={wrapper}>
    {
      loading ?
        <div className="flex flex-col justify-center items-center h-screen">
          <div><HashLoader color="#36d7b7" /></div>
          <h2 className={`${loaderText} mt-5`}>Usually take 15-30 seconds</h2>
        </div>
        :
        <div className='relative max-w-5xl mx-auto p-10 not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25'>
          <div className="max-h-full relative rounded-xl overflow-auto md:px-8 gap-8 text-slate-900 dark:text-slate-200">
            <p className='text-xl md:text-2xl'>
              {
                data.getDiagnose.includes('Diagnosis:') ?
                  <>
                    <b>DIAGNOSIS:</b> {splitData[2]} <br /><br />
                    <b>Indications for medication:</b> {splitData[4]} <br /><br />
                    <b>Contradictions:</b> {splitData[6]} <br /><br />
                  </>
                  : data.getDiagnose
              }
            </p>
          </div>
        </div>
    }
  </div>
}

export default ResultPage
export const Head = () => <title>Result Page</title>


