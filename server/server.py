from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/check_guess", methods=["POST"])
def check_guess():
    """
    Check whether the given guess is valid. Expects a JSON post request in the format:

    {
        "guess": "Some book title"
    }

    and returns True iff the guess field equals War and Peace.

    TODO: Make it not a static value that is correct
    """
    data = request.json

    return jsonify({
        "valid": data["guess"] == "War and Peace"
    })