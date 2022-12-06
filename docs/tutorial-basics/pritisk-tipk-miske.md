---
sidebar_position: 2
---

# Pritisk tipk miške

Enako kot pri poglavju `Premik miške` smo tudi pri pritisku tikp miške uporabili knjižnico `Pynput`. Spodaj imamo primere za:
- simuliranje pritiskov tipk in
- spremljanje pritiskov tipk na miški.

## Simuliranje pritiska tipk miške


```jsx title="Primeri simuliranje pritiska tipk miške"
from pynput.mouse import Button, Controller

mouse = Controller()

# Pritisk in spust tipke
mouse.press(Button.left)
mouse.release(Button.left)

# Dvojni pritisk tipke na miški
mouse.click(Button.left, 2)

# Drsanje
mouse.scroll(0, 2)
```


## Spremljanje pritiskov tipk miške

Tu imamo še primere spremljanje pritiskov tipk. Vidimo, da je implementacijo podobna kot pri `Premik miške`:

```mdx title="Primeri spremljanja pritiskanja tipk miške"
from pynput import mouse

def on_click(x, y, button, pressed):
    print('{0} at {1}'.format(
        'Pressed' if pressed else 'Released',
        (x, y)))
    if not pressed:
        # Stop listener
        return False

def on_scroll(x, y, dx, dy):
    print('Scrolled {0} at {1}'.format(
        'down' if dy < 0 else 'up',
        (x, y)))

# Collect events until released
with mouse.Listener(
        on_click=on_click,
        on_scroll=on_scroll) as listener:
    listener.join()

# ...or, in a non-blocking fashion:
listener = mouse.Listener(
    on_click=on_click,
    on_scroll=on_scroll)
listener.start()
```