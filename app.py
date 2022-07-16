import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

import os
import psycopg2
from flask import Flask, render_template, jsonify

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

def get_db_connection():
    conn = psycopg2.connect(host='localhost',
                            database='World_Data',
                            user='postgres',
                            password='postgres')
    return conn

#################################################
# Flask Routes
#################################################

@app.route('/')
def index():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM "World_Data";')
    data = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(data)
    # return render_template('index_.html', data = data)

if __name__ == '__main__':
    app.run(debug=True)
