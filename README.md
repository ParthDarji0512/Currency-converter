# Currency-converter
# 💱 Currency Converter App

The **Currency Converter App** is a simple yet powerful web application built using **AngularJS**, designed to convert values between major world currencies in real time. It utilizes the **ExchangeRate-API** to fetch live currency exchange rates, offering users an easy and interactive way to calculate conversions.

With a clean interface and dynamic data binding using AngularJS, this app is ideal for beginners learning Angular, HTTP services, and API integration, as well as for anyone who needs a quick currency conversion tool.

---

## 🔧 Features

- Real-time currency conversion
- Supports popular currencies: USD, EUR, INR, GBP, CAD, AUD, JPY
- Converts any input amount from one currency to another
- Uses AngularJS `$http` for API calls
- Error handling for failed API responses

---

## 🧑‍💻 Technologies Used

- AngularJS
- HTML5
- CSS3
- JavaScript
- ExchangeRate-API

---

## 🚀 How It Works

1. User selects two currencies and enters an amount.
2. When the "Convert" button is clicked, the app builds a URL using the selected values and sends a GET request to the ExchangeRate-API.
3. If the request succeeds, the app displays the converted amount on the screen.
4. If the request fails, a helpful error alert is shown.

---

## 🔐 Setup Instructions

1. Clone this repository to your local system:
   ```bash
   git clone https://github.com/your-username/currency-converter-app.git
2. Open the project folder and locate the JavaScript file.

3. Replace the API key with your own from ExchangeRate-API:
   const apiKey = "YOUR_API_KEY_HERE";
   Open index.html in your web browser to use the app.
4.📌 Note
  Ensure you have a valid internet connection.
  The app uses an external API and requires network access.
  You can host it easily on GitHub Pages, Netlify, or any static hosting platform.
