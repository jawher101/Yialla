const stripe = require("stripe")(
    "sk_test_51OuNLDCBkw70tV0ZFms9tSnYL8aiVNw1nhKSkP0f4WK9WLzHY9EnycgpieS2tPZNFVA3PipvRlvdcno0ZIFhtI4c00wEikyXEp"
);

module.exports = {
    createPaymentIntent: async (req, res) => {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: "T-shirt",
                        },
                        unit_amount: 2000,
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: "http://localhost:4242/success",
            cancel_url: "http://localhost:4242/cancel",
        });

        res.redirect(303, session.url);
    },
    handleWebhook: async (req, res) => {
        const sig = req.headers["stripe-signature"];
        let event;

        try {
            event = stripe.webhooks.constructEvent(
                req.body,
                sig,
                webhookSecret
            );
        } catch (err) {
            console.error("Webhook Error:", err.message);
            return res.status(400).send(`Webhook Error: ${err.message}`);
        }

        try {
            switch (event.type) {
                case "payment_intent.succeeded":
                    const paymentIntent = event.data.object;
                    console.log("PaymentIntent was successful!");
                    break;
                case "payment_intent.payment_failed":
                    const failedPaymentIntent = event.data.object;
                    console.log(
                        "PaymentIntent failed:",
                        failedPaymentIntent.last_payment_error
                    );
                    break;
                case "invoice.payment_failed":
                    const failedInvoice = event.data.object;
                    console.log("Invoice payment failed:", failedInvoice);
                    break;
                case "customer.subscription.deleted":
                    const canceledSubscription = event.data.object;
                    console.log("Subscription canceled:", canceledSubscription);
                    break;
                default:
                    console.log(`Unhandled event type ${event.type}`);
            }
        } catch (error) {
            console.error("Error handling webhook event:", error);
            return res.status(500).json({
                error: "An error occurred while handling webhook event",
            });
        }

        res.status(200).json({ received: true });
    },
};
