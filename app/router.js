import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('diaper', { path: '/diapers'}, function(){
    this.route('list', { path: '/' });
    this.route('create', { path: '/create' });
    this.route('edit', { path: '/:diaper_id/edit' });
  });
});

export default Router;
