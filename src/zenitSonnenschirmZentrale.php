<?php declare(strict_types=1);

namespace zenit\SonnenschirmZentrale;

use Shopware\Core\Framework\Plugin;
use Shopware\Storefront\Framework\ThemeInterface;

class zenitSonnenschirmZentrale extends Plugin implements ThemeInterface
{
    public function getThemeConfigPath(): string
    {
        return 'theme.json';
    }
}
