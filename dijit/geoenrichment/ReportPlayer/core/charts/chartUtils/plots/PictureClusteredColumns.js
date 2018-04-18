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

define(["dojo/_base/Color","dojo/_base/declare","dojo/_base/lang","dojox/gfx","dojox/gfx/utils","./_ClusteredColumnsBase","./pictureUtil/Converter","../../../supportClasses/images/ImageDataHolder"],function(e,t,i,o,s,r,h,a){return t(r,{_drawColumn:function(e,t,i,o,s,r,a){var l=!!t.icon,n=t.icon||h.DEFAULT_SHAPE;return this._drawColumnPictures(e,n,t.bgIcon,i,o,s,r,a,!l)},_drawColumnPictures:function(t,r,l,n,g,c,d,u,m){function y(e,t){var r=i.mixin({},t),l=e.shapeJson||e.imageJson,n=!!e.shapeJson;if(l){for(var c=t.width/l.style.width,d=l.style.height*c,u=Math[g.series.showWholePictures&&!m?"floor":"ceil"](t.height/d),y=0;y<u;y++){var f=w.createGroup();if(n){var p=h.shapeJsonToGFXJson(l);try{s.deserialize(f,p)}catch(e){console.log(e)}}else f.createImage({x:0,y:0,width:l.style.width,height:l.style.height,src:a.getImageData(l.fileName)});if(y===u-1){var x=(d-(u*d-t.height))/c;f.setClip({x:0,y:l.style.height-x,width:l.style.width,height:x})}var C=t.x,v=t.y+t.height-(y+1)*d,_=c;l.style.zoom&&(C-=t.width*(l.style.zoom-1)/2,v-=d*(l.style.zoom-1)/2,_*=l.style.zoom),f.applyTransform(o.matrix.translate(C,v)),f.applyTransform(o.matrix.scale(_))}return g.series.showWholePictures&&(r.height=u*d,r.y+=t.height-r.height),r}}var w=t.createGroup();return this.createRect(u,w,{x:n.x,y:d.t,width:n.width,height:c.height-d.t-d.b}).setFill(new e([0,0,0,.01])),g.series.showColumnBarBackground&&l&&y(l,{x:n.x,y:d.t,height:c.height-d.t-d.b,width:n.width}),n=y(r,n),{shape:w,rect:n}}})});