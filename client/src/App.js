import React, {useState} from "react";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

function App() {
  const [name, setName] = useState("John");

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("razorpay sdk failed to load, are you online?");
    }
    const data = await fetch("http://localhost:5000/razorpay", {
      method: "POSt",
    }).then((t) => t.json());

    const options = {
      key: __DEV__ ? process.env.RAZORPAY_KEY_ID : "PRODUCTION_KEY",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Donation",
      description: "thank you for donation.",
      images: "http://localhost:5000/logo192.png",
      handle: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name,
        email: "test@test.com",
        phone_number: "9999999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="App">
      <h1 class="heading">razorpay payment integration</h1>
      <a
        className="link"
        onClick={displayRazorpay}
        target="_blank"
        rel="noopener noreferrer"
      >
        donate
      </a>
    </div>
  );
}

export default App;
