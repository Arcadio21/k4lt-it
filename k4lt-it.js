Hooks.on('init', () => {
  if(typeof Babele !== 'undefined') {
      Babele.get().register({
          module: 'k4lt-it',
          lang: 'it',
          dir: 'compendium'
      });
  }
});
