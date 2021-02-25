from application.models import User


def useraggregate():
    return list(User.objects.aggregate(*[
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
                    'path': "$house"
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
                    'house': {
                        '$concat': [
                            '$house.house', ' ', '$house.eircode']

                    }
                }
        }
    ]))
