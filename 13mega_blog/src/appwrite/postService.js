import { Client, Databases, Storage, ID } from "appwrite";
import { conf } from "./index";
class Service {
    client;
    databases;
    bucket;
    constructor() {
        this.client = new Client();
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    //post service methods  

    async createPost(slug, { content, title, status, imageUrl, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                { content, title, status, imageUrl, userId }
            );
        } catch (error) {
            console.log("Appwrite::createPost::error::", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
            return true
        } catch (error) {
            console.log("Appwrite::deletePost::error::", error);
            return false
        }
    }

    async updatePost(slug, { content, title, status, imageUrl, userId }) {
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, { content, title, status, imageUrl, userId })
        } catch (error) {
            console.log("Appwrite::updateDocument::error::", error);
            return null
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
        } catch (error) {
            console.log("Appwrite::getPost::error::", error);
        }
        return null
    }

    async getPosts(queries = [/*Query.equal("status", "active")*/]) {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries);
        } catch (error) {
            console.log("Appwrite::getPosts::error::", error);
            return null
        }
    }

    //file service methods

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file)
        } catch (error) {
            console.log("Appwrite::uploadFile::error::", error.message);
            return null;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId, fileId)
            return true
        } catch (error) {
            console.log("Appwrite::deleteFile::error::", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    }

}
export default new Service();
