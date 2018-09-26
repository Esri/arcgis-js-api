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

define(["dojo/_base/Color","dojo/_base/declare","dojo/_base/lang","dojox/gfx","dojox/gfx/utils","./_ClusteredBarsBase","./pictureUtil/Converter","../../../supportClasses/images/ImageDataHolder"],function(e,t,r,s,a,o,i,h){return t(o,{_drawBar:function(e,t,r,s,a,o,h,l){var n=!!t.icon,c=t.icon||i.DEFAULT_SHAPE;return this._drawBarPictures(e,c,t.bgIcon,r,s,a,o,h,l,!n)},_drawBarPictures:function(t,o,l,n,c,d,g,u,y,m){function w(e,t){var o=r.mixin({},t),l=e.shapeJson||e.imageJson,n=!!e.shapeJson;if(l){for(var d=t.height/l.style.height,g=l.style.width*d,u=Math[c.series.showWholePictures&&!m?"floor":"ceil"](t.width/g),y=0;y<u;y++){var w=f.createGroup();if(n){var p=i.shapeJsonToGFXJson(l);try{a.deserialize(w,p)}catch(e){console.log(e)}}else w.createImage({x:0,y:0,width:l.style.width,height:l.style.height,src:h.getImageData(l.fileName)});if(y===u-1){var x=(g-(u*g-t.width))/d;w.setClip({x:0,y:0,width:x,height:l.style.height})}var v=t.x+y*g,_=t.y,B=d;l.style.zoom&&(v-=g*(l.style.zoom-1)/2,_-=t.height*(l.style.zoom-1)/2,B*=l.style.zoom),w.applyTransform(s.matrix.translate(v,_)),w.applyTransform(s.matrix.scale(B))}return c.series.showWholePictures&&(o.width=u*g),o}}var f=t.createGroup(),p={x:g.l+y,y:n.y,width:d.width-g.l-g.r-y,height:n.height};return this.createRect(u,f,p).setFill(new e([0,0,0,.001])),c.series.showColumnBarBackground&&l&&w(l,p),n=w(o,n),{shape:f,rect:n}}})});