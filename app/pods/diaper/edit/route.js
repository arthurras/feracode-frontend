import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('diaper', params.diaper_id);
  }

});
