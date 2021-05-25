# talaash
website for talaash

## Setup

After you git clone the respository, create a venv in the backend and activate it in one terminal if you are working on the backend.

### Backend Setup

#### For Mac:

To create the venv:

<code>cd backend</code>
<code>python3 -m venv venv</code>

To activate it from the backend directory:

<code>source venv/bin/activate</code>

To get all the resources we are using, after activating the venv run the following command:

<code>pip install -r requirements.txt</code>

If you pip install anything, make sure you are doing it in the venv and then do. (This overwrites the file with your pip installs so make sure yours is up to date using the above command):

<code>pip freeze > requirements.txt</code>

Run server

<code>flask run</code>

### Frontend Setup

#### For Mac

<code>cd frontend</code>

To get all the resources that everyone has installed use:
<code>npm install</code>

To start the server run (when you save changes you do not have to restart the server it'll update automatically - good for development):
<code>npm start</code>

To create a production build run the following command (do not use this for local testing):
<code>npm run build</code>







