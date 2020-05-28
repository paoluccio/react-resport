import { auth, firestore, googleProvider } from '../firebase';

export class UserAPI {
  static getProfileReference(id) {
    return firestore.doc(`users/${id}`);
  }

  static signUpWithEmail(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  static signInWithEmail(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  static signInWithGoogle() {
    return auth.signInWithPopup(googleProvider);
  }

  static signOut() {
    return auth.signOut();
  }

  static async syncProfileWithFirestore(id, userData) {
    const profileRef = this.getProfileReference(id);
    const profile = await profileRef.get();
    if (!profile.exists) {
      return profileRef.set({ ...userData, createdAt: new Date() });
    }
  }
}