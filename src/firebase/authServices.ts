import { auth } from "./firebase"; // adjust the import based on your Firebase config location
import { signInWithEmailAndPassword, User } from "firebase/auth";

async function login(email: string, password: string): Promise<User | null> {
    const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
    );
    return userCredential.user;
}

export { login };
