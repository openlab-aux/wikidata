## Local network (WiFi and cabled) with internet access

A DHCP server is handing out IPs within the range of 172.16.0.100 through 172.16.0.249.
Please don't manually pick an address from this pool.

- Netmask: 255.255.0.0
- Gateway: 172.16.0.1
- DNS: 172.16.0.1
- WiFi ESSID: Labor 2.0

## Internet of Things

- 172.16.2.0/24


## Network Services in the OpenLab

* [Flipdot](Flipdots)
* [SpaceAPI](SpaceAPI): https://api.openlab-augsburg.de/data.json
* [Scanner](Scanner)
* Home Assistant http://172.16.2.23:8123

## WLAN

Config:

* Ethernet interface: Client IP via DHCP
* Stopped/Deactivated services: dnsmasq / odhcpd


### WLAN AP - Erni (auf Server Rack)

* TP-Link Archer C5 AC 1200 v1
* Ethernet MAC Address: 30:B5:C2:56:D6:66
* 2.4 GHz: Channel 11 MHz
* 5   GHz: Channel 36 / Channel width: 40 


### WLAN AP - Bert

* TP-Link Archer C7 AC 1750 v5
* Ethernet MAC Address: B0:95:75:48:E7:82
* 2.4 GHz: Channel 6
* 5   GHz: Channel 44 / Channel width: 40


## "Core" Switch

* MiroTik [CRS 125-24G-1S-RM](https://mikrotik.com/product/crs125_24g_1s_rm)
* Ports: 24 x 1 Gbps / RJ45
* RouterOS [Documentation](https://help.mikrotik.com/docs/display/ROS/RouterOS) 

### Serial console settings

* baud: 115200
* parity: none
* data bits: 8
* stop bits: 1

Exmaple: `picocom --baud 115200 --parity n --databits 8 --stopbits 1 /dev/ttyUSB0`

### Software update

* Pre/Post- upgrade Verification: `/system routerboard print`
* Update software: `/system package update`
* Update booloader: `/system routerboard upgrade`
* Reboot

### Current configuration

* Management interface IP via DHCP
* Runs Rapid-Spanning-Tree
* Ports are configured for "Edge-Discover" mode and immediately transition to STP Forwarding state
	* Unless a BDPU has been received, which disables the Edge status
* Display on the switch has been disabled

```
/system/identity/set name=grantlr

/lcd/set enabled=no

!! Disable CDP, LLDP, MNDP
/ip neighbor/discovery-settings/set discover-interface-list=none

!! Disable unused services
/tool/mac-server/set allowed-interface-list=none
/tool bandwidth-server set enabled=no
/ip/service/disable telnet,ftp,www,api,winbox,api-ssl

/ip/ssh/set strong-crypto=yes

/ip/settings/set ip-forward=no send-redirects=no
/interface/bridge/settings set allow-fast-path=no

/interface/bridge
add
set bridge1 vlan-filtering=yes
set bridge1 protocol-mode=rstp
set priority=0 0
port add bridge=bridge1 interface=ether1 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether2 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether3 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether4 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether5 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether6 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether7 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether8 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether9 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether10 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether11 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether12 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether13 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether14 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether15 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether16 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether17 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether18 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether19 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether20 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether21 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether22 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether23 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged
port add bridge=bridge1 interface=ether24 edge=yes-discover pvid=100 frame-types=admit-only-untagged-and-priority-tagged

/interface/vlan add interface=bridge1 name=MGMT vlan-id=100
/interface bridge vlan add bridge=bridge1 tagged=bridge1 vlan-ids=100

/ip dhcp-client/add interface=MGMT disabled=no use-peer-dns=yes use-peer-ntp=yes

/certificate
add name=root-cert common-name=bogus-root-ca days-valid=3650 key-usage=key-cert-sign,crl-sign
sign root-cert

add name=https-cert common-name=bogus-router days-valid=3650
sign ca=root-cert https-cert

/ip service
set www-ssl certificate=https-cert disabled=no
```


### Add users

Admin account:

> /user add name=myname password=mypassword group=full

Read-only user:

> /user add name=myname password=mypassword group=read


### Wipe config

`/system reset-configuration no-defaults=yes skip-backup=yes`


### Monitoring


MAC Table:

> /interface/bridge/host print

Log buffer:

> /log print


### REST API

REST API URL equivalent for `/interface/bridge/host print` would be `https://INSERT_SWITCH_IP/interface/bridge/host`

Voltage / Temperature Example:

> curl -k -u someuser:Geheim23 https://INSERT_SWITCH_IP/rest/system/health

CPU Load / Memory / Uptime / Software version

> curl -k -u someuser:Geheim23 https://INSERT_SWITCH_IP/rest/system/resource

## Outdated Resources
* [Gateway configuration](APU as a router)
* [PulseAudio Sink](Musikanlage): audio.lab (172.16.16.182)
* [Printer](Drucker): print.lab (172.16.16.118)
* [Netzwerktopologie-2018-Fasching](/LabNetGraph.odg) [(PDF)](/LabNetGraph.pdf)
* [Dokumentation auf GitHub](https://github.com/openlab-aux/labnetz-doku)
