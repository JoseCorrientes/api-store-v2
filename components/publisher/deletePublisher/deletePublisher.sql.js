const sqlText = [
    `
      DELETE FROM
      public.publisher
      WHERE publisherid = $1
      `,
  ];
  
  module.exports = sqlText;
  