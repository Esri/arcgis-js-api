// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/utils/ProjectionUtil"],(function(e,n,r,i,t){function o(e,n){return t.projectGeometries(e,n)}var s=e(null,{_pendingInfos:null,_isBusy:!1,constructor:function(){this._pendingInfos=[]},addForProjection:function(e,r){if(this._isBusy)throw new Error("Can't interrupt the current projection process.");var i=e&&e.geometry||e,t=new n;return this._pendingInfos.push({geom:i,mapOrSR:r,dfd:t,index:this._pendingInfos.length}),t.promise},project:function(){var e=this;if(this._isBusy)throw new Error("Can't interrupt the current projection process.");this._isBusy=!0;var n=[],s={};this._pendingInfos.forEach((function(e){n.push(e.dfd);var r=e.geom.type+";"+e.geom.spatialReference.wkid+";"+t.getSpatialReference(e.mapOrSR).wkid,i=s[r]=s[r]||{geoms:[],indexMap:{},mapOrSR:e.mapOrSR};i.geoms.push(e.geom),i.indexMap[i.geoms.length-1]=e.index})),this._pendingInfos.length=0;var c=[],a=[];function p(e){var i=s[e];return r(o(i.geoms,i.mapOrSR),(function(e){e.forEach((function(e,r){var t=i.indexMap[r];a[t]=e,n[t].resolve(e)}))}))}for(var u in s)c.push(p(u));return i(c).then((function(){return e._isBusy=!1,a}))}});return s.needProject=function(e,n){var r=e&&e.geometry||e;return r.spatialReference&&r.spatialReference.wkid!==t.getSpatialReference(n).wkid},s.projectGeometries=o,s}));