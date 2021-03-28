## Used Librarys/Dependancies
MongoDB/MongoStore
Express-Session

## Description
Dieses Feature erlaubt den Usern Produkte Ihrer Wahl in einem "Shopping Cart" zu speichern, auch ohne sich auf der Website registrieren oder anmelden zu müssen.
Das Shopping Cart gibt dann eine Gesamtauskunft über alle gespeicherten Produkte, deren Anzahl, Preis und dem Gesamtpreis des Warenkorbs.

## Implementation 
Dieses Feature basiert auf einem Session basierten MongoStore, der für jeden User angelegt wird wenn er die Seite aufruft. Dieser MongoStore "beinhaltet" ein für jeden User kreiiertes "Shopping Cart Object", welches auf einem selbstdefiniertem Model auf unserer MongoDB beruht. Dieses Shopping Cart ist von überall über die User-"Session" erreichbar. Die Hauptfunktionalität des Shopping Carts ist:
1. das Hinzufügen von Produkten
2. das Speichern dieser Produkte
... beide diese Funktionalitäten werden in dem "cart-model" und dem entsprechenden Controller verwirklicht. Jedes Cart enthält eine Objekt welches alle gespeicherten Items notiert. Wenn ein User ein Item zu dieser "Liste" hinzufügen möchte, wird eine "addItem"-Funktion aufgerufen. Diese "addItem"-Funktion durchsucht dann die Datenbank nach einem Item mit der angegebenen ID und übergibt dieses Item dann an das Shopping Cart, welches das Item dann speichert. 

Shopping Cart View:
Die Shopping Cart View greift auf das Shopping Cart in der User Session zu und bildet die dort gespeicherten Daten ab. Dazu werden einige Helferfunktionen verwendet wie zum Beispiel den Inhalt des Carts in ein Array zu übertragen. Über dieses Array kann dann in der entsprechenden View iteriert werden und die Daten werden so abgebildet. 