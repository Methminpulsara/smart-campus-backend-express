const Event = require('../models/Event');


exports.create = async (data, userId) => {
  return await Event.create({ ...data, organizer: userId });
};

exports.getAll = async () => await Event.find();