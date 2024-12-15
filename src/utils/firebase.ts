import { collection, doc, setDoc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../config/firebase';

// Content Management
export const saveContent = async (content: any) => {
  try {
    await setDoc(doc(db, 'content', 'main'), content);
    return true;
  } catch (error) {
    console.error('Error saving content:', error);
    throw error;
  }
};

export const getContent = async () => {
  try {
    const docRef = doc(db, 'content', 'main');
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch (error) {
    console.error('Error getting content:', error);
    throw error;
  }
};

// Image Upload
export const uploadImage = async (file: File, path: string) => {
  try {
    const storageRef = ref(storage, `images/${path}/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};