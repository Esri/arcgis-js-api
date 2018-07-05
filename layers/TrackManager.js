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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/dom-construct","dojox/gfx","../kernel","../graphic","../geometry/Polyline","./GraphicsLayer"],function(e,t,r,a,i,n,s,o,c,h){var l=-1!==n.renderer.toLowerCase().indexOf("canvas"),f=e(null,{declaredClass:"esri.layers._TrackManager",constructor:function(e){this.layer=e,this.trackMap={},this.trackLineMap={}},initialize:function(e){this.map=e;var r=this.layer;this.createTracklineContainer()&&(r.on("visibility-change",t.hitch(this,function(e){this.container.setVisibility(e.visible),this.container.evaluateSuspension()})),r.on("scale-range-change",t.hitch(this,function(){this.container.setScaleRange(this.layer.minScale,this.layer.maxScale)})))},createTracklineContainer:function(){var e=this.layer;if("esriGeometryPoint"!==e.geometryType)return null;var t=this.map,r=e._getRenderer(),a=r&&r.trackRenderer,n=this.container=new h._GraphicsLayer({id:e.id+"_tracks",_child:!0,visible:e.visible,minScale:e.minScale,maxScale:e.maxScale});if(n.loaded=!0,n.onLoad(n),n._setMap(t,e._div),!l){var s=n._div.getNode(),o=e._div.getNode();s&&o&&i.place(s,o,"first")}return n.setRenderer(a),n},addFeatures:function(e){var t=this.trackMap,a=this.layer,i=a._trackIdField,n=[];r.forEach(e,function(e){var a=e.attributes,s=a[i];(t[s]=t[s]||[]).push(e),-1===r.indexOf(n,s)&&n.push(s)});var s=a._startTimeField,o=a.objectIdField,c=function(e,t){var r=e.attributes[s],a=t.attributes[s];return r===a?e.attributes[o]<t.attributes[o]?-1:1:r<a?-1:1};r.forEach(n,function(e){t[e].sort(c)})},trimTracks:function(e){function t(e){for(var t=i[e]||[];t.length>s;)o.push(t.shift())}var a,i=this.trackMap,n=this.layer,s=n.maximumTrackPoints||0,o=[];if(!s)return o;if(e)r.forEach(e,function(e){t(e)});else for(a in i)i.hasOwnProperty(a)&&t(a);return o},drawTracks:function(e){function t(e){var t,r,s,f,u,d=a[e];if(u=h.trackLineMap[e],l.remove(u),delete h.trackLineMap[e],u=null,!d||d.length<2)return!1;for(r=[],t=d.length-1;t>=0;t--)(s=d[t].geometry)&&r.push([s.x,s.y]);f={},f[n]=e,r.length>1&&(u=new o(new c({paths:[r],spatialReference:i}),null,f),l.add(u),h.trackLineMap[e]=u)}var a,i,n,s,h=this,l=this.container;if(l)if(a=this.trackMap,i=this.map.spatialReference,n=this.layer._trackIdField,e)r.forEach(e,function(e){t(e)});else for(s in a)a.hasOwnProperty(s)&&t(s)},refreshTracks:function(e){function t(e){var t,r,a;if(i.drawTracks([e]),o&&o.latestObservationRenderer)for(t=n[e]||[],r=t.length,a=0;a<r;a++)s._repaint(t[a],null,!0)}var a,i=this,n=this.trackMap,s=this.layer,o=s._getRenderer();if(e)r.forEach(e,function(e){t(e)});else for(a in n)n.hasOwnProperty(a)&&t(a);this.moveLatestToFront()},moveLatestToFront:function(e){r.forEach(this.getLatestObservations(e),function(e){var t=e._shape;t&&t._moveToFront(),this._repaint(e,null,!0)},this.layer)},getLatestObservations:function(e){function t(e){var t=s[e];return t[t.length-1]}var a,i=[],n=this.layer._getRenderer(),s=this.trackMap;if(!n.latestObservationRenderer)return i;if(e)r.forEach(e,function(e){i.push(t(e))});else for(a in s)s.hasOwnProperty(a)&&i.push(t(a));return i},clearTracks:function(e){var t,a,i=this.getLatestObservations(e),n=this.container,s=this.trackMap;if(e)r.forEach(e,function(e){delete this.trackMap[e],n&&(a=this.trackLineMap[e],n.remove(a),delete this.trackLineMap[e])},this);else{if(n)for(t in s)a=this.trackLineMap[t],n.remove(a);this.trackMap={},this.trackLineMap={}}r.forEach(i,function(e){this._repaint(e,null,!0)},this.layer)},isLatestObservation:function(e){var t=this.layer._trackIdField,r=this.trackMap[e.attributes[t]];return!!r&&r[r.length-1]===e},destroy:function(){var e=this.container;e&&(e.clear(),e._unsetMap(this.map,this.layer._div)),this.map=this.layer=this.trackMap=this.container=null}});return a("extend-esri")&&t.setObject("layers._TrackManager",f,s),f});