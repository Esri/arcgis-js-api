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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../../support/earthUtils","../../support/projectionUtils","../../support/intersectionUtils","../../lib/glMatrix"],function(t,i,e,n,r,s){var o=s.vec3d,u=s.vec4d,a=-.3*e.earthRadius,h=.5*Math.PI,l=h/Math.PI*180,p=h*e.earthRadius,c=.9*e.earthRadius,d=function(){function t(){this.extent=new Array(4),this.planes=new Array(4),this.maxSpan=0,this.center={origin:o.create(),direction:o.create()};for(var t=0;4>t;t++)this.extent[t]={origin:o.create(),direction:o.create(),cap:{next:null,direction:o.create()}},this.planes[t]=u.create();this.planes[4]=u.create()}return t.prototype.update=function(t,i,e,r,s){if(o.set3(t[0],t[1],a,this.extent[0].origin),o.set3(t[2],t[1],a,this.extent[1].origin),o.set3(t[2],t[3],a,this.extent[2].origin),o.set3(t[0],t[3],a,this.extent[3].origin),!s)for(var u=0;4>u;u++)n.vectorToVector(this.extent[u].origin,r,this.extent[u].origin,e);o.add(this.extent[0].origin,this.extent[2].origin,this.center.origin),o.scale(this.center.origin,.5),i(this.center.origin,this.center.direction);for(var u=0;4>u;u++){var h=this.extent[u];i(h.origin,h.direction);var l=this.extent[3===u?0:u+1];h.cap.next=l.origin,o.direction(l.origin,h.origin,h.cap.direction),o.cross(this.extent[u].cap.direction,this.extent[u].direction,this.planes[u]),this.planes[u][3]=-o.dot(this.planes[u],this.extent[u].origin)}this.maxSpan=Math.max(Math.abs(t[0]-t[2]),Math.abs(t[1]-t[3]))},t.prototype.isVisibleInFrustumGlobal=function(t){if(o.dot(this.center.direction,t.direction)<0)return!0;for(var i=0;4>i;i++){var e=this.extent[i];if(o.dot(e.direction,t.direction)<0)return!0}return!1},t.prototype.isVisibleInFrustum=function(t,i){if("global"===t.viewingMode){var e=t.spatialReference.isWGS84?l:p;if(this.maxSpan>e)return!0;if(i.altitude()>=c)return this.isVisibleInFrustumGlobal(i)}for(var n=0;n<this.extent.length;n++){var s=this.extent[n];if(r.frustumRay(i.planes,s.origin,null,s.direction))return!0;if(r.frustumLineSegment(i.planes,s.origin,s.cap.next,s.cap.direction))return!0}for(var n=0;n<i.lines.length;n++){var o=i.lines[n];if(r.frustumLineSegment(this.planes,o.origin,o.endpoint,o.direction))return!0}return!1},t}(),f=function(){function t(){this.frustumVisibility=!0,this.frustumVisibilityDirty=!0,this.extent=null,this.extentEngine=new d,this.extentEngineDirty=!0,this.renderSREqualsViewSR=null,this.layerView=null}return t.prototype.initialize=function(t){this.layerView=t;var i=t.view.spatialReference,e=t.view.renderSpatialReference;this.renderSREqualsViewSR=e.equals(i)},t.prototype.destroy=function(){this.layerView=null,this.extent=null,this.extentEngine=null},t.prototype.needsIdleUpdate=function(){return this.frustumVisibilityDirty},t.prototype.canResume=function(){return this.frustumVisibility},t.prototype.setExtent=function(t){this.extent=t,this.extentEngineDirty=!0,this.frustumVisibilityDirty=!0},t.prototype.viewChange=function(){this.frustumVisibilityDirty=!0},t.prototype.idleUpdate=function(t){t.done()||this.frustumVisibilityDirty&&(this.updateSuspendFrustumVisible(),this.frustumVisibilityDirty=!1)},t.prototype.updateExtentEngine=function(){if(this.extentEngineDirty){this.extentEngineDirty=!1;var t=this.layerView.view,i=t.renderCoordsHelper.worldUpAtPosition;this.extentEngine.update(this.extent,i,t.renderSpatialReference,t.spatialReference,this.renderSREqualsViewSR)}},t.prototype.updateSuspendFrustumVisible=function(){if(!this.extent)return void(this.frustumVisibility=!0);this.updateExtentEngine();var t=this.layerView.view.getFrustum(),i=this.extentEngine.isVisibleInFrustum(this.layerView.view,t);i!==this.frustumVisibility&&(this.frustumVisibility=i,this.layerView._notifySuspendedChange())},t}();return f});