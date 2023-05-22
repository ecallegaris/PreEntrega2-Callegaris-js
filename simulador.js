
// Creo un objeto Cliente
const objCliente = {
    nombreCliente : " ",
    emailCliente : " ",
}

// Creo un CONSTRUCTOR o PLANTILLA Producto()
function Producto(codigo,detalle,precio){
    this.codigoProducto = codigo
    this.detalleProducto = detalle
    this.precioProducto = precio
}
// Creo objetos productoX en base al constructor Producto()
const objProducto1 = new Producto("315BFV-GN","CALEFON 14 LITROS BLANCO C/SENSOR GN",75899)
const objProducto2 = new Producto("VISU420"," EXHIBIDORA VERTICAL 420LTS LUZ LED DOBLE VIDRIO",114587)
const objProducto3 = new Producto("1006254","BIC FLAMINGO 29 ALUMINIO 21V SHIMA NEG/CEL TALLE S",128299)
const objProducto4 = new Producto("BCAT21VW","BALANZA DE COCINA DIGITAL VIDRIO TEMPLADO 3KG",3899)
const objProducto5 = new Producto("CA8133N","CAFETERA BLANCA 1,5LTS FILTRO DESMONTABLE",9999)

let opcion = "";
let opcionProducto = "";
let opcionMedioDePago = "";
let medioDePagoSeleccionado = "";
let opcionCuotas = "";
let recargo = 0; 
let total = 0;
let eliminar = "";

const efectivo ="efectivo";
const debito = "debito";
const credito = "credito";

const rec3cuotas = 1.21;
const recH3cuotas = 1.13;
const rec6cuotas = 1.39;
const recH6cuotas = 1.26;
const rec12cuotas = 1.83;
const recH12cuotas = 1.57;

const arrayCarrito = [];

function Bienvenido() {
    IngresoDatosCliente()
    alert("Bienvenido/a " + objCliente.nombreCliente + " a mi tienda online");
}

function IngresoDatosCliente() {
    objCliente.nombreCliente = prompt("Ingrese su nombre")
    while (objCliente.nombreCliente == "")  {
        objCliente.nombreCliente = prompt("Debe ingresar su nombre")
    }
    objCliente.emailCliente = prompt("Ingrese su correo")
    while (objCliente.emailCliente == ""){
        objCliente.emailCliente = prompt("Debe ingresar su correo")
    }
}

function ValidarSeleccionProducto() {
    switch (opcionProducto) {
        case "1":
            arrayCarrito.push(objProducto1)
            break;
        case "2":
            arrayCarrito.push(objProducto2)
            break;
        case "3":
            arrayCarrito.push(objProducto3)
            break;
        case "4":
            arrayCarrito.push(objProducto4)
            break;    
        case "5":
            arrayCarrito.push(objProducto5)
            break;    
        default:
            console.log("Opción incorrecta. Seleccione una opción correcta")    
            break;
    }    
}

function ValidarSeleccionMedioDePago() {
    switch (opcionMedioDePago) {
        case "EFE":
            medioDePagoSeleccionado = efectivo
            break;
        case "DEB":
            medioDePagoSeleccionado = debito
            break;
        case "CRE":
            medioDePagoSeleccionado = credito
            break;
        default:
            console.log("Opción incorrecta. Seleccione un medio de pago correcto")    
            break;
    }    
}

function ValidarSeleccionCuotas() {
    switch (opcionCuotas) {
        case "1":
            medioDePagoSeleccionado = "TARJETA CREDITO 1 CUOTA (0%)"
            break;
        case "3":
            medioDePagoSeleccionado = "TARJETA CREDITO 3 CUOTAS (21%)"
            recargo = rec3cuotas
            break;    
        case "H3":
            medioDePagoSeleccionado = "TARJETA CREDITO AHORA 3 CUOTAS (13%)"
            recargo = recH3cuotas
            break;
        case "6":
            medioDePagoSeleccionado = "TARJETA CREDITO 6 CUOTAS (39%)"
            recargo = rec6cuotas
            break;
        case "H6":
            medioDePagoSeleccionado = "TARJETA CREDITO AHORA 6 CUOTAS (26%)"
            recargo = recH6cuotas
            break;    
        case "12":
            medioDePagoSeleccionado = "TARJETA CREDITO 12 CUOTAS (83%)"
            recargo = rec12cuotas
            break;
        case "H12":
            medioDePagoSeleccionado = "TARJETA CREDITO AHORA 12 CUOTAS (57%)"
            recargo = recH12cuotas
            break;
        default:
            console.log("Opción incorrecta. Seleccione una opción correcta")    
            break;
    }    
}

function AgregarProductoCarrito() {
    opcionProducto = prompt(`
    SELECCIONE UN PRODUCTO:

    1: (${objProducto1.codigoProducto}) -  ${objProducto1.detalleProducto}
    2: (${objProducto2.codigoProducto}) -  ${objProducto2.detalleProducto}
    3: (${objProducto3.codigoProducto}) -  ${objProducto3.detalleProducto}
    4: (${objProducto4.codigoProducto}) -  ${objProducto4.detalleProducto}
    5: (${objProducto5.codigoProducto}) -  ${objProducto5.detalleProducto}
    `)

    while (opcionProducto > 5) {
        ValidarSeleccionProducto()    
        opcionProducto = prompt(`
        SELECCIONE UN PRODUCTO CORRECTO:

        1: (${objProducto1.codigoProducto}) -  ${objProducto1.detalleProducto}
        2: (${objProducto2.codigoProducto}) -  ${objProducto2.detalleProducto}
        3: (${objProducto3.codigoProducto}) -  ${objProducto3.detalleProducto}
        4: (${objProducto4.codigoProducto}) -  ${objProducto4.detalleProducto}
        5: (${objProducto5.codigoProducto}) -  ${objProducto5.detalleProducto}
        `)
    }

    ValidarSeleccionProducto()
}

function EliminarProductoCarrito() {
    if ((arrayCarrito.length == 0)) {
        alert(`Sr./Sra. ${objCliente.nombreCliente} no hay producto/s para eliminar`)
    } else {
        for (let index=0;index < arrayCarrito.length;index++) {
            eliminar = prompt(`
            Elimina el prodcuto ${arrayCarrito[index].detalleProducto} ?:

            S/s: Si
            N/n: No
            `)
            if ((eliminar === "S") || (eliminar === "s")) {
                arrayCarrito.splice(index,1)
            }
        }   
    }
}

function VerProductoCarrito() {
    if ((arrayCarrito.length == 0)) {
        alert("Sr./Sra. " + objCliente.nombreCliente + " no hay producto/s para visualizar en el carrito de compras")
    } else {
        let mensaje = "Productos del carrito de compras:\n\n"
        for (let i = 0; i < arrayCarrito.length; i++) {
            let producto = arrayCarrito[i];
            mensaje += "Codigo: " + producto.codigoProducto + ", Detalle: " + producto.detalleProducto + ", Precio: " + producto.precioProducto + "\n\n";
        }
        alert(mensaje);
    }
}

function totalCompra() {
    let total = arrayCarrito.reduce((accum, prod)=>{
        return accum + prod.precioProducto
    },0)
    if (recargo != 0) {
        total = total * recargo
    }
    return total
}

//_____________________________________________________________________
// Acá comienza a ejecutarse el código

Bienvenido()
opcion = prompt(`
MENU PRINCIPAL:

1: Agregar productos al carrito
2: Eliminar productos del carrito
3: Ver carrito de compras
4: Finalizar compra
`)

while (opcion !== "4") {
    if (opcion === "1") {
        AgregarProductoCarrito()
    }
    if (opcion === "2") {
        EliminarProductoCarrito()
    }
    if (opcion === "3") {
        VerProductoCarrito()
    }
    opcion = prompt(`
    MENU PRINCIPAL:

    1: Agregar productos al carrito
    2: Eliminar productos del carrito
    3: Ver carrito de compras
    4: Finalizar compra
    `)
}

if ((arrayCarrito.length == 0)) {
    alert(`Sr./Sra. ${objCliente.nombreCliente} gracias por visitar
    nuestro sitio. Lo/a esperamos pronto
    `)
} else {
    opcion = prompt("Confirma la compra? S/N")
    
    if ((opcion == "S") || (opcion == "s")) {

        opcionMedioDePago = prompt(`
        SELECCIONE MEDIO DE PAGO:

        EFE: ${efectivo}
        DEB: ${debito}
        CRE: ${credito} a partir de 3 cuotas tiene interes
        `)

        while (opcionMedioDePago != "EFE" && opcionMedioDePago != "DEB" && opcionMedioDePago != "CRE") {
            ValidarSeleccionMedioDePago()    
            opcionMedioDePago = prompt(`
            SELECCIONE MEDIO DE PAGO CORRECTO:

            EFE: ${efectivo}
            DEB: ${debito}
            CRE: ${credito} (a partir de 3 cuotas tiene interes)
            `)
        }

        ValidarSeleccionMedioDePago()

        if (opcionMedioDePago != "EFE" && opcionMedioDePago != "DEB") {
            opcionCuotas = prompt(`
            SELECCIONE CANTIDAD DE CUOTAS:
            
            1:  TARJETA CREDITO 1 CUOTA (0%)
            3:  TARJETA CREDITO 3 CUOTAS (21%)
            H3: TARJETA CREDITO AHORA 3 CUOTAS (13%)
            6:  TARJETA CREDITO 6 CUOTAS (39%)
            H6: TARJETA CREDITO AHORA 6 CUOTAS (26%)
            12: TARJETA CREDITO 12 CUOTAS (83%)
            H12:TARJETA CREDITO AHORA 12 CUOTAS (57%)
            `)
            
            while (opcionCuotas != "1" && opcionCuotas != "3" && opcionCuotas != "H3" && opcionCuotas != "6" && opcionCuotas != "H6" && opcionCuotas != "12" && opcionCuotas != "H12") {
                ValidarSeleccionCuotas()    
                opcionCuotas = prompt(`
                SELECCIONE CANTIDAD DE CUOTAS CORRECTA:
            
                1:  TARJETA CREDITO 1 CUOTA (0%)
                3:  TARJETA CREDITO 3 CUOTAS (21%)
                H3: TARJETA CREDITO AHORA 3 CUOTAS (13%)
                6:  TARJETA CREDITO 6 CUOTAS (39%)
                H6: TARJETA CREDITO AHORA 6 CUOTAS (26%)
                12: TARJETA CREDITO 12 CUOTAS (83%)
                H12:TARJETA CREDITO AHORA 12 CUOTAS (57%)
                `)  
            }
            ValidarSeleccionCuotas()
        } 
        
        alert(`Sr./Sra. ${objCliente.nombreCliente} realizó la compra 
        por un total de $${totalCompra()}. Gracias por visitar
        nuestro sitio. Lo/a esperamos pronto. 
        `)
    } else{
        alert(`Sr./Sra. ${objCliente.nombreCliente} gracias por visitar
        nuestro sitio. Lo/a esperamos pronto.
        `) 
    }
}

