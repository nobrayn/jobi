// modules
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebase from "../Components/Firebase";

// assets
import buttonBookmark from "../assets/btn-bookmark.png"

const JobList = () => {

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
    <div className="wrapper-jobs-list">
      <h2>Hey, a jobs list.</h2>
      <div className="job-list">
        {jobs.map((job, index) => {
          // console.log(job)
          return (
            <div className="job-list-container" key={index}>
              <div className="job-list-upper">
                <div className="job-list-upper-l">
                </div>
                <div className="job-list-upper-c">
                  <h3>{job.title}</h3>
                  <div className="job-details">
                    <div className="job-details-salary">{job.salary.max}</div>
                    <div className="job-details-expertise">{job.expertiseLevel}</div>
                    <div className="job-details-location">{job.location.country}, {job.location.city}</div>
                  </div>
                </div>
                <div className="job-list-upper-r">
                  <Link to="#"><img src={buttonBookmark} alt="bookmark" /></Link>
                </div>
              </div>
              <div className="job-list-mid">
                {/* setting a display limit of 20 words */}
                <p>{job.description.split(' ').slice(0, 20).join(' ')}{job.description.split(' ').length > 20 ? "..." : ""}</p>
              </div>
              <div className="job-list-lower">
                <div className="job-list-lower-l">
                  <p>{job.employer}</p>
                  <p>{job.contractType}</p>
                </div>
                <div className="job-list-lower-r">
                  <Link to="/jobDetails">APPLY</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
};

export default JobList;