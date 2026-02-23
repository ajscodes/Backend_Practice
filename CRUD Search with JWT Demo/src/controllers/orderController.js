import Order from "../models/Order.js";

export const createOrder = async (req, res, next) => {
  try {
    const { products, totalAmount } = req.body;

    const order = await Order.create({
      user: req.user._id,
      products,
      totalAmount
    });

    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("products")
      .populate("user", "name email");

    res.json(orders);
  } catch (error) {
    next(error);
  }
};

export const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("products")
      .populate("user", "name email");

    if (!order) {
      res.status(404);
      throw new Error("Order not found");
    }

    res.json(order);
  } catch (error) {
    next(error);
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      res.status(404);
      throw new Error("Order not found");
    }

    res.json({ message: "Order deleted" });
  } catch (error) {
    next(error);
  }
};