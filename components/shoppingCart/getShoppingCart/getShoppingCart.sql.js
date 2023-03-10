const sqlText = [
  `SELECT
        *
       FROM
       public.shoppingcart
       WHERE
       clientid=$1
       `,
       `SELECT
        *
       FROM
       public.shoppingcart
       `
];

module.exports = sqlText;
