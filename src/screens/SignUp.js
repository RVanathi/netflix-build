import React, { useRef } from "react";
import db, { auth } from "../firebase";
import "../screens/signUp.css";

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log("Authenticated user:", authUser);
        console.log(authUser.user.uid);
        db.collection("customers")
          .doc(authUser.user.uid)
          .set({ savedShows: [] })
          .then((saved) => {
            console.log(typeof saved);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="sign-up">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="sumbit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="sign-up-gray">New to Netflix? </span>
          <span className="sign-up-link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
