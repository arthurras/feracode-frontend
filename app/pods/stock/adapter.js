import ApplicationAdapter from '../application/adapter';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default ApplicationAdapter.extend({

  buy(stock) {
    const url = this._buildURL('stocks/' + get(stock, 'id') + '/buy');

    return this.ajax(url).then((payload) => {
      store.pushPayload('stock', payload);
      return store.peekRecord('stock', payload.data.id);
    })

    // .catch(() => {
    //
    // });
  }

});
