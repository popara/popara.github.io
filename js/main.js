(function() {


}).call(this);

(function() {
  require.config({
    paths: {
      jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min',
      ligthbox: 'js/lightbox'
    },
    shim: {
      lightbox: ['jquery']
    }
  });

  require(['jquery', 'lightbox'], function($, lightbox) {});

}).call(this);
