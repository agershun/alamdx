/*
//
// Main class for Alamdx.js
// Date: 23.11.2014
// (c) 2014, Andrey Gershun
//
*/


// Initial parameters
alamdx.parser = parser;
alamdx.parse = parser.parse.bind(parser); // Shortcut

// Deafult options
alamdx.options = {};


// Run one statement
alamdx.exec = function (sql, params, cb) {
	return alasql.dexec(alasql.useid, sql, params, cb);
}

alamdx.dexec = function (databaseid, sql, params, cb) {
	var db = alasql.databases[databaseid];

	// Create AST
	var ast = alamdx.parse(sql);
	console.log(ast);

	if(!ast.statements) return;
	if(ast.statements.length == 0) return 0;
	else if(ast.statements.length == 1) {
		return ast.statements[0].execute(databaseid, params, cb);		
	} else {
		// Multiple statements
		return alamdx.drun(databaseid, ast, params, cb);
	}
};

// Run multiple statements and return array of results
alamdx.drun = function (databaseid, ast, params, cb) {
	var useid = alasql.useid;
	if(useid != databaseid) alasql.use(databaseid);
	var res = [];
	for (var i=0, ilen=ast.statements.length; i<ilen; i++) {
		if(ast.statements[i]) {
//			if(alamdx.options.logstatements) console.log(ast.statements[i].toString());
			res.push(ast.statements[i].execute(alasql.useid, params));
		}
	};
	if(useid != databaseid) alasql.use(useid);
	if(cb) cb(res);
	return res;
};

