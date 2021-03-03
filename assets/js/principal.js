$('#videoPresentacion').on('hidden.bs.modal', function () {
    $("#ytvideo iframe").attr("src", $("#ytvideo iframe").attr("src"));
});