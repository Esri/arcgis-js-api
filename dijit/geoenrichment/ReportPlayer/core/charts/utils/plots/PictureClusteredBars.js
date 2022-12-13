// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/Color","dojo/_base/declare","dojo/_base/lang","dojox/gfx","dojox/gfx/utils","./_ClusteredBarsBase","./pictureUtil/Converter","../../../supportClasses/images/ImageDataHolder"],(function(e,t,r,a,o,s,i,h){return t(s,{_noCrispEdges:!0,_drawBar:function(e,t,r,a,o,s,h,l,n){var c=!!t.icon,d=t.icon||a.series.isEditMode&&i.DEFAULT_SHAPE;return this._drawBarPictures(e,d,t.bgIcon,r,a,o,s,h,l,!c,n)},_drawBarPictures:function(t,s,l,n,c,d,u,g,y,p,w){var m=g.data[w],f=m[m.valueProp],x=t.createGroup();x.openBatch();var v={x:f>0?u.l+y:u.l,y:n.y,width:f>0?d.width-u.l-u.r-y:y,height:n.height};function B(e,t,s){var l=r.mixin({},t),n=e.shapeJson||e.imageJson,d=!!e.shapeJson;if(n){for(var u=t.height/n.style.height,g=n.style.width*u,y=Math[!c.series.columnBarShowWholePictures||p||s?"ceil":"floor"](t.width/g),w=0;w<y;w++){var m=x.createGroup();if(d){var v=i.shapeJsonToGFXJson(n);try{o.deserialize(m,v)}catch(e){console.log(e)}}else m.createImage({x:0,y:0,width:n.style.width,height:n.style.height,src:h.getImageData(n.fileName)}),m.rawNode.style.opacity=n.style.opacity;if(w===y-1){var B=(g-(y*g-t.width))/u;m.setClip({x:f>0?0:n.style.width-B,y:0,width:B,height:n.style.height})}var _=f>0?t.x+w*g:t.x+t.width-(w+1)*g,C=t.y,P=u;n.style.zoom&&(_-=g*(n.style.zoom-1)/2,C-=t.height*(n.style.zoom-1)/2,P*=n.style.zoom),m.applyTransform(a.matrix.translate(_,C)),m.applyTransform(a.matrix.scale(P))}return c.series.columnBarShowWholePictures&&(l.width=y*g),l}}return this.createRect(g,x,v).setFill(new e([0,0,0,.001])),c.series.showColumnBarBackground&&l&&B(l,v,!0),s&&(n=B(s,n,!1)),x.closeBatch(),{shape:x,rect:n}}})}));