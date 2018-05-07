// $() is ejected by Jquery  
// Public static void main()
// Keeps from poluting the global scope

// 1. Follow CSS.
// 2. ID = #
// 3. class = .
// 4. tag or window or document is bare 


$(document).ready(function(){
    // const thing2 = document.getElementById("thing");
    const thing2 = $('#thing');

    // $() Same as document.getElementById("");
    $('button').click(function(){
        const whatToDo = $(this).attr('do');

        if(whatToDo === 'hide'){
            $('#thing').hide();
        } else if(whatToDo === 'show'){
            $('#thing').show();
        } else if(whatToDo === 'toggle'){
            $('#thing').toggle();
        } else if(whatToDo === 'thing'){
            $('#title').html("<h2>Hello There</h2>");
        }
    });
});

