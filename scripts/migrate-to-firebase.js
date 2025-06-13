import PocketBase from 'pocketbase';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBqxPO-UPRoXgtNCPcYnKpI_Of4UeUyGAg",
  authDomain: "echo-safe-bbf9e.firebaseapp.com",
  projectId: "echo-safe-bbf9e",
  storageBucket: "echo-safe-bbf9e.appspot.com",
  messagingSenderId: "368915484383",
  appId: "1:368915484383:web:a57e97259eea20930ae36a",
  measurementId: "G-8F7PCCQEQT"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialiser PocketBase
const pb = new PocketBase("https://pocketbase-echo-safe.fly.dev/");

// Fonction pour nettoyer les objets (remplacer undefined par null ou "")
function cleanObjectForFirestore(obj) {
  const cleanObj = {};
  for (const key in obj) {
    // Si la valeur est undefined, la remplacer par une chaîne vide
    cleanObj[key] = obj[key] === undefined ? "" : obj[key];
    
    // Si la valeur est null, la garder comme null
    if (obj[key] === null) {
      cleanObj[key] = null;
    }
  }
  return cleanObj;
}

async function migrateData() {
  try {
    // 1. Migrer les utilisateurs
    console.log("Migration des utilisateurs...");
    const users = await pb.collection("users").getFullList();
    
    for (const user of users) {
      // Préparer l'objet utilisateur en remplaçant les undefined
      const userData = cleanObjectForFirestore({
        pseudo_utilisateur: user.pseudo_utilisateur,
        email: user.email,
        prenom_utilisateur: user.prenom_utilisateur || "",
        nom_utilisateur: user.nom_utilisateur || "",
        role: user.role || "user",
        created_at: new Date(user.created)
      });
      
      console.log(`Migration de l'utilisateur: ${user.id}`);
      await setDoc(doc(db, "users", user.id), userData);
    }
    
    // 2. Migrer les conversations
    console.log("Migration des conversations...");
    const conversations = await pb.collection("conversations").getFullList();
    
    for (const conversation of conversations) {
      // Préparer l'objet conversation en remplaçant les undefined
      const conversationData = cleanObjectForFirestore({
        participants: conversation.participants || [],
        title: conversation.title || "",
        last_message_id: conversation.last_message_id || "",
        created_at: new Date(conversation.created),
        updated_at: new Date(conversation.updated)
      });
      
      await setDoc(doc(db, "conversations", conversation.id), conversationData);
    }
    
    // 3. Migrer les messages
    console.log("Migration des messages...");
    const messages = await pb.collection("messages").getFullList();
    
    for (const message of messages) {
      // Préparer l'objet message en remplaçant les undefined
      const messageData = cleanObjectForFirestore({
        conversation_id: message.conversation_id,
        sender_id: message.sender_id,
        content: message.content,
        read_by: message.read_by || [],
        created_at: new Date(message.created),
        updated_at: new Date(message.updated)
      });
      
      await setDoc(doc(db, "messages", message.id), messageData);
    }
    
    console.log("Migration terminée avec succès !");
    
  } catch (error) {
    console.error("Erreur lors de la migration:", error);
    console.error("Stack trace:", error.stack);
  }
}

// Appeler la fonction de migration après sa définition
migrateData();