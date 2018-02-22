
		var document = $(this);
		
		$(document).ready(function(){ // cuando la pagina este cargada.
			
			
			function mostrarMas(){
				//mostrar
				$("#boton1").removeClass("no-active").addClass("active");  	// mas
				//ocultar
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#tamaño-desplegable").css('height', '278px');			// tamaño
				$("#conversaciones").addClass("hidden"); 					// conversaciones    
				$("#actividad").addClass("hidden"); 						// actividad
				$("#user-popover").addClass("hidden"); 						// submenu barra
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
				$("#detail").addClass("hidden"); 							//ocultar menu derecho tarea
			}
			
			function mostrarOrdenar(){
				//mostrar
				$("#boton0").removeClass("no-active").addClass("active"); 	// ordenar
				//ocultar
				$("#boton1").removeClass("active").addClass("no-active");  	// mas
				$("#tamaño-desplegable").css('height', '187px');			// tamaño
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#user-popover").addClass("hidden"); 						// submenu barra
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
				$("#detail").addClass("hidden"); 							//ocultar menu derecho tarea
			}
			
			function mostrarConversaciones(){
				//mostrar
				$("#conversaciones").removeClass("hidden"); 				// conversaciones
				//ocultar
				$("#boton1").removeClass("active").addClass("no-active"); 	// mas
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#tamaño-desplegable").css('height','0px'); 				// tamaño
				$("#actividad").addClass("hidden"); 						// actividad
				$("#user-popover").addClass("hidden"); 						// submenu barra
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
				$("#detail").addClass("hidden"); 							//ocultar menu derecho tarea
			}
			
			function mostrarActividad(){
				//mostrar
				$("#actividad").removeClass("hidden"); 						// actividad
				//ocultar
				$("#boton1").removeClass("active").addClass("no-active"); 	// mas
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#tamaño-desplegable").css('height','0px'); 				// tamaño
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#user-popover").addClass("hidden"); 						// submenu barra
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
				$("#detail").addClass("hidden"); 							//ocultar menu derecho tarea
			}
			
			function ocultar(){
				//ocultar
				$("#boton1").removeClass("active").addClass("no-active"); 						// mas
				$("#boton0").removeClass("active").addClass("no-active"); 						// ordenar
				$("#tamaño-desplegable").css('height','0px'); 									// tamaño
				$("#conversaciones").addClass("hidden"); 										// conversaciones
				$("#actividad").addClass("hidden"); 											// actividad
				$("#user-popover").addClass("hidden"); 											// submenu barra
				$("#menuClickDerecho0").addClass("hidden"); 									// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 									// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 									// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 									// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 						// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 								// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 									// agregar lista icono microfono
				$("#botonAgregaTareaAsignarA").addClass("hidden"); 		    					// agregar lista icono asignar a
				$("#botonAgregaTareaFecha").addClass("hidden"); 								// agregar lista icono fecha
				$(".tarea-seleccionada li").removeClass("selected").addClass("no-selected"); 	// ocultar lista tareas pendientes
				$(".mostrar-opciones-mas").addClass("disabled");					 			// mostrar opciones en AUBMENU MAS de lista tareas
				$("#detail").addClass("hidden");												// ocultar menu derecho tarea
			}
			
			function mostrarCuenta(){
				//mostrar
				$("#user-popover").removeClass("hidden"); 					// submenu barra
				//ocultar
				$("#boton1").removeClass("active").addClass("no-active"); 	// mas
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#tamaño-desplegable").css('height', '0px');				// tamaño
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
				$("#detail").addClass("hidden"); 							//ocultar menu derecho tarea
			}
			
			function mostrarBarraLateral(){
				//mostrar
				$("#lists").removeClass("collapsed");  						// barra lateral
				//ocultar
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#sidebarActions").css('width', '280px'); 				// boton de abajo crear lista    // esto solo funciona el main de horbito
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
				$("#detail").addClass("hidden"); 							//ocultar menu derecho tarea
			}
			function ocultarBarraLateral(){
				//ocultar
				$("#lists").addClass("collapsed"); 							// barra lateral
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#user-popover").addClass("hidden"); 						// submenu barra
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#sidebarActions").css('width', '40px'); 					// boton de abajo crear lista    // esto solo funciona el main de horbito
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
				$("#detail").addClass("hidden"); 							//ocultar menu derecho tarea
			}
			
			function MostrarEliminarLista(){
				//ocultar
				$("#boton4").removeClass("hidden"); 						// eliminar
				//ocultar
				$("#boton1").removeClass("active").addClass("no-active"); 	// mas
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#boton2").addClass("hidden");							// compartir	
				$("#tamaño-desplegable").css('height','0px'); 				// tamaño
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#user-popover").addClass("hidden");  					// submenu barra
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
				$("#detail").addClass("hidden"); 							//ocultar menu derecho tarea
			}
			
			function MostrarEliminarTarea(){
				//ocultar
				$("#boton4").removeClass("hidden"); 						// eliminar
				//ocultar
				$("#boton1").removeClass("active").addClass("no-active"); 	// mas
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#boton2").addClass("hidden");							// compartir	
				$("#tamaño-desplegable").css('height','0px'); 				// tamaño
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#user-popover").addClass("hidden");  					// submenu barra
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
				$("#detail").addClass("hidden"); 							//ocultar menu derecho tarea
			}
			
			function ocultarEliminarLista(){
				// ocultar
				$("#boton4").addClass("hidden"); 							// eliminar
				$("#boton1").removeClass("active").addClass("no-active"); 	// mas
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#tamaño-desplegable").css('height','0px'); 				// tamaño
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#user-popover").addClass("hidden");  					// submenu barra
				$("#detail").addClass("hidden"); 							//ocultar menu derecho tarea
			}
				
			function mostrarAgregarTarea(){
				//mostrar
				$("#ejecutarMostrarAgregarTarea").addClass("focus"); 		// agregar lista icono destacado asignar a y fecha
				$("#botonAgregarTarea2").removeClass("hidden"); 			// agregar lista icono microfono
				//ocultar
				$("#botonAgregarTarea1").addClass("hidden"); 				// agregar lista icono del + 
				$("#boton1").removeClass("active").addClass("no-active"); 	// mas
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#tamaño-desplegable").css('height','0px'); 				// tamaño
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#user-popover").addClass("hidden");  					// submenu barra
				$("#botonAgregaTareaFecha").addClass("hidden"); 			// agregar lista icono fecha
				$("#botonAgregaTareaAsignarA").addClass("hidden"); 			// agregar lista icono asignar a
				$("#detail").addClass("hidden"); 							//ocultar menu derecho tarea
			}
			
			function mostrarAgregarTareaDestacar(){
				//mostrar
				$("#ejecutarAgregaTareaDestacar").addClass("starred"); 		// Agregar Tarea Destacar
				//ocultar
				$("#botonAgregaTareaFecha").addClass("hidden"); 			// agregar lista icono fecha
				$("#botonAgregaTareaAsignarA").addClass("hidden"); 			// agregar lista icono asignar a
			}
			function ocultarAgregarTareaDestacar(){
				//ocultar
				$("#ejecutarAgregaTareaDestacar").removeClass("starred"); 	// Agregar Tarea Destacar
				$("#botonAgregaTareaFecha").addClass("hidden"); 		  	// agregar lista icono fecha
				$("#botonAgregaTareaAsignarA").addClass("hidden"); 		  	// agregar lista icono asignar a
			}
			
			function mostrarAgregaTareaAsignarA(){
				//mostrar
				$("#botonAgregaTareaAsignarA").removeClass("hidden"); 		// agregar lista icono asignar a
				//ocultar
				$("#botonAgregaTareaFecha").addClass("hidden"); 			// agregar lista icono fecha
			}
			function ocultarAgregaTareaAsignarA(){
				//ocultar
				$("#botonAgregaTareaFecha").addClass("hidden"); 			// agregar lista icono fecha
				$("#botonAgregaTareaAsignarA").addClass("hidden"); 			// agregar lista icono asignar a
			}
			
			function mostrarAgregarTareaFecha(){
				//mostrar
				$("#botonAgregaTareaFecha").removeClass("hidden"); 			// agregar lista icono fecha 
				
				$("#botonAgregaTareaAsignarA").addClass("hidden"); 			// agregar lista icono asignar a
			}
			
					function mostrarAgregarTareaFechaVencimiento(){
						$("#ejecutarMostrarAgregarTareaFechaVencimiento").addClass("selected"); // boton azul fecha vencimiento 
						$("#ejecutarMostrarAgregarTareaFechaAviso").removeClass("selected"); 	// boton gris fecha aviso
						$("#botonAgregarTareaFechaVencimiento").removeClass("hidden"); 			// div fecha vencimiento
						$("#botonMostrarAgregarTareaFechaAviso").addClass("hidden");				// div fecha aviso 
					}
					function mostrarAgregarTareaFechaAviso(){
						$("#ejecutarMostrarAgregarTareaFechaVencimiento").removeClass("selected"); 	// boton gris fecha vencimiento
						$("#ejecutarMostrarAgregarTareaFechaAviso").addClass("selected"); 			// boton azul fecha aviso
						$("#botonAgregarTareaFechaVencimiento").addClass("hidden"); 				// div fecha vencimiento
						$("#botonMostrarAgregarTareaFechaAviso").removeClass("hidden");				// div fecha aviso 
					}
			
			function ocultarAgregarTareaFecha(){ 	
				//ocultar
				$("#botonAgregaTareaFecha").addClass("hidden"); 	// agregar lista icono fecha
				$("#botonAgregaTareaAsignarA").addClass("hidden"); 	// agregar lista icono asignar a
			}
			
			function mostrarTareaTerminada(){ 	
				//mostrar
				$("#botonTareaTerminada").removeClass("hidden"); 	// agregar lista icono fecha
			}
			function ocultarTareaTerminada(){ 	
				//ocultar
				$("#botonTareaTerminada").addClass("hidden"); 		// agregar lista icono fecha
			}
		
		// INICIO VENTANAS MODALES
		
			function mostrarCompartir(){
				//mostrar
				$("#boton2").removeClass("hidden"); 						// compartir
				//ocultar
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#boton1").removeClass("active").addClass("no-active"); 	// mas
				$("#tamaño-desplegable").css('height','0px');				// tamaño
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#user-popover").addClass("hidden");  					// submenu barra
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
				$("#detail").addClass("hidden"); 							//ocultar menu derecho tarea
			}
			
					function mostrarCompartirMiembrosLista(){
						//mostrar
						$("#ejecutarMostrarMiembrosEditarLista").removeClass("no-active").addClass("active");	// compartir miembros
						$("#editarListaBoton1").removeClass("hidden"); 										 	// tabla de añadir miembros
						$("#editarListaBoton2").removeClass("hidden");										 	// tabla lista miembros
						//ocultar
						$("#ejecutarMostrarOpcionesEditarLista").removeClass("active").addClass("no-active");	// compartir opciones
						$("#editarListaBoton3").addClass("hidden");											 	// tabla opciones de lista
					}
					function mostrarCompartirOpcionesLista(){
						//mostrar
						$("#ejecutarMostrarOpcionesEditarLista").removeClass("no-active").addClass("active");	// compartir opciones
						$("#editarListaBoton3").removeClass("hidden");							 			 	// tabla no molestar
						//ocultar
						$("#ejecutarMostrarMiembrosEditarLista").removeClass("active").addClass("no-active");	// compartir miembros
						$("#editarListaBoton1").addClass("hidden"); 										 	// tabla de añadir miembros
						$("#editarListaBoton2").addClass("hidden");					 						 	// tabla lista miembros
					}
			
			function ocultarCompartir(){
				//ocultar
				$("#boton2").addClass("hidden");												
			}
			
			function mostrarCrearLista(){
				//mostrar
				$("#boton3").removeClass("hidden");  						// crear lista
				//ocultar
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#boton1").removeClass("active").addClass("no-active"); 	// mas
				$("#tamaño-desplegable").css('height','0px'); 				// tamaño
				$("#user-popover").addClass("hidden");  					// submenu barra
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
				$("#detail").addClass("hidden"); 							//ocultar menu derecho tarea
			}
			
					function mostrarCompartirMiembrosCrearLista(){
						//mostrar
						$("#ejecutarMostrarMiembrosCrearLista").removeClass("no-active").addClass("active"); 	// compartir miembros
						$("#CrearListaBoton1").removeClass("hidden"); 											// tabla de añadir miembros
						$("#CrearListaBoton2").removeClass("hidden");											// tabla lista miembros
						//ocultar
						$("#ejecutarMostrarOpcionesCrearLista").removeClass("active").addClass("no-active"); 	// compartir opciones
						$("#CrearListaBoton3").addClass("hidden"); 												// tabla no molestar
					}
					function mostrarCompartirOpcionesCrearLista(){
						//mostrar
						$("#ejecutarMostrarOpcionesCrearLista").removeClass("no-active").addClass("active");	// compartir opciones
						$("#CrearListaBoton3").removeClass("hidden"); 											// tabla no molestar
						//ocultar
						$("#ejecutarMostrarMiembrosCrearLista").removeClass("active").addClass("no-active");	// compartir miembros
						$("#CrearListaBoton1").addClass("hidden"); 												// tabla de añadir miembros
						$("#CrearListaBoton2").addClass("hidden");												// tabla lista miembros
					}
			
			function ocultarCrearLista(){ 		
				//ocultar
				$("#boton3").addClass("hidden"); 	// crear lista
			}
			
			function mostrarModificarTarea(){ 		
				//mostrar
				$(this).removeClass("hidden");								// mantenemos visible el menu
				//ocultar
				$("#boton1").removeClass("active").addClass("no-active");	// mas
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#tamaño-desplegable").css('height','0px'); 				// tamaño
				$("#conversaciones").addClass("hidden"); 					// conversaciones    
				$("#actividad").addClass("hidden"); 						// actividad
				$("#user-popover").addClass("hidden"); 						// submenu barra
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
			}
			
		// FINAL VENTANAS MODALES
			
////////////////////////////////////////////////////////////////////////////////////////////////////		
////////////////////////////	EJECUTAR FUNCIONES	////////////////////////////////////////////////			
////////////////////////////////////////////////////////////////////////////////////////////////////	
		
			// GENERAL	--> OCULTAR 
			$('html').click(function() { ocultar(); } );
			$('#wunderlist-base').click(function() { ocultar(); });  // esta opcion sustituye el $('html').click(function() { ocultar(); }); para que funcione en horbito
			
			// MAS	--> MOSTRAR OCULTAR 
			$('#ejecutarMas').click(function(e){
				/* Mostrar nuestro menú*/
				e.stopPropagation();
				if($("#tamaño-desplegable").css('height') == "0px" || $("#tamaño-desplegable").css('height') == "187px"){
					mostrarMas();
				}else if ($("#tamaño-desplegable").css('height') == "278px"){
					ocultar();
				}
			}); 
			$('#boton1').click(function(e){
				e.stopPropagation();
				mostrarMas();
			});
			
			// ORDENAR	--> MOSTRAR OCULTAR
			$("#ejecutarOrdenar").on('click', function(e){
				e.stopPropagation();
				if($("#tamaño-desplegable").css('height') == "0px" || $("#tamaño-desplegable").css('height') == "278px"){
					mostrarOrdenar();
				}else if ($("#tamaño-desplegable").css('height') == "187px"){
					ocultar();
				}
			});
			$('#boton0').click(function(e){
				e.stopPropagation();
				mostrarOrdenar();
			});
			
			// SUBMENU CONVERSACIONES	--> MOSTRAR OCULTAR
			$("#ejecutarConversaciones").on('click', function(e){
				e.stopPropagation();
				if($("#conversaciones").hasClass("hidden")){ // si existe un hidden entonces....
					mostrarConversaciones();
				}else {
					ocultar();
				}
			});
			$('#conversaciones').click(function(e){
				e.stopPropagation();
				mostrarConversaciones();
			});
			
			// SUBMENU ACTIVIDAD	--> MOSTRAR OCULTAR
			$("#ejecutarActividad").on('click', function(e){
				e.stopPropagation();
				if($("#actividad").hasClass("hidden")){ // si existe un hidden entonces....
					mostrarActividad();
				}else {
					ocultar();
				}
			});
			$('#actividad').click(function(e){
				e.stopPropagation();
				mostrarActividad();
			});
			
			// SUBMENU CUENTA	--> MOSTRAR OCULTAR
			$("#ejecutarCuenta").on('click', function(e){
				e.stopPropagation();
				if($("#user-popover").hasClass("hidden")){ // si existe un hidden entonces....
					mostrarCuenta();
				}else {
					ocultar();
				}
			});
			$('#user-popover').click(function(e){
				e.stopPropagation();
				mostrarCuenta();
			});
			
			// BARRA	--> MOSTRAR OCULTAR
			$("#ejecutarBarraLateral").on('click', function(e){
				e.stopPropagation();
				if($("#lists").hasClass("collapsed")){ // si existe un collapsed entonces....
					mostrarBarraLateral();
				}else {
					ocultarBarraLateral();
				}
			});
			
			// ELIMINAR LISTA	--> MOSTRAR 
			$(".ejecutarMostrarEliminarLista").on('click', function(){
				MostrarEliminarLista();
			});
			
			// ELIMINAR TAREA	--> MOSTRAR 
			$(".ejecutarMostrarEliminarTarea").on('click', function(){
				MostrarEliminarTarea();
			});
			
			// ELIMINAR LISTA-TAREA	--> OCULTAR 
			$("#ejecutarOcultarEliminarLista").on('click', function(){
				ocultarEliminarLista();
			});
			
			// MODIFICAR TAREA	--> MOSTRAR
			$("#detail").on('click', function(e){ 
				e.stopPropagation();
				mostrarModificarTarea();
			});
				
			// MODIFICAR TAREA	--> OCULTAR
			$("#ejecutarOcultarMenuTarea").on('click', function(){
				ocultar();
			});
			
			// AGREGAR TAREA   --> MOSTRAR 
			$("#ejecutarMostrarAgregarTarea").on('click', function(e){
				e.stopPropagation();
				mostrarAgregarTarea();
			});
			
			// AGREGAR TAREA DESTACAR	--> MOSTRAR OCULTAR
			$("#ejecutarAgregaTareaDestacar").on('click', function(){
				if($("#ejecutarAgregaTareaDestacar").hasClass("starred")){ // si existe un starred entonces....
					ocultarAgregarTareaDestacar();
				}else {
					mostrarAgregarTareaDestacar();
				}
			});
			
			// AGREGAR TAREA ASIGNAR A	--> MOSTRAR OCULTAR
			$("#ejecutarMostrarAgregaTareaAsignarA").on('click', function(e){
				e.stopPropagation();
				if($("#botonAgregaTareaAsignarA").hasClass("hidden")){ // si existe un hidden entonces....
					mostrarAgregaTareaAsignarA();
				}else {
					ocultarAgregaTareaAsignarA();
				}
			});
			$('#botonAgregaTareaAsignarA').click(function(e){
				e.stopPropagation();
				mostrarAgregaTareaAsignarA();
			});
			
			//  AGREGAR TAREA FECHA	--> MOSTRAR OCULTAR
			$("#ejecutarMostrarAgregarTareaFecha").on('click', function(e){
				e.stopPropagation();
				if($("#botonAgregaTareaFecha").hasClass("hidden")){ // si existe un hidden entonces....
					mostrarAgregarTareaFecha();
				}else {
					ocultarAgregarTareaFecha();
				}
			});
			$('#botonAgregaTareaFecha').click(function(e){
				e.stopPropagation();
				mostrarAgregarTareaFecha();
			});
					// AGREGAR TAREA FECHA VENCIMIENTO	--> MOSTRAR 
					$("#ejecutarMostrarAgregarTareaFechaVencimiento").on('click', function(){
						mostrarAgregarTareaFechaVencimiento();
					});
					// AGREGAR TAREA FECHA AVISO		--> MOSTRAR 
					$("#ejecutarMostrarAgregarTareaFechaAviso").on('click', function(){ 
						mostrarAgregarTareaFechaAviso();
					});
			$(".ejecutarOcultarAgregarTareaFecha").on('click', function(e){ 
				e.stopPropagation();
				ocultarAgregarTareaFecha();		
			});
			
			$("#ejecutarTareaTerminada").on('click', function(e){
				e.stopPropagation();
				if($("#botonTareaTerminada").hasClass("hidden")){ // si existe un hidden entonces....
					mostrarTareaTerminada();
				}else {
					ocultarTareaTerminada();
				}
			});
			
		
		// INICIO CLICK DERECHO
		
			// CLICK DERECHO 0 -> MOSTRAR
			$("#lista1").mousedown(function(e){
				//1: izquierda, 2: medio/ruleta, 3: derecho
				e.stopPropagation();
				if(e.which == 3){
					$("#menuClickDerecho0").removeClass("hidden"); 	// menu click derecho 0
					$("#menuClickDerecho0").css('left',e.pageX+'px'); 
					$("#menuClickDerecho0").css('top',e.pageY+'px'); 
					$("#menuClickDerecho1").addClass("hidden"); 	// menu click derecho 1
					$("#menuClickDerecho2").addClass("hidden"); 	// menu click derecho 2
					$("#menuClickDerecho3").addClass("hidden"); 	// menu click derecho 3
				}
			});
			$('#menuClickDerecho0').click(function(e){
				e.stopPropagation();
				$("#menuClickDerecho0").removeClass("hidden"); 	// menu click derecho 0
			});
			
			// CLICK DERECHO 1 -> MOSTRAR	
			$("#lista9").mousedown(function(e){
				e.stopPropagation();
				if(e.which == 3){
					$("#menuClickDerecho1").removeClass("hidden"); 	// menu click derecho 1
					$("#menuClickDerecho1").css('left',e.pageX+'px'); 
					$("#menuClickDerecho1").css('top',e.pageY+'px'); 
					$("#menuClickDerecho0").addClass("hidden"); 	// menu click derecho 0
					$("#menuClickDerecho2").addClass("hidden"); 	// menu click derecho 2
					$("#menuClickDerecho3").addClass("hidden"); 	// menu click derecho 3
				}
			});
			$('#menuClickDerecho1').click(function(e){
				e.stopPropagation();
				$("#menuClickDerecho1").removeClass("hidden"); 	// menu click derecho 1
			});
			
			// CLICK DERECHO 2 -> MOSTRAR	
			$("#nota3").mousedown(function(e){
				e.stopPropagation();
				if(e.which == 3){
					//var pos = $(".wz-view-container").position();
					//alert( "left: " + pos.left );
					$("#menuClickDerecho2").removeClass("hidden"); 	// menu click derecho 2
					$("#menuClickDerecho2").css('left',e.pageX+'px'); 
					$("#menuClickDerecho2").css('top',e.pageY+'px'); 
					$("#menuClickDerecho0").addClass("hidden"); 	// menu click derecho 0
					$("#menuClickDerecho1").addClass("hidden"); 	// menu click derecho 1
					$("#menuClickDerecho3").addClass("hidden"); 	// menu click derecho 3
				}
				
			});
			$('#menuClickDerecho2').click(function(e){
				e.stopPropagation();
				$("#menuClickDerecho2").removeClass("hidden"); 	// menu click derecho 2
			});
			
			// CLICK DERECHO 2 -> MOSTRAR	
			$("#nota5").mousedown(function(e){
				e.stopPropagation();
				if(e.which == 3){
					$("#menuClickDerecho3").removeClass("hidden"); 	// menu click derecho 3
					$("#menuClickDerecho3").css('left',e.pageX+'px'); 
					$("#menuClickDerecho3").css('top',e.pageY+'px'); 
					$("#menuClickDerecho0").addClass("hidden"); 	// menu click derecho 0
					$("#menuClickDerecho1").addClass("hidden"); 	// menu click derecho 1
					$("#menuClickDerecho2").addClass("hidden"); 	// menu click derecho 2
				}
				
			});
			$('#menuClickDerecho3').click(function(e){
				e.stopPropagation();
				$("#menuClickDerecho3").removeClass("hidden"); 	// menu click derecho 3
			});
			
		// FINAL CLICK DERECHO	
		
		// INICO VENTANAS MODALES	
		
			// COMPARTIR	--> MOSTRAR 
			$(".ejecutarMostrarCompartir").on('click', function(){
				mostrarCompartir();
			});
				
					// MIEMBROS DE LISTA	--> MOSTRAR 
					$("#ejecutarMostrarMiembrosEditarLista").on('click', function(){
						mostrarCompartirMiembrosLista();
					});
					// OPCIONES DE LISTA	--> MOSTRAR 
					$("#ejecutarMostrarOpcionesEditarLista").on('click', function(){
						mostrarCompartirOpcionesLista();
					});
				
			// CREAR LISTA	--> MOSTRAR 
			$("#ejecutarMostrarCrearLista").on('click', function(){
				mostrarCrearLista();
			});
			
					// MIEMBROS DE LISTA	--> MOSTRAR 
					$("#ejecutarMostrarMiembrosCrearLista").on('click', function(){
						mostrarCompartirMiembrosCrearLista();
					});
					// OPCIONES DE LISTA	--> MOSTRAR 
					$("#ejecutarMostrarOpcionesCrearLista").on('click', function(){
						mostrarCompartirOpcionesCrearLista();
					});
					
			// CREAR LISTA	--> OCULTAR 
			$("#ejecutarOcultarCrearLista").on('click', function(){
				ocultarCrearLista();
			});
			
			// CREAR LISTA	--> ACTIVAR CUANDO SE ESCRIBA ALGO 
			$("#nombreCrearLista").keypress(function(){
				if($(this).val() != ''){
					// si lo hay...
					$("#botonGuardarCrearLista").removeClass('disabled');
				}else{
					//si no lo hay
					$("#botonGuardarCrearLista").addClass('disabled');
				}
			});
			
		// FINAL VENTANAS MODALES
		});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// INICIO PROGRAMA //////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////		
		var wunderlist_win = $( this );

		$(document).ready(function (){
			$("#ejecutarObtenerLogin1").on('click', function(e){
				e.stopImmediatePropagation();
				console.log('login 1');
				
				api.integration.wunderlist.addAccount(function (error, account) {
					console.log(error);
					console.log('login 1 correcto');
				});
				
				// Mostrar aplicación, ocultar inicio de sesión
				$('#contenedor-login').addClass('hidden');
				$('#wunderlist-base').removeClass('hidden');
				wunderlist_win.on(".wz-app-235").css({'width': '996px', 'min-width': '996px', 'height': '697px', 'min-height': '697px'}); 
				setTimeout(show_accounts, 3000);
			});
		});
		
		
		// LIST ACCOUNT
		function show_accounts(){ 
			// seguimos
			console.log('show account');
			wunderlist_accounts = [];
			api.integration.wunderlist.listAccounts(function (error, accounts) {
				
				console.log(error);               
				
				if(accounts.length > 0){
					//primero: eliminar todas las listas
					$("#añadirListadoCuentas").empty();
					
					var wunderlist_total_accounts = 0;
					accounts.forEach(function (account) {                                 
						
						wunderlist_accounts[wunderlist_total_accounts] = account;
					
						//console.log(wunderlist_accounts[wunderlist_total_accounts]);
						//console.log(account.getLists);
																				
						$("#añadirListadoCuentas").append(
							'<li class="context-menu-item menuItem hasSubmenu seleccionador-cuenta" data-cuenta="'+wunderlist_total_accounts+'" data-idCuenta="'+account.id +'">'+
								'<span class="label">'+ account.sub +'</span>'+
								'<span class="chevron">'+
									'<svg class="folder-arrow" width="15px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="folder-arrow"> <path d="M13.61,16.8575 C13.79,16.6575 13.79,16.3375 13.61,16.1375 L7.45,9.9975 L13.61,3.8575 C13.79,3.6575 13.79,3.3375 13.61,3.1375 C13.41,2.9575 13.09,2.9575 12.89,3.1375 L6.39,9.6375 C6.21,9.8375 6.21,10.1575 6.39,10.3575 L12.89,16.8575 C12.99,16.9575 13.13,16.9975 13.25,16.9975 C13.37,16.9975 13.51,16.9575 13.61,16.8575 Z" id="w"></path> </g> </g> </svg>'+
								'</span>'+
								'<ul class="context-menu listsSubmenu ejecutarEliminarCuenta" data-idCuenta="'+account.id +'">'+
									'<li class="context-menu-item menuItem" title="'+ account.sub +'">'+
										'<span class="context-menu-icon"></span>'+
										'<span class="label">Eliminar Cuenta</span>'+
									'<span class="chevron">'+
										'<svg class="folder-arrow" width="15px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="folder-arrow"> <path d="M13.61,16.8575 C13.79,16.6575 13.79,16.3375 13.61,16.1375 L7.45,9.9975 L13.61,3.8575 C13.79,3.6575 13.79,3.3375 13.61,3.1375 C13.41,2.9575 13.09,2.9575 12.89,3.1375 L6.39,9.6375 C6.21,9.8375 6.21,10.1575 6.39,10.3575 L12.89,16.8575 C12.99,16.9575 13.13,16.9975 13.25,16.9975 C13.37,16.9975 13.51,16.9575 13.61,16.8575 Z" id="w"></path> </g> </g> </svg>'+
									'</span>'+ 
									'</li>'+
								'</ul>'+
							'</li>'
						);
					
						wunderlist_total_accounts++;
					});
					borrarCuentaSeleccioanda();    //borrar cuenta
					añadirCuentaNueva();           //añadir cuenta
					cuentaSeleccionada(accounts);  //mostrar cuentas
				}else{
					// Mostrar inicio de sesión, ocultar aplicación
					win.on(".wz-app-235").css({'width': '464px', 'min-width': '464px', 'height': '536px', 'min-height': '536px'});
					$('#contenedor-login').removeClass('hidden');
					$('#wunderlist-base').addClass('hidden');	
				}
			});
		}
		
		//MOSTRAR CUENTA
		function cuentaSeleccionada(accounts){
			
			mostrarDatosCuentaDefecto(accounts);
					
			mostrarDatosCuentaSeleccionada(accounts);
			
		}	
		//CUENTA POR DEFECTO
		function mostrarDatosCuentaDefecto(accounts){
			console.log('prueba: cuenta por defecto');
			cuenta1 = accounts[0];
			let cuentaSelect = accounts[0];
			$("#nombreCuentaSeleccionada").attr('data-idCuentaSeleccionada', cuentaSelect); 
			$("li.emailApi").text(cuentaSelect.sub); 
			$("span.emailApi").text(cuentaSelect.sub); 
			$("span.nameApi").text(cuentaSelect.name); 
			$("div.nameApi").title = cuentaSelect.name; 
			$("li.nameApi").title = cuentaSelect.name; 
			$("texto.nameApi").data(cuentaSelect.name);
			
			reseteo();
			mostrarList(cuentaSelect);
				
		}	
		//CUENTA SELECCIONADA
		function mostrarDatosCuentaSeleccionada (accounts){
			$(".seleccionador-cuenta").on('click', function(e){
				e.stopImmediatePropagation();
				console.log('prueba: cuenta seleccionada');
				var i = $(this).attr('data-cuenta');
				let cuentaSelect = accounts[i];
				$("#nombreCuentaSeleccionada").attr('data-idCuentaSeleccionada', cuentaSelect); 
				$("li.emailApi").text(cuentaSelect.sub); 
				$("span.emailApi").text(cuentaSelect.sub); 
				$("span.nameApi").text(cuentaSelect.name); 
				$("div.nameApi").title = cuentaSelect.name; 
				$("li.nameApi").title = cuentaSelect.name; 
				$("texto.nameApi").data(cuentaSelect.name); 
				
				reseteo();
				mostrarList(cuentaSelect);
				
			});
		}
		
		// AÑADIR CUENTA
		function añadirCuentaNueva(){
			$("#ejecutarObtenerLogin2").on('click', function(e){
				e.stopImmediatePropagation();
				console.log('login 2');
				
				api.integration.wunderlist.addAccount(function (error) {
					console.log(error);
					console.log('login 2 correcto');
					show_accounts();
				});
			});
		}
		
		// BORRAR CUENTA
		function borrarCuentaSeleccioanda(){
			$(".ejecutarEliminarCuenta").on('click', function(e){
				e.stopImmediatePropagation();
				console.log('borrar cuenta');
				let cuentaSelectionada = parseInt($(this).attr("data-idCuenta"));
				api.integration.wunderlist.removeAccount(cuentaSelectionada, function () {
					console.log('Cuenta borrada ' + cuentaSelectionada);
					show_accounts();
				});
			});
			
		}
////////////////////////////////////////////////////////////////////////////////////		
///////////////////////////// INICIO LISTA. ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////	

		//RESETEAR/LIMPIAR
		function reseteo(){
			$(".lista-notas-pendientes").empty();
		}
		
		//MOSTRAR LISTAS
		function mostrarList(cuentaSelect){
			
			cuentaSelect.getLists(function (error, listas) {
				console.log(error);
				console.log(listas);
				//primero: eliminar todas las listas
				$(".lists-collection").empty();
				//segundo: mostrar las nuevas listas
				for(let i=0;i<listas.length;i++){
					let contadorLista = 8 + i;
					$(".lists-collection").append(
						'<li role="menuitem" tabindex="0" id="lista'+contadorLista+'" title="'+listas[i].title+'" data-numerolista="" class="sidebarItem list draggable owner" draggable="true" rel="'+listas[i].id+'">'+
							'<a href="#/lists/'+listas[i].id+'">'+
								'<span class="list-icon">'+
									'<svg class="list rtl-flip" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Web-svgs" stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="list"> <path d="M3,7 C2.44,7 2,6.56 2,6 L2,5 C2,4.44 2.44,4 3,4 L4,4 C4.56,4 5,4.44 5,5 L5,6 C5,6.56 4.56,7 4,7 L3,7 Z M4,5 L3,5 L3,6 L4,6 L4,5 Z M7.5,6 C7.22,6 7,5.78 7,5.5 C7,5.22 7.22,5 7.5,5 L17.5,5 C17.78,5 18,5.22 18,5.5 C18,5.78 17.78,6 17.5,6 L7.5,6 Z M3,12 C2.44,12 2,11.56 2,11 L2,10 C2,9.44 2.44,9 3,9 L4,9 C4.56,9 5,9.44 5,10 L5,11 C5,11.56 4.56,12 4,12 L3,12 Z M4,10 L3,10 L3,11 L4,11 L4,10 Z M7.5,11 C7.22,11 7,10.78 7,10.5 C7,10.22 7.22,10 7.5,10 L17.5,10 C17.78,10 18,10.22 18,10.5 C18,10.78 17.78,11 17.5,11 L7.5,11 Z M3,17 C2.44,17 2,16.56 2,16 L2,15 C2,14.44 2.44,14 3,14 L4,14 C4.56,14 5,14.44 5,15 L5,16 C5,16.56 4.56,17 4,17 L3,17 Z M4,15 L3,15 L3,16 L4,16 L4,15 Z M7.5,16 C7.22,16 7,15.78 7,15.5 C7,15.22 7.22,15 7.5,15 L17.5,15 C17.78,15 18,15.22 18,15.5 C18,15.78 17.78,16 17.5,16 L7.5,16 Z" id="K"> </path> </g> </g> </svg>'+
								'</span>'+
								'<span class="title">'+listas[i].title+'</span>'+
								'<span class="overdue-count"></span>'+
								'<span class="count contadorNotas" id="'+listas[i].id+'"></span>'+
								'<span class="list-options ejecutarMostrarCompartir" title="Opciones de lista">'+
									'<svg class="options rtl-flip" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g id="options"><path d="M17.1330617,2.8594383 C15.9930617,1.7194383 14.0130617,1.7194383 12.8930617,2.8594383 L5.5130617,10.2394383 C5.3330617,10.4394383 5.3330617,10.7594383 5.5130617,10.9594383 C5.7130617,11.1394383 6.0330617,11.1394383 6.2330617,10.9594383 L13.5930617,3.5594383 C14.3530617,2.7994383 15.6730617,2.7994383 16.4130617,3.5594383 C17.1730617,4.3194383 17.1930617,5.5594383 16.4130617,6.3394383 L9.0330617,13.7594383 C8.7130617,14.0794383 8.9330617,14.6194383 9.3730617,14.6194383 C9.5130617,14.6194383 9.6330617,14.5594383 9.7330617,14.4594383 L17.1330617,7.0394383 C18.2930617,5.8794383 18.2930617,4.0194383 17.1330617,2.8594383 L17.1330617,2.8594383 Z M8.4930617,15.3594383 C8.0330617,13.4594383 6.5130617,11.9394383 4.6130617,11.4794383 C4.3530617,11.4194383 4.0930617,11.5794383 4.0130617,11.8194383 L2.0330617,17.3194383 C1.8730617,17.7194383 2.2730617,18.1194383 2.6730617,17.9594383 C8.6730617,15.7794383 8.2530617,15.9594383 8.3730617,15.8194383 C8.4930617,15.6994383 8.5330617,15.5194383 8.4930617,15.3594383 L8.4930617,15.3594383 Z M3.3330617,16.6594383 L4.8130617,12.5794383 C6.0130617,12.9994383 6.9730617,13.9794383 7.3930617,15.1794383 L3.3330617,16.6594383 Z" id="N"></path> </g></g></svg>'+
								'</span>'+
							'</a>'+
						'</li>'
					);
					$(".lists-collection").attr("data-totalListas", contadorLista);
					totalNotasP(cuentaSelect, listas[i].id);//obtenemos total de notas Pendientes
					totalNotasC (cuentaSelect, listas[i].id);//obtenemos total de notas Completadas
				}
				
				crearCuentaSeleccionada(cuentaSelect);
				
				$(".sidebarItem").on('click', function(e){
				
					e.stopPropagation();
				
					let idList = $(this).attr('rel');
					console.log(idList);
					let totalListas = 7 + listas.length;
					
					// RESALTAR LISTA SELECCIONADA CON COLOR AZUL Y ACTIVA FUNCIONES
					for (var i=1;i<=totalListas;i++){
						if ($(this).attr('id') == 'lista'+i){
							$("#lista"+i).removeClass("no-active").addClass("active"); // listas --> transforma el background de blanco a azul
							//LISTA --> FUNCTION MODIFICAR - ELIMINAR
							modificarEliminarLista(cuentaSelect, i);
						}else{
							$("#lista"+i).removeClass("active").addClass("no-active"); // listas --> transforma el background de blanco a azul
						}
					}
					
					//EJECUTAR MOSTRAR NOTAS
					mostrarNotasPendientes(cuentaSelect, idList); //mostrar notas pendientes
					//FUNCTION -> CREAR NOTA
					$("#nombreCrearNota").attr('data-idLista', idList);
					crearTareaNueva(cuentaSelect);
				});	
			});	
		}
		
		//TOTAL NOTAS PENDIENTES
		function totalNotasP(cuentaSelect, idListC){
			//PENDIENTES
			cuentaSelect.getUncompletedTasks(idListC, function (error, totalNotasPendientes) {
				//console.log('Nota pendiente: ' +  idListC);
				//console.log(error);
				if(totalNotasPendientes.length == 0){
					$("#"+idListC).text()
					$("#"+idListC).attr("data-totalNotasP",0);
				}else{
					$("#"+idListC).text(totalNotasPendientes.length)
					$("#"+idListC).attr("data-totalNotasP",totalNotasPendientes.length);
				}	
			});
		}
		//TOTAL NOTAS COMPLETAS
		function totalNotasC (cuentaSelect, idListC){
			//COMPLETAS
			cuentaSelect.getCompletedTasks(idListC, function (error, totalNotasCompletas) {
				//console.log('Nota completada: ' + idListC);
				//console.log(error);
				if(totalNotasCompletas.length == 0){
					$("#"+idListC).attr("data-totalNotasC",0);
				}else{
					$("#"+idListC).attr("data-totalNotasC",totalNotasCompletas.length);
				}
			});
		}
		
		//MOSTRAR NOTAS PENDIENTES
		function mostrarNotasPendientes(cuentaSelect, idList){
			console.log('MOSTRANDO NOTAS PENDIENTES');
			cuentaSelect.getUncompletedTasks(idList, function (error, notasIncomplet) {
				console.log(idList);
				console.log(error);
				//primero: eliminar todas las notas pendientes
				$(".lista-notas-pendientes").empty();
				//segundo: mostrar las nuevas notas pendientes
				for (let e=0;e<notasIncomplet.length;e++){
					let contadorNotas = 1 + e;
					$(".lista-notas-pendientes").append(
						'<li class="lista-tareas-pendientes taskItem" id="nota'+contadorNotas+'"  rel="'+notasIncomplet[e].id+'" data-idlist="'+idList+'" title="'+notasIncomplet[e].title+'">'+
							'<div class="taskItem-body">'+
								'<a class="taskItem-checkboxWrapper checkBox" tabindex="-1">'+
									'<span title="Marcar como completada">'+
										'<svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>'+
									'</span>'+ 
									'<span title="Marcar como no completada">'+
										'<svg class="task-checked" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path> <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path> </g> </svg>'+
									'</span>'+ 
								'</a>'+
								'<div class="taskItem-titleWrapper" tabindex="-1">'+ 
									'<span class="taskItem-titleWrapper-title" title="'+notasIncomplet[e].title+'">'+notasIncomplet[e].title+'</span>'+  
								'</div>'+ 
								'<span class="conversations-wrapper hidden " title="Esta tarea tiene comentarios">'+ 
									'<svg class="conversations-small rtl-flip" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g class="outlined"> <path d="M6.26,15 C5.98,15 5.68,14.96 5.38,14.9 C5.18,14.84 5.04,14.68 5,14.48 C4.98,14.26 5.08,14.06 5.26,13.96 C5.78,13.68 6.02,13.3 6,12.8 C6,12.48 5.84,12.16 5.64,11.76 C5.36,11.18 5,10.48 5,9.5 C5,7.02 7.24,5 10,5 C12.76,5 15,7.02 15,9.5 C15,11.98 12.76,14 10,14 C9.58,14 9.16,13.96 8.76,13.86 C8.38,14.28 7.56,15 6.26,15 L6.26,15 Z M10,6 C7.8,6 6,7.56 6,9.5 C6,10.24 6.28,10.78 6.54,11.32 C6.78,11.8 7,12.26 7,12.78 C7,13.22 6.9,13.62 6.7,13.96 C7.64,13.78 8.12,13.06 8.14,13.02 C8.26,12.84 8.5,12.76 8.7,12.82 C9.14,12.94 9.56,13 10,13 C12.2,13 14,11.42 14,9.5 C14,7.56 12.2,6 10,6 L10,6 Z"></path> </g> <g class="filled"> <path d="M6.26,15 C5.98,15 5.68,14.96 5.38,14.9 C5.18,14.84 5.04,14.68 5,14.48 C4.98,14.28 5.08,14.08 5.26,13.98 C5.78,13.68 6.02,13.32 6,12.8 C6,12.5 5.84,12.16 5.64,11.78 C5.36,11.2 5,10.48 5,9.5 C5,7.02 7.24,5 10,5 C12.76,5 15,7.02 15,9.5 C15,11.98 12.76,14 10,14 C9.58,14 9.16,13.96 8.76,13.88 C8.38,14.28 7.56,15 6.26,15 L6.26,15 Z" opacity="0"></path> </g> </svg>'+ 
								'</span>'+
								'<span class="attachment-wrapper hidden" title="Esta tarea tiene datos adjuntos">'+ 
									'<svg class="attachment" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="attachment"> <path d="M13.4075,5.2925 C13.0275,4.9125 12.3675,4.9125 11.9875,5.2925 L10.3075,6.9925 L8.7475,6.9925 C7.8075,6.9925 6.9475,7.3525 6.2675,8.0125 L5.1475,9.1325 C5.0675,9.2325 5.0075,9.3525 5.0075,9.4925 C5.0075,9.6125 5.0675,9.7525 5.1475,9.8325 L7.3075,11.9925 L5.1475,14.1325 C4.9675,14.3325 4.9675,14.6525 5.1475,14.8525 C5.2475,14.9525 5.3875,14.9925 5.5075,14.9925 C5.6475,14.9925 5.7675,14.9525 5.8675,14.8525 L8.0075,12.6925 L10.1675,14.8525 C10.2475,14.9525 10.3875,14.9925 10.5075,14.9925 C10.6475,14.9925 10.7675,14.9525 10.8675,14.8525 L11.9875,13.7325 C12.6475,13.0725 13.0075,12.1925 13.0075,11.2525 L13.0075,9.6925 L14.7075,8.0125 C15.0875,7.6125 15.0875,6.9725 14.7075,6.5925 L13.4075,5.2925 Z M13.9875,7.2925 L12.1675,9.1325 C12.0675,9.2325 12.0075,9.3525 12.0075,9.4925 L12.0075,11.2525 C12.0075,11.9125 11.7475,12.5525 11.2875,13.0125 L10.5075,13.7925 L6.2075,9.4925 L6.9875,8.7125 C7.4475,8.2525 8.0875,7.9925 8.7475,7.9925 L10.5075,7.9925 C10.6475,7.9925 10.7675,7.9325 10.8675,7.8325 L12.7075,6.0125 L13.9875,7.2925 Z" id="Q"></path> </g> </g> </svg>'+ 
								'</span>'+ 
								'<span class="taskItem-duedate  hidden" tabindex="-1"></span>'+
								'<span class="recurrence-wrapper  hidden" tabindex="-1" title="Recurring to-do">'+
									'<svg class="recurrence" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="recurrence"> <path d="M17.5193115,10 C17.2393115,10 16.9993115,10.2 16.9793115,10.46 C16.7393115,14.12 13.6793115,17 10.0193115,17 C6.15931146,17 3.01931146,13.86 3.01931146,10 C3.01931146,6.14 6.15931146,3 10.0193115,3 C13.3393115,3 15.2593115,5.48 16.3993115,6.98 C16.4193115,6.98 16.4193115,7 16.4193115,7 L12.9793115,7 C12.7193115,7 12.4793115,7.22 12.4793115,7.5 C12.4793115,7.78 12.7193115,8 12.9793115,8 C17.8393115,8 17.5593115,8.02 17.6793115,7.96 C17.8593115,7.88 17.9793115,7.7 17.9793115,7.5 L17.9793115,2.5 C17.9793115,2.22 17.7593115,2 17.4793115,2 C17.2193115,2 16.9793115,2.22 16.9793115,2.5 L16.9793115,6.08 C15.7793115,4.52 13.6193115,2 10.0193115,2 C5.59931146,2 2.01931146,5.58 2.01931146,10 C2.01931146,14.42 5.59931146,18 10.0193115,18 C14.1993115,18 17.6993115,14.72 17.9793115,10.54 C17.9993115,10.26 17.7993115,10.02 17.5193115,10 L17.5193115,10 Z M9.47931146,5 C9.21931146,5 8.97931146,5.22 8.97931146,5.5 L8.97931146,10.5 C8.97931146,10.78 9.21931146,11 9.47931146,11 L13.4793115,11 C13.7593115,11 13.9793115,10.78 13.9793115,10.5 C13.9793115,10.22 13.7593115,10 13.4793115,10 L9.97931146,10 L9.97931146,5.5 C9.97931146,5.22 9.75931146,5 9.47931146,5 L9.47931146,5 Z" id="f"></path> </g> </g> </svg>'+ 
								'</span>'+ 
								'<a class="taskItem-assign hidden" tabindex="-1">  </a>'+
								'<a class="taskItem-star" tabindex="-1">'+ 
									'<!--hidden para ocutar la estrella-->'+
									'<span class="star-wrapper " title="Marcar como destacada">'+ 
										'<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>'+ 
									'</span>'+ 
									'<!--hidden para ocutar la estrella con lazo rojo de destacado-->'+
									'<span class="starred-wrapper hidden" title="Marcar como no destacada">'+ 
										'<svg width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>'+ 
									'</span>'+ 
								'</a>'+ 
								'<div class="taskItem-progress transparent">'+
									'<span class="taskItem-progress-bar"></span>'+ 
								'</div>'+
							'</div>'+ 
						'</li>'
					);
				}
				mostrarNotasCompletadas(cuentaSelect, idList);//mostrar notas completas al finalizar las notas pendientes
			});
		}
		
		//MOSTRAR NOTAS COMPLETADAS
		function mostrarNotasCompletadas(cuentaSelect, idList){
			console.log('MOSTRANDO NOTAS COMPLETADAS');
			cuentaSelect.getCompletedTasks(idList, function (error, notasComplet) {
				console.log(idList);
				console.log(error);
				let totalMP = 0 + parseInt($("#"+idList).attr("data-totalNotasP")); //obtenemos total notas pendientes
				//primero: eliminar todas las notas completadas
				$(".lista-notas-completadas").empty();
				//segundo: mostrar las nuevas notas completadas
				for (let e=0;e<notasComplet.length;e++){
					let contadorNC = 1 + e + totalMP; // sumamos 1 al total notas pendientes 	
					$(".lista-notas-completadas").append(
						'<li class="taskItem done" id="nota'+contadorNC+'" rel="'+notasComplet[e].id+'" data-idlist="'+idList+'" title="'+notasComplet[e].title+'">'+
							'<div class="taskItem-body">'+ 
								'<a class="taskItem-checkboxWrapper checkBox checked" tabindex="-1">'+ 
									'<span title="Marcar como completada">'+
										'<svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>'+ 
									'</span>'+
									'<span title="Marcar como no completada">'+
										'<svg class="task-checked" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path> <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path> </g> </svg>'+ 
									'</span>'+
								'</a>'+ 
								'<div class="taskItem-titleWrapper" tabindex="-1">'+ 
									'<span class="taskItem-titleWrapper-title" title="'+notasComplet[e].title+'">'+notasComplet[e].title+'</span>'+
									'<div class="taskItem-titleMeta-info">'+ 
										'<text class="nameApi" rel="label_by_$">fecha de completada</token></text>'+
									'</div>'+
								'</div>'+ 
								'<span class="conversations-wrapper hidden " title="Esta tarea tiene comentarios">'+
									'<svg class="conversations-small rtl-flip" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g class="outlined"> <path d="M6.26,15 C5.98,15 5.68,14.96 5.38,14.9 C5.18,14.84 5.04,14.68 5,14.48 C4.98,14.26 5.08,14.06 5.26,13.96 C5.78,13.68 6.02,13.3 6,12.8 C6,12.48 5.84,12.16 5.64,11.76 C5.36,11.18 5,10.48 5,9.5 C5,7.02 7.24,5 10,5 C12.76,5 15,7.02 15,9.5 C15,11.98 12.76,14 10,14 C9.58,14 9.16,13.96 8.76,13.86 C8.38,14.28 7.56,15 6.26,15 L6.26,15 Z M10,6 C7.8,6 6,7.56 6,9.5 C6,10.24 6.28,10.78 6.54,11.32 C6.78,11.8 7,12.26 7,12.78 C7,13.22 6.9,13.62 6.7,13.96 C7.64,13.78 8.12,13.06 8.14,13.02 C8.26,12.84 8.5,12.76 8.7,12.82 C9.14,12.94 9.56,13 10,13 C12.2,13 14,11.42 14,9.5 C14,7.56 12.2,6 10,6 L10,6 Z"></path> </g> <g class="filled"> <path d="M6.26,15 C5.98,15 5.68,14.96 5.38,14.9 C5.18,14.84 5.04,14.68 5,14.48 C4.98,14.28 5.08,14.08 5.26,13.98 C5.78,13.68 6.02,13.32 6,12.8 C6,12.5 5.84,12.16 5.64,11.78 C5.36,11.2 5,10.48 5,9.5 C5,7.02 7.24,5 10,5 C12.76,5 15,7.02 15,9.5 C15,11.98 12.76,14 10,14 C9.58,14 9.16,13.96 8.76,13.88 C8.38,14.28 7.56,15 6.26,15 L6.26,15 Z" opacity="0"></path> </g> </svg>'+
								'</span>'+ 
								'<span class="attachment-wrapper hidden" title="Esta tarea tiene datos adjuntos">'+ 
									'<svg class="attachment" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="attachment"> <path d="M13.4075,5.2925 C13.0275,4.9125 12.3675,4.9125 11.9875,5.2925 L10.3075,6.9925 L8.7475,6.9925 C7.8075,6.9925 6.9475,7.3525 6.2675,8.0125 L5.1475,9.1325 C5.0675,9.2325 5.0075,9.3525 5.0075,9.4925 C5.0075,9.6125 5.0675,9.7525 5.1475,9.8325 L7.3075,11.9925 L5.1475,14.1325 C4.9675,14.3325 4.9675,14.6525 5.1475,14.8525 C5.2475,14.9525 5.3875,14.9925 5.5075,14.9925 C5.6475,14.9925 5.7675,14.9525 5.8675,14.8525 L8.0075,12.6925 L10.1675,14.8525 C10.2475,14.9525 10.3875,14.9925 10.5075,14.9925 C10.6475,14.9925 10.7675,14.9525 10.8675,14.8525 L11.9875,13.7325 C12.6475,13.0725 13.0075,12.1925 13.0075,11.2525 L13.0075,9.6925 L14.7075,8.0125 C15.0875,7.6125 15.0875,6.9725 14.7075,6.5925 L13.4075,5.2925 Z M13.9875,7.2925 L12.1675,9.1325 C12.0675,9.2325 12.0075,9.3525 12.0075,9.4925 L12.0075,11.2525 C12.0075,11.9125 11.7475,12.5525 11.2875,13.0125 L10.5075,13.7925 L6.2075,9.4925 L6.9875,8.7125 C7.4475,8.2525 8.0875,7.9925 8.7475,7.9925 L10.5075,7.9925 C10.6475,7.9925 10.7675,7.9325 10.8675,7.8325 L12.7075,6.0125 L13.9875,7.2925 Z" id="Q"></path> </g> </g> </svg>'+ 
								'</span>'+ 
								'<span class="taskItem-duedate  hidden" tabindex="-1"></span>'+
								'<span class="recurrence-wrapper  hidden" tabindex="-1" title="Recurring to-do">'+
									'<svg class="recurrence" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="recurrence"> <path d="M17.5193115,10 C17.2393115,10 16.9993115,10.2 16.9793115,10.46 C16.7393115,14.12 13.6793115,17 10.0193115,17 C6.15931146,17 3.01931146,13.86 3.01931146,10 C3.01931146,6.14 6.15931146,3 10.0193115,3 C13.3393115,3 15.2593115,5.48 16.3993115,6.98 C16.4193115,6.98 16.4193115,7 16.4193115,7 L12.9793115,7 C12.7193115,7 12.4793115,7.22 12.4793115,7.5 C12.4793115,7.78 12.7193115,8 12.9793115,8 C17.8393115,8 17.5593115,8.02 17.6793115,7.96 C17.8593115,7.88 17.9793115,7.7 17.9793115,7.5 L17.9793115,2.5 C17.9793115,2.22 17.7593115,2 17.4793115,2 C17.2193115,2 16.9793115,2.22 16.9793115,2.5 L16.9793115,6.08 C15.7793115,4.52 13.6193115,2 10.0193115,2 C5.59931146,2 2.01931146,5.58 2.01931146,10 C2.01931146,14.42 5.59931146,18 10.0193115,18 C14.1993115,18 17.6993115,14.72 17.9793115,10.54 C17.9993115,10.26 17.7993115,10.02 17.5193115,10 L17.5193115,10 Z M9.47931146,5 C9.21931146,5 8.97931146,5.22 8.97931146,5.5 L8.97931146,10.5 C8.97931146,10.78 9.21931146,11 9.47931146,11 L13.4793115,11 C13.7593115,11 13.9793115,10.78 13.9793115,10.5 C13.9793115,10.22 13.7593115,10 13.4793115,10 L9.97931146,10 L9.97931146,5.5 C9.97931146,5.22 9.75931146,5 9.47931146,5 L9.47931146,5 Z" id="f"></path> </g> </g> </svg>'+
								'</span>'+ 
								'<a class="taskItem-assign hidden" tabindex="-1">  </a>'+
								'<a class="taskItem-star" tabindex="-1"">'+
									'<span class="star-wrapper " title="Marcar como destacada">'+
										'<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>'+ 
									'</span>'+
									'<span class="starred-wrapper hidden" title="Marcar como no destacada">'+ 
										'<svg width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>'+  
									'</span>'+ 
								'</a>'+ 
								'<div class="taskItem-progress transparent">'+ 
									'<span class="taskItem-progress-bar"></span>'+
								'</div>'+ 
							'</div>'+
						'</li>'
					);
				}
						
				tareaSeleccionada(cuentaSelect, idList); //ejecutamos al terminar de mostrar notas terminadas.	
			});
		}

////////////LISTAS	
			
			//CREAR LISTA
			function crearCuentaSeleccionada(cuentaSelect){
				$("#ejecutarGuardarCrearLista").on('click', function(e){
					e.stopImmediatePropagation();
					let idCuentaSelect = $("#nombreCuentaSeleccionada").attr('data-idCuentaSeleccionada'); 
					let title = $("#nombreCrearLista").val();		
					console.log('crear lista:');
					cuentaSelect.createList(title, function (error, crearListaAccion) {
						console.log('lista creada');
						console.log(title);
						console.log(error);
						console.log(crearListaAccion);
						$("#boton3").addClass("hidden"); 					 // ocultamos ventana modal
						$("#nombreCrearLista").val('');			 			 // limpiamos el value
						$("#botonGuardarCrearLista").addClass('disabled');	 // anulamos el boton
						//actualizamos lists
						mostrarList(cuentaSelect); 
					});
				});
			}
		
		// LISTA	--> MODIFICAR - MODIFICAR
			function modificarEliminarLista(cuentaSelect, i){
				let tituloLista = $("#lista"+i).attr('title');
				if (i > 7){
					$(".ejecutarMostrarCompartir").removeClass('disabled').addClass('active');  // añadimos active
					$("#nombreModificarEliminarLista").attr('value',tituloLista);
				}else{
					$(".ejecutarMostrarCompartir").addClass('disabled').removeClass('active');  // añadimos disable
				}
				
				modificarLista(cuentaSelect, i);
				eliminarLista(cuentaSelect, i, tituloLista);
			}
			
			// LISTA	--> MODIFICAR
			function modificarLista(cuentaSelect, i){
				//ejecutamos api modificar lista
				$("#ejecutarOcultarCompartir").on('click', function(e){
					e.stopImmediatePropagation();
					let idLista = $("#lista"+i).attr('rel'); // capturo el id de la lista seleccionada
					let updateData = $("#nombreModificarEliminarLista").val();
					console.log('modificar listas');
					let idListN = parseInt(idLista);
					cuentaSelect.updateList(idListN, updateData, function (error, modificarListaAccion) {
						console.log('lista modificada');
						console.log(idListN);
						console.log(updateData);
						console.log(error);
						console.log(modificarListaAccion);
						//actualizamos lists
						$("#nombreModificarEliminarLista").attr('value',''); // borrar el value
						$("#boton2").addClass("hidden"); 	// ocultamos ventana modal
						mostrarList(cuentaSelect); 
					});
				});
			}
			
			// LISTA	--> ELIMINAR
			function eliminarLista(cuentaSelect, i, tituloLista){
				//enviar datos eliminar lista 
				$(".ejecutarMostrarEliminarLista").on('click', function(){
					$(".textoParaEliminar").attr('rel', 'lista');				//añado la accion que quiero que elimine
					$("#textoBotonEliminarListaTarea").text("Eliminar lista"); 	//añado texto en el boton
					$(".textoParaEliminar").text('”'+tituloLista+'” se eliminará de forma permanente.'); //añado titulo de tarea al texto	
				});
				
				$(".confirmarEliminarLista").on('click', function(e){ 
					e.stopImmediatePropagation();
					let idLista = $("#lista"+i).attr('rel'); // capturo el id de la lista seleccionada
					let seleccionTareaLista = $(".textoParaEliminar").attr('rel');
					if(seleccionTareaLista == 'lista'){
						console.log('eliminar lista');
						let idListN = parseInt(idLista);
						cuentaSelect.deleteList(idListN, function (error, eliminarListaAccion) {
							console.log('lista eliminada');
							console.log(idListN);
							console.log(error);
							console.log(eliminarListaAccion);
							$("#boton4").addClass("hidden"); 	// ocultamos ventana modal
							//actualizamos lists
							mostrarList(cuentaSelect); 
						});
					}
				});
			}
		
////////////TAREAS
			
			// RESALTAR TAREA SELECCIONADA CON COLOR AZUL
			function tareaSeleccionada(cuentaSelect, idList){
				console.log('lista seleccionada')
				let totalNotasPC = parseInt($("#"+idList).attr("data-totalNotasP")) + parseInt($("#"+idList).attr("data-totalNotasC")); //obtenemos total notas pendientes
				$(".tarea-seleccionada li").on('click', function(){
					for (var i=1;i<=totalNotasPC;i++){
						if ($(this).attr('id') == 'nota'+i){
							$("#nota"+i).removeClass("no-selected").addClass("selected"); // notas --> transforma el background de blanco a azul
							$(".mostrar-opciones-mas").removeClass("disabled"); 		  // mostrar opciones en AUBMENU MAS de lista tareas
						}else{
							$("#nota"+i).removeClass("selected").addClass("no-selected"); // notas --> transforma el background de blanco a azul
						}
					}
				});
				
				mostrarMenuDerecho(cuentaSelect, idList);
			}
		
			// TAREA	--> CREAR
			function crearTareaNueva(cuentaSelect){
				// comprobamos que hay texto escrito
				$("#nombreCrearNota").keypress(function(e){
					e.stopImmediatePropagation();
					console.log('crear tarea');
					if($(this).val() != ''){
						// si lo hay...
						if(e.keyCode == 13) {
							let title = $("#nombreCrearNota").val();
							let idList = $("#nombreCrearNota").attr('data-idLista');
							let idTareaN = parseInt(idList);
							cuentaSelect.createTask(idTareaN, title, function (error, crearTareaAccion) {
								console.log('tarea creada');
								console.log(idTareaN);
								console.log(title);
								console.log(error);
								console.log(crearTareaAccion);
								$("#nombreCrearNota").val('');	// limpiamos el value
								let contadorNotas = parseInt($("#"+idList).attr('data-totalnotasp'))+1;
								$("#"+idList).attr('data-totalnotasp', contadorNotas);
								$("#"+idList).text(contadorNotas);
								//actualizamos Notas
								mostrarNotasPendientes(cuentaSelect, idList); //mostrar notas pendientes
							});
						}
					}else{
						// no hago nada
					}
				});
			}
		
			// MENU DERECHO --> MOSTRAR OCULTAR
			function mostrarMenuDerecho(cuentaSelect, idList){
				//mostrar
				$(".tarea-seleccionada li").dblclick(function(){ 
					let capturoId = $(this).attr('rel');			//capturo id de la tarea
					let capturoTitle = $(this).attr('title'); 		//capturo ttulo de la tarea
					$(".colocarNombreTarea").attr('rel', capturoId);//añado id de tarea
					$(".colocarNombreTarea").text(capturoTitle);    //añado titulo de tarea al texto
					$("#detail").removeClass("hidden");				//abro el menu derecho de tarea
					
					$(".ejecutarMostrarEliminarTarea").on('click', function(){
						$(".textoParaEliminar").attr('data-idtarea', capturoId);	//añado la accion que quiero que elimine
						$(".textoParaEliminar").attr('rel', 'tarea');				//añado la accion que quiero que elimine
						$("#textoBotonEliminarListaTarea").text("Eliminar tarea"); 	//añado texto en el boton
						$(".textoParaEliminar").text('”'+capturoTitle+'” se eliminará de forma permanente.'); //añado titulo de tarea al texto
					});
				});
				
				// funcion modificar tarea
				modificarTareaSeleccionada(cuentaSelect, idList);
				// funcion elminar tarea
				eliminarTareaSeleccionada(cuentaSelect, idList);
			}

			// TAREA	--> MODIFICAR
			function modificarTareaSeleccionada(cuentaSelect, idList){
				// comprobamos que hay texto escrito
				$("#ejecutarModificarNombreTarea").keypress(function(e){
					e.stopImmediatePropagation();
					console.log('modificar tarea');
					if($(this).val() != ''){
						// si lo hay...
						if(e.keyCode == 13) {
							let updateData = $("#ejecutarModificarNombreTarea").val();
							let idTarea = $(".colocarNombreTarea").attr('rel');//añado id de tarea
							let idTareaN = parseInt(idTarea);
							cuentaSelect.updateTask(idTareaN, updateData, function (error, modificarTareaAccion) {
								console.log('tarea modificada');
								console.log(idTareaN);
								console.log(updateData);
								console.log(error);
								console.log(modificarTareaAccion);
								//actualizamos Notas
								mostrarNotasPendientes(cuentaSelect, idList); //mostrar notas pendientes
							});
						}
					}else{
						// no hago nada
					}
				});
			}
		
			// TAREA	--> ELIMINAR
			function eliminarTareaSeleccionada(cuentaSelect, idList){
				//ejecutamos api eliminar tarea
				$(".confirmarEliminarTarea").on('click', function(e){ 
					e.stopImmediatePropagation();
					console.log('eliminar tarea');
					let capturoId = $(".textoParaEliminar").attr('data-idtarea');
					let seleccionTareaLista = $(".textoParaEliminar").attr('rel');
					if(seleccionTareaLista == 'tarea'){
						let idTareaN = parseInt(capturoId);
						cuentaSelect.deleteTask(idTareaN, function (error, eliminarTareaAccion) {
							console.log('tarea eliminada');
							console.log(idTareaN);
							console.log(error);
							console.log(eliminarTareaAccion);
							$("#boton4").addClass("hidden"); 	// ocultamos ventana modal
							//actualizamos Notas
							mostrarNotasPendientes(cuentaSelect, idList); //mostrar notas pendientes
						});
					}
				});
			}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		show_accounts();