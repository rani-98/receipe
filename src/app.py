from flask import Flask, make_response, request, jsonify
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    jwt_required,
    get_jwt_identity,
)
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Configuration for JWT
app.config["JWT_SECRET_KEY"] = "your-secret-key"  # Change this!

jwt = JWTManager(app)
# static files location
app.static_folder = "server_static"

users = {}

recipes = [
    {
        "id": 1,
        "name": "Egg Salad",
        "description": "A delicious egg salad recipe",
        "ingredients": ["eggs", "mayo", "mustard"],
        "username": "Ratna Kumari",
        "time": 10,
        "servers": 2,
        "image": "https://www.veggieinspired.com/wp-content/uploads/2021/05/raw-veggie-chopped-salad-featured.jpg",
        "type": "breakfast",
        "ingredients": ["eggs", "mayo", "mustard"],
        "steps": [
            "Boil the eggs",
            "Mix the eggs with mayo and mustard",
            "Serve the egg salad",
        ],
    },
    {
        "id": 2,
        "name": "Pasta",
        "description": "A delicious pasta recipe",
        "ingredients": ["pasta", "tomato sauce", "cheese"],
        "username": "Ratna Kumari",
        "time": 10,
        "servers": 2,
        "image": "https://www.veggieinspired.com/wp-content/uploads/2021/05/raw-veggie-chopped-salad-featured.jpg",
        "type": "lunch",
        "ingredients": ["pasta", "tomato sauce", "cheese"],
        "steps": [
            "Boil the pasta",
            "Mix the pasta with tomato sauce and cheese",
            "Serve the pasta",
        ],
    },
    {
        "id": 3,
        "name": "Burger",
        "description": "A delicious burger recipe",
        "ingredients": ["buns", "patty", "lettuce"],
        "username": "Ratna Kumari",
        "time": 10,
        "servers": 2,
        "image": "https://www.veggieinspired.com/wp-content/uploads/2021/05/raw-veggie-chopped-salad-featured.jpg",
        "type": "dinner",
        "ingredients": ["buns", "patty", "lettuce"],
        "steps": ["Grill the patty", "Assemble the burger", "Serve the burger"],
    },
    {
        "id": 4,
        "name": "Pizza",
        "description": "A delicious pizza recipe",
        "ingredients": ["dough", "cheese", "sauce"],
        "username": "Ratna Kumari",
        "time": 10,
        "servers": 2,
        "image": "https://www.veggieinspired.com/wp-content/uploads/2021/05/raw-veggie-chopped-salad-featured.jpg",
        "type": "breakfast",
        "ingredients": ["dough", "cheese", "sauce"],
        "steps": [
            "Roll out the dough",
            "Add the sauce and cheese",
            "Bake the pizza",
            "Serve the pizza",
        ],
    },
    {
        "id": 5,
        "name": "Salad",
        "description": "A delicious salad recipe",
        "ingredients": ["lettuce", "tomato", "cucumber"],
        "username": "Ratna Kumari",
        "time": 10,
        "servers": 2,
        "image": "https://www.veggieinspired.com/wp-content/uploads/2021/05/raw-veggie-chopped-salad-featured.jpg",
        "type": "lunch",
        "ingredients": ["lettuce", "tomato", "cucumber"],
        "steps": ["Chop the vegetables", "Mix the vegetables", "Serve the salad"],
    },
]


@app.route("/recipes")
@jwt_required()
def get_recipes():
    resp = make_response({"recipes": recipes})
    return resp


@app.route("/recipes/<rid>")
@jwt_required()
def get_recipe(rid):
    for recipe in recipes:
        if recipe["id"] == int(rid):
            resp = make_response(recipe)
            return resp
    resp = make_response({"error": "Recipe not found"})
    return resp


# route to add recipes
@app.route("/add_recipe", methods=["POST", "OPTIONS"])
@jwt_required()
def add_recipe():
    try:
        if request.method == "OPTIONS":
            resp = make_response({"message": "Preflight request successful"})

            return resp

        # get form data
        name = request.form.get("name")
        description = request.form.get("description")
        ingredients = request.form.get("ingredients")
        username = request.form.get("username")
        time = request.form.get("time")
        servers = request.form.get("serves")
        steps = request.form.get("steps") or ""
        ingredients = request.form.get("ingredients") or ""

        # get file data
        # image = request.files["image"]
        # image.save(f"server_static/{image.filename}")

        # create new recipe
        recipe = {
            "id": len(recipes) + 1,
            "name": name,
            "description": description,
            "ingredients": ingredients.split(","),
            "username": username,
            "time": time,
            "servers": servers,
            # "image": f"server_static/{image.filename}",
            "steps": steps.split(","),
        }

        # add recipe to recipes list
        recipes.append(recipe)

        resp = make_response({"message": "Recipe added successfully"})

        return resp
    except Exception as e:
        print(e)
        resp = make_response(
            {
                "error": str(e),
                "method": request.method,
                "contentType": request.content_type,
            }
        )
        return resp


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        if username in users and users[username] == password:
            # Create a new token with the username inside
            access_token = create_access_token(identity=username)
            resp = jsonify(access_token=access_token)

            return resp
        resp = make_response({"error": "Invalid username or password"})

        return resp

    resp = make_response({"error": "Method not allowed"})
    return resp


@app.route("/signup", methods=["POST"])
def signup():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        if username in users:
            resp = make_response({"error": "Username already exists! Try another."})
            return resp
        users[username] = password
        resp = make_response({"message": "Signup successful"})
        resp.set_cookie("username", username)

        return resp

    return make_response({"error": "Method not allowed"})


@app.route("/logout")
def logout():
    resp = make_response({"message": "Logged out successfully"})
    resp.set_cookie("username", "", expires=0)  # Delete the cookie
    resp = make_response({"message": "Logged out successfully"})

    return resp


@app.route("/user")
@jwt_required()
def get_user():
    username = request.cookies.get("username")
    if username:
        resp = make_response({"username": username})
        return resp
    resp = make_response({"error": "User not logged in"})
    return resp


if __name__ == "__main__":
    app.run(debug=True)
    