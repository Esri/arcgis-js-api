// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../graphic","../geometry/Polyline","./TrackManager"],function(e,t,r,a,n,i,s,h){var o=e([h],{declaredClass:"esri.layers._StreamTrackManager",constructor:function(){this.inherited(arguments)},initialize:function(){this.inherited(arguments)},addFeatures:function(e,t){function a(e,t){var r,a,i,s,o;for(n[e]||(n[e]=[]),r=n[e],h>0&&(t.length>h&&t.splice(0,t.length-h),s=t.length+r.length,s>h&&(a=r.splice(0,s-h))),i=t,s=t.length,o=0;s>o;o+=1)r.push(t[o]);return{deletes:a,adds:i}}var n,i,s,h,o,c,l={},u={};if(t)return this.inherited(arguments),l;n=this.trackMap,i=this.layer,s=i._trackIdField,h=i.maximumTrackPoints||0,r.forEach(e,function(e){var t=e.attributes,r=t[s];e.visible&&(u[r]||(u[r]=[]),u[r].push(e))});for(c in u)u.hasOwnProperty(c)&&(o=a(c,u[c]),l[c]=o);return l},removeFeatures:function(e){var t,a=[],n=this.layer.objectIdField,i=this.layer._trackIdField;e&&(t=e.length,r.forEach(e,function(e){var t,s,h,o,c;if(h=e.attributes[i],s=e.attributes[n],o=this.trackMap[h])for(t=0;t<o.length;t+=1)if(c=o[t],c.attributes[n]===s){this.trackMap[h].splice(t,1),-1===r.indexOf(h)&&a.push(h);break}},this),e.length>0&&this.refreshTracks(a))},drawTracks:function(e){function t(e){var t,r,o,u,f,d,p=a[e],g=p&&p.length>1;if(f=c.trackLineMap[e],f&&!g&&(l.remove(f),delete c.trackLineMap[e],f=null),!g)return!1;for(r=[],t=p.length-1;t>=0;t-=1)o=p[t].geometry,o&&r.push([o.x,o.y]);u={},u[h]=e,r.length>1&&(f?(d=f.geometry,d.removePath(0),d.addPath(r),f.setGeometry(d)):(f=new i(new s({paths:[r],spatialReference:n}),null,u),l.add(f),c.trackLineMap[e]=f))}var a,n,h,o,c=this,l=this.container;if(l)if(a=this.trackMap,n=this.map.spatialReference,h=this.layer._trackIdField,e)r.forEach(e,function(e){t(e)});else for(o in a)a.hasOwnProperty(o)&&t(o)},refreshTracks:function(e){function t(e){var t,r,a;for(t=i[e]||[],r=t.length,a=0;r>a;a++)s._repaint(t[a],null,!0)}{var a,n=this,i=this.trackMap,s=this.layer;s._getRenderer()}if(n.drawTracks(e),e)r.forEach(e,function(e){t(e)});else for(a in i)i.hasOwnProperty(a)&&t(a)},getLatestObservations:function(){var e,t,r=this.trackMap,a=[];for(e in r)r.hasOwnProperty(e)&&(t=r[e],a.push(t[t.length-1]));return a},destroy:function(){this.inherited(arguments),this.trackLineMap=null}});return a("extend-esri")&&t.setObject("layers._StreamTrackManager",o,n),o});