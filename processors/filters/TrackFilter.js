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

define(["../../core/declare","dojo/_base/array","dojo/_base/lang","../Filter"],function(t,e,r,n){var i=t([n],{declaredClass:"esri.processors.filters.TrackFilter",normalizeCtorArgs:function(t){return"string"==typeof t&&(t={trackIdField:t}),t},getDefaults:function(){return r.mixin(this.inherited(arguments),{idField:"id",parentField:"parent"})},trackIdField:null,idField:null,parentField:null,run:function(t){if(this.trackIdField&&t){var e,r,n,i,d=t.removed||[],a=t.added||[];if(d.length)for(n=0,i=d.length;i>n;n++)e=d[n],r=this._removeItemFromOutput(e,this.idField);a.length&&this.output.addMany(t.added.map(function(t){return t[this.parentField]=t.attributes[this.trackIdField],t}.bind(this)))}},_getIndexOfItem:function(t,e,r){var n=t[e],i=function(t){return t[e]===n},d=r.findIndex(i,this);return d},_removeItemFromOutput:function(t,e){var r,n=t[e];return r=this._getIndexOfItem(t,e,this.output),-1!==r&&this.output.removeAt(r),{index:r,id:n,parent:t[this.parentField]}},_getItemsByParent:function(t,e){var r,n=function(e){return e[this.parentField]===t};return r=e.filter(n,this)},_getTracksAffectedByChanges:function(t){t=t||{};var r,n=t.removed||[],i=t.added||[],d=[];if(i=i.concat(n),i.length)for(var a=0,u=i.length;u>a;a++)r=i[a],-1===e.indexOf(d,r[this.parentField])&&d.push(r[this.parentField]);return d}});return i});