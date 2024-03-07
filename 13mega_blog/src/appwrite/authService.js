import { Client, Account, ID } from "appwrite";
import conf from "./conf";

class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId)
    this.account = new Account(this.client);
  }

  async createAccount({ name, email, password }) {
    try {
      return await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
    } catch (error) {
      console.log("ERROR::createAccount:: ",error.message);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("ERROR::login:: ",error.message);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("ERROR::getCurrentUser:: ",error.message);
    }
    return null;
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("ERROR::logout:: ",error.message);
    }
  }
}

export default new AuthService();
