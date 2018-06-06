$(document).foundation();

function op(url){
    $('.hero-full-screen')[0].style.backgroundImage = '-webkit-linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('+url+')';
    $('.hero-full-screen')[0].style.backgroundSize = 'cover';
}
function mouseOver(nombre){
    if(nombre == 'home'){
      op('https://images.pexels.com/photos/41506/pexels-photo-41506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    }
    else if (nombre == 'Project') {
      op('https://images.pexels.com/photos/7366/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    }
    else if (nombre == 'DryLab') {
      op('https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    }
    else if (nombre == 'WetLab') {
      op('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    }
    else if (nombre == 'HP') {
      op('https://images.pexels.com/photos/296881/pexels-photo-296881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    }
    else if (nombre == 'Notes') {
      op('https://images.pexels.com/photos/315790/pexels-photo-315790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    }
    else if (nombre == 'Checklist') {
      op('https://images.pexels.com/photos/416322/pexels-photo-416322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    }
}
function mouseExit(nombre){
  if(nombre == 'home'){
    op('https://i.ytimg.com/vi/tjz7RlRD2mM/maxresdefault.jpg');
  }

}
