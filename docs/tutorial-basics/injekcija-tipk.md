---
sidebar_position: 4
---

# Injekcije tipk tipkovnice

Za injekcijo tipk tipkovnice smo uporabili knjižnico `Pynput`. S pomočjo `pynput.keyboard.Controller` smo simuliranje pritiske tipk na tipkovnici ter z `pynput.keyboard.Listener` smo te pritiske lahko tudi nadzorovali. Primeri teh dveh imamo prikazane spodaj.

## Simulacija tipkovnice
Kot smo ze povedali smo za simulacije tipkovnice uporabili kontroler: `pynput.keyboard.Controller`.

```jsx title="Primeri simuliranja tipkovnice"
from pynput.keyboard import Key, Controller

keyboard = Controller()

# Primer pritisk in izpust tipke (presledek)
keyboard.press(Key.space)
keyboard.release(Key.space)

# Simulacija pritiska gumba (mali) a
keyboard.press('a')
keyboard.release('a')

# Vtipkanje dveh (velikih) znakov a
keyboard.press('A')
keyboard.release('A')
with keyboard.pressed(Key.shift):
    keyboard.press('a')
    keyboard.release('a')

# Simulacija vtipkanja 'Hello World' z metodo type
keyboard.type('Hello World')
```


## Spremljanje tipkovnice

Poslušalec tipkovnice je nit. Nit in vsi povratni klici bodo priklicani iz niti.

Z uporabo `pynput.keyboard.Listener.stop`, `StopException` ali `return False` lahko od koder koli zaustavimo poslušalca.

Posredovan parameter `key` je lahko:
- `pynput.keyboard.Key` za posebne tipke, 
- `pynput.keyboard.KeyCode` za običajne alfanumerične tipke ali 
- samo `None` za neznane tipke.

Pri uporabi zgornje različice brez blokiranja se bo trenutna nit nadaljevala z izvajanjem. To je morda potrebno pri integraciji z drugimi ogrodji GUI, ki vključujejo glavno zanko, toda pri zagonu iz skripte bo to povzročilo takojšnjo prekinitev programa.

Spodaj imamo še primer implementacije spremljanja miške z `pynput.keyboard.Listener`:

```mdx title="Primeri spremljanja tipkovnice"
from pynput import keyboard

def on_press(key):
    try:
        print('alfanumerična tipka {0}'.format(
            key.char))
    except AttributeError:
        print('posebna tipka {0}'.format(
            key))

def on_release(key):
    print('izpust tipke {0}'.format(
        key))
    if key == keyboard.Key.esc:
        # Ustavi posluševalca
        return False

# Zbiraj dogodke do izpusta tipke
with keyboard.Listener(
        on_press=on_press,
        on_release=on_release) as listener:
    listener.join()

# ...ali način brez blokiranja
listener = keyboard.Listener(
    on_press=on_press,
    on_release=on_release)
listener.start()
```