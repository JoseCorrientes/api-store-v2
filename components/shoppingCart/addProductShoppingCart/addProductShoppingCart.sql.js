const sqlText = [
  `UPDATE
    public.shoppingcart
    SET
    total=$2,
    individualproducts=$3
    WHERE cartid=$1
      `,
];

module.exports = sqlText;
