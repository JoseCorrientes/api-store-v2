const sqlText = [
    `
      DELETE FROM
      public.author
      WHERE authorid = $1
      `,
  ];
  
  module.exports = sqlText;
  