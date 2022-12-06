---
sidebar_position: 1
---

# Premik miške

Za implementacijo premikov miške smo uporabili knjižnico `Pynput`. Spodaj so prikazani primeri za:
- simulacijo premikov miške in
- spremljanje premikov miške.

## Simuliranje premika miške


```jsx title="Primeri simuliranje premika miške"
from pynput.mouse import Button, Controller

mouse = Controller()

# Prebere koordinate miške
print('The current pointer position is {0}'.format(
    mouse.position))

# Nastavi koordinate miške
mouse.position = (10, 20)
print('Now we have moved it to {0}'.format(
    mouse.position))

# Premakne miško za določen x in y
mouse.move(5, -5)
```


## Spremljanje premikov miške

Spodaj imamo še primer implementacije spremljanja premikov miške v jeziku Python:

```mdx title="Primeri spremljanja premikov miške"
from pynput import mouse

def on_move(x, y):
    print('Pointer moved to {0}'.format(
        (x, y)))

# Collect events until released
with mouse.Listener(
        on_move=on_move) as listener:
    listener.join()

# ...or, in a non-blocking fashion:
listener = mouse.Listener(
    on_move=on_move)
listener.start()
```