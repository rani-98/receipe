from flask import Flask, make_response
app = Flask(__name__)

recipes = [
    {
        'id':1,
        "name": "Raw Veggie Chopped Salad",
        "description":"A healthy salad",
        "ingredients":["eggs","mayo","mustard"],
      "username": "Ratna Kumari",
      "time": 10,
      "servers": 2,
      "image": "https://cleanfoodcrush.com/wp-content/uploads/2015/05/Chop-Chop-Fresh-Veggie-Salad.jpg",
      "type": "breakfast"
    },
    {   'id':2,
        "description":"A burger",
        "ingredients":["eggs","mayo","mustard"],
      "name": "Burger",
      "username": "karan",
      "time": 20,
      "servers": 1,
      "image": "https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg",
      "type": "appetizers"
    },
    {   'id':3,
        "description":"A tasty burger",
        "ingredients":["eggs","mayo","mustard"],
      "name": "pasta",
      "username": "karan",
      "time": 20,
      "servers": 1,
      "image": "https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg",
      "type": "beverages"
    },
    {   'id':4,
        "name": "pizza",
        "description":"A tasty pizza",
    
        "ingredients":["eggs","mayo","mustard"],
      
      "username": "karan",
      "time": 20,
      "servers": 1,
      "image": "https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg",
      "type": "desserts"
    }, 
    
    {   'id':5,
        "name": "sandwich",
        "description":"A healthy salad",
        "ingredients":["eggs","mayo","mustard"],
      "username": "Ratna Kumari",
      "time": 50,
      "servers": 5,
      "image": "https://www.southernliving.com/thmb/UW4kKKL-_M3WgP7pkL6Pb6lwcgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg",
      "type": "breakfast"
    },
    { 'id':6,
      "name": "Spicy Chicken",
      "description":"A healthy salad",
      "ingredients":["eggs","mayo","mustard"],
      "username": "Ratna Kumari",
      "time": 60,
      "servers": 6,
      "image": "https://www.licious.in/blog/wp-content/uploads/2020/12/Spicy-Chicken.jpg",
      "type": "appetizers"
    }

]

@app.route("/recipes")
def get_recipes():
    resp = make_response({"recipes": recipes})
    resp.headers["access-control-allow-origin"]="*"
    return resp


if __name__ == '_main_':
    app.run(debug=True)
