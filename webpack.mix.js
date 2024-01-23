const mix = require("laravel-mix");

mix.browserSync('127.0.0.1:8000');

if (mix.inProduction()) mix.version();

mix.disableNotifications();

