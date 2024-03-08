const { MongoClient } = require("mongodb");

class MongoDB {
    static connect = async (uri) => {
        if (this.client) {
            return this.client;
        }
        this.client = await MongoClient.connect(uri);

        // Tạo bảng 'contacts' nếu nó không tồn tại
        await this.client.db().createCollection('contacts');

        return this.client;
    };
}

module.exports = MongoDB;