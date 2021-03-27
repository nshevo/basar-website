## Beschreibung
Die Nutzer haben eine Möglichkeit sich mit der externen Service in unsere Webanwendung sich anzumelden. Als externe Services wurden "Facebook" und "Google" ausgewählt. Nach der Anmeldung wird man auf die Dashboard Seite übergeleitet. Dieses Feature ermöglicht eine Registriereung bzw. Anmeldung in nur einem Klick, was deutlich die Zeit verkürzt, die man sonst bei der iternen Registrierung, für die Ausfühlung einer Form braucht. Außerdem müssen die Nutzer keine Passwärter merken.

## Implementierung
Bei der Implementierung wurde die PassportJS Middleware mit zwei unterschiedlichen Strategies: GoogleStrategy und FacebookStrategy. Die Einstellungen für die beiden, befinden sich in Dateien: passport-setup-google.js und passport-setup-google.js. Es existiert ein gemeinsamer Router für alle Authentifizierungen: authentication.js. Die Steuerung von erfolt durch den Controller: authentificationController.js.

Passport:
http://www.passportjs.org/docs/
[Passport-Doc](http://www.passportjs.org)