<?php
// Roundcube para el correo de Lex Data Corp (servidor de correo de este VPS).
$config = [];

$config['db_dsnw'] = 'sqlite:////var/lib/roundcube/roundcube.db?mode=0640';

// Dovecot y Postfix en el propio servidor (puerto 10587: solo local, con contraseña).
$config['imap_host'] = 'localhost:143';
$config['smtp_host'] = 'localhost:10587';
$config['smtp_user'] = '%u';
$config['smtp_pass'] = '%p';
$config['username_domain'] = 'lexdata.com.ec';

$config['product_name'] = 'Lex Data Corp · Correo';
$config['support_url'] = '';
$config['skin'] = 'elastic';
$config['language'] = 'es_ES';
$config['plugins'] = ['archive', 'zipdownload', 'markasjunk', 'managesieve', 'lexdata_login'];

$config['des_key'] = 'GENERAR_32_CARACTERES_ALEATORIOS';
$config['enable_installer'] = false;
$config['use_https'] = true;
$config['ip_check'] = true;
$config['login_rate_limit'] = 3;
$config['session_lifetime'] = 30;
$config['log_logins'] = true;
$config['max_message_size'] = '25M';

// Filtros y respuesta automática de ausencia (Dovecot ManageSieve, solo local).
$config['managesieve_host'] = 'localhost:4190';
$config['managesieve_vacation'] = 1;
