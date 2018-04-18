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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../graphic","../geometry/Polyline","./TrackManager"],function(e,t,r,a,n,i,s,h){var o=e([h],{declaredClass:"esri.layers._StreamTrackManager",constructor:function(e){this.inherited(arguments)},initialize:function(e){this.inherited(arguments)},addFeatures:function(e,t){var a,n,i,s,h,o,c={},l={};if(t)return this.inherited(arguments),c;a=this.trackMap,n=this.layer,i=n._trackIdField,s=n.maximumTrackPoints||0,r.forEach(e,function(e){var t=e.attributes,r=t[i];e.visible&&(l[r]||(l[r]=[]),l[r].push(e))});for(o in l)l.hasOwnProperty(o)&&(h=function(e,t){var r,n,i,h,o;for(a[e]||(a[e]=[]),r=a[e],s>0&&(t.length>s&&t.splice(0,t.length-s),(h=t.length+r.length)>s&&(n=r.splice(0,h-s))),i=t,h=t.length,o=0;o<h;o+=1)r.push(t[o]);return{deletes:n,adds:i}}(o,l[o]),c[o]=h);return c},removeFeatures:function(e){var t=[],a=this.layer.objectIdField,n=this.layer._trackIdField;e&&(e.length,r.forEach(e,function(e){var i,s,h,o,c;if(h=e.attributes[n],s=e.attributes[a],o=this.trackMap[h])for(i=0;i<o.length;i+=1)if(c=o[i],c.attributes[a]===s){this.trackMap[h].splice(i,1),-1===r.indexOf(h)&&t.push(h);break}},this),e.length>0&&this.refreshTracks(t))},drawTracks:function(e){function t(e){var t,r,o,f,u,d,p=a[e],g=p&&p.length>1;if(u=c.trackLineMap[e],u&&!g&&(l.remove(u),delete c.trackLineMap[e],u=null),!g)return!1;for(r=[],t=p.length-1;t>=0;t-=1)(o=p[t].geometry)&&r.push([o.x,o.y]);f={},f[h]=e,r.length>1&&(u?(d=u.geometry,d.removePath(0),d.addPath(r),u.setGeometry(d)):(u=new i(new s({paths:[r],spatialReference:n}),null,f),l.add(u),c.trackLineMap[e]=u))}var a,n,h,o,c=this,l=this.container;if(l)if(a=this.trackMap,n=this.map.spatialReference,h=this.layer._trackIdField,e)r.forEach(e,function(e){t(e)});else for(o in a)a.hasOwnProperty(o)&&t(o)},refreshTracks:function(e){function t(e){var t,r,a;for(t=i[e]||[],r=t.length,a=0;a<r;a++)s._repaint(t[a],null,!0)}var a,n=this,i=this.trackMap,s=this.layer;s._getRenderer();if(n.drawTracks(e),e)r.forEach(e,function(e){t(e)});else for(a in i)i.hasOwnProperty(a)&&t(a)},getLatestObservations:function(){var e,t,r=this.trackMap,a=[];for(e in r)r.hasOwnProperty(e)&&(t=r[e],a.push(t[t.length-1]));return a},destroy:function(){this.inherited(arguments),this.trackLineMap=null}});return a("extend-esri")&&t.setObject("layers._StreamTrackManager",o,n),o});