// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/Deferred","dojo/when","dojo/promise/all","esri/dijit/geoenrichment/utils/ProjectionUtil"],function(e,n,r,t,i){function o(e,n){return i.projectGeometries(e,n)}function s(e,n){var r=e&&e.geometry||e;return r.spatialReference&&r.spatialReference.wkid!==i.getSpatialReference(n).wkid}var a=e(null,{_pendingInfos:null,_isBusy:!1,constructor:function(){this._pendingInfos=[]},addForProjection:function(e,r){if(this._isBusy)throw new Error("Can't interrupt the current projection process.");var t=e&&e.geometry||e,i=new n;return this._pendingInfos.push({geom:t,mapOrSR:r,dfd:i,index:this._pendingInfos.length}),i.promise},project:function(){var e=this;if(this._isBusy)throw new Error("Can't interrupt the current projection process.");this._isBusy=!0;var n=[],s={};this._pendingInfos.forEach(function(e){n.push(e.dfd);var r=e.geom.type+";"+e.geom.spatialReference.wkid+";"+i.getSpatialReference(e.mapOrSR).wkid,t=s[r]=s[r]||{geoms:[],indexMap:{},mapOrSR:e.mapOrSR};t.geoms.push(e.geom),t.indexMap[t.geoms.length-1]=e.index}),this._pendingInfos.length=0;var a=[],p=[];for(var u in s)a.push(function(e){var t=s[e];return r(o(t.geoms,t.mapOrSR),function(e){e.forEach(function(e,r){var i=t.indexMap[r];p[i]=e,n[i].resolve(e)})})}(u));return t(a).then(function(){return e._isBusy=!1,p})}});return a.needProject=s,a.projectGeometries=o,a});