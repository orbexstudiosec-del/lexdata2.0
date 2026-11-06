# Webmail (Roundcube)

Roundcube 1.7.5 en `https://correo.lexdata.com.ec`, para leer y enviar el correo `@lexdata.com.ec`.
El correo sigue alojado en Namecheap: Roundcube solo es la interfaz web y se conecta a ese servidor.

| Archivo | Ruta en el servidor |
|---|---|
| `config.inc.php` | `/srv/roundcube/config/config.inc.php` (sin la clave real: ver abajo) |
| `php.ini` | `/etc/php/8.5/fpm/conf.d/99-roundcube.ini` |
| `fail2ban-jail.local` | `/etc/fail2ban/jail.d/roundcube.local` |
| `fail2ban-filter.conf` | `/etc/fail2ban/filter.d/roundcube-lexdata.conf` |

El bloque de Caddy está en `../Caddyfile`.

## Cómo está montado

- Código en `/srv/roundcube` (propiedad de root); solo `temp/` y `logs/` son escribibles por `www-data`.
- Base de datos SQLite en `/var/lib/roundcube/roundcube.db`, fuera de la carpeta web.
- Servidor de correo: `server352-5.web-hosting.com`, IMAP 993 y SMTP 465 con SSL. No se usa
  `mail.lexdata.com.ec` porque el certificado del servidor es `*.web-hosting.com` y la conexión
  no se podría verificar. Si Namecheap cambia la cuenta de servidor, hay que actualizar este nombre.
- Los usuarios pueden entrar con la dirección completa o solo con la parte antes de la `@`.
- Sin instalador web (se borró `installer/`). Límite de 3 intentos de inicio de sesión por minuto.
- fail2ban bloquea durante 1 hora la IP que falle 5 veces en 10 minutos. El filtro usa la IP real
  de la conexión, por eso el subdominio debe ir **sin proxy** en Cloudflare (nube gris).

## Clave `des_key`

Cifra las contraseñas guardadas en la sesión. La real solo está en el servidor. En una instalación
nueva, generar una de 32 caracteres:

```
openssl rand -base64 48 | tr -dc 'A-Za-z0-9' | head -c 32
```

## Actualizar Roundcube

Descargar el paquete `complete` de https://github.com/roundcube/roundcubemail/releases, comprobar su
SHA-256 con el publicado en la versión, y seguir `bin/installto.sh` según la guía oficial. Hacer
copia de `config/config.inc.php` y de `/var/lib/roundcube/` antes.
