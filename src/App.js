import React from "react";
import useFetchJobs from "./api/useFetchjobs";
import { Container } from "react-bootstrap";
import {useState} from 'react'

import {Job} from './components/jobs'
import {JobsPagination} from './components/jobspagination'
import { SearchForm } from "./components/searchform";

function App() {

  const [ params , setParams ] = useState({})
  const [ page , setPage ] = useState(1);
  const { jobs, loading, error , hasNextPage} = useFetchJobs(params, page );

  function handleParamChange(e) {

    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams( prevParams => {
      return{ ...prevParams , [param]: value}
    })
  }
  

  return (
    <Container className='my-3'>
      <h1 className='mb-4 '>
        Github Jobs
      </h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />

      
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error....</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job}/> 
      })
      };
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />

      </Container>
  );
}

export default App;
