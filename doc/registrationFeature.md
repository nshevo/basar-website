#Registration Feature

## Benutzte Librarys/Dependancies
jsonwebtoken, argon2, passport, connect-flash

## Beschreibung
Auf der Registrierungsseite haben die Nutzer die Möglichkeit sich anzumelden oder sich zur Loginseite zu begeben um sich dort einzuloggen.

## Implementierung
Die Nutzer, die über ein gültiges JWT-Cookie verfügen werden zur Dashboardseite umgeleitet. Der JWT, der im JWT-Cookie gespeichert ist, wird dabei durch passport authentifiziert. Die Umleitung erfolgt nur nach einer erfolgreichen Authentifizierung.

Kein JWT-Cookie: Die ausgefüllten Felder werden validiert. Die Validierungsergebnisse werden als eine Liste der Flash-Nachrichten oberhalb der Eingabefelder angezeigt. Nach der erfolgreichen Validierung wird ein neues Eintrag in der Datenbank der Nutzer erstellt. Für die Kennwortverschlüsselung wird dabei argon2 benutzt. Nach einer erfolgreichen Anmeldung werden die Nutzer zur Loginseite umgeleitet.