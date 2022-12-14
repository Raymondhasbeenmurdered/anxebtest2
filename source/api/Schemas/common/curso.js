'use strict';

const fields = require('anxeb-mongoose').Fields;
const SchemaBuilder = require('../../middleware/schema');

module.exports = {
	Schema : function (params) {
		return new SchemaBuilder(params).build(function (required) {
			return {
			Seccion: fields.enum({ required: required(0)}, ['A', 'B', 'C', 'D', 'E', 'F', 'G']),
			Numero: fields.number({ required: required(1) })
			};
		});
	}
};
/*export interface Curso {
  Seccion: string;
  NumeroO: Number;
}*/
