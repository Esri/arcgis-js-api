/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../core/has.js";import e from"./CodedValueDomain.js";export{default as CodedValueDomain}from"./CodedValueDomain.js";import o from"./Domain.js";export{default as DomainBase}from"./Domain.js";import r from"./InheritedDomain.js";export{default as InheritedDomain}from"./InheritedDomain.js";import a from"./RangeDomain.js";export{default as RangeDomain}from"./RangeDomain.js";const n={key:"type",base:o,typeMap:{range:a,"coded-value":e,inherited:r}};function t(o){if(!o||!o.type)return null;switch(o.type){case"range":return a.fromJSON(o);case"codedValue":return e.fromJSON(o);case"inherited":return r.fromJSON(o)}return null}export{t as fromJSON,n as types};
