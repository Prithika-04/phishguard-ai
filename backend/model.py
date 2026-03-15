import joblib

model = joblib.load("model.pkl")

def predict_url(url):
    length = len(url)
    prediction = model.predict([[length]])
    
    if prediction[0] == 1:
        return "Phishing"
    else:
        return "Safe"
