## Used Librarys/Dependancies
MongoDB

## Description
Dieses View Element zeigt alle auf der Datenbank gespeicherten Objekte an. Inklusive der Namen, Beschreibung, Bild und Preis des Produktes.

## Implementation 
Um die "all Products"-View zu erzeugen, greift sich der entsprechende Controller alle relevanten Produkte aus der Datenbank und übergibt diese 
als Array an die entsprechende View. Die View iteriert dann über das Array und erstellt für jedes Item im Array eine neue Karte mit den relevanten 
Attributen des Produkts und rendered diese in die View. 