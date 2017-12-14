// COPYRIGHT © 2017 Esri
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

define(["dojo/_base/Color","dojo/_base/declare","dojo/_base/lang","dojox/gfx","dojox/gfx/utils","./_ClusteredBarsBase","./pictureUtil/Converter","../../../supportClasses/images/ImageDataHolder"],function(e,t,r,i,a,o,s,h){return t("dojox.charting.plot2d.Bars",o,{_drawBar:function(e,t,r,i,a,o,h){var l=!!t.icon,n=t.icon||s.DEFAULT_SHAPE;return this._drawBarPictures(e,n,t.bgIcon,r,i,a,o,h,!l)},_drawBarPictures:function(t,o,l,n,c,d,g,u,y){function w(e,t){var o=r.mixin({},t),l=e.shapeJson||e.imageJson,n=!!e.shapeJson;if(l){for(var d=t.height/l.style.height,g=l.style.width*d,u=Math[c.series.showWholePictures&&!y?"floor":"ceil"](t.width/g),w=0;u>w;w++){var f=m.createGroup();if(n){var p=s.shapeJsonToGFXJson(l);try{a.deserialize(f,p)}catch(x){console.log(x)}}else f.createImage({x:0,y:0,width:l.style.width,height:l.style.height,src:h.getImageData(l.fileName)});if(w===u-1){var v=(g-(u*g-t.width))/d;f.setClip({x:0,y:0,width:v,height:l.style.height})}var B=t.x+w*g,_=t.y,j=d;l.style.zoom&&(B-=g*(l.style.zoom-1)/2,_-=t.height*(l.style.zoom-1)/2,j*=l.style.zoom),f.applyTransform(i.matrix.translate(B,_)),f.applyTransform(i.matrix.scale(j))}return c.series.showWholePictures&&(o.width=u*g),o}}var m=t.createGroup();return this.createRect(u,m,{x:n.x,y:n.y,width:d.width-g.l-g.r,height:n.height}).setFill(new e([0,0,0,.01])),c.series.showColumnBarBackground&&l&&w(l,{x:n.x,y:n.y,height:n.height,width:d.width-g.l-g.r}),n=w(o,n),{shape:m,rect:n}}})});