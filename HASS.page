Wir betreiben im lokalen Netz des OpenLabs einen Home Assistant Server. 

Dieser läuft als VM auf luke und wurde via NixOS von w. deployed und in Betrieb genommen. 
Das Web-Interface findet man unter <a href="http://homeassistant.lab:8123/" target="_blank">http://homeassistant.lab:8123/</a>

## Heizungen steuern
Im Sofaraum und im Saal haben wir ZigBee-Heizkörperthermostate. TODO: User-Doku zur Automatisierung, anpassung für eigene Bedürfnisse und zerstörungsfeie Nutzung

## Lichter nutzen
Die meisten bunten LEDs in unseren Räumen sind per WLED-Firmware eingebunden. Im Saal und Sofaraum haben wir auch RGBW-ZigBee-Leuchtmittel von IKEA. TODO: User-Doku zur Automatisierung, anpassung für eigene Bedürfnisse und zerstörungsfeie Nutzung

## Schaltbare Mess-Steckdosen
Wir haben 8 schaltbare Zwischenstecker, diese können Strom und Spannung messen und geschaltet werden.

Hinweis: Fliegt die Sicherung, ist im Sicherungskasten wieder der Schalter zu betätigen. Die schaltbare Messsteckdose sollte sich nach einer gewissen Zeit wieder mit dem WLAN verbinden.

TODO: User-Doku zur Automatisierung, anpassung für eigene Bedürfnisse und zerstörungsfeie Nutzung, und Stromverbaucher Fensterbereich und Audio-Beamer Setup auf mehrere Bodentanks verteilen (Sicherung (F30) fliegt hier mal öfter )

## Sonstiges
### SpaceAPI-Statusupdates
## Maintenance Tasks

### Reset (wenn Zigbee-Geräte die Verbindung verlieren)

1. Login auf `luke`
2. `virsh shutdown --mode acpi hass`
3. Zigbee-Stick trennen
4. 10s warten
5. Zigbee-Stick verbinden
6. `virsh start hass`