// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../graphic","../geometry/Point","../geometry/Polyline","./TrackManager"],(function(e,r,t,a,i,n,s,h,o){var c=e([o],{declaredClass:"esri.layers._StreamTrackManager",constructor:function(e){this.inherited(arguments);var r=e.getMap(),t=r.spatialReference;this.isWebMercator=t.isWebMercator(),this.canWrap=t._isWrappable(),this.wrapThreshold=this.isWebMercator?20037508.342788905:180},initialize:function(e){this.inherited(arguments)},addFeatures:function(e,r){var a,i,n,s,h,o,c={},l={};if(r)return this.inherited(arguments),c;function f(e,r){var t,i,n,h,o;for(a[e]||(a[e]=[]),t=a[e],s>0&&(r.length>s&&r.splice(0,r.length-s),(h=r.length+t.length)>s&&(i=t.splice(0,h-s))),n=r,h=r.length,o=0;o<h;o+=1)t.push(r[o]);return{deletes:i,adds:n}}for(o in a=this.trackMap,i=this.layer,n=i._trackIdField,s=i.maximumTrackPoints||0,t.forEach(e,(function(e){var r=e.attributes[n];e.visible&&(l[r]||(l[r]=[]),l[r].push(e))})),l)l.hasOwnProperty(o)&&(h=f(o,l[o]),c[o]=h);return c},removeFeatures:function(e){var r=[],a=this.layer.objectIdField,i=this.layer._trackIdField;e&&(e.length,t.forEach(e,(function(e){var n,s,h,o;if(h=e.attributes[i],s=e.attributes[a],o=this.trackMap[h])for(n=0;n<o.length;n+=1)if(o[n].attributes[a]===s){this.trackMap[h].splice(n,1),-1===t.indexOf(h)&&r.push(h);break}}),this),e.length>0&&this.refreshTracks(r))},drawTracks:function(e){var r,a,i,o,c=this,l=this.container;if(l)if(r=this.trackMap,a=this.map.spatialReference,i=this.layer._trackIdField,e)t.forEach(e,(function(e){f(e)}));else for(o in r)r.hasOwnProperty(o)&&f(o);function f(e){var t,o=r[e],f=o&&o.length>1,p=c.trackLineMap[e];if(p&&!f&&(l.remove(p),delete c.trackLineMap[e],p=null),!f)return!1;for(var u,d=[],g=[],k=o.length,y=0;y<k;y++)if(u=o[y].geometry){var v=(u=u.normalize()).x,M=0,b=!1;t&&c.canWrap&&(M=v-t.x,Math.abs(M)>c.wrapThreshold&&(b=!0)),b?(g.push([c.getWrappedX(v),u.y]),d.push(g.slice(0)),g=[[v,u.y]]):g.push([v,u.y]),t=new s(v,u.y,a)}g.length>1&&d.push(g);var m={};if(m[i]=e,d.length)if(p){for(var w=p.geometry;w.paths.length;)w.removePath(w.paths.length-1);d.forEach((function(e){w.addPath(e)})),p.setGeometry(w)}else p=new n(new h({paths:d,spatialReference:a}),null,m),l.add(p),c.trackLineMap[e]=p}},refreshTracks:function(e){var r,a=this.trackMap,i=this.layer;function n(e){var r,t,n;for(t=(r=a[e]||[]).length,n=0;n<t;n++)i._repaint(r[n],null,!0)}if(this.drawTracks(e),e)t.forEach(e,(function(e){n(e)}));else for(r in a)a.hasOwnProperty(r)&&n(r)},getLatestObservations:function(){var e,r,t=this.trackMap,a=[];for(e in t)t.hasOwnProperty(e)&&(r=t[e],a.push(r[r.length-1]));return a},destroy:function(){this.inherited(arguments),this.trackLineMap=null},getWrappedX:function(e){var r=this.isWebMercator,t=r?20037508.342788905:180,a=r?-20037508.342788905:-180;return(e>0?a:t)-((e>0?t:a)-e)}});return a("extend-esri")&&r.setObject("layers._StreamTrackManager",c,i),c}));