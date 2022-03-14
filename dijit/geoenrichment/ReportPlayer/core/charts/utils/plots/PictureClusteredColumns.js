// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/Color","dojo/_base/declare","dojo/_base/lang","dojox/gfx","dojox/gfx/utils","./_ClusteredColumnsBase","./pictureUtil/Converter","../../../supportClasses/images/ImageDataHolder"],(function(e,t,o,i,r,s,a,h){return t(s,{_noCrispEdges:!0,_drawColumn:function(e,t,o,i,r,s,h,l,n){var c=!!t.icon,d=t.icon||i.series.isEditMode&&a.DEFAULT_SHAPE;return this._drawColumnPictures(e,d,t.bgIcon,o,i,r,s,h,l,!c,n)},_drawColumnPictures:function(t,s,l,n,c,d,u,g,y,m,p){var w=g.data[p],f=w[w.valueProp],x=t.createGroup();x.openBatch();var v={x:n.x,y:f>0?u.t:n.y,width:n.width,height:f>0?d.height-u.t-u.b-y:y};function C(e,t,s){var l=o.mixin({},t),n=e.shapeJson||e.imageJson,d=!!e.shapeJson;if(n){for(var u=t.width/n.style.width,g=n.style.height*u,y=Math[!c.series.columnBarShowWholePictures||m||s?"ceil":"floor"](t.height/g),p=0;p<y;p++){var w=x.createGroup();if(d){var v=a.shapeJsonToGFXJson(n);try{r.deserialize(w,v)}catch(e){console.log(e)}}else w.createImage({x:0,y:0,width:n.style.width,height:n.style.height,src:h.getImageData(n.fileName)}),w.rawNode.style.opacity=n.style.opacity;if(p===y-1){var C=(g-(y*g-t.height))/u;w.setClip({x:0,y:f>0?n.style.height-C:0,width:n.style.width,height:C})}var _=t.x,B=f>0?t.y+t.height-(p+1)*g:t.y+p*g,P=u;n.style.zoom&&(_-=t.width*(n.style.zoom-1)/2,B-=g*(n.style.zoom-1)/2,P*=n.style.zoom),w.applyTransform(i.matrix.translate(_,B)),w.applyTransform(i.matrix.scale(P))}return c.series.columnBarShowWholePictures&&(l.height=y*g,l.y+=t.height-l.height),l}}return this.createRect(g,x,v).setFill(new e([0,0,0,.001])),c.series.showColumnBarBackground&&l&&C(l,v,!0),s&&(n=C(s,n,!1)),x.closeBatch(),{shape:x,rect:n}}})}));