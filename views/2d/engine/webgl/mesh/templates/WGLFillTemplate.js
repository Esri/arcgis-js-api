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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../../core/mathUtils","../../../../../../core/screenUtils","../../color","../../definitions","../../GeometryUtils","../../number","../../materialKey/MaterialKey","./WGLBaseFillTemplate","./WGLMeshTemplate"],(function(e,t,i,o,r,l,n,a,f,s,u,h){Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(t,i,o,r,l,n,a,f,u,h){var c=e.call(this)||this;c.effects=h;var p=s.FillMaterialKey.load(s.createMaterialKey(c.geometryType,t,!1));return i&&(p.sdf=i.sdf,p.pattern=!0,p.textureBinding=i.textureBinding),c.fillColor=o,c.tl=r,c.br=l,c.aux1=n,c.aux2=a,c.aux3=f,c.isBFS=u,c._materialKey=p.data,c}return i.__extends(t,e),t.fromCIMFill=function(e,i,n,s){void 0===s&&(s=!1);var u=i.color,h=u&&l.premultiplyAlphaRGBA(u)||0;if(!n)return new t(e,null,h,0,0,0,0,f.i8888to32(0,0,0,i.colorLocked?1:0),s,i.effects);var c=n.rect,p=n.width,x=n.height,w=c.x+1,d=c.y+1,g=w+p,v=d+x,y=o.nextHighestPowerOfTwo(r.pt2px(i.height||0));y>255?y=255:y<=0&&(y=o.nextHighestPowerOfTwo(v-d));var m=o.nextHighestPowerOfTwo(r.pt2px(i.height/x*p||0));m>255?m=255:m<=0&&(m=o.nextHighestPowerOfTwo(g-w));var T=r.pt2px(i.offsetX||0)+128;T>255&&(T=255);var O=r.pt2px(-i.offsetY||0)+128;O>255&&(O=255);var P=i.scaleX||1;return new t(e,n,h,f.i1616to32(w,d),f.i1616to32(g,v),f.i8888to32(m,y,T,O),f.i1616to32(128*P,128),f.i8888to32(0,0,a.degToByte(i.angle),i.colorLocked?1:0),s,i.effects)},t.fromSimpleFill=function(e,i,r,n){void 0===n&&(n=!1);var a=i.color,s=a&&"none"!==i.style&&l.premultiplyAlphaRGBA(a)||0,u=f.i8888to32(0,0,0,n?255:0);if(!r)return new t(e,null,s,0,0,0,0,u,n,null);var h=r.rect,c=r.width,p=r.height,x=h.x+1,w=h.y+1,d=h.x+1+c,g=h.y+1+p;return new t(e,r,s,f.i1616to32(x,w),f.i1616to32(d,g),f.i8888to32(o.nextHighestPowerOfTwo(d-x),o.nextHighestPowerOfTwo(g-w),0,0),f.i1616to32(128,128),u,n,null)},t.fromPictureFill=function(e,i,l,a){void 0===a&&(a=!1);var s=n.PICTURE_FILL_COLOR,u=l.rect,h=l.width,c=l.height,p=u.x+1,x=u.y+1,w=p+h,d=x+c,g=f.i1616to32(p,x),v=f.i1616to32(w,d),y=o.nextHighestPowerOfTwo(r.pt2px(i.width));y>255&&(y=255);var m=o.nextHighestPowerOfTwo(r.pt2px(i.height));m>255&&(m=255);var T=r.pt2px(i.xoffset)+128;T>255&&(T=255);var O=r.pt2px(-i.yoffset)+128;return O>255&&(O=255),new t(e,l,s,g,v,f.i8888to32(y,m,T,O),f.i1616to32(128*i.xscale,128*i.yscale),f.i8888to32(0,0,0,a?255:0),a,null)},t}(u.default(h.default));t.default=c}));