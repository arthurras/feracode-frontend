import JSONAPIAdapter from 'ember-data/adapters/json-api';
import config from '../../config/environment';

const { APP : { host, namespace } } = config;

export default JSONAPIAdapter.extend({

  host,
  namespace,

  shouldBackgroundReloadRecord() {
    return false;
  },

  shouldBackgroundReloadAll() {
    return true;
  }

});
