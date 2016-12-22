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

define(["../../core/declare","dojo/_base/array","dojo/_base/lang","./TrackFilter"],function(t,e,r,n){var i=t([n],{declaredClass:"esri.processors.ObservationFilter",getDefaults:function(){return r.mixin(this.inherited(arguments),{observationType:i.CURRENT})},observationType:null,run:function(t){this.trackIdField&&t&&(this.observationType===i.CURRENT?this._outputCurrentObservations(t):this._outputOtherObservations(t))},_outputCurrentObservations:function(t){var e,r,n,i;i=this._getTracksAffectedByChanges(t);var s;for(r=0,n=i.length;n>r;r++){s=this._getItemsByParent(i[r],this.output);for(var o=0,a=s.length;a>o;o++)e=s.getItemAt(o),this.output.remove(e);s=this._getItemsByParent(i[r],this.input),s&&s.length&&this.output.add(s.getItemAt(s.length-1))}},_outputOtherObservations:function(t){var r,n,i,s=t.removed||[],o=t.added||[],a=[];if(o=o.concat(s),o.length)for(n=0,i=o.length;i>n;n++)r=o[n],-1===e.indexOf(a,r[this.parentField])&&a.push(r[this.parentField]);var u;for(n=0,i=a.length;i>n;n++){u=this._getItemsByParent(a[n],this.output);for(var h=0,g=u.length;g>h;h++)r=u.getItemAt(h),this.output.remove(r);if(u=this._getItemsByParent(a[n],this.input),u&&u.length>1)for(var l=0,d=u.length;d-1>l;l++)this.output.add(u.getItemAt(l))}}});return r.mixin(i,{CURRENT:"current",OTHER:"other"}),i});