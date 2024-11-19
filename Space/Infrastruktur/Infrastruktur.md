# Infrastruktur
Für Config-Files gibt es ein [Infrastructure as Code](https://github.com/openlab-aux/IaC) Git Repository, welches noch nicht Single Source of Truth ist sondern manuell deployt wird. Es dient Dokumentationszwecken.


Server und VMs mit den darauf gehosteten Applikationen sind unter [Server](server) aufgelistet.

## Mattermost
Das OpenLab betreibt einen eigenen Mattermost Server: [https://chat.openlab-augsburg.de](https://chat.openlab-augsburg.de).

Der Mattermost Server wurde im Juli 2022 von Version 5 auf Version 7.1 aktualisiert und läuft auf dem Server `momomost.openlab-augsburg.de`.

Das Setup basiert auf Docker und den offizielen Images und docker-compose-files von [mattermost/docker](https://github.com/mattermost/docker).
Die zuletzt deployten Definitions und Configs wurden [im IaC Repository](https://github.com/openlab-aux/IaC/tree/main/mattermost) hinterlegt.

Upgrade-Guides sind in der [Dokumentation von Mattermost](https://docs.mattermost.com/upgrade/prepare-to-upgrade-mattermost.html#prepare-to-upgrade-mattermost) zu finden.

Die Anleitung zum Chat und Nutzen der IRC bridge findet sich [hier](chat#anleitung-f%C3%BCr-die-irc-bridge).

### IRC bridge
Es ist eine IRC bridge für Mattermost im Einsatz.
Es handelt sich dabei um einen Fork von [matterircd](https://github.com/muesli/matterircd).
Mattermost ist inzwischen auf Version 7.1, mit der matterircd laut docs nicht kompatibel ist.
TODO intervention und fixen

## BI Suite

Mehr unter [Business Intelligence](Infrastruktur/Business_Intelligence)
