import { doc, setDoc } from 'firebase/firestore';
import { db } from '../config';

// Function to add a new diary entry
export const addEntry = async (userId: string, content: string) => {
  try {
    const timestamp = new Date();

    // Create a new document in Firestore for the user's entry
    const docRef = doc(db, 'diaryEntries', `${userId}_${timestamp.getTime()}`);

    await setDoc(docRef, {
      userId,
      content,
      timestamp,
    });

    return { success: true, message: 'Entry added successfully!' };
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error adding entry: ', error);
      return { success: false, error: error.message };
    }
  }
};
