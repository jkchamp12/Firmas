$.get("/UDELASC/api/get/morosidades.php", function(data, status){
    for(var i =0; i < data.items.length; i++){
        var $tr = $('<tr>').append(
            $('<td>').text(data.items[i].id),
            $('<td>').text(data.items[i].moroso),
            $('<td>').text(data.items[i].vencimiento),
            $('<td>').text(data.items[i].observacion),
            $('<td>').text(data.items[i].creado),
            $('<td>').html('<button class="btn btn-success" style="margin-left: 5px;" type="submit"><i class="fa fa-user" style="font-size: 15px;"></i></button>')
        ).appendTo('#tabla_morosos'); 
    }
});
