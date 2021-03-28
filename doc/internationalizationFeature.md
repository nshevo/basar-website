## Used Librarys/Dependancies
i18n

## Description
Dieses Feature erlaubt es dem User den statischen Text auf der Website in entweder Englisch oder Deutsch zu übersetzen. Diese Auswahl kann über ein Dropdown-Menü im Header getätigt werden. 

## Implementation 
Der User wählt seine bevorzugte Sprache aus. Diese wird dann im Response Objekt als "Locale" vermerkt/gespeichert. Das ist hier notwendig/hilfreich da dieses Response Objekt von allen Views zugreifbar ist. Wenn ein User dann eine bestimmte View aufruft, wird der gesetzte "Locale" Cookie überprüft und sequentiell die Übersetzfunktion der i18n-Library aufgerufen. Die Library sucht dann nach gespeicherten Übersetzungen der Elemente der View in der entsprechenden Language.json file und falls eine Übersetzung gefunden wurde, wird der ursprüngliche Text der View mit dieser gespeicherten Übersetzung ersetzt. Um zusätzliche Übersetzungen anzubieten, müssen dann die Language.json files entsprechend erweitert werden. 