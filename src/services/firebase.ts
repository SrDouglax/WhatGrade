import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBRNsLFMsFOMk_THwZaJc5jckTxXeKxc94",
  authDomain: "what-grade.firebaseapp.com",
  projectId: "what-grade",
  storageBucket: "what-grade.appspot.com",
  messagingSenderId: "7978932467",
  appId: "1:7978932467:web:c76ca1120417fe3ab0bf86",
  measurementId: "G-QLST74L48L",
};

const app = initializeApp(firebaseConfig);

const fdb = getFirestore(app);

interface suggestionType {
  sender: string;
  suggestion: string;
  date: Date;
}

export const firestore = {
  addSuggestion: async (suggestion: suggestionType) => {
    return await addDoc(collection(fdb, "suggestions"), {
      sender: suggestion.sender,
      suggestion: suggestion.suggestion,
      date: suggestion.date,
    });
  },
};
