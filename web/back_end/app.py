from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/enviar_datos', methods=['POST'])
def post():
    name = request.json['name']
    last_name = request.json['last_name']
    edad = int(request.json['edad']) +10 
    return jsonify({'Hola tu edad es ': name, 'tu apellido': last_name, 'y tu edad es': edad})


if __name__ == '__main__':
    app.run(debug=True)