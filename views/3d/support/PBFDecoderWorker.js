/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../rest/query/operations/pbfDehydratedFeatureSet","../../../rest/query/operations/pbfQueryUtils"],(function(e,t){"use strict";let r=function(){function r(){}return r.prototype._parseFeatureQuery=function(r){const n=t.parsePBFFeatureQuery(r.buffer,new e.DehydratedFeatureSetParserContext(r.options)),o={...n,spatialReference:n.spatialReference.toJSON(),fields:n.fields?n.fields.map((e=>e.toJSON())):void 0};return Promise.resolve(o)},r}();function n(){return new r}return n}));
