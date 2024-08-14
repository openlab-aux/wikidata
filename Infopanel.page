Infopanel ist ein Digital Signage-Tool, das momentan auf dem Schaufenster-TV läuft und Passant:innen Informationen über den Raum und die Community bietet.

## Wie kann ich Inhalte hinzufügen / editieren?

Die Inhalte und das Schema liegen auf [GitHub](https://github.com/openlab-aux/infopanel-content).

Änderungen an Inhalten müssen vom Vorstand freigageben werden. Der Freigabe-Prozess findet direkt in GitHub statt.

Du kannst auch [direkt im Browser](https://github.com/openlab-aux/infopanel-content/edit/main/content.yaml) neue Inhalte vorschlagen.

## Wie sollte ich meinee Inhalte formatieren?

Teile des Schaufenster-TV werden durch einen Aufkleber verdeckt. Damit Inhalte trozdem gut lesbar sind, solltest Du jede Markdown-Slide so gestalten, dass keine wichtigen Informationen auf den linken ca. 35% des Panels sind.

Das erreichst du beispielsweise mit einer zweispaltigen Markdown-Slide


```yaml
- type: markdown
	duration: 123456
	markdown:
	  columns:
		- width: 35
			text: |
				<img src="..." width=90%>
				Den oberen Teil dieser Spalte haben wir mit einem Bild gefüllt, da Text dort nicht so gut lesbar wäre
		- width: 65
			text: |
				# Ich bin einwandfrei lesbar
				Folgende I
```

## Welche Arten von Slides gibt es?

### `message`

Messages sind als kurze, einzeilige Nachrichten gedacht. Sie werden groß und zentriert dargestellt.

Beispiel:
```yaml
- type: message
  message:
	  text: Hello World
```

### `markdown`

Markdown-Slides rendert das Infopanel client-seitig mit [Marked](https://github.com/markedjs/marked).

Folgende Marked-Optionen sind momentan aktiv:

```typescript
{
	pedantic: false,
	gfm: true,
	breaks: false,
}
```

Um etwas mehr Gestaltungsspielraum zu ermöglichen, gibt es zwei Layout-Optionen für markdown-Slides

#### Eine Spalte

Beispiel:

```yaml
- type: markdown
  markdown:
		text: |
			Hallo Welt
```

#### Mehrere Spalten

** Wichtig: ** die `width`-Attribute sollten zusammen 100 ergeben.

Beispiel:

```yaml
- type: markdown
  markdown:
	  columns:
		  - width: 20
		    text: |
					# Spalte 1
		  - width: 60
				text: |
					# Spalte 2
			- width: 20
				text: |
					#Spalte 3
```

## Neue Arten von Slides implementieren

1. Im Schema hinterlegen: https://github.com/openlab-aux/infopanel-content/schema/schema.json
2. Neuen Renderer schreiben: https://github.com/openlab-aux/infopanel-client/tree/main/src/renderers
3. In der Renderer Factory hinterlegen: https://github.com/openlab-aux/infopanel-client/blob/main/src/renderers/factory.ts