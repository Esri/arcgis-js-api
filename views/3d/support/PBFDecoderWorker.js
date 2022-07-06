/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{DehydratedFeatureSetParserContext as e}from"../../../rest/query/operations/pbfDehydratedFeatureSet.js";import{parsePBFFeatureQuery as r}from"../../../rest/query/operations/pbfQueryUtils.js";class t{_parseFeatureQuery(t){const s=r(t.buffer,new e(t.options)),o={...s,spatialReference:s.spatialReference.toJSON(),fields:s.fields?s.fields.map((e=>e.toJSON())):void 0};return Promise.resolve(o)}}function s(){return new t}export{s as default};
