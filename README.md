<h1>APP STOREBOOK V2</h1>
<h2>Prueba Tecnica</h2>


<h3>PRODUCTTYPE</h3>

/getProductType:
Devuelve un arreglo de los tipos de productos que comercializamos.

/addProductType:
Permite Agregar un nuevo tipo de producto a comercializar.

/deleteProductType:
Permite borrar un tipo de producto pasandole el identificador del mismo.

<h3>AUTHOR</h3>

/getAuthor:
Devuelve un arreglo con los nombre y apellidos de los autores cargados.

/addAuthor:
Permite agregar un nuevo autor.

/deleteAuthor:
Permite borrar un autor ingresando su authorid.


<h3>PUBLISHER</h3>

/getPublisher:
Devuelve un arreglo con todas las Editoriales.

/addPublisher:
Permite agregar una Editorial.

/deletePublisher:
Permite borrar una Editoria ingresando su publisherid.


<h3>PRODUCT</h3>

/getProduct:
Permite obtener uno o mas productos buscados.
Debe recibirse author(numero o cero si no se busca, isbn string si se busca o vacio si no se busca
productid numero o cero si no se busca)
Se mira primero isbn, si no es vacio se busca por isbn
Se mira segundo por productid, si no es cero se busca por productid
Se mira tercero por authorid si es cero se devuelven TODOS los productos
si es >0 se busca por author

/addProduct:
Permite agregar un producto nuevo.

/deleteProduct:
Permite borrar un producto determinado dado un productid.

/modifyQuantityProduct:
Permite modificar la cantidad de un producto dado ingresando su productid y
una cantidad (si es positiva se suma al existente, caso contrario se resta)


<h3>BUYPRODUCT</h3>

/getBuyProduct:
Permite ver las compras de productos hechas a las distribuidoras.
Debe recibirse product(numero o cero si no se busca, isbn string si se busca o vacio si no se busca
distributor numero o cero si no se busca)
Se mira primero isbn, si no es vacio se busca por isbn
Se mira segundo por product, si no es cero se busca por productid
Se mira tercero por distributor si es cero se devuelven TODOS los productos
Si es >0 se busca por distributor.


/addBuyProduct:
Permite agregar una compra de un producto a un distribuidor.


<h3>SHOPPINGCART</h3>

/getShoppingCart:
Permite recuperar el carrito de compra de un cliente determinado pasando
el clienteid.

/deleteShoppingCart:
Permite borrar el carrito de compra dado el cartid.

/addEmptyShoppingCart:
Genera una Carrito vacio para un clientid particular.

/addProductShoppingCart: 
Modifica el contenido de los productos para un carrito dado.


<h3>BUYCLIENTPRODUCT</h3>

/buyClientBlockProduct:
Dado un arreglo de productos, cantidades y precios del cliente me devuelve
un arreglo de lo que verdaderamente se puede facturar en base a las cantidades que hay con
el precio actualizado de la base de datos.
Tambien me devuelve el precio total calculado para ese arreglo resultante y el cartid.


<h3>FINALSELL</h3>

/finalSell:
Realiza el proceso de asentar la factura de la venta del cliente.
Se encarga de modificar las existencias de los productos despues de la venta.
Graba la factura nueva en INVOICE y borra el carrito en SHOPPINGCART

<h3>INVOICE</h3>

/getInvoice:
Devuelve un arreglo de todas las facturas grabadas.

/saveInvoice:
Graba la factura en base a los datos pasados.


<h3>USER</h3>

/register:
Registra un nuevo usuario agregando todas las direcciones.

/getUser:
Devuelve un arreglo de todos los usuarios en la db.

/login:
Permite el login de usuario devolviendo validation true o false segun el password y el email esten correctos o no

/editUserData:
Permite modificar la direccion y la imagen de un usuario dado su email.


<h3>UTIL</h3>

/encrypt:
Ruta para uso interno para encriptar dado un msg de entrada.

/decrypt:
Ruta para uso interno para desencriptar dado un msgcifrado AES.







El API REST corre sobre nodejs, utiliza express y se enlaza a una base de postgresql utilizando queries SQL









