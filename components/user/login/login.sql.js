const sqlText = [
  `
    SELECT
    *
    FROM public.user
    WHERE
    email=$1
    `,
];

module.exports = sqlText;
