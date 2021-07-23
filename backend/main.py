import pymysql
from app import app
from config import mysql
from flask import jsonify
from flask import flash,request
from datetime import date
import hashlib

# register user!
@app.route('/register',methods=['POST'])
def register():
    try:
        _json = request.json
        _name = _json['name']
        _userId = _json['userId']
        _email = _json['email']
        _phone = _json['phone']
        _profession = _json['profession']
        _password = _json['password']
        _createdAt = date.today()

        #hashing password
        hashed_password = hashlib.md5(_password.encode()).hexdigest()

        if _name and _email and _phone and _password and request.method == 'POST':
            # check user
            conn = mysql.connect()
            cursor1 = conn.cursor(pymysql.cursors.DictCursor)
            cursor1.execute("SELECT * FROM `users` WHERE `email` = %s",_email)
            userRow = cursor1.fetchall()

            if len(userRow) > 0:
                response = {
                    'status': False,
                    'message': 'User already exists'
                }
            else:
                insertUser = "INSERT INTO `users`(`name`, `userId`, `email`, `phone`, `profession`, `password`, `createdAt`) VALUES (%s,%s,%s,%s,%s,%s,%s)"
                bindData = (_name,_userId,_email,_phone,_profession,hashed_password,_createdAt)
                cursor = conn.cursor()
                cursor.execute(insertUser,bindData)
                conn.commit()
                response = {
                    'status': True,
                    'message': 'User registered successfully!'
                }

            responseArray = jsonify(response)
            return responseArray
        else:
            return not_found()
    except Exception as e:
        print(e)
    finally:
        # cursor1.close()
        # cursor.close()
        conn.close()

# user login!
@app.route('/login',methods=['POST'])
def login():
    try:
        _json = request.json
        _email = _json['email']
        _password = _json['password']

        conn = mysql.connect()
        if _email and _password and request.method == 'POST':
            # getting salt and db password
            cursor1 = conn.cursor(pymysql.cursors.DictCursor)
            getUser = "SELECT * FROM `users` WHERE `email` = %s"
            cursor1.execute(getUser,_email)
            userData = cursor1.fetchone()
            dbPassword = userData["password"]

            if len(userData) > 0:
                # hashing password!
                hashedPassword = hashlib.md5(_password.encode()).hexdigest()

                if(hashedPassword == dbPassword):
                    response = {
                        'status': True,
                        'message': 'User logged in!',
                        'user': _email
                    }
                else:
                    response = {
                        'status': False,
                        'message': 'Password does not match'
                    }
            else:
                response = {
                        'status': False,
                        'message': 'User does not exist'
                }

            responseArray = jsonify(response)
            return responseArray

        else:
            return not_found()

    except Exception as e:
        print(e)
    finally:
        cursor1.close()
        conn.close()

# fetching user details!
@app.route('/user/<string:email>')
def getUser(email):
    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute("SELECT `name`, `userId`, `email`, `phone`, `profession` FROM `users` WHERE `email` = %s",email)
        userRow = cursor.fetchone()

        if len(userRow) > 0:
            response = {
                'status': True,
                'message': 'User details fetched',
                'userData': userRow
            }
        else:
            response = {
                'status': False,
                'message': 'User does not exist!'
            }
        responseArray = jsonify(response)
        return responseArray

    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()

# get a particular issue!
@app.route('/get-issue/<int:id>')
def getIssueById(id):
    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute('SELECT * FROM `issue` WHERE `id` = %s',id)
        issueRow = cursor.fetchone()

        if(len(issueRow) > 0):
            response = {
                'status': True,
                'message': 'User details fetched',
                'issueData': issueRow 
            }
        else:
            response = {
                'status': False,
                'message': 'Unable to find issue!'
            }
        responseArray = jsonify(response)
        return responseArray
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()

# fetch issues based on the profession picked!
@app.route('/issues')
def getIssues():
    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute('SELECT * FROM `issue`')
        issueData = cursor.fetchall()

        if len(issueData) > 0:
            response = {
                'status': True,
                'message': 'Fetched!',
                'issues': issueData
            }
        else:
            response = {
                'status': False,
                'message': 'Unable to fetch!'
            }

        responseArray = jsonify(response)
        return responseArray

    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()

# post an issue!
@app.route('/post-an-issue',methods=['POST'])
def postIssue():
    try:
        _json = request.json
        _name = _json['name']
        _brief = _json['brief']
        _phone = _json['phone']
        _address = _json['address']
        _technician = _json['technician']
        _description = _json['description']
        _createdAt = date.today()

        if _name and _brief and _description and _phone and _address and _technician and request.method == 'POST':
            postIssue = "INSERT INTO `issue`(`name`, `brief`, `phone`, `address`, `technician`, `description`, `createdAt`) VALUES(%s,%s,%s,%s,%s,%s,%s)"
            bindData = (_name,_brief,_phone,_address,_technician,_description,_createdAt)
            conn = mysql.connect()
            cursor = conn.cursor()
            cursor.execute(postIssue,bindData)
            conn.commit()
            response = {
                'status': True,
                'message': 'Issue posted'
            }
        else:
            response = {
                'status': False,
                'message': 'Please fill the details properly'
            }
        
        responseArray = jsonify(response)
        return response

    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()

@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Record not found: ' + request.url,
    }
    response = jsonify(message)
    response.status_code = 404
    return response
		
if __name__ == "__main__":
    app.run()
        