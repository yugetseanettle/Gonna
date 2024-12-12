import { auth, provider } from "../lib/firebase/Firebase";
import {
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

const useAuth = (closeModal: () => void) => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const signInWithGoogle = () => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithPopup(auth, provider).then((result) => {
          console.log(result);
          closeModal();
        });
      })
      .catch((error) => {
        if (error.code === "auth/popup-closed-by-user") {
          console.error(
            "The popup has been closed by the user before finalizing the operation.",
          );
        } else {
          console.error("Error setting persistence:", error);
        }
      });
  };

  const signInWithEmail = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        closeModal();
      })
      .catch((error) => {
        console.error("Error signing in with email:", error);
      });
  };

  const signUpWithEmail = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        closeModal();
      })
      .catch((error) => {
        console.error("Error signing up with email:", error);
      });
  };

  const signOutWithGoogle = () => {
    auth.signOut();
    closeModal();
  };

  return {
    user,
    signInWithGoogle,
    signOutWithGoogle,
    signInWithEmail,
    signUpWithEmail,
  };
};

export default useAuth;
