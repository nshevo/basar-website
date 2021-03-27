# Suche Feature

## Beschreibung
Das ist einer der wichtigsten Features der Anwendung. Hier geht es darum, die Ware nach dem Namen zu suchen. Die Suchleiste befindet sich im Header der Seite. Nach der Eingabe des Suchbegriffes, soll die Datenbank nach den passenden Einträgen durchgesucht werden. Am ende wird eine Liste mit den Ergebnissen zurückgeliefert und auf der Seite aufgelistet. Jeder einzelne Ware verfügt uüber eine Beschreibung und ein Preis.

## Implementierung
Als Datenbankmanagementsystem wurde die MongoDB ausgesucht, da sie sehr einfach zu bedienen ist. Als Framework der für die Einbindung der Datenbank notwendig ist, wurde Mongoose verwendet. Das Model, was unsere Ware beschreiben soll liegt in der Datei "models" unter dem Namen product.js. Die steuerung der Suche erfolgt über den Controller: searchController.js. Der Router der für das Handling der Pfade zuständig ist, heißt: search.js.

[MongoDB-Doc](https://docs.mongodb.com/)
[Mongoose-Doc](https://mongoosejs.com/docs/guide.html)