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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["../../core/declare","../../Graphic","../../geometry/Polyline","./TrackManager"],function(e,t,r,i){return e([i],{declaredClass:"esri.layers.support.StreamTrackManager",constructor:function(e){this.inherited(arguments)},initialize:function(e){this.inherited(arguments)},addFeatures:function(e,t){var r,i,a,n,s,h,c={},l={};if(t)return this.inherited(arguments),c;r=this.trackMap,i=this.layer,a=i._trackIdField,n=i.maximumTrackPoints||0,e.forEach(function(e){var t=e.attributes,r=t[a];e.visible&&(l[r]||(l[r]=[]),l[r].push(e))});for(h in l)l.hasOwnProperty(h)&&(s=function(e,t){var i,a,s,h,c;for(r[e]||(r[e]=[]),i=r[e],n>0&&(t.length>n&&t.splice(0,t.length-n),(h=t.length+i.length)>n&&(a=i.splice(0,h-n))),s=t,h=t.length,c=0;c<h;c+=1)i.push(t[c]);return{deletes:a,adds:s}}(h,l[h]),c[h]=s);return c},removeFeatures:function(e){var t=[],r=this.layer.objectIdField,i=this.layer._trackIdField;e&&(e.length,e.forEach(function(e){var a,n,s,h,c;if(s=e.attributes[i],n=e.attributes[r],h=this.trackMap[s])for(a=0;a<h.length;a+=1)if(c=h[a],c.attributes[r]===n){this.trackMap[s].splice(a,1),t.push(s);break}},this),e.length>0&&this.refreshTracks(t))},drawTracks:function(e){function i(e){var i,h,o,f,u,d,p=a[e],k=p&&p.length>1;if(u=c.trackLineMap[e],u&&!k&&(l.remove(u),delete c.trackLineMap[e],u=null),!k)return!1;for(h=[],i=p.length-1;i>=0;i-=1)(o=p[i].geometry)&&h.push([o.x,o.y]);f={},f[s]=e,h.length>1&&(u?(d=u.geometry,d.removePath(0),d.addPath(h),u.setGeometry(d)):(u=new t(new r({paths:[h],spatialReference:n}),null,f),l.add(u),c.trackLineMap[e]=u))}var a,n,s,h,c=this,l=this.container;if(l)if(a=this.trackMap,n=this.map.spatialReference,s=this.layer._trackIdField,e)e.forEach(function(e){i(e)});else for(h in a)a.hasOwnProperty(h)&&i(h)},refreshTracks:function(e){function t(e){var t,r,i;for(t=a[e]||[],r=t.length,i=0;i<r;i++)n._repaint(t[i],null,!0)}var r,i=this,a=this.trackMap,n=this.layer;if(i.drawTracks(e),e)e.forEach(function(e){t(e)});else for(r in a)a.hasOwnProperty(r)&&t(r)},destroy:function(){this.inherited(arguments),this.trackLineMap=null}})});