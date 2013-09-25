        function alerta(msg) {
            // Ver documentación en:
            // http://docs.phonegap.com/en/2.1.0/cordova_notification_notification.md.html#notification.alert
            navigator.notification.alert(
                msg,    // Mensaje del alert
                '',            // Callback
                'IdNoticia',   // Título del alert
                'OK'     // Texto del botón
            );
        }