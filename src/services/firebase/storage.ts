import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import { storage, db } from '../../config/firebase';

export const updateProfilePicture = async (userId: string, file: File): Promise<string> => {
  // Create a reference to the file location
  const storageRef = ref(storage, `profile-pictures/${userId}`);
  
  // Upload the file
  await uploadBytes(storageRef, file);
  
  // Get the download URL
  const downloadURL = await getDownloadURL(storageRef);
  
  // Update the user's profile in Firestore
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, {
    avatar: downloadURL,
    updatedAt: new Date()
  });
  
  return downloadURL;
};