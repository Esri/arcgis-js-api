// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dojo/_base/array"],function(e){var r={_serializeLayerDefinitions:function(r){var n=[],i=!1,t=/[:;]/;if(r&&(e.forEach(r,function(e,r){e&&(n.push([r,e]),!i&&t.test(e)&&(i=!0))}),n.length>0)){var a;return i?(a={},e.forEach(n,function(e){a[e[0]]=e[1]}),a=JSON.stringify(a)):(a=[],e.forEach(n,function(e){a.push(e[0]+":"+e[1])}),a=a.join(";")),a}return null},_serializeTimeOptions:function(r,n){if(r){var i=[];return e.forEach(r,function(r,t){if(r){var a=r.toJSON();n&&-1!==e.indexOf(n,t)&&(a.useTime=!1),i.push('"'+t+'":'+JSON.stringify(a))}}),i.length?"{"+i.join(",")+"}":void 0}},_getVisibleLayers:function(r,n){var i,t,a,f=[];if(!r)return f;if(n)for(f=n.concat(),a=0;a<r.length;a++)i=r[a],t=e.indexOf(r,i.id),i.subLayerIds&&t>-1&&(f.splice(t,1),f=f.concat(i.subLayerIds));else f=this._getDefaultVisibleLayers(r);return f},_getDefaultVisibleLayers:function(r){var n,i=[];if(!r)return i;for(n=0;n<r.length;n++)r[n].parentLayerId>=0&&-1===e.indexOf(i,r[n].parentLayerId)&&e.some(r,function(e){return e.id===r[n].parentLayerId})||r[n].defaultVisibility&&i.push(r[n].id);return i},_getLayersForScale:function(r,n){var i=[];if(r>0&&n){var t;for(t=0;t<n.length;t++)if(!(n[t].parentLayerId>=0&&-1===e.indexOf(i,n[t].parentLayerId)&&e.some(n,function(e){return e.id===n[t].parentLayerId}))&&n[t].id>=0){var a=!0,f=n[t].maxScale,u=n[t].minScale;(f>0||u>0)&&(f>0&&u>0?a=r>=f&&u>=r:f>0?a=r>=f:u>0&&(a=u>=r)),a&&i.push(n[t].id)}}return i}};return r});