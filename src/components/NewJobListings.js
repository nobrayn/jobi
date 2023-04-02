// modules
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebase from "../Components/Firebase";

// assets
import buttonBookmark from "../assets/btn-bookmark.png"


const NewJobListing = () => {

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
      // console.log(response.val());
    })
  }, [])
  return (
    <div className="wrapper new-job-list">
      {jobs.map((job, index) => {
        // console.log(job)
        return (
          <div className="new-job-list-tile" key={index}>
            <div className="new-job-list-upper">
              <div className="new-job-list-upper-l">
              </div>
              <div className="new-job-list-upper-r">
                <a href="#"><img src={buttonBookmark} alt="bookmark" /></a>
              </div>
            </div>
            <div className="new-job-list-mid">
              <p className="contract-type-btn">{job.contractType}</p>
              <h5>{job.title}</h5>
              <p className="contract-date">{job.date}</p>
            </div>
            <div className="new-job-list-lower">
              <div className="new-job-list-lower-l">
                <p>{job.location.country}, {job.location.city}</p>
              </div>
              <div className="apply-btn">
                <Link to="/jobDetails">APPLY</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
};

export default NewJobListing;