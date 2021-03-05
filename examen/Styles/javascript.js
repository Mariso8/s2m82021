
var canvimages = document.getElementsByClassName('canvimage');

for(var i = 0; i <= canvimages.length - 1; i++){
	canvimages[i].addEventListener('mouseover', canvi);
	canvimages[i].addEventListener('mouseout', blank);
}

function canvi(event){
	var canvimage = event.currentTarget;

	document.getElementById('imamenu').src = canvimage.dataset.image;
	document.getElementById('imamenu').style.display = "inline-block";
}

function blank(){
	
	document.getElementById('imamenu').src = "";
	document.getElementById('imamenu').style.display = "none";
}




var bicipers=document.getElementsByClassName('biciP');
			
for(var i = 0; i <= bicipers.length - 1; i++){
	bicipers[i].addEventListener('click', cambio);
}
			
function cambio(event){
				
	var biciP = event.target;

	var posicion_biciP = Array.from(bicipers).indexOf(biciP);
				
	document.getElementById('gran').src = biciP.dataset.image;
	
	for(var i = 0; i <= bicipers.length - 1; i++){
		bicipers[i].classList.remove("biciPselec");
	}
	biciP.classList.add("biciPselec");
	
}
			


