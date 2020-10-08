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

define(["require","exports","tslib","../../../../../../core/mathUtils","../../../../../../core/screenUtils","../../color","../../definitions","../../GeometryUtils","../../number","../../materialKey/MaterialKey","./WGLBaseFillTemplate","./WGLMeshTemplate"],(function(e,t,i,r,o,l,a,n,f,s,u,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(t,i,r,o,l,a,n,f,u){var h=e.call(this)||this;h.effects=u;var c=s.FillMaterialKey.load(t);return i&&(c.sdf=i.sdf,c.pattern=!0,c.textureBinding=i.textureBinding),h.fillColor=r,h.tl=o,h.br=l,h.aux1=a,h.aux2=n,h.aux3=f,h._materialKey=c.data,h}return i.__extends(t,e),t.fromCIMFill=function(e,i){var s=e.color,u=s&&l.premultiplyAlphaRGBA(s)||0,h=e.materialKey;if(!i)return new t(h,null,u,0,0,0,0,f.i8888to32(0,0,0,e.colorLocked?1:0),e.effects);var c=i.rect,p=i.width,x=i.height,w=c.x+a.SPRITE_PADDING,d=c.y+a.SPRITE_PADDING,P=w+p,v=d+x,y=r.nextHighestPowerOfTwo(o.pt2px(e.height||0));y>255?y=255:y<=0&&(y=r.nextHighestPowerOfTwo(v-d));var g=r.nextHighestPowerOfTwo(o.pt2px(e.height/x*p||0));g>255?g=255:g<=0&&(g=r.nextHighestPowerOfTwo(P-w));var T=o.pt2px(e.offsetX||0)+128;T>255&&(T=255);var m=o.pt2px(-e.offsetY||0)+128;m>255&&(m=255);var I=e.scaleX||1;return new t(h,i,u,f.i1616to32(w,d),f.i1616to32(P,v),f.i8888to32(g,y,T,m),f.i1616to32(128*I,128),f.i8888to32(0,0,n.degToByte(e.angle),e.colorLocked?1:0),e.effects)},t.fromSimpleFill=function(e,i,o){void 0===o&&(o=!1);var n=e.color,s=n&&"esriSFSNull"!==e.style&&l.premultiplyAlphaRGBAArray(n)||0,u=f.i8888to32(0,0,0,o?255:0),h=e.materialKey;if(!i)return new t(h,null,s,0,0,0,0,u,null);var c=i.rect,p=i.width,x=i.height,w=c.x+a.SPRITE_PADDING,d=c.y+a.SPRITE_PADDING,P=w+p,v=d+x;return new t(h,i,s,f.i1616to32(w,d),f.i1616to32(P,v),f.i8888to32(r.nextHighestPowerOfTwo(P-w),r.nextHighestPowerOfTwo(v-d),0,0),f.i1616to32(128,128),u,null)},t.fromPictureFill=function(e,i,l){void 0===l&&(l=!1);var n=a.PICTURE_FILL_COLOR,s=i.rect,u=i.width,h=i.height,c=s.x+a.SPRITE_PADDING,p=s.y+a.SPRITE_PADDING,x=c+u,w=p+h,d=f.i1616to32(c,p),P=f.i1616to32(x,w),v=r.nextHighestPowerOfTwo(o.pt2px(e.width));v>255&&(v=255);var y=r.nextHighestPowerOfTwo(o.pt2px(e.height));y>255&&(y=255);var g=o.pt2px(e.xoffset)+128;g>255&&(g=255);var T=o.pt2px(-e.yoffset)+128;T>255&&(T=255);var m=f.i8888to32(v,y,g,T),I=f.i1616to32(128*e.xscale,128*e.yscale),_=f.i8888to32(0,0,0,l?255:0);return new t(e.materialKey,i,n,d,P,m,I,_,null)},t}(u.default(h.default));t.default=c}));