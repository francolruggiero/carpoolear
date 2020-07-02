const messages = {
    'arg': {
        loginUsuarioPlaceholder: 'El email con el que te registraste',
        loginPasswordPlaceholder: 'Contraseña',
        documento: 'Número de documento',
        doc: 'DNI',
        unaswered_messages_limit: 'Límites de consultas por un viaje',
        unaswered_messages_limitDescription: 'Establece un máximo de consultas (solicitudes o mensajes) que podés recibir por un viaje.',
        requisitosRegister: 'Se requiere que cargue: licencia de conductor, seguro del vehículo ...',
        RegistrarNuevoUsuario: 'Registrate',
        camposObligatorios: 'Los campos marcados con (*) son obligatorios.',
        nombre: 'Nombre',
        apellido: 'Apellido',
        email: 'Email',
        password: 'Contraseña',
        ingresePassword: 'Ingrese nuevamente su contraseña',
        solicitarChofer: 'Solicitar ser chofer',
        ingresarDocumentacion: 'Ingrese la documentación',
        leidoTerminos1: 'He leído y acepto los',
        leidoTerminos2: 'términos y condiciones',
        registroExitoso: 'Registro Exitoso!',
        enviadoCodigoVerificacion: 'Te hemos enviado un código de verificación a tu e-mail para que puedas activar tu cuenta y comenzar a compartir viajes.',
        registrarme: 'Registrarme',
        hola: 'Hola',
        bienvenidoACarpoolear: '!! Bienvenido a Carpoolear, para comenzar a subirte a viajes y crear tus propios viajes, debes terminar de completar tu perfil.',
        completaTu: 'Completa tu',
        imagenPerfil: 'imagen de perfil',
        yTu: 'y tu',
        descripcion: 'descripción',
        comenzarViajar: 'para comenzar a viajar.',
        incentivoFoto: 'Generá confianza con el resto de la comunidad carpoolear, usá una foto tuya y contales un poco acerca de vos. Con eso aumentás tus chances de que alguien quiera compartir viaje con vos... es verdad, llevar torta para compartir también ayuda mucho :D',
        nombreYapellido: 'Nombre y apellido',
        acercaDeMi: 'Acerca de mi',
        soloNumeros: 'Solo números',
        incentivoDescripcion: 'Contale de vos al resto de los usuarios así te suman a sus viajes! Qué te gusta hacer, en qué andas metido ahora, si estás con alguna idea, si te gustan los colores, etc.',
        incentivoDoc: 'Antes de comenzar el viaje, verificá que el DNI se corresponda con el que cargó la otra persona.',
        momentoViajar: 'al momento de viajar.',
        nroTel: 'Número de teléfono',
        ejemploTelefono: 'Código área + teléfono. Ej: 0341156708223',
        incentivoTelefono: 'Después de haber coordinado el viaje (definir detalles del viaje + envío y aceptación de solicitud de asiento) intercambien celulares para tener un contacto más ágil.',
        soloConductores: 'Sólo para conductores',
        incentivoPatente: 'Antes de comenzar el viaje, verifica que la patente se corresponda con la informada por la otra persona.',
        siSosConductorDatosVisibles: 'Si sos conductor, estos datos son visibles para los pasajero que hayas confirmado en tu viaje. Si sos pasajero, estos datos son visibles para el conductor del viaje al que te haya subido y estés confirmado.',
        tildaOpcionDatosVisibles: 'Seleccioná esta opción y guardá los cambios si quieres que estos datos sean visible para cualquier usuario que acceda tu perfil. Sino estos datos solo serán visibles para los pasajeros que confirmes en tu viaje, o para el conductor del viaje al que te subas y te confirme.',
        datosVisiblesCheck: 'Datos públicos',
        notificacionesPorCorreo: 'Recibir notificaciones por correo electrónico.',
        cambiarPassword: 'Cambiar contraseña',
        ingreseNuevaPassword: 'Ingrese su nueva contraseña',
        soliciarSerChofer: 'Solicitar ser chofer',
        ingreseDocumentacion: 'Ingrese la documentación',
        seRequiereDocumentacion: 'Se requiere que cargue: licencia de conductor, seguro del vehículo ...',
        choferVerificado: 'Ya eres un chofer verificado.',
        guardarCambio: 'Guardar cambios',
        guardando: 'Guardando ...',
        Lugares: 'Lugares',
        libres: 'libres',
        Lugar: 'Lugar',
        libre: 'libre',
        Ver: 'Ver',
        Carpooleado: 'Carpooleado',
        buscaConQuien: 'Buscá con quién compartir tu próximo viaje!',
        elegiDatos: '¡Elegí fecha, origen o destino y encontralo!',
        ingresaORegistrate: 'Ingresá con tu usuario o registrate',
        aqui: 'aquí',
        paraComenzar: 'para comenzar a Carpoolear!',
        donaA: 'Doná a Carpoolear',
        proyectoDe: 'un proyecto de',
        unicaVez: 'ÚNICA VEZ',
        MENSUAL: 'MENSUAL',
        cancelaCuando: 'cancelá cuando quieras',
        ayudanos: 'Ayudanos a seguir siendo una plataforma abierta, colaborativa y sin fines de lucro',
        porQueDonar: 'Por qué donar a Carpoolear',
        resultadosCercanos: 'Resultados cercanos',
        podesSubscribirte: 'Ahora podés suscribirte para que te avisemos cuando haya un nuevo viaje que concuerde con lo que estas buscando.',
        crearAlerta: 'Crear Alerta',
        cargandoMasResultados: 'Cargando más resultados',
        noHayViajes: '¡Ups! No hay viajes con los criterios indicados en la búsqueda.',
        noHayViajesCargadosAun: '¡Ups! No se han creado ningún viaje en la plataforma! Puedes ser el primero en hacerlo.',
        subscribirteAViajes: 'Ahora podés suscribirte para que te avisemos cuando haya un nuevo viaje que concuerde con lo que estas buscando.',
        cargandoViajes: 'Cargando viajes ...',
        comoConductor: 'Como conductor',
        comoPasajero: 'Como pasajero',
        meComprometo: 'Me comprometo a no lucrar con el viaje.',
        contribucionMaxima: 'La contribución máxima es igual a gastos de combustible + peaje dividido la cantidad de personas viajando en el auto. Durante la coordinación previa al viaje, cualquier persona puede pedir hacer la división con tickets de combustible y peaje en mano.',
        origenOdestino: 'Origen o destino fuera de',
        habilitaOrigen: 'Habilita seleccionar origen o destino fuera de Argentina. Recordá averiguar con la aseguradora del auto, si tenés cobertura contra terceros fuera de la Argentina. Si no es así, tenés que sacar la extensión fuera de Argentina para tener cobertura durante el viaje',
        origen: 'Origen',
        destino: 'Destino',
        distanciaARecorrer: 'Distancia a recorrer',
        tiempoEstimado: 'Tiempo estimado de viaje',
        huellaCarbono: 'Huella de carbono',
        dia: 'Día',
        hora: 'Hora',
        lugaresDisponibles: 'Lugares disponibles',
        cuposNecesarios: 'Cuantos cupos necesitas',
        comentarioPasajeros: 'Comentario para los pasajeros',
        privacidadViaje: 'Privacidad del viaje',
        publico: 'Público',
        amigosamigos: 'Amigos de Amigos',
        soloAmigos: 'Solo amigos',
        preferenciasViaje: 'Preferencias del viaje',
        nofumar: 'No fumar',
        noanimales: 'No animales',
        noninos: 'No niños',
        cargarViajeRegreso: 'Cargar viaje de regreso',
        crear: 'CREAR',
        actualizar: 'Actualizar',
        privacidadViajeVuelta: 'Privacidad del viaje de vuelta',
        olvidoEmail: 'Olvidó ingresar su email.',
        ingreseEmailValido: 'Ingrese un email válido.',
        olvidoContrasena: 'Olvidó ingresar su contraseña.',
        contraCorta: 'Las contraseña debe tener al menos 8 caracteres.',
        olvidoConfirmarContra: 'Olvidó confirmar su contraseña.',
        contraNoCoinciden: 'Las contraseñas no coinciden.',
        olvidoNombre: 'Olvidó ingresar su nombre.',
        olvidoApellido: 'Olvidó ingresar su apellido.',
        debeCorregirCampos: 'Debe corregir o completar algunos campos para finalizar su registro.',
        mailEnUso: 'La cuenta de email ingresada se encuentra en uso.',
        errorRegistro: 'Ocurrió un error al procesar el registro, por favor vuelva a intentar.',
        valorDonacion: 'Tienes que seleccionar un valor de donación.',
        correctamenteSubscripto: 'Te subscribiste correctamente. Te avisaremos cuando hayan viajes similares',
        yaTienesSubscripcion: 'Ya tienes una suscripción para esta búsqueda.',
        disminuirAsientos: 'Disminuir en uno la cantidad de asientos',
        aumentarAsientos: 'Aumentar en uno la cantidad de asientos',
        asientosMenorACero: 'La cantidad de asientos no puede ser menor a cero.',
        masDeCuatroAsientos: 'Un viaje no puede tener más de 4 asientos disponibles.',
        noPuedesDisminuirAsientos: 'Ya tienes pasajeros subidos no puedes disminuir la cantidad de asientos.',
        errorACambiarAsientos: 'Se produjo un error al cambiar la cantidad de asientos. Por favor vuelva a intentarlo.',
        seguroCancelar: '¿Estás seguro que deseas cancelar el viaje?',
        viajeCancelado: 'El viaje fue cancelado.',
        errorAlCancelar: 'Ocurrió un error al cancelar el viaje.',
        faltanCamposObligatorios: 'Te faltaron completar campos obligatorios o ingresaste datos inválidos.',
        passwordNoCoincide: 'Password no coincide',
        perfilActualizadoCorrectamente: 'Perfil actualizado correctamente.',
        debesImagenPerfil: 'Debes cargar una imagen de perfil.',
        errorDatos: 'No se pudo grabar los datos. Intente de nuevo',
        olvidasteNombre: 'Olvidaste ingresar tu nombre y apellido.',
        patente: 'Patente',
        patenteNoValida: 'La patente ingresada no tiene un formato válido.',
        olvidastePatente: 'Olvidaste completar ingresar la patente.',
        olvidasteDescripcion: 'Olvidaste completar tu descripción.',
        olvidasteDni: 'Olvidaste completar el documento.',
        olvidasteTel: 'Olvidaste completar el télefono.',
        descripcionCorta: 'Ups! Tu descripción es muy acotada. No seas tímido, contanos un poco más.',
        dniNoValido: 'El DNI que ingresaste no es válido.',
        telefonoNoValido: 'El teléfono que ingresaste no es válido.',
        localidadValida: 'Seleccione una localidad válida.',
        origenDestinoArgentina: 'El origen o el destino de tu viaje tiene que estar en Argentina.',
        seleccioneLocalidadValida: 'Seleccione una localidad válida.',
        noHorarioValido: 'No ingresaste un horario válido.',
        origenDestinoDistintos: 'La localidad de origen y destino no deben ser la misma.',
        faltaFecha: 'Aún no ha ingresado ninguna fecha.',
        yaTienes: 'Aún no ha ingresado ninguna fecha.',
        pasajerosSubidos: ' subidos en este viaje. No puedes cambiar el número de asientos por uno menor al de pasajeros ya subidos.',
        algunosDatosNoValidos: 'Algunos datos ingresados no son válidos.',
        teComprometesANoLucrar: 'Debes indicar que te comprometes a no lucrar con el viaje.',
        viajesPasado: 'En Carpoolear no se permiten viajes hacia el pasado :), revisá la fecha y hora de tu viaje.',
        fechaHoraLogicas: 'La fecha y hora de tu viaje de regreso deben que ser mayores a la fecha y hora de tu viaje de ida.',
        tienesQueSerConductor: 'Tienes que ser verificado como conductor para poder cargar viajes.',
        problemaAlCargarElViaje: 'Ocurrió un problema al cargar el viaje. Por favor vuelva a intentarlo.',
        ingresePuntoIntermedio: 'Ingrese punto intermedio',
        buscarFacebook: 'Buscar en Facebook',
        aportanteMediaNaranja: 'Aportante en la campaña mi media naranja carpoolera',
        miembroEquipo: 'Miembro del equipo de Carpoolear',
        cambioFacebook: 'Facebook cambio sus políticas y no podemos llevarte al perfil de esta persona, pero te ayudamos a buscarlo.',
        enviarMensaje: 'Enviar mensaje',
        editarPerfil: 'Editar perfil',
        enviarReferencia: 'Escribir una referencia del usuario',
        referenciaExitosa: 'El comentario fue enviado exitosamente',
        referenciaError: 'Ocurrió un problema al enviar el comentario.',
        referenciaExist: 'Ya has realizado una referencia a este usuario anteriormente',
        referenciaSameUser: 'No puedes enviarte una referencia a ti mismo',
        userDoesntExist: 'El usuario no existe',
        verAmigos: 'Ver amigos',
        noCalificaciones: 'No hay calificaciones',
        noReferences: 'No hay referencias',
        cargandoNotificaciones: 'Cargando calificaciones ...',
        calificaciones: 'Calificaciones',
        misViajes: 'Mis viajes',
        viajes: 'Viajes',
        acercaDe: 'Acerca de',
        tyc: 'Términos y Condiciones',
        cerrarSesion: 'Cerrar sesión',
        invitarAmigos: 'Invitar a amigos',
        inicio: 'Inicio',
        mensajes: 'Mensajes',
        perfil: 'Perfil',
        administracion: 'Administracion',
        crearViaje: 'Crear Viaje',
        buscoConductor: 'Busco Conductor',
        buscoPasajero: 'Busco Pasajero',
        precioAsiento: 'Precio del asiento',
        iniciarSesion: 'Iniciar sesión',
        ingresaCuenta: 'Ingresá con tu cuenta de',
        carpoolear: 'Carpoolear',
        recuperarDeFacebook: 'Si carpooleabas antes del 5/8/17, tenés que entrar al sistema mediante el botón "ingresar con facebook" para seguir usando el mismo usuario y recuperar tus calificaciones. Si no podés entrar, escribinos a',
        carpoolearMail: 'carpoolear@stsrosario.org.ar',
        recuperarDeFacebook2: 'o a nuestro facebook así te ayudamos :)',
        noMostrar: 'No volver a mostrar',
        entendido: 'ENTENDIDO!',
        alIngresarFacebook: 'Al ingresar con Facebook estas aceptando nuestros',
        ingresaEmail: 'Email',
        ingresaConCuenta: 'Ingresá con Email',
        debeActivarCuenta: 'Para ingresar debes activar tu cuenta, te hemos enviado un link de activación a tu email para que puedas activar tu cuenta.',
        ingresar: 'Ingresar',
        recordarme: 'Recordarme',
        olvideContra: 'Recuperar contraseña de mi cuenta',
        noTenesFace: '¿No tenés cuenta?',
        registrateAca: 'Registrate acá.',
        ingresaConFace: 'Ingresá con Facebook',
        alIngresarFace: 'Al ingresar con Facebook estas aceptando nuestros',
        usuarioBanneado: 'Tu cuenta se encuentra desactivada por el equipo de Carpoolear. Ponte en contacto con nosotros a contacto@carpoolear.com para solucionar el inconveniente.',
        paraIngresarCuenta: 'Esta cuenta no se encuentra confirmada. Debes activarla desde tu correo, busca en tu bandeja de entrada/spam por un correo nuestro. Sino encuentras el correo ponte en contacto con nosotros a contacto@carpoolear.com',
        emailOContra: 'Email o password incorrecto.',
        solicitudEnviada: 'Su solicitud ya fue enviada, aguarde un momento por favor.',
        correoUsado: 'El correo asociado a su cuenta de facebook, ya tiene asociada una cuenta en Carpoolear. Por favor, ingresé utilizando el login por email. Si no recuerda su clave, cliqueé en olvidé mi contraseña.',
        fecha: 'Fecha',
        monto: 'Monto',
        estado: 'Estado',
        viaje: 'Viaje',
        transaccionNoCompletada: 'Transacción no completada.',
        transaccionOk: 'Pagada',
        transaccionOkConTarjeta: 'Pagada con tarjeta finalizada en {0}',
        llevastePasajero: 'Recibiste de {0} por el viaje hacia {1}.',
        fuistePasajero: 'Pagaste a {0} por el viaje hacia {1}.',
        solicitarSerChofer: 'Quiero ofrecer viajes',
        guardarCambios: 'Guardar cambios',
        numeroDeCuenta: 'Número de cuenta',
        tipoDeCuenta: 'Tipo de cuenta',
        bancoDeCuenta: 'Banco',
        campoObligatorio: 'Dato requerido',
        recuperarContraseña: 'Recuperar contraseña',
        noCalificado: 'No fue calificado aún',
        removerPasajeroExitoso: 'El pasajero fue bajado del viaje exitosamente.',
        onBoardingcardMessage1: '¡Bienvenido! Somos una red de personas que compartimos viajes en auto',
        onBoardingcardMessage2: 'Compartí tus viajes por Argentina como conductor y/o pasajero',
        onBoardingcardMessage3: 'Conocé nuevas historias/personas, cuidá el medio ambiente y ahorrá',
        onBoardingcardMessage4: 'Somos un proyecto de gestión colectiva, sin fines de lucro y código libre',
        referencias: 'Referencias'
    },
    'chl': {
        loginUsuarioPlaceholder: 'Usuario',
        documento: 'Número de RUT',
        doc: 'RUT',
        requisitosRegister: 'Se requiere que cargue: licencia de conductor, seguro del vehículo ...',
        RegistrarNuevoUsuario: 'Registrate',
        camposObligatorios: 'Los campos marcados con (*) son obligatorios.',
        nombre: 'Nombre',
        apellido: 'Apellido',
        email: 'Email',
        password: 'Contraseña',
        ingresePassword: 'Ingrese nuevamente su contraseña',
        solicitarChofer: 'Solicitar ser chofer',
        ingresarDocumentacion: 'Ingrese la documentación',
        leidoTerminos1: 'He leído y acepto los',
        leidoTerminos2: 'términos y condiciones',
        registroExitoso: 'Registro Exitoso!',
        enviadoCodigoVerificacion: 'Te hemos enviado un código de verificación a tu e-mail para que puedas activar tu cuenta y comenzar a compartir viajes.',
        registrarme: 'Registrarme',
        hola: 'Hola',
        bienvenidoACarpoolear: '!! Bienvenido a APALAN-CAR, para comenzar a subirte a viajes y crear tus propios viajes, debes terminar de completar tu perfil.',
        completaTu: 'Completa tu',
        imagenPerfil: 'Imagen de perfil',
        yTu: 'y tu',
        descripcion: 'Descripción',
        comenzarViajar: 'para comenzar a viajar.',
        incentivoFoto: 'Generá confianza con el resto de la comunidad Apalan-car, usá una foto tuya y contales un poco acerca de vos. Con eso aumentás tus chances de que alguien quiera compartir viaje.',
        nombreYapellido: 'Nombre y apellido',
        acercaDeMi: 'Acerca de mi',
        soloNumeros: 'Solo números',
        incentivoDescripcion: 'Contale de vos al resto de los usuarios así te suman a sus viajes! Qué te gusta hacer, en qué andas metido ahora, si estás con alguna idea, si te gustan los colores, etc.',
        incentivoDoc: 'Dales un extra de confianza al resto de los usuarios certificándoles que este es tu',
        momentoViajar: 'al momento de viajar.',
        nroTel: 'Número de teléfono',
        patente: 'Placa',
        patenteNoValida: 'La placa ingresada no tiene un formato válido.',
        olvidastePatente: 'Olvidaste completar ingresar la placa.',
        ejemploTelefono: 'Código área + teléfono. Ej: 0341156708223',
        incentivoTelefono: 'Por si querés que el resto de los usuarios también te puedan contactar por ahí.',
        soloConductores: 'Sólo para conductores',
        incentivoPatente: 'Antes de comenzar el viaje, verifica que la patente se corresponda con la informada por la otra persona.',
        siSosConductorDatosVisibles: 'Si sos conductor, estos datos son visibles para los pasajero que hayas confirmado en tu viaje. Si sos pasajero, estos datos son visibles para el conductor del viaje al que te haya subido y estés confirmado.',
        tildaOpcionDatosVisibles: 'Tilda esta opción (y guardá cambios) si quieres que estos datos sean visible para cualquier usuario que acceda tu perfil. Sino estos datos solo serán visibles para los pasajeros que confirmes en tu viaje, o para el conductor del viaje al que te subas y te confirme.',
        datosVisiblesCheck: 'RUT y teléfono visibles',
        notificacionesPorCorreo: 'Recibir notificaciones por correo electrónico.',
        cambiarPassword: 'Cambiar contraseña',
        ingreseNuevaPassword: 'Ingrese su nueva contraseña',
        soliciarSerChofer: 'Solicitar ser chofer',
        ingreseDocumentacion: 'Ingrese la documentación',
        seRequiereDocumentacion: 'Se requiere que cargue: licencia de conductor, seguro del vehículo ...',
        choferVerificado: 'Ya eres un chofer verificado.',
        guardarCambio: 'Guardar cambios',
        guardando: 'Guardando ...',
        calificaciones: 'Calificaciones',
        Lugares: 'Lugares',
        libres: 'libres',
        Lugar: 'Lugar',
        libre: 'libre',
        Ver: 'Ver',
        Carpooleado: 'Completo',
        buscaConQuien: 'Buscá con quién compartir tu próximo viaje!',
        elegiDatos: '¡Elegí fecha, origen o destino y encontralo!',
        ingresaORegistrate: '',
        aqui: 'No has iniciado sesión aún, puedes hacerlo desde aquí.',
        paraComenzar: '',
        donaA: 'Doná a Apalan-car',
        proyectoDe: 'un proyecto de',
        unicaVez: 'ÚNICA VEZ',
        MENSUAL: 'MENSUAL',
        cancelaCuando: 'cancelá cuando quieras',
        ayudanos: 'Ayudanos a seguir siendo una plataforma abierta, colaborativa y sin fines de lucro',
        porQueDonar: 'Por qué donar a Apalan-car',
        resultadosCercanos: 'Resultados cercanos',
        podesSubscribirte: 'Ahora podés suscribirte para que te avisemos cuando haya un nuevo viaje que concuerde con lo que estas buscando.',
        crearAlerta: 'Crear Alerta',
        cargandoMasResultados: 'Cargando más resultados',
        noHayViajes: '¡Ups! No hay viajes con los criterios indicados en la búsqueda.',
        noHayViajesCargadosAun: '¡Ups! No se han creado ningún viaje en la plataforma! Puedes ser el primero en hacerlo.',
        subscribirteAViajes: 'Ahora podés suscribirte para que te avisemos cuando haya un nuevo viaje que concuerde con lo que estas buscando.',
        cargandoViajes: 'Cargando viajes ...',
        comoConductor: 'Como conductor',
        comoPasajero: 'Como pasajero',
        meComprometo: 'Me comprometo a no lucrar con el viaje.',
        contribucionMaxima: 'La contribución máxima es igual a gastos de combustible + peaje dividido la cantidad de personas viajando en el auto. Durante la coordinación previa al viaje, cualquier persona puede pedir hacer la división con tickets de combustible y peaje en mano.',
        origenOdestino: 'Origen o destino fuera de',
        habilitaOrigen: 'Habilita seleccionar origen o destino fuera de Argentina. Recordá averiguar con la aseguradora del auto, si tenés cobertura contra terceros fuera de la Argentina. Si no es así, tenés que sacar la extensión fuera de Argentina para tener cobertura durante el viaje',
        origen: 'Origen',
        destino: 'Destino',
        distanciaARecorrer: 'Distancia a recorrer',
        tiempoEstimado: 'Tiempo estimado de viaje',
        huellaCarbono: 'Huella de carbono',
        dia: 'Día',
        hora: 'Hora',
        lugaresDisponibles: 'Lugares disponibles',
        cuposNecesarios: 'Cuantos cupos necesitas',
        comentarioPasajeros: 'Comentario para los pasajeros',
        privacidadViaje: 'Privacidad del viaje',
        publico: 'Público',
        amigosamigos: 'Amigos de Amigos',
        soloAmigos: 'Solo amigos',
        preferenciasViaje: 'Preferencias del viaje',
        nofumar: 'No fumar',
        noanimales: 'No animales',
        noninos: 'No niños',
        cargarViajeRegreso: 'Cargar viaje de regreso',
        crear: 'CREAR',
        actualizar: 'Actualizar',
        privacidadViajeVuelta: 'Privacidad del viaje de vuelta',
        olvidoEmail: 'Olvidó ingresar su email.',
        ingreseEmailValido: 'Ingrese un email válido.',
        olvidoContrasena: 'Olvidó ingresar su contraseña.',
        contraCorta: 'Las contraseña debe tener al menos 8 caracteres.',
        olvidoConfirmarContra: 'Olvidó confirmar su contraseña.',
        contraNoCoinciden: 'Las contraseñas no coinciden.',
        olvidoNombre: 'Olvidó ingresar su nombre.',
        olvidoApellido: 'Olvidó ingresar su apellido.',
        debeCorregirCampos: 'Debe corregir o completar algunos campos para finalizar su registro.',
        mailEnUso: 'La cuenta de email ingresada se encuentra en uso.',
        errorRegistro: 'Ocurrió un error al procesar el registro, por favor vuelva a intentar.',
        buscoConductor: 'Conductor',
        buscoPasajero: 'Pasajero',
        iniciarSesion: 'Comparte auto para llegar al lugar donde quierés ir',
        ingresaCuenta: 'Comparte auto para llegar al lugar donde quierés ir',
        carpoolear: 'Apalan-car',
        recuperarContraseña: 'Recuperar contraseña',
        registrateAca: 'Registrate aquí.',
        noCalificado: 'No fue calificado aún',
        noTenesFace: '¿No tenés cuenta?'
    }
};
export default messages;
