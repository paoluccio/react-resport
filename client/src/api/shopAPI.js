import { firestore } from '../firebase';

export class ShopAPI {
  static async getCategories(gender) {
    const categoriesSnapshot = await firestore
      .doc(`shop/${gender}`)
      .get();
    const { categories } = categoriesSnapshot.data();
    return categories.sort();
  }

  static async getProducts(gender, category) {
    const productsSnapshot = await firestore
      .collection(`shop/${gender}/${category}`)
      .orderBy('brand')
      .get();

    const products = productsSnapshot.docs.map(productDoc => ({
      id: productDoc.id,
      gender,
      category,
      ...productDoc.data()
    }));

    return products;
  }
}