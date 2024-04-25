const router = require("express").Router();
const controllers = require("../controllers");

router.post("/create-payment-intent", controllers.payment.createPaymentIntent);
router.post("/webhook", controllers.payment.handleWebhook);

module.exports = router;
