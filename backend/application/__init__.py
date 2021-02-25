from flask import Flask
from config import Config
from flask_mongoengine import MongoEngine
from flask_restplus import Api
from flask_cors import CORS


#  Initialise all of these before the api code
api = Api()
app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
db = MongoEngine(app)
api.init_app(app)

# /api and /api/ for routing towards api

# Is declared if you don't have multiple files
from application import routes







# # app = Flask(__name__)
# #
# #

# Telling object where app is


