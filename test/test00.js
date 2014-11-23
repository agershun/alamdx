if(typeof exports === 'object') {
	var assert = require("assert");
	var alamdx = require('../alamdx.js');
	var alasql = alamdx.alasql;
};

describe('Test 00 - Parser', function() {

	it('1. Simple SELECT', function(done){
		var ast = alamdx.parse('SELECT [Measures].[qty] ON COLUMNS, [country] ON ROWS FROM sales');
		console.log(ast);

		var ast = alamdx.parse("\
			SELECT {[Measures].[Internet Sales Amount]} ON COLUMNS,\
			{[Date].[Calendar].MEMBERS} ON ROWS\
			FROM [Adventure Works]\
			");
		console.log(ast);


		var ast = alamdx.parse("\
 SELECT {[Measures].[Internet Sales Amount]} ON 0,\
 {[Date].[Calendar].MEMBERS} ON 1\
 FROM [Adventure Works]\
			");
		console.log(ast);

		var ast = alamdx.parse("\
 SELECT {[Measures].[Internet Sales Amount]} ON AXIS(0),\
 {[Date].[Calendar].MEMBERS} ON AXIS(1)\
 FROM [Adventure Works]\
			");
		console.log(ast);

		var ast = alamdx.parse("\
 SELECT {[Measures].[Internet Sales Amount]} ON COLUMNS,\
 NON EMPTY\
 {[Date].[Calendar].MEMBERS} ON ROWS\
 FROM [Adventure Works]\
			");
		console.log(ast);


		var ast = alamdx.parse("\
 SELECT {[Measures].[Internet Sales Amount]}\
 * [Promotion].[Promotion].[Promotion].MEMBERS\
 ON COLUMNS,\
 {[Date].[Calendar].[Calendar Year].MEMBERS} ON ROWS\
 FROM [Adventure Works]\
 WHERE([Product].[Subcategory].&[19])\
			");
		console.log(ast);

		var ast = alamdx.parse("\
 SELECT NON EMPTY {[Measures].[Internet Sales Amount]} \
 * [Promotion].[Promotion].[Promotion].MEMBERS\
 ON COLUMNS,\
 NON EMPTY\
 {[Date].[Calendar].[Calendar Year].MEMBERS} ON ROWS\
 FROM [Adventure Works]\
 WHERE([Product].[Subcategory].&[19])\
			");
		console.log(ast);

		var ast = alamdx.parse("\
 SELECT {[Measures].[Internet Sales Amount]} \
 ON COLUMNS,\
 NON EMPTY\
 {[Date].[Calendar].[Date].MEMBERS} \
 HAVING [Measures].[Internet Sales Amount]>15000\
 ON ROWS\
 FROM [Adventure Works]\
			");
		console.log(ast);


		done();

	});

});
