// Require
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

// Config
if (process.env.NODE_ENV !== 'production') dotenv.config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 4000;

// Midllewares
app.use(compression());
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve when production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Router payment
app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

// Service worker
app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

// Start server
app.listen(port, error => {
  if (error) throw error;
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}`);
});
