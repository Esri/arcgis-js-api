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

define(["../../core/declare","dojo/_base/array","../../Graphic","../../geometry/Polyline","../GraphicsLayer"],function(t,e,r,a,i){var n=t(null,{declaredClass:"esri.layers.TrackManager",constructor:function(t){this.layer=t,this.trackMap={},this.trackLineMap={}},initialize:function(t){this.map=t;var e=this.layer,r=e._getRenderer(),a=r&&r.trackRenderer;if("point"===e.geometryType){var n=this.container=new i._GraphicsLayer({id:e.id+"_tracks",_child:!0});n.loaded=!0,n.onLoad(n),n._setMap(t,e._div),n.setRenderer(a)}},addFeatures:function(t){var r=this.trackMap,a=this.layer,i=a._trackIdField,n=[];e.forEach(t,function(t){var a=t.attributes,s=a[i],o=r[s]=r[s]||[];o.push(t),-1===e.indexOf(n,s)&&n.push(s)});var s=a._startTimeField,o=a.objectIdField,c=function(t,e){var r=t.attributes[s],a=e.attributes[s];return r===a?t.attributes[o]<e.attributes[o]?-1:1:a>r?-1:1};e.forEach(n,function(t){r[t].sort(c)})},trimTracks:function(t){function r(t){for(var e=i[t]||[];e.length>s;)o.push(e.shift())}var a,i=this.trackMap,n=this.layer,s=n.maximumTrackPoints||0,o=[];if(!s)return o;if(t)e.forEach(t,function(t){r(t)});else for(a in i)i.hasOwnProperty(a)&&r(a);return o},drawTracks:function(t){function i(t){var e,i,c,f,u,p=n[t];if(u=h.trackLineMap[t],l.remove(u),delete h.trackLineMap[t],u=null,!p||p.length<2)return!1;for(i=[],e=p.length-1;e>=0;e--)c=p[e].geometry,c&&i.push([c.x,c.y]);f={},f[o]=t,i.length>1&&(u=new r(new a({paths:[i],spatialReference:s}),null,f),l.add(u),h.trackLineMap[t]=u)}var n,s,o,c,h=this,l=this.container;if(l)if(n=this.trackMap,s=this.map.spatialReference,o=this.layer._trackIdField,t)e.forEach(t,function(t){i(t)});else for(c in n)n.hasOwnProperty(c)&&i(c)},refreshTracks:function(t){function r(t){var e,r,a;if(i.drawTracks([t]),o&&o.latestObservationRenderer)for(e=n[t]||[],r=e.length,a=0;r>a;a++)s._repaint(e[a],null,!0)}var a,i=this,n=this.trackMap,s=this.layer,o=s._getRenderer();if(t)e.forEach(t,function(t){r(t)});else for(a in n)n.hasOwnProperty(a)&&r(a);this.moveLatestToFront()},moveLatestToFront:function(t){e.forEach(this.getLatestObservations(t),function(t){var e=t._shape;e&&e._moveToFront(),this._repaint(t,null,!0)},this.layer)},getLatestObservations:function(t){function r(t){var e=s[t];return e[e.length-1]}var a,i=[],n=this.layer._getRenderer(),s=this.trackMap;if(!n.latestObservationRenderer)return i;if(t)e.forEach(t,function(t){i.push(r(t))});else for(a in s)s.hasOwnProperty(a)&&i.push(r(a));return i},clearTracks:function(t){var r,a=this.getLatestObservations(t),i=this.container;t?e.forEach(t,function(t){delete this.trackMap[t],i&&(r=this.trackLineMap[t],i.remove(r),delete this.trackLineMap[t])},this):(this.trackMap={},this.trackLineMap={},i&&i.removeAll()),e.forEach(a,function(t){this._repaint(t,null,!0)},this.layer)},isLatestObservation:function(t){var e=this.layer._trackIdField,r=this.trackMap[t.attributes[e]];return r?r[r.length-1]===t:!1},destroy:function(){var t=this.container;t&&(t.removeAll(),t._unsetMap(this.map,this.layer._div)),this.map=this.layer=this.trackMap=this.container=null}});return n});