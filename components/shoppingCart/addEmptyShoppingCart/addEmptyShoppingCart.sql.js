const sqlText = [
    `INSERT INTO
        public.shoppingcart
        VALUES ($1, $2, $3, $4)
        `,
  ];
  
  module.exports = sqlText;
  