function destroy (destroyer,object) {
  if(destroyer.x - object.x < destroyer.width/2 + object.width/2
      && object.x - destroyer.x < destroyer.width/2 + object.width/2) {

        object.remove();  
    }

  if(destroyer.y - object.y < destroyer.height/2 + object.height/2
      && object.y - destroyer.y < destroyer.height/2 + object.height/2){

        object.remove();
      }
}                                     