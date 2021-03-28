#Dashboard Feature

## Benutzte Librarys/Dependancies
jsonwebtoken, passport, connect-flash

## Beschreibung
Auf der Dashboardwebseite werden die Nutzer abhängig von der gewählten Sprache der Webseite begrüßt. Die Nutzer haben auch die Möglichkeit sich auszuloggen.

## Implementierung
JWT-Cookie vorhanden: der JWT (im JWT-Cookie gespeichert) wird mithilfe von passport authentifiziert. Wenn die Authentifizierung erfolgreich war, werden die Nutzer die Dashboardseite angezeigt bekommen. 

Wenn im Browser kein/kein gültiges JWT-Cookie vorhanden ist, werden die Nutzer zur Loginseite umgeleitet.