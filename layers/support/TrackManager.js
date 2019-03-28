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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["../../core/declare","../../Graphic","../../geometry/Polyline","../GraphicsLayer"],function(t,e,r,a){return t(null,{declaredClass:"esri.layers.support.TrackManager",constructor:function(t){this.layer=t,this.trackMap={},this.trackLineMap={}},initialize:function(t){this.map=t;var e=this.layer,r=e._getRenderer(),i=r&&r.trackRenderer;if("point"===e.geometryType){var n=this.container=new a._GraphicsLayer({id:e.id+"_tracks",_child:!0});n.loaded=!0,n.onLoad(n),n._setMap(t,e._div),n.setRenderer(i)}},addFeatures:function(t){var e=this.trackMap,r=this.layer,a=r._trackIdField,i=[];t.forEach(function(t){var r=t.attributes,n=r[a];(e[n]=e[n]||[]).push(t),-1===i.indexOf(n)&&i.push(n)});var n=r._startTimeField,s=r.objectIdField,o=function(t,e){var r=t.attributes[n],a=e.attributes[n];return r===a?t.attributes[s]<e.attributes[s]?-1:1:r<a?-1:1};i.forEach(function(t){e[t].sort(o)})},trimTracks:function(t){function e(t){for(var e=a[t]||[];e.length>n;)s.push(e.shift())}var r,a=this.trackMap,i=this.layer,n=i.maximumTrackPoints||0,s=[];if(!n)return s;if(t)t.forEach(function(t){e(t)});else for(r in a)a.hasOwnProperty(r)&&e(r);return s},drawTracks:function(t){function a(t){var a,o,l,u,f,p=i[t];if(f=c.trackLineMap[t],h.remove(f),delete c.trackLineMap[t],f=null,!p||p.length<2)return!1;for(o=[],a=p.length-1;a>=0;a--)(l=p[a].geometry)&&o.push([l.x,l.y]);u={},u[s]=t,o.length>1&&(f=new e(new r({paths:[o],spatialReference:n}),null,u),h.add(f),c.trackLineMap[t]=f)}var i,n,s,o,c=this,h=this.container;if(h)if(i=this.trackMap,n=this.map.spatialReference,s=this.layer._trackIdField,t)t.forEach(function(t){a(t)});else for(o in i)i.hasOwnProperty(o)&&a(o)},refreshTracks:function(t){function e(t){var e,r,o;if(a.drawTracks([t]),s&&s.latestObservationRenderer)for(e=i[t]||[],r=e.length,o=0;o<r;o++)n._repaint(e[o],null,!0)}var r,a=this,i=this.trackMap,n=this.layer,s=n._getRenderer();if(t)t.forEach(function(t){e(t)});else for(r in i)i.hasOwnProperty(r)&&e(r);this.moveLatestToFront()},moveLatestToFront:function(t){this.getLatestObservations(t).forEach(function(t){var e=t._shape;e&&e._moveToFront(),this._repaint(t,null,!0)},this.layer)},getLatestObservations:function(t){function e(t){var e=n[t];return e[e.length-1]}var r,a=[],i=this.layer._getRenderer(),n=this.trackMap;if(!i.latestObservationRenderer)return a;if(t)t.forEach(function(t){a.push(e(t))});else for(r in n)n.hasOwnProperty(r)&&a.push(e(r));return a},clearTracks:function(t){var e,r=this.getLatestObservations(t),a=this.container;t?t.forEach(function(t){delete this.trackMap[t],a&&(e=this.trackLineMap[t],a.remove(e),delete this.trackLineMap[t])},this):(this.trackMap={},this.trackLineMap={},a&&a.removeAll()),r.forEach(function(t){this._repaint(t,null,!0)},this.layer)},isLatestObservation:function(t){var e=this.layer._trackIdField,r=this.trackMap[t.attributes[e]];return!!r&&r[r.length-1]===t},destroy:function(){var t=this.container;t&&(t.removeAll(),t._unsetMap(this.map,this.layer._div)),this.map=this.layer=this.trackMap=this.container=null}})});