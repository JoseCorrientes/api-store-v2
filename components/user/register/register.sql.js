const sqlText = [
    `
    INSERT INTO
    public.user 
    VALUES ($1,$2,$3,$4,$5,$6, $7, $8, $9, $10, $11, $12)
    `
    // `
    // INSERT INTO
    // public.user (email, username, name, lastname, password, address, state, city, country, image, cartid)
    // VALUES ($1,$2,$3,$4,$5,$6, $7, $8, $9, $10, $11)
    // `
]

module.exports=sqlText;
