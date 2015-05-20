import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://michefgourmet.com',
	namespace: 'wp-json'
});
