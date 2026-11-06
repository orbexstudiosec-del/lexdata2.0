# Servidor de correo (@lexdata.com.ec)

El correo vive en el VPS desde noviembre de 2026 (el hosting de Namecheap se dio de baja).

- **Postfix** recibe el correo (puerto 25) y lo envía (587/465 con contraseña).
- **Dovecot** guarda los buzones (`/var/vmail/lexdata.com.ec/<usuario>/Maildir`) y da IMAP (993).
- **Rspamd** filtra el spam (va a la carpeta "Junk") y firma con DKIM lo que se envía.
- **Roundcube** es el webmail: `https://correo.lexdata.com.ec` (ver `../roundcube/README.md`).

## Cuentas

```
lexdata-correo lista
lexdata-correo crear pdatos                 # genera y muestra una contraseña
lexdata-correo clave pdatos                 # contraseña nueva
lexdata-correo alias info pdatos,abogado    # info@ llega a pdatos@ y abogado@
lexdata-correo borrar pdatos                # sus mensajes se conservan en disco
```

Las contraseñas están cifradas (Argon2id) en `/etc/dovecot/users`. Quien recibe un alias puede
también enviar con esa dirección; nadie puede enviar con una dirección que no sea suya.

## Configurar un programa o un móvil

| | Servidor | Puerto | Seguridad |
|---|---|---|---|
| Entrante (IMAP) | `mail.lexdata.com.ec` | 993 | SSL/TLS |
| Saliente (SMTP) | `mail.lexdata.com.ec` | 465 (o 587 con STARTTLS) | SSL/TLS, con contraseña |

Usuario: la dirección completa.

## Envío al exterior

Hetzner bloquea el puerto 25 de salida en servidores nuevos. Hasta resolverlo, el correo hacia
fuera se queda en cola (Postfix lo reintenta 5 días). Dos salidas:

1. **Servicio de envío** (Resend, Brevo…): en `/etc/postfix/main.cf` poner
   `relayhost = [smtp.servicio.com]:587` y en `/etc/postfix/sasl_passwd`
   `[smtp.servicio.com]:587 usuario:clave`; luego `postfix reload`. Añadir su `include:` al SPF.
2. **Desbloqueo del puerto 25** pidiéndolo a Hetzner (Console → Limits). Antes, poner el DNS
   inverso de `2.31.79.129` a `mail.lexdata.com.ec` (Console → servidor → Networking).

Ver la cola: `postqueue -p`. Reintentar ya: `postqueue -f`.

## DNS (Cloudflare, todo sin proxy)

| Tipo | Nombre | Valor |
|---|---|---|
| A | `mail` | `2.31.79.129` |
| A | `correo`, `webmail` | `2.31.79.129` |
| MX | `@` | `mail.lexdata.com.ec` (prioridad 10) |
| TXT | `@` | `v=spf1 mx ~all` (+ `include:` del servicio de envío) |
| TXT | `lexdata._domainkey` | la clave pública de `/var/lib/rspamd/dkim/lexdata.com.ec.lexdata.txt` |
| TXT | `_dmarc` | `v=DMARC1; p=none;` |

## Certificado

Caddy obtiene el de `mail.lexdata.com.ec` (el bloque está en `../Caddyfile`). El timer diario
`lexdata-mail-certs` lo copia a `/etc/ssl/lexdata-mail/` y recarga Postfix y Dovecot. Para
forzarlo: `systemctl start lexdata-mail-certs`.

## Archivos

| Archivo | Ruta en el servidor |
|---|---|
| `main.cf` | `/etc/postfix/main.cf` |
| `master.cf.append` | añadido al final de `/etc/postfix/master.cf` |
| `dovecot.conf` | `/etc/dovecot/dovecot.conf` |
| `spam.sieve` | `/etc/dovecot/sieve/spam.sieve` (compilar con `sievec`) |
| `rspamd/*.conf` | `/etc/rspamd/local.d/` |
| `lexdata-correo`, `lexdata-mail-certs` | `/usr/local/bin/` |
| `lexdata-mail-certs.{service,timer}` | `/etc/systemd/system/` |
| `fail2ban-jail.local` | `/etc/fail2ban/jail.d/correo.local` |
| `fail2ban-filter-dovecot.conf` | `/etc/fail2ban/filter.d/dovecot-lexdata.conf` |

fail2ban bloquea 1 hora la IP que falle 5 contraseñas en 10 minutos (SMTP o IMAP).

## Copias de seguridad

Lo que hay que guardar: `/var/vmail/`, `/etc/dovecot/users`, `/etc/postfix/virtual` y
`/var/lib/rspamd/dkim/`. Recomendable activar los backups de Hetzner del servidor.
