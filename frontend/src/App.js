import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { RouterProvider } from "react-router-dom";

import auth from "./firebase/firebase.config";
import routes from "./routes/routes";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user", user);
        dispatch(setUser(user.email));
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
