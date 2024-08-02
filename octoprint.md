# Octoprint
> Octoprint bietet ein Web-UI für die Ansteuerung von den 3D Druckern im Openlab. Hierbei gibt es pro 3D-Drucker eine eigene Octoprint Instanz. Jedoch sind mehrere Octoprint Instanzen auf einzelnen Geräten installiert.

Aktuell sind folgende Octoprint Instanzen installiert:

| 3D-Drucker | URL |
|------------|------|
| Prusa MK3  | https://octopi.lab/mk3 |
| Creality Ender 3 V2 im Regal   | https://octopi.lab/ender |
| Creality Ender 3 V2 neben der CAD Station (aktuell nicht mehr verfügbar)| https://druckbrudi.lab/ender |
| Großer selbsgebauter 3D Drucker in der Ecke | https://druckbrudi.lab/diy |


Die Login daten sind jeweils:

| Benutzername | Password |
| --- | --- |
| openlab | openlab |

Es sind jeweils Druckprofile eingerichtet. 

Vor Benutzung auf "Verbinden" drücken.

## Prusa Slicer

Der Prusa Slicer ermöglicht einen automatischen Upload zum Octoprint.
Hierfür muss zuerst der API Key im Octoprint Web-UI kopiert werden. Diesen bekommt man durch den Einstellungsknopf rechts oben im Web-UI und dann auf "Application Keys".
Dort einen API Key kopieren. Dann zum Prusa Slicer wechseln. Einen physischen Drucker hinzufügen und beim Typ Octoprint auswählen. Dann die jeweilige URL und den API key eintragen.