## Django Hello World

The **"Hello, World!"** is a program built using [ReactJS](https://reactjs.org/) for clientside (frontend) & [Django](https://www.djangoproject.com/) for serverside (backend).

**[React](https://reactjs.org/)** is a declarative, efficient, and flexible front-end JavaScript library for building user interfaces based on UI components.

**[Django](https://www.djangoproject.com/)** is a free high-level, Python-based web framework that follows the model–template–views architectural patterns & enables rapid development of secure and maintainable websites

<br />

### How to run it ?

1. Clone this repo
   ```bash
   git clone <this-repo>
   ```
2. Setup & activate python env
   ```bash
   cd <this-repo>
   python -m venv env
   source env/Scripts/activate
   ```
3. Install django
   ```bash
   pip install django
   ```
4. Install node modules
   ```bash
   cd client
   npm install
   ```
5. Build project
   ```bash
   npm run build
   ```
6. Start django server
   ```bash
   cd ..
   python manage.py runserver
   ```
