'use strict';

var _ = require('lodash');
var prettier = require('prettier')
function convertType(swaggerType, swagger) {
  var typespec = {
    description: swaggerType.description,
    isEnum: false
  };

  if (swaggerType.hasOwnProperty('schema')) {
    return convertType(swaggerType.schema);
  }
  if (_.isString(swaggerType.$ref)) {
    typespec.tsType = 'ref';
    typespec.target = swaggerType.$ref.substring(swaggerType.$ref.lastIndexOf('/') + 1);
  } else if (swaggerType.hasOwnProperty('enum')) {
    typespec.tsType = swaggerType.enum
      .map(function (str) {
        return "'" + str + "'";
      })
      .join(' | ');
    typespec.isAtomic = true;
    typespec.isEnum = true;
  } else if (swaggerType.type === 'string') {
    typespec.tsType = 'string';
  } else if (swaggerType.type === 'number' || swaggerType.type === 'integer') {
    typespec.tsType = 'number';
  } else if (swaggerType.type === 'boolean') {
    typespec.tsType = 'boolean';
  } else if (swaggerType.type === 'array') {
    debugger
    typespec.tsType = 'array';
    typespec.elementType = convertType(swaggerType.items);
  } else {
    /* If (swaggerType.type === 'object') */
    // Remaining types are created as objects
      typespec.tsType = 'object';
      typespec.properties = [];
      //properties 是 所有的object里面的字段
      _.forEach(swaggerType.properties, function (propertyType, propertyName) {
        var property = convertType(propertyType);
        property.name = propertyName;

        property.optional = false;
        if (swaggerType.required && swaggerType.required.includes(propertyName)) {
          property.optional = true;
        }
        typespec.properties.push(property);
      });
  }
  typespec.isRef = typespec.tsType === 'ref';
  typespec.isObject = typespec.tsType === 'object';
  typespec.isArray = typespec.tsType === 'array';
  typespec.isAtomic =
    typespec.isAtomic ||
    _.includes(['string', 'number', 'boolean', 'any'], typespec.tsType);

  return typespec;
}
function formatting(ejs){
    return prettier.format(ejs, {semi: false,parser: 'babel'});
  }

module.exports.formatting = formatting;
module.exports.convertType = convertType;
