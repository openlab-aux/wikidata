# Business Intelligence Stack

## Public Dashboard

Es gibt ein [öffentliches Dashboard](https://grafana.lab.weltraumpflege.org/public-dashboards/df59cb07fdf64a5ea53a1df9d196bf77?orgId=2).

Änderungswünsche und Anregungen gerne an @waaaaargh

## Infrastruktur

Die komplette OpenLab Hackerspace Business Intelligence Suite wird von @waaaaargh auf einem Kubernetes-Cluster betrieben.

* [Grafana](https://grafana.lab.weltraumpflege.org)
* [InfluxDB](https://influx.lab.weltraumpflege.org)

## Integrationen

* Strichliste:
  * Die `usageAmount` property von allen Artikeln wird alle `$UPDATE_INTERVAL` als measurement in Influx geschrieben
  * [Source Code](https://github.com/openlab-aux/strichliste2influxdb)
  * Integration wird aus Convenience-Gründen auf der HomeAssistant VM betrieben
* HomeAssistant:
	* Aufgesetzt nach der [offiziellen Dokumentation](https://www.home-assistant.io/integrations/influxdb/)
* Bankkonto
	* Kümmerer: @krobin