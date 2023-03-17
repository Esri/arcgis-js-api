/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/urlUtils","../Portal"],(function(t,e,r){"use strict";function o(t){return{origin:"portal-item",url:e.urlToObject(t.itemUrl),portal:t.portal||r.getDefault(),portalItem:t,readResourcePaths:[]}}function l(t){return{origin:"portal-item",messages:[],writtenProperties:[],url:t.itemUrl?e.urlToObject(t.itemUrl):null,portal:t.portal||r.getDefault(),portalItem:t}}t.createForItemRead=o,t.createForItemWrite=l,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
