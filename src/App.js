import React from "react";
import useFetchJobs from "./api/useFetchjobs";
import { Container } from "react-bootstrap";
import {useState} from 'react'

import {Job} from './components/jobs'

function App() {

  const [ params , setParams ] = useState({})
  const { jobs, loading, error } = useFetchJobs(params );
  

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error....</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job}/> 
      })
      };
      </Container>
  );
}

export default App;
