# Despliegue

El sitio corre en un VPS de Hetzner (Ubuntu 26.04, IP `2.31.79.129`) detrás de Cloudflare.
Estos archivos son copia de la configuración instalada en el servidor.

| Archivo | Ruta en el servidor | Función |
|---|---|---|
| `Caddyfile` | `/etc/caddy/Caddyfile` | Servidor web y certificado HTTPS automático |
| `lexdata.service` | `/etc/systemd/system/lexdata.service` | Mantiene Next.js en marcha en `127.0.0.1:3000` |
| `lexdata-deploy` | `/usr/local/bin/lexdata-deploy` | Publica la última versión de `main` |

## Publicar cambios

Después de subir los cambios a GitHub:

```
ssh -i ~/.ssh/lexdata_vps_ed25519 root@2.31.79.129 lexdata-deploy
```

## Servidor

- La app vive en `/srv/lexdata/app` y corre con el usuario de sistema `lexdata`, sin privilegios.
- Variables de entorno (clave de Resend para el formulario): `/srv/lexdata/app/.env.local`.
- Firewall `ufw`: solo 22, 80 y 443. También están activos `fail2ban` y las actualizaciones
  de seguridad automáticas.
- Node.js 24 (NodeSource), pnpm 11 y Caddy 2 (repositorio oficial).

## DNS (Cloudflare)

- `lexdata.com.ec` y `www`: al VPS, con proxy (nube naranja). SSL en modo **Full (strict)**;
  "Always Use HTTPS" apagado para que Caddy pueda renovar el certificado.
- `mail`, `webmail`, `cpanel`, `ftp`, `autodiscover` y demás subdominios del cPanel: siguen en el
  hosting de Namecheap (`66.29.153.183`) **sin proxy** (nube gris). El correo depende de ellos.
- MX, SPF, DKIM y DMARC apuntan al correo de Namecheap; no cambiarlos.
