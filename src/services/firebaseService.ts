import { ABOS } from "@/data";
import { db } from "@/firebase/firebase";
import { Session, User } from "@/types";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getTodayStart } from ".";

const querySnapshotTest = await getDocs(collection(db, "cities"));
querySnapshotTest.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});


export const fetchSessionUsers = async (session: string) => {
  try {
    const q = query(
      collection(db, "sessions"),
      where("session", "==", session)
    );
    const querySnapshot = await getDocs(q);
    const data: Session[] = querySnapshot.docs.map(
      (doc) => doc.data() as Session
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (user: User) => {
  const q = query(collection(db, "users"), where("email", "==", user.email));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.size == 0) {
    console.log("no user found");
    const abo = ABOS.find((abo) => abo.value === user.abo);

    await addDoc(collection(db, "users"), {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      zipCode: user.zipCode,
      city: user.city,
      abo: abo,
      profileUrl: user.profileUrl,
      role: "user",
    });
    console.log("user created");
  }
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log("user already exists");
    console.log(doc.id, " => ", doc.data());
  });
};

export const fetchUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const usersData = querySnapshot.docs.map((doc) => {

    const userData = doc.data() as User;
    console.log("Document ID:", doc.id);
    return { id: doc.id, ...userData };
  });

  return usersData;
};

export const checkinUser = async (session: string, userData: User) => {
  try {
    const start = getTodayStart();
    const q = query(
      collection(db, "sessions"),
      where("session", "==", session),
      where("checkin", ">=", start),
      where("userData.email", "==", userData.email)
    );

    const querySnapshot = await getDocs(q);
    if (querySnapshot.size > 0) {
      console.log(
        `User with email: ${userData.email} already checked in for session: ${session}`
      );
      return { status: "error", message: "User already checked in" };
    }

    const res = await addDoc(collection(db, "sessions"), {
      checkin: new Date(),
      session,
      userData,
    });

    if (res) {
      return { status: "success", message: "User successfully checked in!" };
    } else {
      return { status: "error", message: "Failed to checkin user" };
    }
  } catch (error) {
    let errorMessage: string;

    if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = "Unknown error";
    }
    return { status: "error", message: errorMessage };
  }
};

export const handleFileUpload = async (
  image: File | null,
  dir: string,
  ending: string
) => {
  const fileName = `images/${dir}/${Date.now()}${ending}`;
  const storage = getStorage();
  const storageRef = ref(storage, fileName);
  if (!image) return;
  const url = await uploadBytes(storageRef, image).then(async () => {
    console.log("File uploaded!");
    console.log("full path", storageRef.fullPath);
    const url = await getDownloadURL(storageRef);
    console.log("url", url);
    return url;
  });
  return url;
};
