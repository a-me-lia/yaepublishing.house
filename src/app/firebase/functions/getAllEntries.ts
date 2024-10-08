import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../config';

// Function to get all entries for a specific user
export const getAllEntries = async (userId: string) => {
  try {
    const q = query(
      collection(db, 'diaryEntries'),
      where('userId', '==', userId),
      orderBy('timestamp', 'desc')
    );

    const querySnapshot = await getDocs(q);

    const entries = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return { success: true, entries };
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error adding entry: ', error);
      return { success: false, error: error.message };
    }
  }
};
