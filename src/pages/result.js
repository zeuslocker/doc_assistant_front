import * as React from "react"
import { gql, useQuery } from '@apollo/client';
import Layout from "../components/layout"
import { wrapper } from './result.module.css'
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
        <div className="flex justify-center items-center h-full">
          <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
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


