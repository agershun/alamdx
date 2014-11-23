//
// alamdx.js
// Alasql - JavaScript MDX OLAP lobrary
// Date: 23.11.2014
// Version: 0.0.0
// (ñ) 2014, Andrey Gershun
//

/*
The MIT License (MIT)

Copyright (c) 2014 Andrey Gershun (agershun@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

//  UMD header
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['alasql'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('alasql'));
    } else {
        root.alamdx = factory(root.alasql);
    }
}(this, function (alasql) {

// Main function
alamdx = function(mdx, params, cb, scope) {
	return alamdx.exec(mdx, params, cb, scope);
};

// For co-existense of alasql and alamdx
alamdx.alasql = alasql;

