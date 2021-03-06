const Query = require('./queries/Query')
const Note = require('./queries/Note.js');
const User = require('./queries/User.js');
const Mutation = require('./mutations')
const Subscription = require('./subscriptions')

module.exports = {
    Query,
    Note,
    User,
    Mutation,
    Subscription,
}