const sqlText = [
    `INSERT INTO
      public.publisher
      VALUES ($1, $2, $3, $4, $5)
      `,
  ];
  
  module.exports = sqlText;
  