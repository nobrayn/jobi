// modules
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebase from "../Components/Firebase";

const JobDetails = () => {

  // Testing Firebase below. Receiving data. Hooray!
  // Need to fix "Warning: Each child in a list should have a unique "key" prop."
  const [test, setTest] = useState([]);
  useEffect(() => {
    // create a variable that holds our database details
    const database = getDatabase(firebase)
    // we then create a variable that makes reference to our database
    const dbRef = ref(database)
    onValue(dbRef, (response) => {
      const newState = [];
      // here we store the response from our query to Firebase inside of a variable called data.
      // .val() is a Firebase method that gets us the information we want
      const data = response.val();
      for (let key in data) {
        newState.push(data[key]);
        setTest(newState)
      }
      // here we use Firebase's .val() method to parse our database info the way we want it
      console.log(response.val());
    })
  }, [])
  return (
    <div className='firebase-test'>
      <ul>
        {test.map((test) => {
          return (
            <li key={test.id}>
              <p>These are job details</p>
              <p>{test}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default JobDetails;