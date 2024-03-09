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
      await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      return ""
    } catch (error) {
      return error.message;
    }
  }

  async login({ email, password }) {
    try {
      await this.account.createEmailSession(email, password);
      return "";
    } catch (error) {
      return error.message;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("ERROR::getCurrentUser:: ",error.message);
      return null;
    }
    
  }
  async logout() {
    try {
      await this.account.deleteSessions();
      return true;
    } catch (error) {
      console.log("ERROR::logout:: ",error.message);
      return false;
    }
  }
}

export default new AuthService();
