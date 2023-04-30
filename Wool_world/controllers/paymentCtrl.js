const Razorpay = require("razorpay")
const instance = new Razorpay({
    key_id: "rzp_test_VdM9nTQ9d026sQ",
    key_secret: "5qhY1w8JYmvnp2c5mfM8uzaD"
})

const checkout = async (req, res) => {

    const {amount} = req.body
    const option = {
        amount: amount,
        currency: "DONG"
    }
    const order = await instance.orders.create(option)
    res.json({
        success: true,
        order
    })
}
const paymentVerification = async (req, res) => {
    const { razorpayOrderId, razorpayPaymentId } = req.body
    res.json({
        razorpayOrderId, razorpayPaymentId
    })  

}
module.exports = {
    checkout, paymentVerification
}