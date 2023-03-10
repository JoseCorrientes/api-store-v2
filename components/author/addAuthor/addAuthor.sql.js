const sqlText = [
    `INSERT INTO
      public.author
      VALUES ($1, $2, $3)
      `,
  ];
  
  module.exports = sqlText;
  