import json
import logging

from flask import Flask, Response, request


logger = logging.getLogger(__name__)

app = Flask(__name__, static_url_path="/static")


@app.route("/login", methods=["post"])
def login():
    logger.debug(f"{request.path}")
    response = {"result": "success"}
    return Response(json.dumps(response), status=200, mimetype="application/json")
