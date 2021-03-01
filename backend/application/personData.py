from application.models import User
from bson.objectid import ObjectId

def listaggregate():
    return list(User.objects.aggregate([
        {
            '$lookup':
                {
                    'from': 'gender',
                    'localField': 'gender',
                    'foreignField': '_id',
                    'as': 'gender'
                }
        },
        {
            '$unwind':
                {
                    'path': '$gender'
                }
        },
        {
            '$unwind':
                {
                    'path': "$address"
                }
        },
        {
            '$project':
                {
                    '_id': 0,
                    'id': {'$toString': '$_id'},
                    'name': 1,
                    'age': 1,
                    'gender': '$gender.gender',
                    'address': {
                        '$concat': [
                            '$address.addressline1', ' ', '$address.addressline2', ' ', '$address.eircode'
                        ]
                    }

                }
        }
    ]))

def singleUserAggregate(user_id):
    return list(User.objects.aggregate([
        {
            '$match':
                {
                    '_id': ObjectId(f"{user_id}")
                }
        },
        {
            '$lookup':
                {
                    'from': 'gender',
                    'localField': 'gender',
                    'foreignField': '_id',
                    'as': 'gender'
                }
        },
        {
            '$unwind':
                {
                    'path': '$gender'
                }
        },
        {
            '$unwind':
                {
                    'path': "$address"
                }
        },
        {
             '$project':
                {
                    '_id': 0,
                    'id': {'$toString': '$_id'},
                    'name': 1,
                    'age': 1,
                    'gender': {'$toString': '$gender._id'},
                    'address': { 'id': {'$toString': '$address._id'}, 'addressline1': '$address.addressline1' ,'addressline2': '$address.addressline2', 'eircode': '$address.eircode'
                    }

                }
        }
    ]))
