import { db } from "@/firebase/firebase";
import { Session } from "@/types";
import { FirebaseError } from "firebase/app";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getTodayStart } from ".";

function useFetchSessions(session: string) {
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

export default useFetchSessions;
