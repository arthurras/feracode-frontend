import Component from '@ember/component';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({

  store: service(),
  flashMessages: service(),

  actions: {

    redirectToCreate() {
      return get(this, 'redirectToCreate')();
    },

    edit(diaper) {
      get(this, 'redirectToEdit')(get(diaper, 'id'));
    },

    delete(diaper) {
      diaper.destroyRecord().then(() => {});
    },

    buy(diaper, stock) {
      let order = get(this, 'store').createRecord('order');

      set(order, 'stock', stock);
      set(order, 'diaper', diaper);

      order.save().then(() => {
        stock.reload();
      }, (err) => {
        let { errors } = err;
        
        if (get(errors, 'length')) {
          get(this, 'flashMessages').danger(get(errors, 'firstObject.detail'));
        }
      });
    }
  }

});
