---
sidebar_position: 2
---

# Razvoj

Za vzpostavitev razvojnega okolja smo uporabili orodje Anaconda: `https://docs.anaconda.com/anaconda/install/index.html`.
Znotraj tega okolja nato namestimo naslednje knjižnice

Okolje lahko hitro vzpostavimo z pomočjo konfiguracijske datoteke:
```
>>> conda env create --file .\python_conda_lib_config.yml -n GUGOL
>>> conda activate GUGOL
```
Ali pa ročno ustvarimo okolje
in namestimo potrebne knjižnice:
```
>>> conda env create -n GUGOL
>>> conda install -c conda-forge pywinauto
>>> conda install -c conda-forge pyqt
>>> conda install -c conda-forge numpy
>>> conda install -c conda-forge google-cloud-speech
>>> pip install sounddevice
>>> pip install pywinauto
``