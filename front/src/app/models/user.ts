//user model
export interface User {
  _id: string;
  firstName: String;
  lastName: String;
  phone: String;
  email: String;
  birthday: Date;
  likedBooks: String[];
  purchased: String[];
  role: String;
  favorites: String[];
  orders: String[];
  createdAt: Date;
  updatedAt: Date;
}
