from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
from db.db import connection
import pymysql

with connection: 
    cursive = connection.cursor()
    app = Flask(__name__)
    CORS(app)

    @app.route('/api/v1/', methods=["POST"])
    def index():
        global cursive
 
        req = request.json
        quiz = []

        cursive.execute("SELECT `name`, `test_index`, `presentation`, `question`, `data`, `label`  FROM db_excel")
        rows = cursive.fetchall()

        for index in range(len(rows)):
            quiz.append(rows[index])
        return jsonify({ "testers": quiz})
    
    @app.route('/api/v2/', methods=["POST"])
    def excel():
        global cursive
        req = request.json
        for i in range(len(req)):
            sql = "INSERT INTO db_excel(`name`, `test_index`, `presentation`, `question`, `data`, `label`) VALUES (%s,%s,%s,%s,%s,%s)"
            cursive.execute(sql, (req[i][0],req[i][1],req[i][2],req[i][3],req[i][4],req[i][5]))
        return jsonify({ "testers": "success"})

    if __name__ == "__main__":
        app.run(host="192.168.142.68")

