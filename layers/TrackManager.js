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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/dom-construct","dojox/gfx","../kernel","../graphic","../geometry/Polyline","./GraphicsLayer"],(function(e,t,r,a,i,n,s,o,c,h){var l=-1!==n.renderer.toLowerCase().indexOf("canvas"),f=e(null,{declaredClass:"esri.layers._TrackManager",constructor:function(e){this.layer=e,this.trackMap={},this.trackLineMap={}},initialize:function(e){this.map=e;var r=this.layer;this.createTracklineContainer()&&(this._handles=[r.on("visibility-change",t.hitch(this,(function(e){this.container.setVisibility(e.visible),this.container.evaluateSuspension()}))),r.on("scale-range-change",t.hitch(this,(function(){this.container.setScaleRange(this.layer.minScale,this.layer.maxScale)})))])},createTracklineContainer:function(){var e=this.layer;if("esriGeometryPoint"!==e.geometryType)return null;var t=this.map,r=e._getRenderer(),a=r&&r.trackRenderer,n=this.container=new h._GraphicsLayer({id:e.id+"_tracks",_child:!0,visible:e.visible,minScale:e.minScale,maxScale:e.maxScale});if(n.loaded=!0,n.onLoad(n),n._setMap(t,e._div),!l){var s=n._div.getNode(),o=e._div.getNode();s&&o&&i.place(s,o,"first")}return n.setRenderer(a),n},addFeatures:function(e){var t=this.trackMap,a=this.layer,i=a._trackIdField,n=[];r.forEach(e,(function(e){var a=e.attributes[i];(t[a]=t[a]||[]).push(e),-1===r.indexOf(n,a)&&n.push(a)}));var s=a._startTimeField,o=a.objectIdField,c=function(e,t){var r=e.attributes[s],a=t.attributes[s];return r===a?e.attributes[o]<t.attributes[o]?-1:1:r<a?-1:1};r.forEach(n,(function(e){t[e].sort(c)}))},trimTracks:function(e){var t,a=this.trackMap,i=this.layer.maximumTrackPoints||0,n=[];function s(e){for(var t=a[e]||[];t.length>i;)n.push(t.shift())}if(!i)return n;if(e)r.forEach(e,(function(e){s(e)}));else for(t in a)a.hasOwnProperty(t)&&s(t);return n},drawTracks:function(e){var t,a,i,n,s=this,h=this.container;if(h)if(t=this.trackMap,a=this.map.spatialReference,i=this.layer._trackIdField,e)r.forEach(e,(function(e){l(e)}));else for(n in t)t.hasOwnProperty(n)&&l(n);function l(e){var r,n,l,f,u,d=t[e];if(u=s.trackLineMap[e],h.remove(u),delete s.trackLineMap[e],u=null,!d||d.length<2)return!1;for(n=[],r=d.length-1;r>=0;r--)(l=d[r].geometry)&&n.push([l.x,l.y]);(f={})[i]=e,n.length>1&&(u=new o(new c({paths:[n],spatialReference:a}),null,f),h.add(u),s.trackLineMap[e]=u)}},refreshTracks:function(e){var t,a=this,i=this.trackMap,n=this.layer,s=n._getRenderer();function o(e){var t,r,o;if(a.drawTracks([e]),s&&s.latestObservationRenderer)for(r=(t=i[e]||[]).length,o=0;o<r;o++)n._repaint(t[o],null,!0)}if(e)r.forEach(e,(function(e){o(e)}));else for(t in i)i.hasOwnProperty(t)&&o(t);this.moveLatestToFront()},moveLatestToFront:function(e){r.forEach(this.getLatestObservations(e),(function(e){var t=e._shape;t&&t._moveToFront(),this._repaint(e,null,!0)}),this.layer)},getLatestObservations:function(e){var t,a=[],i=this.layer._getRenderer(),n=this.trackMap;if(!i.latestObservationRenderer)return a;function s(e){var t=n[e];return t[t.length-1]}if(e)r.forEach(e,(function(e){a.push(s(e))}));else for(t in n)n.hasOwnProperty(t)&&a.push(s(t));return a},clearTracks:function(e){var t,a,i=this.getLatestObservations(e),n=this.container,s=this.trackMap;if(e)r.forEach(e,(function(e){delete this.trackMap[e],n&&(a=this.trackLineMap[e],n.remove(a),delete this.trackLineMap[e])}),this);else{if(n)for(t in s)a=this.trackLineMap[t],n.remove(a);this.trackMap={},this.trackLineMap={}}r.forEach(i,(function(e){this._repaint(e,null,!0)}),this.layer)},isLatestObservation:function(e){var t=this.layer._trackIdField,r=this.trackMap[e.attributes[t]];return!!r&&r[r.length-1]===e},destroy:function(){r.forEach(this._handles,(function(e){e.remove()}));var e=this.container;e&&(e.clear(),e._unsetMap(this.map,this.layer._div)),this.map=this.layer=this.trackMap=this.container=null}});return a("extend-esri")&&t.setObject("layers._TrackManager",f,s),f}));