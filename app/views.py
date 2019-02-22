from flask import render_template, request, jsonify
from app import app
import numpy as np
import pandas as pd

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')
