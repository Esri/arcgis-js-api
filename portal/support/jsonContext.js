/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{urlToObject as r}from"../../core/urlUtils.js";import t from"../Portal.js";function e(e){return{origin:"portal-item",url:r(e.itemUrl),portal:e.portal||t.getDefault(),portalItem:e,readResourcePaths:[]}}function o(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?r(e.itemUrl):null,portal:e.portal||t.getDefault(),portalItem:e}}export{e as createForItemRead,o as createForItemWrite};
