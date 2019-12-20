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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../graphic","../geometry/Point","../geometry/Polyline","./TrackManager"],function(e,r,t,a,i,n,s,h,o){var c=e([o],{declaredClass:"esri.layers._StreamTrackManager",constructor:function(e){this.inherited(arguments);var r=e.getMap(),t=r.spatialReference;this.isWebMercator=t.isWebMercator(),this.canWrap=t._isWrappable(),this.wrapThreshold=this.isWebMercator?20037508.342788905:180},initialize:function(e){this.inherited(arguments)},addFeatures:function(e,r){var a,i,n,s,h,o,c={},l={};if(r)return this.inherited(arguments),c;a=this.trackMap,i=this.layer,n=i._trackIdField,s=i.maximumTrackPoints||0,t.forEach(e,function(e){var r=e.attributes,t=r[n];e.visible&&(l[t]||(l[t]=[]),l[t].push(e))});for(o in l)l.hasOwnProperty(o)&&(h=function(e,r){var t,i,n,h,o;for(a[e]||(a[e]=[]),t=a[e],s>0&&(r.length>s&&r.splice(0,r.length-s),(h=r.length+t.length)>s&&(i=t.splice(0,h-s))),n=r,h=r.length,o=0;o<h;o+=1)t.push(r[o]);return{deletes:i,adds:n}}(o,l[o]),c[o]=h);return c},removeFeatures:function(e){var r=[],a=this.layer.objectIdField,i=this.layer._trackIdField;e&&(e.length,t.forEach(e,function(e){var n,s,h,o,c;if(h=e.attributes[i],s=e.attributes[a],o=this.trackMap[h])for(n=0;n<o.length;n+=1)if(c=o[n],c.attributes[a]===s){this.trackMap[h].splice(n,1),-1===t.indexOf(h)&&r.push(h);break}},this),e.length>0&&this.refreshTracks(r))},drawTracks:function(e){function r(e){var r=a[e],t=r&&r.length>1,c=l.trackLineMap[e];if(c&&!t&&(f.remove(c),delete l.trackLineMap[e],c=null),!t)return!1;for(var p,u,d=[],g=[],k=r.length,y=0;y<k;y++)if(u=r[y].geometry){u=u.normalize();var v=u.x,M=0,b=!1;p&&l.canWrap&&(M=v-p.x,Math.abs(M)>l.wrapThreshold&&(b=!0)),b?(g.push([l.getWrappedX(v),u.y]),d.push(g.slice(0)),g=[[v,u.y]]):g.push([v,u.y]),p=new s(v,u.y,i)}g.length>1&&d.push(g);var m={};if(m[o]=e,d.length)if(c){for(var w=c.geometry;w.paths.length;)w.removePath(w.paths.length-1);d.forEach(function(e){w.addPath(e)}),c.setGeometry(w)}else c=new n(new h({paths:d,spatialReference:i}),null,m),f.add(c),l.trackLineMap[e]=c}var a,i,o,c,l=this,f=this.container;if(f)if(a=this.trackMap,i=this.map.spatialReference,o=this.layer._trackIdField,e)t.forEach(e,function(e){r(e)});else for(c in a)a.hasOwnProperty(c)&&r(c)},refreshTracks:function(e){function r(e){var r,t,a;for(r=n[e]||[],t=r.length,a=0;a<t;a++)s._repaint(r[a],null,!0)}var a,i=this,n=this.trackMap,s=this.layer;if(i.drawTracks(e),e)t.forEach(e,function(e){r(e)});else for(a in n)n.hasOwnProperty(a)&&r(a)},getLatestObservations:function(){var e,r,t=this.trackMap,a=[];for(e in t)t.hasOwnProperty(e)&&(r=t[e],a.push(r[r.length-1]));return a},destroy:function(){this.inherited(arguments),this.trackLineMap=null},getWrappedX:function(e){var r=this.isWebMercator,t=r?20037508.342788905:180,a=r?-20037508.342788905:-180;return(e>0?a:t)-((e>0?t:a)-e)}});return a("extend-esri")&&r.setObject("layers._StreamTrackManager",c,i),c});