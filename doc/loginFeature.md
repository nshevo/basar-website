#Login Feature

## Benutzte Librarys/Dependancies
jsonwebtoken, argon2, passport, connect-flash

## Beschreibung
Auf der Loginseite haben die Nutzer die Möglichkeit sich einzuloggen oder ein neues Konto auf der Registrierungsseite erstellen zu lassen.

## Implementierung
Wenn ein JWT-Cookie vorhanden ist: JWT-Cookie bzw. im JWT-Cookie gespeichertes JWT wird mithilfe von passport authentifiziert. Nach einer erfolgreichen Authentifizierung werden die Nutzer zur Dashboardseite umgeleitet.

Wenn kein JWT-Cookie vorhanden ist: die vom Nutzer eingegebenen Daten werden validiert und mit den existierenden Einträgen in der Datenbank (MongoDB) vergliechen. Dabei wird ein JWT-Cookie erstellt und im Browser gespeichert, wenn die Anmeldung erfolgreich war bzw. wenn ein passendes Eintrag in der Datenbank vorhanden ist. Nach einer erfolgreichen Anmeldung werden die Nutzer zur Dashboardseite umgeleitet.

## JWT-Cookie
Im JWT-Cookie werden folgende Informationen verschlüsselt gespeichert:

* email
* firstName
* lastName
* expires
