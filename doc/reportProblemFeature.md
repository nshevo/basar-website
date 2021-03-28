#Report Problem Feature

## Benutzte Librarys/Dependancies
nodemailer, passport, connect-flash

## Beschreibung
Auf der Problem-melden-Seite haben die Nutzer die Möglichkeit ein Problem zu melden. Dabei wird ein E-Mail mit allen eingegebenen Feldern (Absender E-Mail, Thema, Beschreibung) erstellt und auf eine bestimmte E-Mail-Adresse versendet. Die Felder werden dabei validiert. Angemeldete Nutzer haben bereits ihr E-Mail im E-Mail-Feld dastehen.

## Implementierung
Wenn ein JWT-Cookie vorhanden ist: JWT wird durch passport authentifiziert. Nach einem Erfolg wird die E-Mail-Adresse des Nutzers aus dem JWT extrahiert und in das E-Mail-Feld automatisch eingegeben, wenn der JWT erfolgreich von passport authentifiziert wurde. 

Wenn kein JWT-Cookie vorhanden ist: die Nutzer müssen folgende Felder: die E-Mail-Adresse, das Thema und die Beschreibung eingeben um das Problem melden zu können. Die Validierungs- und Absendeergebnisse werden als eine Liste der Flash-Nachrichten oberhalb der Eingabefelder angezeigt. Mithilfe von nodemailer wird eine E-Mail erstellt und versendet.