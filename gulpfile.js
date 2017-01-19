const elixir = require('laravel-elixir');

require('laravel-elixir-svgstore');
require('laravel-elixir-imagemin');

// Autoprefixer settings
elixir.config.css.autoprefix = {
  enabled: true, //default, this is only here so you know how to disable
  options: {
    cascade: true,
    browsers: ['last 2 versions', '> 1%']
  }
};

// Imagemin settings
elixir.config.images = {
  folder: 'img',
  outputFolder: 'img'
};


var paths = {
  'normalize': './node_modules/normalize-scss/sass/',
  'avalancheCss': './node_modules/avalanche-css/'
}

elixir(mix => {
  mix.browserSync({
    proxy: 'gnusante.dev'
  })

  .sass(
    'main.scss',
    null,
    null, {
    includePaths: [
      paths.normalize,
      paths.avalancheCss
    ]
  })

  .webpack(
    [
      'frontend/app.js',
    ],
    'public/javascript/frontend/app.js'
  )

  .svgstore(
    'resources/assets/icons',
    'public/img/',
    'sprite.svg'
  )

  .imagemin()
});
