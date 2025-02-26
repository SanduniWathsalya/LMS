from flask import Flask, request, jsonify
from flask_mail import Mail, Message

app = Flask(__name__)

# Email configuration (make sure to replace with your actual email credentials)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'youremail@gmail.com'
app.config['MAIL_PASSWORD'] = 'yourpassword'
app.config['MAIL_DEFAULT_SENDER'] = 'youremail@gmail.com'

mail = Mail(app)

# Route to handle the registration form submission
@app.route('/Register', methods=['POST'])
def Register():
    data = request.get_json()

    full_name = data.get('fullName')
    email = data.get('email')
    password = data.get('password')
    confirm_password = data.get('confirmPassword')
    role = data.get('role')

    if not all([full_name, email, password, confirm_password, role]):
        return jsonify({"message": "Please fill in all fields."}), 400

    if password != confirm_password:
        return jsonify({"message": "Passwords do not match."}), 400

    # Create a message to send to the admin (you can customize the message)
    msg = Message(
        'New User Registration',
        recipients=['adminemail@gmail.com'],
    )
    msg.body = f"New registration details:\n\nName: {full_name}\nEmail: {email}\nRole: {role}"

    try:
        mail.send(msg)
        return jsonify({"message": "Registration successful! An admin will review and complete your registration soon."}), 200
    except Exception as e:
        return jsonify({"message": f"Failed to send email. Please try again. Error: {str(e)}"}), 500

# Home route to test the server
@app.route('/')
def home():
    return "Flask API is working!"

if __name__ == '__main__':
    app.run(debug=True)
