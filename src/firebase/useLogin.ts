import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase"; // adjust the import based on your Firebase config location

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

function useLogout(): [
    () => Promise<void>,
    LoginState
] {
    const [state, setState] = useState<LoginState>({
        isLoading: false,
        error: null,
    });

    const logout = async () => {
        setState({ isLoading: true, error: null });
        try {
            await signOut(auth);
        } catch (error) {
            setState({ isLoading: false, error });
        }
        setState({ isLoading: false, error: null });
    };

    return [logout, state];
}


export { useLogin, useLogout };

