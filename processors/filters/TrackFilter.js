// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["../../core/declare","dojo/_base/array","dojo/_base/lang","../Filter"],function(t,e,r,i){return t([i],{declaredClass:"esri.processors.filters.TrackFilter",normalizeCtorArgs:function(t){return"string"==typeof t&&(t={trackIdField:t}),t},getDefaults:function(){return r.mixin(this.inherited(arguments),{idField:"id",parentField:"parent"})},trackIdField:null,idField:null,parentField:null,run:function(t){if(this.trackIdField&&t){var e,r,i,n=t.removed||[],d=t.added||[];if(n.length)for(r=0,i=n.length;r<i;r++)e=n[r],this._removeItemFromOutput(e,this.idField);d.length&&this.output.addMany(t.added.map(function(t){return t[this.parentField]=t.attributes[this.trackIdField],t}.bind(this)))}},_getIndexOfItem:function(t,e,r){var i=t[e],n=function(t){return t[e]===i};return r.findIndex(n,this)},_removeItemFromOutput:function(t,e){var r,i=t[e];return r=this._getIndexOfItem(t,e,this.output),-1!==r&&this.output.removeAt(r),{index:r,id:i,parent:t[this.parentField]}},_getItemsByParent:function(t,e){var r=function(e){return e[this.parentField]===t};return e.filter(r,this)},_getTracksAffectedByChanges:function(t){t=t||{};var r,i=t.removed||[],n=t.added||[],d=[];if(n=n.concat(i),n.length)for(var a=0,u=n.length;a<u;a++)r=n[a],-1===e.indexOf(d,r[this.parentField])&&d.push(r[this.parentField]);return d}})});