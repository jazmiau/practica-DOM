function add() {
  /*tomando valor(comentario) y almacenándolo*/
  var comments = document.getElementById("comment").value;
  /*limpiando el texto(al escribir se borra el "añada comentario")*/
  document.getElementById("comment").value = "";
  /*crear espacio para guardar comentarios*/
  var newComments = document.createElement('div');
  var cont = document.getElementById('cont');

  /*crear un check box*/
  var check = document.createElement('input');
  /*poniendo tipo al check*/
  check.type = 'checkbox';

  /*creando el parrafo del comentario*/
  var paragraph = document.createElement('p');
  /*creando clase*/
  paragraph.classList.add('color');

  /*crear nodo de texto*/
  var nodoText = document.createTextNode(comments);
  /*juntando mi nodo de texto con el comentario*/
  paragraph.appendChild(nodoText);

  /*creando icono corazón*/
  var heart = document.createElement('i');
  /*creando clase*/
  heart.classList.add('fa', 'fa-heart', 'heart');

  /*creando icono basura*/
  var trash = document.createElement('i');
  /*creando clase*/
  trash.classList.add('fa', 'fa-trash', 'trash')

  /*integrando(hijo) todo lo creado anteriormente a newComments*/
  newComments.appendChild(check);
  newComments.appendChild(paragraph);
  newComments.appendChild(trash);
  newComments.appendChild(heart);

  /*integrando newComments a cont que es el div contenedor de todo*/
  cont.appendChild(newComments);
  /*poniendo linea sobre el check*/
  check.addEventListener('click', function(){
    paragraph.classList.toggle('strike-out');
  })
  /*remover el elemento checkeado por medio del basurero*/
  trash.addEventListener('click', function(){
    cont.removeChild(newComments);
  })

  heart.addEventListener('click', function(){
    heart.classList.toggle('red');
  })
}
