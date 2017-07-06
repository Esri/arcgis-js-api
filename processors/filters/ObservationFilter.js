// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["../../core/declare","dojo/_base/array","dojo/_base/lang","./TrackFilter"],function(t,e,r,i){var n=t([i],{declaredClass:"esri.processors.filters.ObservationFilter",getDefaults:function(){return r.mixin(this.inherited(arguments),{observationType:n.CURRENT})},observationType:null,run:function(t){this.trackIdField&&t&&(this.observationType===n.CURRENT?this._outputCurrentObservations(t):this._outputOtherObservations(t))},_outputCurrentObservations:function(t){var e,r,i,n;n=this._getTracksAffectedByChanges(t);var s;for(r=0,i=n.length;i>r;r++){s=this._getItemsByParent(n[r],this.output);for(var o=0,a=s.length;a>o;o++)e=s.getItemAt(o),this.output.remove(e);s=this._getItemsByParent(n[r],this.input),s&&s.length&&this.output.add(s.getItemAt(s.length-1))}},_outputOtherObservations:function(t){var r,i,n,s=t.removed||[],o=t.added||[],a=[];if(o=o.concat(s),o.length)for(i=0,n=o.length;n>i;i++)r=o[i],-1===e.indexOf(a,r[this.parentField])&&a.push(r[this.parentField]);var u;for(i=0,n=a.length;n>i;i++){u=this._getItemsByParent(a[i],this.output);for(var h=0,g=u.length;g>h;h++)r=u.getItemAt(h),this.output.remove(r);if(u=this._getItemsByParent(a[i],this.input),u&&u.length>1)for(var l=0,d=u.length;d-1>l;l++)this.output.add(u.getItemAt(l))}}});return r.mixin(n,{CURRENT:"current",OTHER:"other"}),n});