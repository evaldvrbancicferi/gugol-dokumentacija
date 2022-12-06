---
sidebar_position: 4
---

# Multithreading

GUGOL je večnitna aplikacija in ima več procesov, ki morajo med 
sabo komunicirati. Zato ima vsak proces implementirano vrsto v 
katero lahko drugi procesi puščajo sporočila.

primer preverjanje vrste v ShowGrid oknu:
```
from PyQt5.QtWidgets import QWidget
import queue

class ShowGrid(QWidget):

    def __init__(self, parent=None, **kwargs):
        super().__init__(parent, **kwargs)

        self.msgs = queue.Queue() #inicilizacija vrste ob kreaciji okna
        self.startTimer(100) #preveri vrsto vsakih 100ms

    #preveri za nova sporocila v vrsti
    def timerEvent(self, *args, **kwargs):
        try:
            msg = self.msgs.get(block=False)
            print("SHOW GRID GOT MESSAGE: " + msg)
            if msg == "display grid":
                self.display_grid()
            if 'display subgrid' in msg:
                n = int (msg.split('display subgrid',1)[1])
                self.display_subgrid(n)
            if msg == "stop timer":
                self.stop_timer()

        except: # to se izvede ce nimamo novih sporocil
            pass
```
Ostali procesi ShowGrid pošiljajo ukaze z:
```
draw_grid_widget = ShowGrid()
draw_grid_widget.msgs.put("display grid")
```