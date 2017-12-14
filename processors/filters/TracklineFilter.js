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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["../../core/declare","../../Graphic","../../geometry/Polyline","./TrackFilter"],function(e,t,r,i){var n=e([i],{declaredClass:"esri.processors.filters.TracklineFilter",normalizeCtorArgs:function(e){return"string"==typeof e&&(e={trackIdField:e}),e},nextLineId:1,run:function(e){if(this.trackIdField&&e){var i,n,a,s,o,l,c;i=this._getTracksAffectedByChanges(e);for(var f=0,g=i.length;g>f;f++){var h,d;if(n=i[f],a=this._getItemsByParent(n,this.output))for(h=0,d=a.length;d>h;h++)o=a.getItemAt(h),this.output.remove(o);if(a=this._getItemsByParent(n,this.input),a.length>1){for(c=new r,l=[],h=0,d=a.length;d>h;h++)s=a.getItemAt(h),0===h&&(c.spatialReference=s.geometry.spatialReference),l.push(s.geometry);c.addPath(l);var u=new t({geometry:c});u.parent=n,this.output.add(u)}}}}});return n});