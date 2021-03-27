## Beschreibung
Light/Dark Feature erlaubt dem Benutzer den Erscheinungsmode von der Seite zu ändern. Light Mode entspricht den Standart Format und der Dark Mode den dunklen Format. Die Änderung des Erscheinungsbildes wird duch das Umschalten eines Reglers betätigt, der sich in dem Header der Anwendung befindet. Die Änderung des Modus, soll auch nach der Neuladung der Seite beibehalten werden.

## Implementierung
Dieses Feature wurde mit Hilfe von Javascript und JQuery-Bibliothek entwickelt. Der Script liegt in der Datei: themeSwitch.js. Es werden dynamisch die Bootstrap Klassen geändertm die für die Farbe der Hintergrund oder des Schriftes zuständig sind. Zum Besipiel, die Klassen bg-light oder text-white, schauen nach dem Umschalten in den Dark Modus so aus: bg-dark, text-black. Dieses Feature ist vollständig auf der Seite des Clients implementiert und macht einen Eintrag in den lokalen Speicher vom Brauser, damit die Einstellung nach jeder Neuladung der Seite beibehalten bleibt. 

[JQuery-Doc](https://api.jquery.com/)