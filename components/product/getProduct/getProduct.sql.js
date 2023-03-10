const sqlText = [
  `SELECT
       *
       FROM
       public.product
       `,
  `SELECT
       *
       FROM
       public.product
       WHERE 
       authorid=$1
       `,
  `SELECT
       *
       FROM
       public.product
       WHERE 
       isbn=$1
       `,
  `SELECT
       *
       FROM
       public.product
       WHERE 
       productid=$1
       `,
];

module.exports = sqlText;
