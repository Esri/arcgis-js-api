// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../../core/maybe","../../../../../../core/screenUtils","../../../../../../core/libs/gl-matrix-2/mat2df32","../../../../../../core/libs/gl-matrix-2/vec2f32","../../color","../../definitions","../../definitions","../../number","../../materialKey/MaterialKey","./WGLBaseMarkerTemplate","./WGLMeshTemplate"],(function(e,t,r,a,i,o,n,l,s,h,p,u,c,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=function(e){function t(t,r,a,i,l,s,c,f,d,m,M,y,x,g,_,A,b,v,w,P,k){var R=e.call(this)||this;R.angle=i,R.height=c,R.width=s,R.xOffset=r*w,R.yOffset=a*w,R._markerPlacement=P,R.effects=k,R._anchorX=.5-(.5+A)*_.width/_.width,R._anchorY=.5-(.5+b)*_.height/_.height;var S=(1===g?1:0)|(M?1:0)<<1|(x?1:0)<<2|(y?1:0)<<3,B=_&&_.sdf,L=u.MarkerMaterialKey.load(t);L.sdf=B,L.pattern=!0,L.textureBinding=_.textureBinding,R._materialKey=L.data,R._fillColor=l,R._outlineColor=d,R._sizeOutlineWidth=p.i8888to32(Math.round(Math.min(Math.sqrt(128*s),255)),Math.round(Math.min(Math.sqrt(128*c),255)),Math.round(Math.min(Math.sqrt(128*m),255)),Math.round(Math.min(Math.sqrt(128*f),255)));var C=_.rect.x+h.SPRITE_PADDING,G=_.rect.y+h.SPRITE_PADDING,T=C+_.width,I=G+_.height;R._texUpperLeft=p.i1616to32(C,G),R._texUpperRight=p.i1616to32(T,G),R._texBottomLeft=p.i1616to32(C,I),R._texBottomRight=p.i1616to32(T,I),s*=v,c*=v,s*=w,c*=w;var K=Math.round(Math.min(64*v,255));R._bitestAndDistRatio=p.i8888to32(0,0,S,K),R._computedWidth=s,R._computedHeight=c;var q=n.vec2f32.create(),O=o.mat2df32.create();return R._applyTransformation(O,q),R}return r.__extends(t,e),t.fromCIMMarker=function(e,r){var o=r&&r.width||1,n=r&&r.height||1,s=e.size,h=o/n*e.scaleX,p=e.scaleSymbolsProportionally&&e.frameHeight?s/e.frameHeight:1,u=l.premultiplyAlphaRGBA(e.color),c=l.premultiplyAlphaRGBA(e.outlineColor),f=i.pt2px(s),d=f*h,m=i.pt2px(e.offsetX||0),M=i.pt2px(e.offsetY||0),y=i.pt2px(e.outlineWidth||0)*p,x=e.alignment||0,g=i.pt2px(e.referenceSize),_=e.rotation||0;e.rotateClockwise||(_=-_);var A=0,b=0,v=e.anchorPoint;return v&&(e.isAbsoluteAnchorPoint?s&&(A=-v.x/(s*h),b=v.y/s):(A=v.x,b=v.y)),new t(e.materialKey,m,M,_,u,d,f,g,c,y,e.colorLocked,e.scaleSymbolsProportionally,!1,x,r,A,b,e.sizeRatio,a.unwrapOr(e.scaleFactor,1),e.markerPlacement,e.effects)},t.fromPictureMarker=function(e,r){var a=Math.round(i.pt2px(e.width)),o=Math.round(i.pt2px(e.height)),n=s.PICTURE_FILL_COLOR,l=Math.round(i.pt2px(e.xoffset||0)),h=Math.round(i.pt2px(e.yoffset||0));return new t(e.materialKey,l,h,e.angle,n,a,o,o,0,0,!1,!1,!1,0,r,0,0,1,1,null,null)},t.fromSimpleMarker=function(e,r){var a=l.premultiplyAlphaRGBAArray(e.color),o=Math.round(i.pt2px(e.size)),n=o,s=Math.round(i.pt2px(e.xoffset||0)),h=Math.round(i.pt2px(e.yoffset||0)),p=e.style,u=e.outline,c=0|(u&&u.color&&l.premultiplyAlphaRGBAArray(u.color)),f=0|(u&&u.width&&Math.round(i.pt2px(u.width))),d=new t(e.materialKey,s,h,e.angle,a,o,n,n,c,f,!1,!1,"esriSMSCross"===p||"esriSMSX"===p,0,r,0,0,126/64,1,null,null);return d.boundsType="esriSMSCircle"===p?"circle":"square",d},t.fromLineSymbolMarker=function(e,r){var a,o=l.premultiplyAlphaRGBAArray(e.color),n=Math.round(i.pt2px(6*e.lineWidth)),s=n,h="cross"===e.style||"x"===e.style;switch(e.placement){case"begin-end":a="Both";break;case"begin":a="JustBegin";break;case"end":a="JustEnd";break;default:a="None"}var p={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:a,offsetAlongLine:0},u=new t(e.materialKey,0,0,0,o,n,s,s/6,o,h?Math.round(i.pt2px(e.lineWidth)):0,!1,!1,h,1,r,0,0,126/64,1,p,null);return u.boundsType="circle"===e.style?"circle":"square",u},t}(c.default(f.default));t.default=d}));