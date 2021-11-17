$(document).ready(function(){
    $('#fadeOut').click(function(){
        $('#caja').fadeOut(1000, function(){
            alert('Asi funciona Fade Out')
        });
    })

})

$(document).ready(function(){
    $('#fadeIn').click(function(){
        $('#caja').fadeIn(1000, function(){
            alert('Asi funciona Fade In')
        });
    })

})

$(document).ready(function(){
    $('#fadeTog').click(function(){
        $('#caja').fadeToggle(1000, function(){
            alert('Asi funciona Fade Toggle')
        });
    })

})
