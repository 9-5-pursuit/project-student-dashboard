import { useEffect, useState } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

// Custom React hook for logging out a user
export const useLogout = () => {
  // Manage state for isCancelled, error, and isPending using the useState hook
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  // Get the dispatch function and user data from the authentication context using the useAuthContext hook
  const { dispatch, user } = useAuthContext();

  // Function for logging out the user
  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      // Update the user's online status to false in the Firebase Firestore database
      const { uid } = user;
      await projectFirestore
        .collection("users")
        .doc(uid)
        .update({ online: false });

      // Sign the user out of the Firebase authentication system
      await projectAuth.signOut();

      // Dispatch the LOGOUT action to the authentication context
      dispatch({ type: "LOGOUT" });

      // Update state if the hook is not cancelled
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      // Handle errors and update state if the hook is not cancelled
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  // Use the useEffect hook to set isCancelled to true when the component unmounts
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  // Return the logout function, error, and isPending state as an object
  return { logout, error, isPending };
};
