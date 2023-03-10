const sqlText = [
  `
    DELETE FROM
    public.producttype
    WHERE producttype = $1
    `,
];

module.exports = sqlText;
