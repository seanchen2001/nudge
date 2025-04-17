from flask import Flask, render_template, request, redirect, url_for, session, flash
import os
import psycopg2
from werkzeug.security import check_password_hash

app = Flask(__name__)
app.secret_key = 'your_secret_key'

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# PostgreSQL DB credentials
DB_PARAMS = {
    'dbname': 'your_db',           # ← change this
    'user': 'Interlix',
    'password': 'Argentina123',
    'port': '5432'
}

def get_user_by_username(username):
    conn = psycopg2.connect(**DB_PARAMS)
    cur = conn.cursor()
    cur.execute("SELECT id, username, password FROM users WHERE LOWER(username) = LOWER(%s)", (username,))
    user = cur.fetchone()
    cur.close()
    conn.close()
    return user

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password_input = request.form.get('password')
        user = get_user_by_username(username)

        if user and user[2] == password_input:  # Direct comparison with plaintext password
            session['user_id'] = user[0]
            session['username'] = user[1]
            return redirect(url_for('upload'))
        else:
            flash('Invalid username or password', 'error')

    return render_template('login.html')

@app.route('/upload', methods=['GET', 'POST'])
def upload():
    if 'user_id' not in session:
        return redirect(url_for('login'))

    if request.method == 'POST':
        file = request.files.get('pdf_file')
        if file and file.filename.endswith('.pdf'):
            file.save(os.path.join(UPLOAD_FOLDER, file.filename))
            flash('File uploaded successfully!', 'success')
        else:
            flash('Please upload a valid PDF.', 'error')

    return render_template('index.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)

@app.route('/')
def home():
    return redirect(url_for('login'))
