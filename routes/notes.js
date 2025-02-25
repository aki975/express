var express = require('express');
var router = express.Router();
const cors = require('cors');
require('dotenv').config();

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri =   process.env.MONGODB_URI; 
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');

// idが1のドキュメントを取得
const query = { id: 2 };
const note = await notes.findOne(query);
res.json(note); })
module.exports = router;

// レスポンスのデータ(ノート全件)
 const responseObjectDataAll = { 
	textObject1 : {
		id: 1,
		title: 'ノート1のタイトルです', 
		subTitle: 'ノート1のサブタイトルです', 
		bodyText: 'ノート1の本文です'
	},
	textObject2 : {
		id: 2,
		title: 'ノート2のタイトルです', 
		subTitle: 'ノート2のサブタイトルです', 
		bodyText: 'ノート2の本文です'
	},
};

/**
* メモを全件取得するAPI
* @returns {Object[]} data
* @returns {number} data.id - ID
* @returns {string} data.title - タイトル 
* @returns {string} data.text - 内容
*/
router.get('/', function (req, res, next) { 
	// 全件取得して返す 
	res.json(responseObjectDataAll);
})

module.exports = router;