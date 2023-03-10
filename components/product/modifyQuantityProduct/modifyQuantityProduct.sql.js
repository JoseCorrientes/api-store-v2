const sqlText = [
    `UPDATE
    public.product
    SET quantity=$2
    WHERE productid=$1
      `,
  ];
  
  module.exports = sqlText;
  