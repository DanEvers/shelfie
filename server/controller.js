module.exports = {
  fetch_inventory: (req, res) => {
    const db = req.app.get("db");
    db.get_inventory().then(inventory => {
      res.status(200).send(inventory);
    });
  },
  addProduct: (req, res) => {
    const db = req.app.post("db");
    const { imageURL, product_name, price } = req.body;
    db.create_product([imageURL, product_name, price]).then(products => {
      res.status(200).send(products);
    });
  }
};
