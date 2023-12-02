import { db } from "@/firebase/firebase";
import { Session, User } from "@/types";
import { FirebaseError } from "firebase/app";
import { collection, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { countCheckinUser, fetchUsers, getTodayStart } from ".";

export function useFetchSessions(session: string) {
  const [data, setData] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FirebaseError>();

  useEffect(() => {
    const start = getTodayStart();

    const q = query(
      collection(db, "sessions"),
      where("session", "==", session),
      where("checkin", ">=", start)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const newData: Session[] = [];
        snapshot.forEach((doc) => newData.push(doc.data() as Session));
        setData(newData);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, [session]);

  return { data, loading, error };
}

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => { // use useMemo?
    const fetchData = async () => {
      try {
        const res = await fetchUsers(); // replace with your actual API function
        setUsers(res);

      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return users;
};

export const useEditUsers = () => {
  const updateUser = async (id: string, updatedData: Partial<User>,) => {
    try {
      // Update the user data in Firestore
      await updateDoc(doc(db, 'users', id), updatedData);
      console.log('User data updated in Firestore');

      // Trigger the callback function if provided

    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return { updateUser };
};

export const displayCountCheckinUser = async (userEmail: string) => {
  const checkinCount = await countCheckinUser(userEmail);

  if (checkinCount >= 0) {
    console.log(`User with email ${userEmail} has checked in ${checkinCount} times.`);
    // Display or use the checkinCount as needed
  } else {
    console.error("Failed to get user checkin count.");
    // Handle the error case
  }
};

export function useFetchCountCheckinUser() {
  const users = useFetchUsers();
  const [countSession, setCountSession] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchCheckinUserCounter = async () => {
      const counter: Record<string, number> = {};

      for (const user of users) {
        const checkinCount = await countCheckinUser(user.email);
        counter[user.id] = checkinCount;
      }

      setCountSession(counter);
    };

    fetchCheckinUserCounter();
  }, [users]);

  return countSession;
}