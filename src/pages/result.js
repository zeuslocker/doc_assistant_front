import * as React from "react"
import { gql, useQuery } from '@apollo/client';

const GET_DIAGNOSE_QUERY = gql`
  query getDiagnose($symptoms: String!, $medicalCard: File, $medicalTests: File) {
      getDiagnose(symptoms: $symptoms, medicalCard: $medicalCard, medicalTests: $medicalTests)
  }
`;

const ResultPage = (props) => {
  const { loading, error, data } = useQuery(GET_DIAGNOSE_QUERY, { variables: props.location.state.variables } );
  if(loading) {
    return <h1>loading</h1>
  } else {
    return <h1>{data.getDiagnose}</h1>
  }
}

export default ResultPage
export const Head = () => <title>Result Page</title>
