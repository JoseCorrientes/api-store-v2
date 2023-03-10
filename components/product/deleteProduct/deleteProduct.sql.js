const sqlText = [
  `
      DELETE FROM
      public.product
      WHERE productid = $1
      `,
];

module.exports = sqlText;
