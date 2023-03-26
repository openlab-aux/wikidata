# Haskell in Production

Hallo, ich bin Profpatsch.

[https://profpatsch.de/]()

Ich arbeite bei einer kleinen Firma in Augsburg und wir haben im letzten Jahr mehrere hundert tausend Euro Umsatz mit einem Produkt gemacht,
was in nicht unerheblichen Teilen in Haskell geschrieben ist. Momentan haben wir ca. 25.000 Zeilen Haskell Code.

Ich möchte ein wenig von meinen Erfahrungen berichten.

## Erste Anwendung

* $Großindustriemaschinen, zentrale Übersicht über Maschinendaten, Performance und Fehleranzeige
* Der Webserver ist in Haskell, das Frontend in Typescript, verschiedene Datenquellen in Java.
* Das Frontend war ursprünglich in Purescript, wurde dann schnell nach Typescript/Angular umgestellt.
* Die Entscheidung, Haskell zu benutzen, wurde von einem experimentierfreudigen Entwickler getroffen
  * Andere Entwickler haben die Herausforderung angenommen, und damit Code umgesetzt

### Einsicht 1

* Es braucht einen Pionier, der den Schritt wagt
* Man muss mehrere Leute für seine Idee gewinnen, sonst bleibt man Einzelkämpfer

### Einsicht 2

* Purescript sprengte die Menge an Innovation Tokens

[https://boringtechnology.club/]()

## Ist Haskell boring technology?

[https://www.haskell.org/]()

* It depends
* 1991 gestartet, aber erst ~2005 herum tools wie Paketmanager und effiziente Textlibrary
* Schon immer als Research Language konzipiert
* Sehr fortschrittliche Konzepte

Aber: man kann “Boring Haskell” schreiben!

[https://www.snoyman.com/blog/2019/11/boring-haskell-manifesto/]()

Die Gefahr ist, dass es sehr einfach ist, das nicht zu tun.

## Schritt zurück: Wofür ist Haskell geeignet?

[Gabriella Gonzalez: State of the Haskell Ecosystem](https://github.com/Gabriella439/post-rfc/blob/main/sotu.md)

Schlecht:

* Spezialisierte Tasks (Excel parsing z.B.)
* Low-Level-Programmierung, Systems-programming
* Optimale Algorithmen schreiben (kein manuelles Memory-Management) -> keine Games
* Desktopanwendungen (GUI-Frameworks sind Objektorientiert)
* Systeme mit wenig Speicher

Super:

* Web Server mit Datenbank (Websockets??)
* Parsing (CSV, JSON, etc)
* Datenverarbeitung (Streaming)
* Postgres
* Datenmodelling, Business-Logik
* Refactoring ist ein Traum
* Gute Algorithmen für High-level Tasks
* GHC Runtime ist fantastisch, Green Threads, Async Exceptions, STM
* Der Language Server ist super, die Typinferenz macht Programmierung sehr viel einfacher

Web Framework: [https://ihp.digitallyinduced.com/]()


## Wie fängt man an?

* So simpel wie möglich, erstmal keine Abstraktionen bauen
* `stack` oder `cabal` benutzen, beides ok (Beides unterstützt auch Windows)
* Entwicklungsumgebung einrichten (hoogle demo)
* Das REPL benutzen


```
webServer = do
    Warp.run 1234 $ \_req respond -> do
      respond (Wai.responseLBS Http.ok200 [] "hello haskell")
```

[http://localhost:1234/]()

* Deployment: Einfach als Docker-Image deployen

## Zweite Anwendung

* Routing von $Transportern
* Relativ konventionelle Single-Page App (Mobil & Browser für Backoffice)
* CSV Import von Daten
* Stammdaten
* Ladeevents & GPS events

### Einsicht 3

* Zu spät & wenig mit OpenAPI Routen dokumentiert
* Mongodb verwendet statt postgresql → sprengte wieder die Menge an Innovation tokens
* Wieder nach Postgres migriert -> Du brauchst nichts anderes als Postgres, hör nicht auf Leute, die etwas anderes behaupten

## Aussicht

* Wir sind momentan 2 Vollzeit Haskell-Devs, mit sporadischer Unterstützung von Teilzeitkräften
* Die Frage ist, wie man andere einlernt

[https://curry-club-augsburg.de/]()

* Interne Weiterbildungen & Externe einladen, um Kurse zu geben

→ Simple code!

* Nächste Herausforderungen/Projekte:
  * Bessere API-Integrationen mit dem Frontend (Code aus Openapi generieren?)
  * SSO-Einbindung in Authentifizierungslogik

## Zusammenfassung

* Haskell kann in Produktion eingesetzt werden
* “Choose your battles” → Begrenzte Anzahl an Innovation Tokens!
* Simpel anfangen, danach konstant iterieren -> Refactoring! Agile Entwicklung!
* Dank dem Haskell Language Server moderne IDE-Fähigkeiten

## Ende

[https://www.possehl-analytics.com/]()

[https://profpatsch.de/]()

Danke!

