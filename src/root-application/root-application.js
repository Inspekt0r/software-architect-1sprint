import * as singleSpa from 'single-spa';

singleSpa.registerApplication('main-app', () =>
    import ('../main-app/src/utils/main.js'), pathPrefix('/main-app'));
singleSpa.registerApplication('auth-app', () =>
  import ('../auth-app/src/utils/auth.js'), pathPrefix('/auth-app'));
singleSpa.registerApplication('cards-app', () =>
  import ('../cards-app/src/utils/cards.js'), pathPrefix('/cards-app'));
singleSpa.registerApplication('profiles-app', () =>
  import ('../profiles-app/profiles.js'), pathPrefix('/profiles-app'));

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}