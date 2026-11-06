<?php

/**
 * Pantalla de inicio de sesión con el diseño de lexdata.com.ec
 * y favicon de la firma en todo el webmail.
 */
class lexdata_login extends rcube_plugin
{
    public function init()
    {
        $rcmail = rcmail::get_instance();
        if (empty($rcmail->user->ID)) {
            $this->include_stylesheet('login.css');
        }
        $this->add_hook('render_page', [$this, 'render_page']);
        $this->add_hook('template_object_loginform', [$this, 'login_form']);
    }

    public function render_page($args)
    {
        $output = rcmail::get_instance()->output;
        $base = $output->asset_url($this->urlbase);
        $content = $args['content'];

        $content = preg_replace(
            '/<link rel="shortcut icon"[^>]*>/',
            '<link rel="icon" type="image/png" href="' . $base . 'favicon.png">',
            $content
        );

        if ($args['template'] === 'login') {
            $content = preg_replace('/<img [^>]*id="logo"[^>]*>/', '', $content);
            $content = preg_replace(
                '/(<form id="login-form"[^>]*>)/',
                '$1<p class="lx-eyebrow">Correo corporativo</p><h2 class="lx-title">Iniciar sesión</h2>'
                . '<p class="lx-help">Use su dirección <strong>@lexdata.com.ec</strong> y su contraseña.</p>',
                $content,
                1
            );
            $content = preg_replace(
                '/(<div id="layout-content"[^>]*>)/',
                '$1' . $this->aside($base),
                $content,
                1
            );
            $content = preg_replace(
                '/(<div id="login-footer"[^>]*>)\s*[^<]*/',
                '$1© ' . date('Y') . ' Lex Data Corp® · Ibarra, Ecuador',
                $content
            );
        }

        $args['content'] = $content;

        return $args;
    }

    public function login_form($args)
    {
        $args['content'] = preg_replace(
            '/(<label for="rcmloginuser">)[^<]*/',
            '$1Correo electrónico',
            $args['content']
        );

        return $args;
    }

    private function aside($base)
    {
        return '<aside class="lx-aside">'
            . '<a class="lx-brand" href="https://lexdata.com.ec"><img src="' . $base . 'logo.png" alt="Lex Data Corp" width="320" height="54"></a>'
            . '<div class="lx-copy">'
            . '<p class="lx-kicker"><span></span>Lex Data Corp® | Asesoría Jurídica Especializada</p>'
            . '<p class="lx-headline">Correo seguro para su firma</p>'
            . '<p class="lx-lead">Acceso al correo corporativo de Lex Data Corp®. Conexión cifrada y protegida.</p>'
            . '</div>'
            . '<a class="lx-back" href="https://lexdata.com.ec">← Volver a lexdata.com.ec</a>'
            . '</aside>';
    }
}
