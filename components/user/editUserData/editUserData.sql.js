const sqlText = [
  `UPDATE
    public.user
    SET image=$2
    WHERE email=$1
      `,
  `UPDATE
    public.user
    SET address=$2, state=$3, city=$4, country=$5
    WHERE email=$1
      `,
  `UPDATE
    public.user
    SET address=$2, state=$3, city=$4, country=$5, image=$6
    WHERE email=$1
      `,
];

module.exports = sqlText;
