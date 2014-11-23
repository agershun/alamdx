# Alamdx - JavaScript MDX OLAP library for Alasql database

Version 0.0.0 Date 23.11.2014  [Changelog](CHANGELOG.md), [Release Plan](RELEASES.md)

Alamdx - '[à la MDX](http://en.wiktionary.org/wiki/%C3%A0_la)' - is a light-weight JavaScript client-side MDX OLAP database library designed to work in browser and Node.js. It is an extension for [Alasql](https://github.com/agershun/alasql) database.

Alamdx realizes a subset of [MDX](http://en.wikipedia.org/wiki/MultiDimensional_eXpressions) (a language for multidimensional expressions) and designed for development of browser and mobile reporting and analytical applications, online analytical processing (OLAP), multidimensional analysis and work with aggregated data.

## Warning

Works in progress...


## How to use

### In browser

```html
    <script src="alasql.js"></script>
    <script src="alamdx.js"></script>
    <script>
    	// Prepare the data cube
    	alasql('create table sales (fruit string, country string, qty int)');
    	alasql('insert into sales values ("Apple","Argentina",1500)');
    	alasql('insert into sales values ("Apple","Mexica",1500)');
    	alasql('insert into sales values ("Melon","Argentina",250)');
    	alasql('insert into sales values ("Melon","Mexica",250)');
    	// Execute MDX statement
    	var res = alamdx('SELECT [Measures].[qty] ON COLUMNS, [fruit] ON ROWS FROM sales');
    </string>
```

### AMD / require

```js
	require(['alamdx'], function(alamdx) {
		var alasql = alamdx.alasql;
    	alasql('create table sales (fruit string, country string, qty int)');
    	alasql('insert into sales values ("Apple","Argentina",1500)');
    	var res = alamdx('SELECT [Measures].[qty] ON COLUMNS, [fruit] ON ROWS FROM sales');
	});
```

### In Node.js

```js
	var alamdx = require('alamdx');
	var alasql = alamdx.alasql;

	alasql('create table sales (fruit string, country string, qty int)');
	alasql('insert into sales values ("Apple","Argentina",1500)');
	var res = alamdx('SELECT [Measures].[qty] ON COLUMNS, [fruit] ON ROWS FROM sales');
```

## MDX Language (multidimensional expressions)

* WITH {} SELECT {} ON COLUMNS, {} ON ROWS FROM cube WHERE slice 
* Create cube
* Create dimension
* Create calculation

## License

(c) 2014, Andrey Gershun [MIT license information](LICENSE)


