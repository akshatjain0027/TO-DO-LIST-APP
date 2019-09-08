// jquery for adding fading effect to add new todo row on clicking the "+" button
$('#addButton').click(function(){
    $('input').fadeToggle();
})


// for striking a line through the text on clicking the todo (**imp**)
$('ul').on('click','li',function(){
    $(this).toggleClass("delete")
})

// for removing the todo on clicking the trash icon
$('ul').on('click','span',function(event){
    $(this).parent().fadeOut(500,function(){   // parent function is used for selecting the parent of the span tag which is the li tag
        $(this).remove();                      // removing the li tag after fading it out
    });
    event.stopPropogation();                   // if we click on the span tag it will also trigger the click event on the li tag after its competion. to stop that stop propogation method is used
})




// jquery for adding a new row containing the todo on clicking enter key
$('input').keypress(function(){
    var keycode = event.which;
    if(keycode==13){
        var addedTodo = $('input').val();
        if(addedTodo==="")
        {
            alert('Write a TO-DO to add in the list');
        }
        else
        {   
            $('ul').append("<li><span class='trash'><i class='fas fa-trash-alt'></i></span>"+ addedTodo + "</li>");
            $('input').val("");
        }
    }
});




