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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../graphic","../geometry/Polyline","./GraphicsLayer"],function(t,e,a,r,i,n,s,c){var o=t(null,{declaredClass:"esri.layers._TrackManager",constructor:function(t){this.layer=t,this.trackMap={},this.trackLineMap={}},initialize:function(t){this.map=t;var a=this.layer,r=a._getRenderer(),i=r&&r.trackRenderer;if("esriGeometryPoint"===a.geometryType){var n=this.container=new c._GraphicsLayer({id:a.id+"_tracks",_child:!0,visible:a.visible,minScale:a.minScale,maxScale:a.maxScale});n.loaded=!0,n.onLoad(n),n._setMap(t,a._div),n.setRenderer(i),a.on("visibility-change",e.hitch(this,function(t){this.container.setVisibility(t.visible),this.container.evaluateSuspension()})),a.on("scale-range-change",e.hitch(this,function(){this.container.setScaleRange(this.layer.minScale,this.layer.maxScale)}))}},addFeatures:function(t){var e=this.trackMap,r=this.layer,i=r._trackIdField,n=[];a.forEach(t,function(t){var r=t.attributes,s=r[i],c=e[s]=e[s]||[];c.push(t),-1===a.indexOf(n,s)&&n.push(s)});var s=r._startTimeField,c=r.objectIdField,o=function(t,e){var a=t.attributes[s],r=e.attributes[s];return a===r?t.attributes[c]<e.attributes[c]?-1:1:r>a?-1:1};a.forEach(n,function(t){e[t].sort(o)})},trimTracks:function(t){function e(t){for(var e=i[t]||[];e.length>s;)c.push(e.shift())}var r,i=this.trackMap,n=this.layer,s=n.maximumTrackPoints||0,c=[];if(!s)return c;if(t)a.forEach(t,function(t){e(t)});else for(r in i)i.hasOwnProperty(r)&&e(r);return c},drawTracks:function(t){function e(t){var e,a,o,u,f,p=r[t];if(f=h.trackLineMap[t],l.remove(f),delete h.trackLineMap[t],f=null,!p||p.length<2)return!1;for(a=[],e=p.length-1;e>=0;e--)o=p[e].geometry,o&&a.push([o.x,o.y]);u={},u[c]=t,a.length>1&&(f=new n(new s({paths:[a],spatialReference:i}),null,u),l.add(f),h.trackLineMap[t]=f)}var r,i,c,o,h=this,l=this.container;if(l)if(r=this.trackMap,i=this.map.spatialReference,c=this.layer._trackIdField,t)a.forEach(t,function(t){e(t)});else for(o in r)r.hasOwnProperty(o)&&e(o)},refreshTracks:function(t){function e(t){var e,a,r;if(i.drawTracks([t]),c&&c.latestObservationRenderer)for(e=n[t]||[],a=e.length,r=0;a>r;r++)s._repaint(e[r],null,!0)}var r,i=this,n=this.trackMap,s=this.layer,c=s._getRenderer();if(t)a.forEach(t,function(t){e(t)});else for(r in n)n.hasOwnProperty(r)&&e(r);this.moveLatestToFront()},moveLatestToFront:function(t){a.forEach(this.getLatestObservations(t),function(t){var e=t._shape;e&&e._moveToFront(),this._repaint(t,null,!0)},this.layer)},getLatestObservations:function(t){function e(t){var e=s[t];return e[e.length-1]}var r,i=[],n=this.layer._getRenderer(),s=this.trackMap;if(!n.latestObservationRenderer)return i;if(t)a.forEach(t,function(t){i.push(e(t))});else for(r in s)s.hasOwnProperty(r)&&i.push(e(r));return i},clearTracks:function(t){var e,r=this.getLatestObservations(t),i=this.container;t?a.forEach(t,function(t){delete this.trackMap[t],i&&(e=this.trackLineMap[t],i.remove(e),delete this.trackLineMap[t])},this):(this.trackMap={},this.trackLineMap={},i&&i.clear()),a.forEach(r,function(t){this._repaint(t,null,!0)},this.layer)},isLatestObservation:function(t){var e=this.layer._trackIdField,a=this.trackMap[t.attributes[e]];return a?a[a.length-1]===t:!1},destroy:function(){var t=this.container;t&&(t.clear(),t._unsetMap(this.map,this.layer._div)),this.map=this.layer=this.trackMap=this.container=null}});return r("extend-esri")&&e.setObject("layers._TrackManager",o,i),o});