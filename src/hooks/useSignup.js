import { useState, useEffect } from "react";
import {
  projectAuth,
  projectStorage,
  projectFirestore,
} from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

// custom hook for user sign up
export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext(); // get dispatch function from useAuthContext hook

  // signup function that takes in user input values
  const signup = async (email, password, displayName, thumbnail) => {
    setError(null); // clear any previous error message
    setIsPending(true); // set isPending to true to show loading spinner

    try {
      // create new user account with Firebase auth
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        // if there is no response from the server, throw an error
        throw new Error("Could not complete signup");
      }

      // set up a path to upload user thumbnail to Firebase storage
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;
      const img = await projectStorage.ref(uploadPath).put(thumbnail);
      const imgUrl = await img.ref.getDownloadURL();

      // add display name and photo URL to user profile
      await res.user.updateProfile({ displayName, photoURL: imgUrl, email });

      // create a user document in Firestore
      await projectFirestore
        .collection("users")
        .doc(res.user.uid)
        .set({
          displayName,
          email,
          online: true,
          photoURL: imgUrl,
        });

      // dispatch login action to update global state
      dispatch({ type: "LOGIN", payload: res.user });

      // if the component is still mounted, set isPending to false and clear any error messages
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      // if the component is still mounted, set error message and set isPending to false
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  // cleanup function to prevent setting state on unmounted component
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  // return the signup function, error message, and isPending state
  return { signup, error, isPending };
};
