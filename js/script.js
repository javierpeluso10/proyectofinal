// BOTON RESPONSIVE NAVBAR

document.querySelector('.menuBtn').addEventListener('click',() => {
    document.querySelector('.navMenu').classList.toggle('show');
});


$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE
	$('.listaCategoria .listaCursos[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS 

	$('.listaCursos').click(function(){
		let catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.listaCursos').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS 
		$('.tipoCurso').css('transform', 'scale(0)');
		function hideProduct(){
			$('.tipoCurso').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS 
		function showProduct(){
			$('.tipoCurso[category="'+catProduct+'"]').show();
			$('.tipoCurso[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS

	$('.listaCursos[category="all"]').click(function(){
		function showAll(){
			$('.tipoCurso').show();
			$('.tipoCurso').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});