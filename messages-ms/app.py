from flask import Flask, jsonify
import os
import pymongo
import random

app = Flask(__name__)

@app.route('/messages', methods=['GET'])
def get_messages():
    db = pymongo.MongoClient(os.environ['MONGO_URI'])['messages']
    template = db.templates.aggregate([{ '$sample': { 'size': 1 } }]).next()
    message = template['text'].replace('{name}', random.choice(db.names))
    return jsonify({'message': message})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 11001)))
