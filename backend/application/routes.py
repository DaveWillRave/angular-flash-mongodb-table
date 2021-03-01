from flask import jsonify
from application.models import User, Home, Sex
from application import app, api
from flask_restplus import Resource
from application import personData
from bson.objectid import ObjectId



################
@api.route("/api", "/api/")
class UserAll(Resource):

    def get(self):
        return jsonify(personData.listaggregate())
        # return jsonify(User.objects.all())

    def post(self):
            userdata = api.payload
            User(name=userdata['name'], age=userdata['age'], address=Home(addressline1=userdata['address']['addressline1'], addressline2=userdata['address']['addressline2'], eircode=userdata['address']['eircode']), gender=Sex(_id=userdata['gender'])).save()
        # User(name="Bob", age="20", address=Home(addressline1="den", addressline2="123", eircode="T00H00"), gender="602e76b6ae5170004c8f254f").save()

@api.route("/api/<user_id>")
class UserId(Resource):

    def get(self, user_id):
        # try:
            # user = User.objects(_id=user_id)[0]._id
        return jsonify(personData.singleUserAggregate(user_id))
            # return jsonify(User.objects.get(_id=user_id))
        # except Exception as e:
        #     return jsonify({'response': 'Sorry this user does not exist'})
    ################

    def delete(self, user_id):
        try:
            # This user object returns an array of objects but we're only interested in the object of this array
            name = User.objects(_id=user_id)[0].name
            if User.objects(_id=user_id).delete():
                print('Delete was successful')
            return jsonify({'response': f'The user {name} has been deleted'})
        except Exception as e:
            return jsonify({'response': 'An error has occurred'})


    def put(self, user_id):
        userdata = api.payload
        userdata['gender'] = ObjectId(userdata['gender'])
        User.objects(_id=user_id).update(**userdata)
        return jsonify(User.objects(_id=userdata['_id']))

# Creating the data



