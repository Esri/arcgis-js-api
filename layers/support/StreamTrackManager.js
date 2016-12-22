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

define(["../../core/declare","dojo/_base/array","../../Graphic","../../geometry/Polyline","./TrackManager"],function(e,t,r,a,i){var n=e([i],{declaredClass:"esri.layers.StreamTrackManager",constructor:function(e){this.inherited(arguments)},initialize:function(e){this.inherited(arguments)},addFeatures:function(e,r){function a(e,t){var r,a,n,s,c;for(i[e]||(i[e]=[]),r=i[e],h>0&&(t.length>h&&t.splice(0,t.length-h),s=t.length+r.length,s>h&&(a=r.splice(0,s-h))),n=t,s=t.length,c=0;s>c;c+=1)r.push(t[c]);return{deletes:a,adds:n}}var i,n,s,h,c,l,o={},u={};if(r)return this.inherited(arguments),o;i=this.trackMap,n=this.layer,s=n._trackIdField,h=n.maximumTrackPoints||0,t.forEach(e,function(e){var t=e.attributes,r=t[s];e.visible&&(u[r]||(u[r]=[]),u[r].push(e))});for(l in u)u.hasOwnProperty(l)&&(c=a(l,u[l]),o[l]=c);return o},removeFeatures:function(e){var r,a=[],i=this.layer.objectIdField,n=this.layer._trackIdField;e&&(r=e.length,t.forEach(e,function(e){var r,s,h,c,l;if(h=e.attributes[n],s=e.attributes[i],c=this.trackMap[h])for(r=0;r<c.length;r+=1)if(l=c[r],l.attributes[i]===s){this.trackMap[h].splice(r,1),-1===t.indexOf(h)&&a.push(h);break}},this),e.length>0&&this.refreshTracks(a))},drawTracks:function(e){function i(e){var t,i,c,u,f,d,p=n[e],g=p&&p.length>1;if(f=l.trackLineMap[e],f&&!g&&(o.remove(f),delete l.trackLineMap[e],f=null),!g)return!1;for(i=[],t=p.length-1;t>=0;t-=1)c=p[t].geometry,c&&i.push([c.x,c.y]);u={},u[h]=e,i.length>1&&(f?(d=f.geometry,d.removePath(0),d.addPath(i),f.setGeometry(d)):(f=new r(new a({paths:[i],spatialReference:s}),null,u),o.add(f),l.trackLineMap[e]=f))}var n,s,h,c,l=this,o=this.container;if(o)if(n=this.trackMap,s=this.map.spatialReference,h=this.layer._trackIdField,e)t.forEach(e,function(e){i(e)});else for(c in n)n.hasOwnProperty(c)&&i(c)},refreshTracks:function(e){function r(e){var t,r,a;for(t=n[e]||[],r=t.length,a=0;r>a;a++)s._repaint(t[a],null,!0)}var a,i=this,n=this.trackMap,s=this.layer;if(i.drawTracks(e),e)t.forEach(e,function(e){r(e)});else for(a in n)n.hasOwnProperty(a)&&r(a)},destroy:function(){this.inherited(arguments),this.trackLineMap=null}});return n});