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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["../../core/declare","dojo/_base/array","../../Graphic","../../geometry/Polyline","./TrackManager"],function(e,t,r,a,i){return e([i],{declaredClass:"esri.layers.support.StreamTrackManager",constructor:function(e){this.inherited(arguments)},initialize:function(e){this.inherited(arguments)},addFeatures:function(e,r){var a,i,n,s,h,c,o={},l={};if(r)return this.inherited(arguments),o;a=this.trackMap,i=this.layer,n=i._trackIdField,s=i.maximumTrackPoints||0,t.forEach(e,function(e){var t=e.attributes,r=t[n];e.visible&&(l[r]||(l[r]=[]),l[r].push(e))});for(c in l)l.hasOwnProperty(c)&&(h=function(e,t){var r,i,n,h,c;for(a[e]||(a[e]=[]),r=a[e],s>0&&(t.length>s&&t.splice(0,t.length-s),(h=t.length+r.length)>s&&(i=r.splice(0,h-s))),n=t,h=t.length,c=0;c<h;c+=1)r.push(t[c]);return{deletes:i,adds:n}}(c,l[c]),o[c]=h);return o},removeFeatures:function(e){var r=[],a=this.layer.objectIdField,i=this.layer._trackIdField;e&&(e.length,t.forEach(e,function(e){var n,s,h,c,o;if(h=e.attributes[i],s=e.attributes[a],c=this.trackMap[h])for(n=0;n<c.length;n+=1)if(o=c[n],o.attributes[a]===s){this.trackMap[h].splice(n,1),-1===t.indexOf(h)&&r.push(h);break}},this),e.length>0&&this.refreshTracks(r))},drawTracks:function(e){function i(e){var t,i,c,f,u,d,p=n[e],k=p&&p.length>1;if(u=o.trackLineMap[e],u&&!k&&(l.remove(u),delete o.trackLineMap[e],u=null),!k)return!1;for(i=[],t=p.length-1;t>=0;t-=1)(c=p[t].geometry)&&i.push([c.x,c.y]);f={},f[h]=e,i.length>1&&(u?(d=u.geometry,d.removePath(0),d.addPath(i),u.setGeometry(d)):(u=new r(new a({paths:[i],spatialReference:s}),null,f),l.add(u),o.trackLineMap[e]=u))}var n,s,h,c,o=this,l=this.container;if(l)if(n=this.trackMap,s=this.map.spatialReference,h=this.layer._trackIdField,e)t.forEach(e,function(e){i(e)});else for(c in n)n.hasOwnProperty(c)&&i(c)},refreshTracks:function(e){function r(e){var t,r,a;for(t=n[e]||[],r=t.length,a=0;a<r;a++)s._repaint(t[a],null,!0)}var a,i=this,n=this.trackMap,s=this.layer;if(i.drawTracks(e),e)t.forEach(e,function(e){r(e)});else for(a in n)n.hasOwnProperty(a)&&r(a)},destroy:function(){this.inherited(arguments),this.trackLineMap=null}})});