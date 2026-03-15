def predict_url(url):
    if "login" in url or "verify" in url or "bank" in url:
        return "Phishing"
    else:
        return "Safe"
