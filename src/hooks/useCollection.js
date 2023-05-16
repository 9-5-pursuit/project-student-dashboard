import { useEffect, useState, useRef } from "react";
import { projectFirestore } from "../firebase/config";

// Custom hook that returns documents from a Firestore collection
export const useCollection = (collection, _query, _orderBy) => {
  // State variables for documents and errors
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // useRef hook to store the query and orderBy parameters
  // Prevents an infinite loop in useEffect
  const query = useRef(_query).current;
  const orderBy = useRef(_orderBy).current;

  // useEffect hook that runs when the component mounts
  useEffect(() => {
    // Get a reference to the Firestore collection
    let ref = projectFirestore.collection(collection);

    // Apply any query parameters
    if (query) {
      ref = ref.where(...query);
    }
    if (orderBy) {
      ref = ref.orderBy(...orderBy);
    }

    // Subscribe to changes in the Firestore collection
    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        // Initialize an empty array to hold the results
        let results = [];
        // Loop through each document in the snapshot
        snapshot.docs.forEach((doc) => {
          // Add the document data and ID to the results array
          results.push({ ...doc.data(), id: doc.id });
        });

        // Update the state with the results
        setDocuments(results);
        setError(null);
      },
      (error) => {
        // Log any errors and set the error state variable
        console.log(error);
        setError("could not fetch the data");
      }
    );

    // Unsubscribe from changes in the Firestore collection when the component unmounts
    return () => unsubscribe();
  }, [collection, query, orderBy]);

  // Return the documents and error state variables
  return { documents, error };
};
