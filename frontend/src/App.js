import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import auth from "./firebase/firebase.config";
import routes from "./routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { setUser, toggleLoading } from "./redux/features/auth/authSlice";

import Loading from "./components/reusable/Loading";

function App() {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user", user);
        dispatch(setUser(user.email));
      } else {
        dispatch(toggleLoading());
      }
    });
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
