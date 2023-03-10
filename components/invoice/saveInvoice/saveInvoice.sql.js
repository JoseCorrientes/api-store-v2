const sqlText = [
  `INSERT INTO
      public.invoice
      VALUES ($1, $2, $3, $4, $5, $6)
      `,
];

module.exports = sqlText;
