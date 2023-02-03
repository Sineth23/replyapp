from flask import Flask, request
import openai


openai.api_key = "your_openai_api_key"

app = Flask(__name__)


@app.route("/api/sentiment", methods=["POST"])
def sentiment():
    data = request.get_json()
    text = data["text"]
    # Use the OpenAI API to generate a response
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt="What is the sentiment of this text: " + text,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    ).choices[0].text
    return response


if __name__ == "__main__":
    app.run(debug=True)
