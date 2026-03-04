$(document).ready(function () {

	/* ================= FECHA Y HORA ================= */

	function actualizarFechaHora() {
		const ahora = new Date();
		const opciones = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		};

		const fechaFormateada = ahora.toLocaleDateString('es-MX', opciones);
		const elemento = document.getElementById("fechaHora");

		if (elemento) {
			elemento.textContent = fechaFormateada;
		}
	}

	if ($("#fechaHora").length) {
		actualizarFechaHora();
		setInterval(actualizarFechaHora, 1000);
	}

	/* ================= SLIDER ================= */

	if ($(".slider").length) {
		$(".slider").bxSlider({
			auto: true,
			pause: 3000,
			controls: true,
			pager: true,
			mode: 'horizontal',
			speed: 800,
			infiniteLoop: true
		});
	}

	/* ================= BOTÓN ARRIBA ================= */

	$("#btnArriba").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 600);
	});

});