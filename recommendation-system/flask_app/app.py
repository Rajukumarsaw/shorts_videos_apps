from flask import Flask, request, jsonify
import pickle
import pandas as pd
import os

app = Flask(__name__)

# Load the trained NMF model
model_path = os.path.join(os.path.dirname(__file__), 'model', 'nmf_model.pkl')
with open(model_path, 'rb') as file:
    model = pickle.load(file)

@app.route('/')
def home():
    return "Welcome to the Recommendation System API"

@app.route('/recommend', methods=['POST'])
def recommend():
    try:
        data = request.json
        user_name = data.get('userName')

        # Load interaction data
        data_path = os.path.join(os.path.dirname(__file__), '../data/interactions.json')
        interaction_data = pd.read_json(data_path)

        # Transform interaction types into numerical values
        interaction_mapping = {'view': 1, 'like': 2}
        interaction_data['interactionType'] = interaction_data['interactionType'].map(interaction_mapping)

        # Create the interaction matrix
        interaction_matrix = interaction_data.pivot_table(index='userName', columns='videoId', values='interactionType', fill_value=0)

        # Get recommendations for the user
        user_index = interaction_matrix.index.get_loc(user_name)
        user_vector = interaction_matrix.iloc[user_index].values.reshape(1, -1)
        user_prediction = model.inverse_transform(model.transform(user_vector))
        user_recommendations = pd.Series(user_prediction.flatten(), index=interaction_matrix.columns)

        # Return the top 5 recommendations
        top_recommendations = user_recommendations.sort_values(ascending=False).head(5).index.tolist()
        return jsonify({'recommendations': top_recommendations})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
