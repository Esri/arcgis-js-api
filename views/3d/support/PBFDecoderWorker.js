/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../core/promiseUtils","../../../tasks/operations/pbfQueryUtils","../../../tasks/operations/pbfDehydratedFeatureSet"],(function(e,t,r){"use strict";let n=function(){function n(){}return n.prototype._parseFeatureQuery=function(n){const s=t.parsePBFFeatureQuery(n.buffer,new r.DehydratedFeatureSetParserContext(n.options)),o={...s,spatialReference:s.spatialReference.toJSON(),fields:s.fields?s.fields.map((e=>e.toJSON())):void 0};return e.resolve(o)},n}();return function(){return new n}}));
