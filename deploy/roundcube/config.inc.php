<?php
// Roundcube para el correo de Lex Data Corp (alojado en Namecheap).
$config = [];

$config['db_dsnw'] = 'sqlite:////var/lib/roundcube/roundcube.db?mode=0640';

// Servidor de correo de Namecheap: su certificado es *.web-hosting.com,
// por eso se usa este nombre y no mail.lexdata.com.ec.
$config['imap_host'] = 'ssl://server352-5.web-hosting.com:993';
$config['smtp_host'] = 'ssl://server352-5.web-hosting.com:465';
$config['smtp_user'] = '%u';
$config['smtp_pass'] = '%p';
$config['username_domain'] = 'lexdata.com.ec';

$config['product_name'] = 'Lex Data Corp · Correo';
$config['support_url'] = '';
$config['skin'] = 'elastic';
$config['language'] = 'es_ES';
$config['plugins'] = ['archive', 'zipdownload', 'markasjunk'];

$config['des_key'] = 'GENERAR_32_CARACTERES_ALEATORIOS';
$config['enable_installer'] = false;
$config['use_https'] = true;
$config['ip_check'] = true;
$config['login_rate_limit'] = 3;
$config['session_lifetime'] = 30;
$config['log_logins'] = true;
$config['max_message_size'] = '25M';
