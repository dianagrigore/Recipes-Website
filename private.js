$(document).ready(function(){
    $.ajax({
        url: "/parole.json",
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function(data){
            var event_data = '';
            $.each(data.user, function(index, value){
                event_data += '<tr>';
                event_data += '<td>'+value.username+'</td>';
                event_data += '<td>'+value.parola+'</td>';
                event_data += '</tr>';
            });
            $("#list_table_json").append(event_data);
        },
        error: function(d){
            alert("404. Please wait until the File is Loaded.");
        }
    });
});