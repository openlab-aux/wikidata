**FIXME: Bild hinzufügen**

Die Dummrumleuchte ist ein normales, oranges Blinklicht, wie es z. B. auf Müllabfuhren ist.

### Mit IRC

Unser Exemplar kann allerdings über den [IRC](IRC) angesteuert, werden, indem man dort `.labping` schreibt. Damit kann man z. B. die Anwesenden auf den IRC aufmerksam machen oder einfach Spaß haben.

### Mit UDP

Man kann sich per UDP über IP <code>172.16.0.116</code> und Port <code>5000</code> mit der Dummrumleuchte verbinden.

Danach einfach <code>blink</code> schicken und die leuchte geniesen.

Beispiel NetCat:<br />
<code>
$ netcat -u 172.16.0.116 5000<br />
blink<br />
OK
</code>

## Funktionsweise

Es läuft eine eigene Firmware auf einem ESP8266-Modul, deren [Source Code sowie Schaltplan](https://github.com/fabianhu/Dummrumleuchte) und [Dokumentation](https://github.com/fabianhu/Dummrumleuchte/blob/master/README.md) auf GitHub liegen.

Wenn der labping nicht mehr geht, kann es daran liegen, dass die Firmware gecrasht ist (es gab (gibt?) ein Problem in der verwendeten Grundfirmware), da hilft es oft, einfach das zugehörige PC-Netzteil [aus- und wieder anzuschalten](https://youtu.be/5UT8RkSmN4k).

## Homeassistant-Integration

Die Leuchte ist mit Homeassistant gekoppelt. Wenn der C02 Wert 1500ppm übersteigt geht sie in regelmäßigen Abständen an um zu signalisieren, dass gelüftet werden soll. Nachdem sich der Wert wieder gesenkt hat hört sie damit wieder auf.