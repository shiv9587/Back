// Dummy Firebase config, replace with real config in production
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_project_id.firebaseapp.com",
  projectId: "your_project_id",
  storageBucket: "your_project_id.appspot.com",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id"
};
const app = initializeApp(firebaseConfig);
export default app;
