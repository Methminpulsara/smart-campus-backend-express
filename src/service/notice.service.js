const Notice = require('../models/Notice');

exports.create = async (body, userId) => {
  return await Notice.create({ ...body, postedBy: userId });
};

exports.getAll = async () => await Notice.find();

