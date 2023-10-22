import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { User } from "firebase/auth";

function useAuth(): User | null {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Subscribe to user on mount
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });

        // Unsubscribe on cleanup
        return () => unsubscribe();
    }, []);

    return user;
}

export default useAuth;
