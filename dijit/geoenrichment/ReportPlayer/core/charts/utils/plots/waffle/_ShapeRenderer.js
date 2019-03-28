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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/Color","dojox/gfx","dojox/gfx/utils","../pictureUtil/Converter","../../../../supportClasses/images/ImageDataHolder","../supportClasses/WaffleDirections"],function(e,a,s,r,o,n){var t={packRect:function(e,a,s,r,o,n){if(!o||1===o){var t=Math.min(s/e,r/a);return{w:e*t,h:a*t,numColumns:1,numRows:1}}var i=e/a;a*=i,r*=i;for(var c=Math.sqrt(s*r/o),f=Math.max(1,Math.round(s/c)),l=Math.max(1,Math.round(r/c)),h=0,u=0,m=0,p=-100;p<101;p++)for(var w=-100;w<101;w++){var v=f+p,d=l+w;if(!(v<1||d<1||(n?v*d!==o:v*d<o))){var y=Math.min(s/v,r/d);y>h&&(h=y,u=v,m=d)}}return{w:h,h:h/i,numColumns:u,numRows:m}}},i={renderShape:function(e,a,s,r,o){var n=[],t=[],c=[];if(e.map(function(e){if(e.icon){n.push(e.icon);var r=s.createGroup();a.series.isEditMode&&(r.rawNode.style.cursor="pointer"),r.openBatch(),t.push(r)}}),n.length){var f=i._calcIconParams(n,r,a);t.forEach(function(e,s){var o=n[s],t=[];c.push(t);for(var l=0;l<f.numRows;l++)for(var h=0;h<f.numColumns&&(!a.series.waffleNumIcons||t.length!==a.series.waffleNumIcons);h++)t.push(i._renderIcon(l,h,e,o,r,a,f))})}t.forEach(function(e){e.closeBatch()});var l=function(s){return i._fillIcons(s,n,t,c,e,a,f)};return o.push({isShape:!0,func:l}),l},_calcIconParams:function(e,a,s){var r,o,i,c,f=e[0],l=f.shapeJson||f.imageJson;if(s.series.waffleNumIcons){r=40,o=r*l.style.height/l.style.width;var h=t.packRect(r+s.series.waffleColumnSpace,o+s.series.waffleRowSpace,a.w+s.series.waffleColumnSpace,a.h+s.series.waffleRowSpace,s.series.waffleNumIcons,!0);r=h.w-s.series.waffleColumnSpace,o=h.h-s.series.waffleRowSpace,i=h.numColumns,c=h.numRows}else{r=40*(l.style.zoom||1),o=r*l.style.height/l.style.width,i=Math.max(1,Math.floor((a.w+s.series.waffleColumnSpace)/(r+s.series.waffleColumnSpace))),c=Math.max(1,Math.floor((a.h+s.series.waffleRowSpace)/(o+s.series.waffleRowSpace)))}var u=1===i?0:(a.w-r*i)/(i-1),m=1===c?0:(a.h-o*c)/(c-1),p=s.series.waffleDirection===n.RIGHT||s.series.waffleDirection===n.LEFT;if(p){var w=i;i=c,c=w}return{iconW:r,iconH:o,numColumns:Math.min(i,1e3),numRows:Math.min(c,1e3),columnSpace:u,rowSpace:m,isColumnRowsTransposed:p}},_renderIcon:function(t,i,c,f,l,h,u){var m=u.iconW,p=u.iconH,w=u.columnSpace,v=u.rowSpace,d=f.shapeJson||f.imageJson,y=c.createGroup();if(f.shapeJson){var g=r.shapeJsonToGFXJson(d);try{s.deserialize(y,g)}catch(e){console.log(e)}}else y.createImage({x:0,y:0,width:m,height:p,src:o.getImageData(d.fileName)}),y.rawNode.style.opacity=d.style.opacity;y.createRect({x:0,y:0,width:m+w,height:p+v}).setFill(new e([0,0,0,.001]));var x,C;switch(h.series.waffleDirection){case n.DOWN:x=l.x+i*(m+w),C=l.y+t*(p+v);break;case n.UP:x=l.x+i*(m+w),C=l.y+l.h-(t+1)*p-t*v;break;case n.RIGHT:x=l.x+t*(m+w),C=l.y+l.h-(i+1)*p-i*v;break;case n.LEFT:x=l.x+l.w-(t+1)*m-t*w,C=l.y+l.h-(i+1)*p-i*v}if(y.applyTransform(a.matrix.translate(x,C)),f.shapeJson){var M=m/d.style.width;y.applyTransform(a.matrix.scale(M))}return y},_fillIcons:function(e,a,s,r,o,n,t){var i=t.iconW,c=t.iconH,f=t.numColumns,l=t.numRows,h=t.isColumnRowsTransposed;s.forEach(function(e){e.openBatch()});var u=n.series.waffleNumIcons||l*f,m=0;o.forEach(function(e){m+=e.y||0});var p=1,w=o.map(function(a,s){var r=e*(a.y||0)/m;return n.series.waffleShowWholePictures&&(r=Math.round(u*r)/u),r=Math.max(0,Math.min(1,r)),s<o.length-1&&(p-=r),r});o.length>1&&(w[w.length-1]=p);var v=0;return r.forEach(function(e,s){var r=0,o=v;v+=w[s];for(var n=o*u,t=v*u,m=0;m<l;m++)for(var p=0;p<f;p++){var d=e[r];if(!d)break;if(d.setClip(null),d.rawNode.style.display="none",++r>n&&r-1<t){d.rawNode.style.display="";var y=Math.max(0,n-(r-1)),g=Math.max(0,r-t);if(y>0||g>0){var x=a[s],C=x.shapeJson?x.shapeJson.style.width:i,M=x.shapeJson?x.shapeJson.style.height:c;h?d.setClip({x:0,y:M*g,width:C,height:M*(1-(y+g))}):d.setClip({x:C*y,y:0,width:C*(1-(y+g)),height:M})}}}}),s.forEach(function(e){e.closeBatch()}),{shapes:s}}};return i.DEFAULT_ICON_SIZE=40,i});