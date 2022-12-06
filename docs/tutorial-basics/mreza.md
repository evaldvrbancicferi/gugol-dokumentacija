---
sidebar_position: 3
---

# 3x3 mreža

Za lažje premikanje miške po zaslona pa bi uporabili mrežo, ki jo bomo prikazali s pomočjo knjižnice PyQt. S tej knjižnici ustvarimo okno in prikažemo mrežo, ki si jo bomo ogledali v podpoglavju `Implementacija 3x3 mreže`.

## Ideja 3x3 mreže
Ideja te mreže je, da bi zaslon razdelila na več delov in omogočala uporabniku. Uporabnik bi lahko nato izbral katerikoli del mreže in mu znotraj znova izrisala nova mreža. To bi nadaljeval dokler ne pride do lokacije kjer bi rad sprožil klik miške.

Spodaj na sliki imamo skico izgleda te mreže:

<img src="https://i.imgur.com/Zov20Hw.jpg" width="700px"   />

## Implementacija 3x3 mreže

Prvo bi morali oknu nastaviti nekaj lastnosti in sicer:
- `WindowStaysOnTopHint` - okno mora ostati na vrhu vseh oken,
- `WindowTransparentForInput` - ignorirati vhodne ukaze (npr. klik miške) in
- `FramelessWindowHint` - biti brez okvirja.

Implementacijo teh lastnosti vidimo spodaj.

```jsx title="Nastavitve okna"
self.setStyleSheet('QMainWindow {background:transparent}')
self.setWindowFlags(
    Qt.WindowType.WindowStaysOnTopHint |
    Qt.WindowType.FramelessWindowHint |
    Qt.WindowType.WindowTransparentForInput
)
```

 Nato z uporabo `QPainter` (ki ga ponuja PyQt) izrišemo našo mrežo. Okno nato prikažemo preko celotnega zaslona z `showFullScreen`.

```jsx title="Izris mreže"
def paintEvent(self, qpaint_event):
    painter = QPainter(self)
    rect = qpaint_event.rect()
    painter.drawImage(rect, self.qimg)
```

Ko končamo z uporabo mreže jo lahko zapremo z metodo `self.close()`.

```jsx title="Prekinitev mreže"
def keyPressEvent(self, event):
    if event.key() == Qt.Key.Key_Q:
        self.close()
```