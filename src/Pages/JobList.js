// modules
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebase from "../Components/Firebase";

const JobList = () => {

  // Need to fix "Warning: Each child in a list should have a unique "key" prop."
  // define state
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    // create a variable that holds our database details
    const database = getDatabase(firebase)
    // we then create a variable that makes reference to our database
    const dbRef = ref(database, "/jobs")
    onValue(dbRef, (response) => {
      const newState = [];
      // store the response from our query to Firebase inside of a variable called data.
      // .val() is a Firebase method to parse our database info the way we want it
      const data = response.val();
      for (let key in data) {
        newState.push(data[key]);
      }
      setJobs(newState)
      console.log(response.val());
    })
  }, [])
  return (
    <div className="job-list">
      <h2>Hey, a jobs list.</h2>
      <ul>
        {jobs.map((job, index) => {
          console.log(job)
          return (
            <li key={index}>
              <p>{job.title}</p>
              <p>{job.employer}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default JobList;