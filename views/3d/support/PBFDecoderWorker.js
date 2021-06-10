/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../rest/query/operations/pbfQueryUtils","../../../rest/query/operations/pbfDehydratedFeatureSet"],(function(e,t){"use strict";let r=function(){function r(){}return r.prototype._parseFeatureQuery=function(r){const n=e.parsePBFFeatureQuery(r.buffer,new t.DehydratedFeatureSetParserContext(r.options)),o={...n,spatialReference:n.spatialReference.toJSON(),fields:n.fields?n.fields.map((e=>e.toJSON())):void 0};return Promise.resolve(o)},r}();function n(){return new r}return n}));
