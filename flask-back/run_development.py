from app import create_app
from app.models import db

app = create_app()


@app.before_request
def create_tables():
    db.create_all()

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000)
