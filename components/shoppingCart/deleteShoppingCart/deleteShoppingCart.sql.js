const sqlText = [
    `
      DELETE FROM
      public.shoppingcart
      WHERE cartid = $1
      `,
  ];
  
  module.exports = sqlText;
  