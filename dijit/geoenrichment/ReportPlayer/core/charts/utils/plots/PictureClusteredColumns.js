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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/Color","dojo/_base/declare","dojo/_base/lang","dojox/gfx","dojox/gfx/utils","./_ClusteredColumnsBase","./pictureUtil/Converter","../../../supportClasses/images/ImageDataHolder"],function(e,t,o,i,s,r,a,h){return t(r,{_drawColumn:function(e,t,o,i,s,r,h,l){var n=!!t.icon,c=t.icon||a.DEFAULT_SHAPE;return this._drawColumnPictures(e,c,t.bgIcon,o,i,s,r,h,l,!n)},_drawColumnPictures:function(t,r,l,n,c,g,u,d,m,y){function w(e,t){var r=o.mixin({},t),l=e.shapeJson||e.imageJson,n=!!e.shapeJson;if(l){for(var g=t.width/l.style.width,u=l.style.height*g,d=Math[c.series.showWholePictures&&!y?"floor":"ceil"](t.height/u),m=0;m<d;m++){var w=f.createGroup();if(n){var p=a.shapeJsonToGFXJson(l);try{s.deserialize(w,p)}catch(e){console.log(e)}}else w.createImage({x:0,y:0,width:l.style.width,height:l.style.height,src:h.getImageData(l.fileName)});if(m===d-1){var x=(u-(d*u-t.height))/g;w.setClip({x:0,y:l.style.height-x,width:l.style.width,height:x})}var C=t.x,v=t.y+t.height-(m+1)*u,_=g;l.style.zoom&&(C-=t.width*(l.style.zoom-1)/2,v-=u*(l.style.zoom-1)/2,_*=l.style.zoom),w.applyTransform(i.matrix.translate(C,v)),w.applyTransform(i.matrix.scale(_))}return c.series.showWholePictures&&(r.height=d*u,r.y+=t.height-r.height),r}}var f=t.createGroup(),p={x:n.x,y:u.t,width:n.width,height:g.height-u.t-u.b-m};return this.createRect(d,f,p).setFill(new e([0,0,0,.001])),c.series.showColumnBarBackground&&l&&w(l,p),n=w(r,n),{shape:f,rect:n}}})});