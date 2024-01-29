<script src="/jquery-3.3.1.min"></script>

<script>
    /* Este código requiere JQuery */

    //Los enlaces deben estar separados por COMAS, ENTRE COMILLAS y sobre todo EN ORDEN de aparición de la convocatoria, por ejemplo
    /*
    let enlaces =
    [
    "enlace1",
    "enlace2",
    "enlace3"
    ]
    */

    let enlaces =
    [
    "https://investigacion.lasalle.mx/convocatoria_2024/10191/"
    ]

    let enlaces_index = 0;

    $(document).ready(function ()
    {
        //Obtiene las imágenes de una página web
        var imgs = document.getElementsByTagName("img");

        //Se recorren todas las imágenes encontradas
        for(var i = 0; i < imgs.length; i++)
    {
        //Se obtiene el link para consultar el nombre
        var link_imagen = imgs[i].src;

        //Se introduce el prefijo clave
        if(link_imagen.includes("CONV"))
    {
        //console.log("Existe una imagen de convocatoria");

        //Se añaden los enlaces deseados
        $(imgs[i]).wrap('<a href="' + enlaces[enlaces_index] + '"></a>')
        enlaces_index ++;
    }
    }
    })

</script>