from flask import Flask, jsonify
import os
import pymongo

app = Flask(__name__)

@app.route('/jokes', methods=['GET'])
def get_jokes():
    db = pymongo.MongoClient(os.environ['MONGO_URI'])['jokes']
    joke = db.jokes.aggregate([{ '$sample': { 'size': 1 } }]).next()
    return jsonify({'joke': joke['text']})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 11000)))
    
