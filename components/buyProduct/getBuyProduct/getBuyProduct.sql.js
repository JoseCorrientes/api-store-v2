const sqlText = [
  `SELECT
         *
         FROM
         public.buy
         WHERE 
         isbn=$1
         `,
  `SELECT
         *
         FROM
         public.buy
         WHERE 
         productid=$1
         `,
  `SELECT
         *
         FROM
         public.buy
         WHERE 
         distributorid=$1
         `,

  `SELECT
         *
         FROM
         public.buy
        `,
];

module.exports = sqlText;
