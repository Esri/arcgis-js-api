/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../core/urlUtils","../Portal"],(function(e,t,r){"use strict";function l(e){return{origin:"portal-item",url:t.urlToObject(e.itemUrl),portal:e.portal||r.getDefault(),portalItem:e,readResourcePaths:[]}}function o(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?t.urlToObject(e.itemUrl):null,portal:e.portal||r.getDefault(),portalItem:e}}e.createForItemRead=l,e.createForItemWrite=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
