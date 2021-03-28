## Used Librarys/Dependancies
socket.io

## Description
Dieses Feature erlaubt den Usern Chaträume zu Themen Ihrer Wahl zu erstellen und in diesen Räumen mit anderen Usern in dem gleichen Raum zu kommunizieren. 
Außerdem "benachrichtigt" es User in den enstprechenden Räumen wenn ein anderer User den Raum betritt, oder verlässt.

## Implementation 
Chatraum:
Die Grundlage dieses Features bildet ein Websocket der auf dem HTTP-Server läuft. Alle Nutzer die (irgend)einen Chatraum betreten werden Server-seitig in einer Liste gespeichert und dort, dem Raum mit dem Sie verbunden sind, entsprechend zugeordnet. Client-seitig läuft parallel ein Javascript, welches die verschiedenen User-Aktionen registriert und an einen "SocketHandler" weiterleitet (effektiv greift das Script auf den Websocket selber zu und "emitted" bestimmte Aktionen, die Reaktion auf diese Aktionen sind dann im SocketHandler vermerkt). Der Chatraum selber besteht überwiegend "nur" aus einer Textview, welche den Chatverlauf anzeigt, und einem Eingabefeld in dem die User Ihre Nachrichten eintragen können. Immer wenn eine User also eine Chatnachricht "abschickt", wird ein neues "Event" an den SocketHandler gesendet, der SocketHandler "broadcastet" dann diese Nachricht an alle anderen User die sich im gleichen Raum befinden. 

Chatraum-Liste:
Alle eröffneten Chaträume werden Server-seitig in der angesprochenen Liste gespeichert. Um die Chatraum-Liste zu erzeugen greift die View also auf diese Liste zu, iteriert über jedes Element und erstellt dann ein View-Element mit dem Namen des Raums und einem Link um diesen Raum beizutreten. 