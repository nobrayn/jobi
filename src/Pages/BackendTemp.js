// list of jobs as starting point
import jobsData from "../jobsData";

// components
import firebase from "../Components/Firebase";

// modules
import { getDatabase, ref, push } from 'firebase/database';

// recycle this code for a "job creation" page. Add form data in the return, and have the onClick push a new job object to the database.

// future goals, with user authentication set up, users can then delete job postings that they have created. With wonderful code that'll be here some day.

const BackendTemp = () => {

  const addJobs = (jobObject) => {
    const db = getDatabase(firebase);
    const jobsRef = ref(db, "/jobs");

    push(jobsRef, jobObject)
      .then(() => {
        console.log("added! Nice!");
      })
      .catch((error) => {
        console.log("wrong! error! bad!", error);
      })
  }

  const handleClick = () => {
    for (let i = 0; i < jobsData.length; i++) {
      console.log(jobsData[i])
      addJobs(jobsData[i]);
    }
  };

  return (
    <>
    <h1>Testing some data upload stuff</h1>
    <button onClick={handleClick}>Do the thing</button>
    </>
  )
};

export default BackendTemp;