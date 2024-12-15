import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

// Initialize admin user
const initializeAdminUser = async () => {
  const email = import.meta.env.VITE_ADMIN_EMAIL;
  const password = import.meta.env.VITE_ADMIN_PASSWORD;

  try {
    // First try to sign in
    await signInWithEmailAndPassword(auth, email, password);
  } catch (signInError: any) {
    // If user doesn't exist, create it
    if (signInError.code === 'auth/user-not-found') {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('Admin user created successfully');
      } catch (createError: any) {
        if (createError.code !== 'auth/email-already-in-use') {
          console.error('Error creating admin user:', createError);
        }
      }
    }
  }
};

// Only initialize admin user if we're not in development mode
if (import.meta.env.MODE === 'production') {
  initializeAdminUser();
}