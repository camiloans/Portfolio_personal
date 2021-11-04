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


$.ajax({
    url: 'https://randomuser.me/api/?results=10',
    method: "GET",
    dataType: 'json',
    success: function(data) {
      console.log(data);
      mostrarUsuarios(data.results)
    },
    error: function(xhr, status, error){
        console.log(error)
    }
  });

  function mostrarUsuarios(usuarios){
      let ul = document.querySelector('#lista-usuarios');
      usuarios.forEach(usuario => {
          ul.innerHTML += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
            </li>
          `
      })
  }