// Find an intersection of two dictionaries

const intersection = function intersection(object_1, object_2) {
  const keysObject1 = Object.keys(object_1);
  
  for (const attributeName of keysObject1) {
    const valueObject1 = object_1[attributeName];
    const valueObject2 = object_2[attributeName];

    if (valueObject1 === valueObject2) {
      object_2[attributeName] = valueObject1;
    } else {
      delete object_1[attributeName];
    }
  }
  return object_1;
};

module.exports = intersection;
