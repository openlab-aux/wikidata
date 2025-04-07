# German RepRap X400CE (aka Druckbrudi)
**⚠ Achtung: Die Doku ist im Moment als fortlaufende Projektdokumentation genutzt und unterliegt starken Änderungen. Außerdem ist vieles evtl. noch nicht korrekt, da hier Elektroniknoobs am Werk sind.**

## Allgemeines
Bei dem Drucker handelt es sich um einen umgebauten German RepRap X400CE. Der Drucker hat einen Voron Druckkopf mit 0,8mm Düse. Die Elektronik ist ein Rambo-Board von Prusa in Verbindung mit einem Solid State Relay für die beheizte Druckplatte.

Die Bedienung eines 3D Druckers ist kein Hexenwerk. Dennoch ist ein 3D Drucker eine komplexe Maschine, bei der einige Stolpersteine lauern. Um Defekte vorzubeugen und um die Verfügbarkeit des Druckers für alle Mitglieder des OpenLab zu ermöglichen wird eine Einweisung für Menschen ohne 3D Druck erfahrung vorgeschlagen.

+-------------+------------+
|IP           | 172.16.0.176 |
+-------------+------------+
|Hostname     | druckbrudi.lab |
+-------------+------------+
|Weboberfläche| [Octoprint](http://druckbrudi.lab/diy) |
+-------------+------------+
|Bauraum (BTH)| 400 x 400 x 400 mm |
+-------------+------------+
| Düse        | 0.8mm |
+-------------+------------+
|Filament     | 1.75mm (i.d.R PLA) |
+-------------+------------+

### Prusa Slicer Profil

`config.ini` > import

```ini
autoemit_temperature_commands = 1
bed_custom_model = 
bed_custom_texture = 
bed_shape = 0x0,350x0,350x350,0x350
before_layer_gcode = 
between_objects_gcode = 
binary_gcode = 0
color_change_gcode = M600
cooling_tube_length = 5
cooling_tube_retraction = 91.5
default_filament_profile = 
default_print_profile = 
deretract_speed = 0
end_gcode = M104 S0 ; turn off temperature\nG28 X0  ; home X axis\nM84     ; disable motors\n
extra_loading_move = -2
extruder_colour = ""
extruder_offset = 0x0
gcode_flavor = marlin2
high_current_on_filament_swap = 0
host_type = octoprint
inherits = 
layer_gcode = 
machine_limits_usage = time_estimate_only
machine_max_acceleration_e = 10000,5000
machine_max_acceleration_extruding = 1500,1250
machine_max_acceleration_retracting = 1500,1250
machine_max_acceleration_travel = 1500,1250
machine_max_acceleration_x = 9000,1000
machine_max_acceleration_y = 9000,1000
machine_max_acceleration_z = 500,200
machine_max_feedrate_e = 120,120
machine_max_feedrate_x = 500,200
machine_max_feedrate_y = 500,200
machine_max_feedrate_z = 12,12
machine_max_jerk_e = 2.5,2.5
machine_max_jerk_x = 10,10
machine_max_jerk_y = 10,10
machine_max_jerk_z = 0.2,0.4
machine_min_extruding_rate = 0,0
machine_min_travel_rate = 0,0
max_layer_height = 0
max_print_height = 350
min_layer_height = 0.07
multimaterial_purging = 140
nozzle_diameter = 0.8
nozzle_high_flow = 0
parking_pos_retraction = 92
pause_print_gcode = M601
prefer_clockwise_movements = 0
print_host = 
printer_model = 
printer_notes = 
printer_settings_id = 
printer_technology = FFF
printer_variant = 
printer_vendor = 
printhost_apikey = 
printhost_cafile = 
remaining_times = 0
retract_before_travel = 2
retract_before_wipe = 0%
retract_layer_change = 0
retract_length = 2
retract_length_toolchange = 10
retract_lift = 0
retract_lift_above = 0
retract_lift_below = 0
retract_restart_extra = 0
retract_restart_extra_toolchange = 0
retract_speed = 40
silent_mode = 1
single_extruder_multi_material = 0
start_gcode = G28        ; Home XYZ.\nG29 P1     ; Do automated probing of the bed.\nG29 P3     ; Smart Fill Repeat until all mesh points are filled in, Used to fill unreachable points.\nG29 S0     ; Save UBL mesh points to slot 0 (EEPROM).\nG29 F 20.0 ; Set Fade Height for correction at 10.0 mm.\nG29 A      ; Activate the UBL System.\nM500       ; Save current setup. WARNING - UBL will be active at power up, before any G28.
template_custom_gcode = 
thumbnails = 
thumbnails_format = PNG
toolchange_gcode = 
travel_lift_before_obstacle = 0
travel_max_lift = 0
travel_ramping_lift = 0
travel_slope = 0
use_firmware_retraction = 0
use_relative_e_distances = 0
use_volumetric_e = 0
variable_layer_height = 1
wipe = 0
z_offset = 0
```

## Umbau

### Hilfreiche Links

* [GitHub Projekt für den Drucker](https://github.com/openlab-aux/german-reprap)
* [eine Dokumentation der Hochschule Hamm-Lippstadt](https://wiki.hshl.de/wiki/index.php/3D-Druck_mit_dem_German_RepRap_X400)
* [Original Anleitung des X400 Druckers von German RepRap](http://cdn.billiger.com/dynimg/A6bg6Q-piD0Gz-8L9Zr5x3t4H9rycHjeBa9LTdXG2DAPBs_qCr9KtethBKC5CNdfZUIFj6CqvOc3NBYZsOPYpY/German-RepRap-X400Pro-Bedienungsanleitung-615743.pdf)
* ~~[Marlin Firmware (bugfix-1.1 für Rambo)](https://github.com/MarlinFirmware/Marlin/tree/bugfix-1.1.x)~~
* ~~[Anleitung zum kompilieren mit Arduino](https://marlinfw.org/docs/basics/install_arduino.html)~~

### Alte Hardware

#### Stromversorgung

Zwei dreipolige Kaltgerätekabel:

* Einer geht direkt in die Elektronik-Box und landet auf einer Platine, die über ein Relais geschaltet wird und direkt das Heizbett versorgt.
* Der zweite geht in ein PC-Netzteil. Dort werden 4 adern am großen [24 poligen ATX-Stecker](http://static.irisnetwork.de/openlab/atx_stecker.jpg) über einen Adapter abgezweigt:
	* Pin 3: GND
	* Pin 6: 5V
	* Pin 20: -5v
	* Pin 21: +5v

#### Elektronik

Arduino mit R.A.M.P.S Board. 

* [RAMPS-Board](http://static.irisnetwork.de/openlab/20220531_204308.jpg)
* [Platine fürs Heizbett](http://static.irisnetwork.de/openlab/20220531_205816.jpg)  
  Mit [crydom-halbleiterrelais](https://asset.conrad.com/media10/add/160267/c1/-/en/000180863DS01/datenblatt-180863-crydom-halbleiterrelais-cx380d5-5-a-schaltspannung-max-530-vac-nullspannungsschaltend-1-st.pdf)

#### Extruder

Dual-Schrott-Extruder - wird nicht weiter verwendet. Kabelbaum bleibt erstmal, den müssen wir vorerst nicht auseinanderrupfen.

### Neue Hardware

#### Stromversorgung

150 Watt Meanwell HLG-150H-24B ersetzt das umgewandelte PC Netzteil.

#### Elektronik

* Rambo Einsy 1.1b Board ([Dokumentation](https://reprap.org/wiki/EinsyRambo)). (Bereits vorhanden)
* Endstops werden vorerst nicht genutzt, wir versuchen die Motortreiber des Rambo-Boards dafür zu verwenden (Plastikendstops, gegen die der Drucker dagegenfahren kann) 
* Können das die Old School Treiber die ohne UART laufen?
* Vorschlag: smarteres Mainboard oder das Rambo als Klipper laufen lassen (RPi als "Brain")

#### Extruder / Hotend

Auf jeden Fall neuer Extruder / Hotend + Sonde für automatische Kalibrierung.

TODO: Recherche was passt + bestellen.

Vorschläge: 

* [Bondtech & Slice Engineering LGX ACE Extruder (Large Gear Extruder, besser als BMG) mit integriertem Mosquito Hotend (schneller als z.B. Copperhead), 255€](https://www.3djake.de/bondtech/lgx-ace-mosquito-printhead)
* [BMG Extruder + Mosquito Magnum Hotend, höherer Volumenfluss als mit standard Mosquito (fraglich ob sich dafür Aufpreis und älterer Extruder lohnt), 369€](https://www.3djake.de/bondtech/bmg-m-mosquito-magnum-set)
* [LGX ACE Extruder mit dem schnellsten Filament Hotend auf dem Markt (dank bis zu 2 Stück 50W Cartridges), 400€](https://www.3djake.de/bondtech/lgx-ace-magnum-printhead)

#### Mechanik

~~Linearlager sind ein paar am Ende, sollten alle getauscht werden, zumindes für x und y. Maße? Am besten Misumi oder HIWIN nehmen.~~

Lager wurden durch Misumi Lager ersetzt.
