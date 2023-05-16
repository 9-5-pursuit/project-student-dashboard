import { useState, useEffect } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  // Initialize state variables
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  // Get dispatch function from AuthContext
  const { dispatch } = useAuthContext();
  // console.log(dispatch);

  // Define login function
  const login = async (email, password) => {
    // Reset error and isPending
    setError(null);
    setIsPending(true);

    try {
      // Call Firebase signInWithEmailAndPassword function
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      // update user online status
      await projectFirestore
        .collection("users")
        .doc(res.user.uid)
        .update({ online: true });

      // Dispatch a LOGIN action to AuthContext with the user object
      dispatch({ type: "LOGIN", payload: res.user });

      // Check if component is still mounted
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  // Clean up function to avoid memory leaks
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  // Return login function and state variables
  return { login, isPending, error };
};
