import os
import pandas as pd
from sklearn.decomposition import NMF
import pickle
from pymongo import MongoClient

# Define the path to save the model
script_dir = os.path.dirname(os.path.abspath(__file__))
model_dir = os.path.join(script_dir, '../flask_app/model')
model_path = os.path.join(model_dir, 'nmf_model.pkl')
os.makedirs(model_dir, exist_ok=True)

# MongoDB URI
MONGO_URI = "mongodb+srv://rk8271740:Rajukumar%406090@cluster0.dqcxvl0.mongodb.net/short-videos-app?authMechanism=DEFAULT"

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client.get_database('short-videos-app')  # Replace 'short-videos-app' with your database name

# Function to fetch interaction data from MongoDB
def fetch_interaction_data():
    collection = db.get_collection('interactions')  # Replace 'interactions' with your collection name
    interactions = list(collection.find())
    return pd.DataFrame(interactions)

if __name__ == "__main__":
    try:
        # Load interaction data from MongoDB
        data = fetch_interaction_data()

        # Transform interaction types into numerical values
        interaction_mapping = {'view': 1, 'like': 2}
        data['interactionType'] = data['interactionType'].map(interaction_mapping)

        # Create the interaction matrix
        interaction_matrix = data.pivot_table(index='userName', columns='videoId', values='interactionType', fill_value=0)

        # Train the NMF model
        model = NMF(n_components=20, init='random', random_state=0)
        W = model.fit_transform(interaction_matrix)
        H = model.components_

        # Save the model
        with open(model_path, 'wb') as file:
            pickle.dump(model, file)

        print(f"Model training complete and saved to '{model_path}'")

    except Exception as e:
        print(f"Error occurred: {str(e)}")





