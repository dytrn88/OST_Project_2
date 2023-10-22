// useLogin.ts

import { useState } from "react";
import { auth } from "./firebase"; // adjust the import based on your Firebase config location
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";

interface LoginState {
    isLoading: boolean;
    error: FirebaseError | null;
}

function useLogin(): [
    (email: string, password: string) => Promise<void>,
    LoginState
] {
    const [state, setState] = useState<LoginState>({
        isLoading: false,
        error: null,
    });

    const login = async (email: string, password: string) => {
        setState({ isLoading: true, error: null });
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setState({ isLoading: false, error });
        }
        setState({ isLoading: false, error: null });
    };

    return [login, state];
}

export default useLogin;
