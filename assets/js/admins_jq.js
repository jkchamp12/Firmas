$.get("/UDELASC/api/get/usuarios.php", function(data, status){
//estudiantes.setData(data.items);
    for(var i =0; i < data.items.length; i++){
        var activo = "Activo";
        if(!data.items[i].activo)activo = "No Activo";
        var $tr = $('<tr>').append(
            $('<td>').text(data.items[i].usuario),
            $('<td>').text(data.items[i].nombre),
            $('<td>').text(data.items[i].sede),
            $('<td>').text(data.items[i].cedula),
            $('<td>').text(activo),
            $('<td>').html('<button class="btn btn-success" style="margin-left: 5px;" type="submit"><i class="fas fa-info" style="font-size: 15px;"></i></button>')
        ).appendTo('#tabla_admins'); 
    }
});
