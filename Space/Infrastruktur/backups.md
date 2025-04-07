# Backups

Diese Seite beschreibt die Backup-Strategie für alle Edge-Devices wie Octoprint ...
Hierfür wurde eien VM eingerichtet:

dockerirgendwas.lab (172.16.0.100)

user: `openlab`
password: `openlab`
root: `openlab`

## S3 Server
Es wurde ein S3 Server mit [Minio](https://min.io/) installiert.
Admin Panel: http://dockerirgendwas.lab:9001
user: `minio`
password: `openlabopenlab` (passwort policy von minio, deshalb kein openlab)

Dort befinden sich mehrere S3 Buckets für die Edge Devices.
Es sollte jeweils ein eigener Bucket pro device angelegt werden.
Macht am besten auch direct Versioning und Object Locking an. Man weiß nie...

### Access Keys

9udNasHBLLACZb5Y5o5U

XY8RaUYTS5GbrqlpH7MIebwuGibdBScZw5p9n5yq

## Kopia
Als Backup Software wird [Kopia](https://kopia.io/docs/getting-started/) verwendet.
Das Verschlüsselungspasswort ist hierbei auch wieder `openlab`

### Create Repo

Example command:
```
kopia repository create s3 --endpoint dockerirgendwas.lab:9000 --bucket=openlab-example-bucket --access-key=9udNasHBLLACZb5Y5o5U --secret-access-key=XY8RaUYTS5GbrqlpH7MIebwuGibdBScZw5p9n5yq --disable-tls
```

### Create Snapshot

```
kopia snapshot create /your/path
```


### Create Cronjob

```
0 0 * * * /usr/bin/kopia snapshot create --all
```

## Backuped Hosts

- [x] Druckbrudi.lab
- [x] octopi.lab
- [ ] neetboot.lab