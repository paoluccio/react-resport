require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SK);

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')));
}

app.post('/stripe-checkout', async (req, res) => {
  try {
    const response = await stripe.charges.create({
      source: req.body.token,
      amount: req.body.amount * 100,
      currency: 'usd',
      description: 'Test charge'
    });
    res.json({ paymentId: response.id, receiptUrl: response.receipt_url });
  } catch (error) {
    res.status(error.statusCode).json({ message: error.raw.message });
  }
});

app.listen(port, () => console.log(`Listening on ${port}...`));