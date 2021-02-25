from bson.objectid import ObjectId
from application import db
import flask
from mongoengine import ObjectIdField


# Testing the db and data models
###############


class Home(db.EmbeddedDocument):
    _id = ObjectIdField(required=True, default=ObjectId, unique=True)
    addressline1 = db.StringField()
    addressline2 = db.StringField()
    eircode = db.StringField()


class Sex(db.Document):
    _id = ObjectIdField(required=True, default=ObjectId, unique=True, primary_key=True)
    gender = db.StringField()


class User(db.Document):

    _id = ObjectIdField()
    name = db.StringField()
    age = db.IntField()
    gender = db.ReferenceField(Sex, required=True)
    address = db.EmbeddedDocumentField(Home)


###############


# class Address(db.EmbeddedDocument):
#     oid     =   ObjectIdField( primary_key=True, default=ObjectId, unique=True, required=True )
#     address_line1 =   db.StringField()
#     address_line2 =   db.StringField()
#     eircode = db.StringField()
#
# class Gender(db.EmbeddedDocument):
#     oid   =   ObjectIdField( primary_key=True, default=ObjectId, unique=True, required=True )
#     gender  =   db.StringField()
#
# class User(db.Document):
#     oid = ObjectIdField()
#     name  =   db.StringField( max_length=50 )
#     gender   =   db.EmbeddedDocumentField( Gender )
#     address = db.ListField(db.EmbeddedDocumentField())
