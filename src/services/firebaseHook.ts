import { db } from "@/firebase/firebase";
import { Session, User } from "@/types";
import { FirebaseError } from "firebase/app";
import { collection, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { fetchUsers, getTodayStart } from ".";

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