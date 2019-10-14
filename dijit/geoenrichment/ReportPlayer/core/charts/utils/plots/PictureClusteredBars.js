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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/Color","dojo/_base/declare","dojo/_base/lang","dojox/gfx","dojox/gfx/utils","./_ClusteredBarsBase","./pictureUtil/Converter","../../../supportClasses/images/ImageDataHolder"],function(e,t,r,a,o,s,i,h){return t(s,{_drawBar:function(e,t,r,a,o,s,h,l,n){var c=!!t.icon,d=t.icon||a.series.isEditMode&&i.DEFAULT_SHAPE;return this._drawBarPictures(e,d,t.bgIcon,r,a,o,s,h,l,!c,n)},_drawBarPictures:function(t,s,l,n,c,d,u,y,g,w,m){function p(e,t,s){var l=r.mixin({},t),n=e.shapeJson||e.imageJson,d=!!e.shapeJson;if(n){for(var u=t.height/n.style.height,y=n.style.width*u,g=Math[!c.series.columnBarShowWholePictures||w||s?"ceil":"floor"](t.width/y),m=0;m<g;m++){var p=v.createGroup();if(d){var f=i.shapeJsonToGFXJson(n);try{o.deserialize(p,f)}catch(e){console.log(e)}}else p.createImage({x:0,y:0,width:n.style.width,height:n.style.height,src:h.getImageData(n.fileName)}),p.rawNode.style.opacity=n.style.opacity;if(m===g-1){var B=(y-(g*y-t.width))/u;p.setClip({x:x>0?0:n.style.width-B,y:0,width:B,height:n.style.height})}var _=x>0?t.x+m*y:t.x+t.width-(m+1)*y,C=t.y,P=u;n.style.zoom&&(_-=y*(n.style.zoom-1)/2,C-=t.height*(n.style.zoom-1)/2,P*=n.style.zoom),p.applyTransform(a.matrix.translate(_,C)),p.applyTransform(a.matrix.scale(P))}return c.series.columnBarShowWholePictures&&(l.width=g*y),l}}var f=y.data[m],x=f[f.valueProp],v=t.createGroup();v.openBatch();var B={x:x>0?u.l+g:u.l,y:n.y,width:x>0?d.width-u.l-u.r-g:g,height:n.height};return this.createRect(y,v,B).setFill(new e([0,0,0,.001])),c.series.showColumnBarBackground&&l&&p(l,B,!0),s&&(n=p(s,n,!1)),v.closeBatch(),{shape:v,rect:n}}})});