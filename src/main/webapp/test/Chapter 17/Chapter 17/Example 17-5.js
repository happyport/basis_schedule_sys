$(document).ready(
    function()
    {
        $('div#exampleDialog').dialog({
            title : 'Example Dialog',
            modal : true,
            autoOpen : false
        });
        
        $('input#exampleDialogOpen').click(
            function(event)
            {
                event.preventDefault();
                
                $('div#exampleDialog')
                    .dialog('open');
            }
        );
    }
);