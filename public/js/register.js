function mostrar(){
    var archivo = document.getElementById("filechooser").files[0];
    var reader = new FileReader();
    if (filechooser) {
      reader.readAsDataURL(archivo );
      reader.onloadend = function () {
        document.getElementById("img").src = reader.result;
      }
    }
  }