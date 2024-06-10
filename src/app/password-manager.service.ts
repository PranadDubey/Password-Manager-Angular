import { Injectable } from '@angular/core';
import { getApp } from '@angular/fire/app';
import {
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  deleteDoc,
  Firestore,
} from '@angular/fire/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class PasswordManagerService {
  // Initialize Firebase

  app = getApp();
  authenticity = getAuth(this.app);
  constructor(private firestore: Firestore) {
    console.log('manager service constructed!');
  }

  storeData(value: any) {
    const dbInstance = collection(this.firestore, 'sitePasswords');
    return addDoc(dbInstance, value);
  }

  loadForm() {
    const dbInstance = collection(this.firestore, 'sitePasswords');
    return collectionData(dbInstance, { idField: 'id' });
  }

  updateForm(id: string, data: object) {
    const docInstance = doc(this.firestore, 'sitePasswords', id);
    return updateDoc(docInstance, data);
  }

  deleteForm(id: string) {
    const docRef = doc(this.firestore, 'sitePasswords', id);
    return deleteDoc(docRef);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.authenticity, email, password);
  }
  create(email: string, password: string) {
    return createUserWithEmailAndPassword(this.authenticity, email, password);
  }
}
