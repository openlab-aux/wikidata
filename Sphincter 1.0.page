Seit geraumer Zeit besitzen wir nun unsere selbstgeplante und -gefertigte Schliessanlage, die mit viel investiertem Herzblut vor allem von michiwend und salomonderossi gebaut wurde.

Jedes OpenLab-Mitglied kann seitdem seinen eigenen digitalen Schluessel fuer das Labor erhalten und jederzeit nach Lust und Laune vorbeischauen.

## Hardware

Sphincter besteht aus folgenden komponenten:

* Alter Schiebedachmotor
* Arduino
* Sphincter-Shield
* 12V-Batterie
* Relaisboard + Reedkontakt

Der Schiebedachmotor wurde mit einer selbstgebastelten Drehgeberscheibe versehen so, dass mit einer Gabellichtschranke der aktuelle drehwinkel des motors festgestellt werden kann. der Motor treibt einen Holzblock mit eingefraestem Schlitz an, in dem wiederum ein Schluessel Platz findet. Die Signal- und Versorgungsleitung der Lichtschranke, sowie die Stromversorgung fuer den Motor werden mit dem Sphincter-Shield verbunden. Beim Sphincter-Shield handelt es sich um eine selbstentworfene und selbstgeaetzte Platine, die im wesentlichen einen Motortreiber, drei LEDs fuer die anzeige des Schliesszustandes, und zwei dicke Kondensatoren zur Spannungsglaettung und noch mehr Kram traegt. Die Logik fuer den Sphincter wird von einem Arduino uebernommen. Sphincter verfuegt fuer den Fall, dass Strom oder Netzwerk ausfallen ueber einen Fallbackmechanismus, der dafuer sorgt, dass man von aussen einen Schluessel im Schloss drehen kann, ohne gegen den Motor arbeiten zu muessen. Fuer diesen Notfall kann von aussen mittels Reed-kontakt ein 12V-Akku zugeschalten werden, der gerade so viel Spannung auf den Motor gibt, dass ein Notschluessel von aussen mit vertretbarem Aufwand gedreht werden kann…

## Software

Die User erhalten Auth-Tokens, die gehasht in einer Datenbank liegen. Eine VM, die sich um den Sphincter kuemmert, bietet ins WLAN einen HTTPS-service an, dem man eine action und sein persoenliches token mitgibt. Moegliche actions sind open, close und state. state liefert den aktuellen Status des sphincters als plaintext zurueck („OPEN“ oder „CLOSED“). Die ersten beiden kommandos duerften selbsterklaerend sein. Den HTTPS-Service ist unter der URL https://labctl.openlab-augsburg.de/sphincter ansprechbar und ist mit einer breiten Bandbreite an Tools ansprechbar. So kann man einerseits ganz puristisch die Labortuere mit curl oder wget oeffnen, man kann sich eines browsers bedienen, oder aber das ganze auch via Skript loesen und so mit einem einfachen „lab open“ im Terminal Zutritt erhalten. Der Phantasie sind keine grenzen gesetzt: Auch GUI-clients und Smartphone-Apps waeren denkbar.