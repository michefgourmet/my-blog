import DS from 'ember-data';

var Post = DS.Model.extend({
	id: DS.attr('number'),
  title: DS.attr('string'),
  date: DS.attr('string'),
  link: DS.attr('string'),
  content: DS.attr('string'),
});

export default Post;
