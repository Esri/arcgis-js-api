// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","./kernel"],(function(e,n,r,i,t){var a={_serializeLayerDefinitions:function(e,i){var t,a=[],o=/[:;]/;if(e&&(n.forEach(e,(function(e,n){e&&(a.push([n,e]),!i&&o.test(e)&&(i=!0))})),a.length>0))return i?(t={},n.forEach(a,(function(e){t[e[0]]=e[1]})),t=r.toJson(t)):(t=[],n.forEach(a,(function(e){t.push(e[0]+":"+e[1])})),t=t.join(";")),t;return null},_serializeTimeOptions:function(e,i){if(e){var t=[];return n.forEach(e,(function(e,a){if(e){var o=e.toJson();i&&-1!==n.indexOf(i,a)&&(o.useTime=!1),t.push('"'+a+'":'+r.toJson(o))}})),t.length?"{"+t.join(",")+"}":void 0}},_getVisibleLayers:function(e,r){var i,t,a,o=[];if(!e)return o;if(r)for(o=r.concat(),a=0;a<e.length;a++)i=e[a],t=n.indexOf(e,i.id),i.subLayerIds&&t>-1&&(o.splice(t,1),o=o.concat(i.subLayerIds));else o=this._getDefaultVisibleLayers(e);return o},_getDefaultVisibleLayers:function(e){var r,i=[];if(!e)return i;for(r=0;r<e.length;r++)e[r].parentLayerId>=0&&-1===n.indexOf(i,e[r].parentLayerId)&&n.some(e,(function(n){return n.id===e[r].parentLayerId}))||e[r].defaultVisibility&&i.push(e[r].id);return i},_getLayersForScale:function(e,r){var i,t=[];if(e>0&&r)for(i=0;i<r.length;i++)if(!(r[i].parentLayerId>=0&&-1===n.indexOf(t,r[i].parentLayerId)&&n.some(r,(function(e){return e.id===r[i].parentLayerId})))&&r[i].id>=0){var a=!0,o=r[i].maxScale,s=r[i].minScale;(o>0||s>0)&&(o>0&&s>0?a=o<=e&&e<=s:o>0?a=o<=e:s>0&&(a=e<=s)),a&&t.push(r[i].id)}return t}};return i("extend-esri")&&e.mixin(t,a),a}));