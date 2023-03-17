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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/dom-construct","esri/dijit/geoenrichment/utils/ShapeUtil","./ShapeBarFlowDirections","./ShapeScaleAnchorPositions"],(function(t,e,o,l){var a={};function r(o,l,a,r){var i=r?r.l:0,s=r?r.t:0,h=r&&r.w||o.shapeW,c=r&&r.h||o.shapeH,n=t.create("div",{class:"shapeContainer_svgContainerElement"},a);n.style.top=s+"px",n.style.left=i+"px",n.style.width=h+"px",n.style.height=c+"px";var d=e.createSVGFromJson({viewBox:o.viewBox,g:o.g},h,c,l,{noDefaults:!0,preserveAspectRatio:o.preserveAspectRatio,ignoreFillOpacity:!0,borderScale:!o.supportNonScalingStroke});return t.place(d,n),o._svgNode=d,n}function i(t){return e.calcContentBox({viewBox:t.viewBox,g:t.g},t.shapeW,t.shapeH,t.shapeStyle,{preserveAspectRatio:t.preserveAspectRatio})}return a.renderElements=function(e){e.bar?e.bar.singleIcon?function(e){e.shapeW,e.shapeH;var l=function(t){var e=Math.max(0,Math.min(1,t.value)),l={t:0,r:0,b:0,l:0,w:void 0,h:void 0,childBox:{l:0,t:0}},a={t:0,r:0,b:0,l:0,w:void 0,h:void 0,childBox:{l:0,t:0}},r=t.shapeW,s=t.shapeH,h=i(t),c=t.borderWidth/2;switch(t.bar.flowDirection){case o.UP:var n=h.b+e*h.h;l.t="auto",l.h=n+c,l.l=-c,l.r=-c,l.b=-c,l.childBox.t=-c,l.childBox.l=c,a.t="auto",a.b=n,a.h=s-n+c,a.l=-c,a.r=-c,a.childBox.t=0,a.childBox.l=c;break;case o.DOWN:var d=h.y+e*h.h;l.b="auto",l.h=d+c,l.l=-c,l.r=-c,l.t=-c,l.childBox.t=c,l.childBox.l=c,a.b="auto",a.t=d,a.h=s-d+c,a.l=-c,a.r=-c,a.childBox.t=0,a.childBox.l=c;break;case o.LEFT:var p=h.r+e*h.w;l.l="auto",l.w=p+c,l.t=-c,l.b=-c,l.r=-c,l.childBox.t=c,l.childBox.l=-c,a.l="auto",a.r=p,a.w=r-p+c,a.t=-c,a.b=-c,a.childBox.t=c,a.childBox.l=0;break;default:var x=h.x+e*h.w;l.r="auto",l.w=x+c,l.t=-c,l.b=-c,l.l=-c,l.childBox.t=c,l.childBox.l=c,a.r="auto",a.l=x,a.w=r-x+c,a.t=-c,a.b=-c,a.childBox.t=c,a.childBox.l=0}return{v:l,bg:a}}(e);function a(a){var i=t.create("div",{class:"esriGEAbsoluteStretched shapeContainer_svgContainer shapeContainer_svgContainerShowAsBar"},e.content);function s(t,e){"number"==typeof t&&(t=Math.round(t)+"px"),"string"==typeof t&&(i.style[e]=t)}var h=a?l.bg:l.v;s(h.t,"top"),s(h.r,"right"),s(h.b,"bottom"),s(h.l,"left"),s(h.w,"width"),s(h.h,"height");var c=r(e,a?e.bgStyle:e.shapeStyle,i);switch(c.style.top="auto",c.style.left="auto",e.bar.flowDirection){case o.UP:c.style.bottom=(a?-h.b:0)-h.childBox.t+"px",c.style.left=h.childBox.l+"px";break;case o.DOWN:c.style.top=(a?-h.t:0)+h.childBox.t+"px",c.style.left=h.childBox.l+"px";break;case o.LEFT:c.style.top=h.childBox.t+"px",c.style.right=(a?-h.r:0)-h.childBox.l+"px";break;default:c.style.top=h.childBox.t+"px",c.style.left=(a?-h.l:0)+h.childBox.l+"px"}}e.bar.showBackground&&a(!0),a()}(e):function(e){var l=e.shapeW,a=e.shapeH,s=function(t){var e,l,a=i(t),r=Math.max(0,Math.min(1,t.value)),s=t.bar.spaceBetween||0,h=!t.bar.flowDirection||o.isHorizontal(t.bar.flowDirection),c=h?t.width:t.height,n=h?t.shapeW:t.shapeH;l=Math.max(1,Math.floor((c+s)/(Math.max(n,1)+s))),e=t.bar.wholeIcons?Math.round(r*l):Math.ceil(r*l);var d={t:0,r:0,b:0,l:0,w:void 0,h:void 0,offset:{t:0,r:0,b:0,l:0},childBox:{l:0,t:0},numShapes:e},p={t:0,r:0,b:0,l:0,w:void 0,h:void 0,offset:{t:0,r:0,b:0,l:0},childBox:{l:0,t:0},numShapes:l},x=(t.shapeW+s)*(h?l:1)-s,b=(t.shapeH+s)*(h?1:l)-s,f=h?x:b,u=Math.floor(l*r),v=l*r-u;t.bar.wholeIcons&&(v=Math.round(v));var B=0;switch(t.bar.flowDirection){case o.UP:B=a.b;break;case o.DOWN:B=a.y;break;case o.LEFT:B=a.r;break;default:B=a.x}var y=u*(n+s)+B+a[h?"w":"h"]*v;r=y/f;var w=(t.width-t.shapeW)/2,g=(t.height-t.shapeH)/2,S=t.borderWidth/2;switch(t.bar.flowDirection){case o.UP:var m=r*b;d.t="auto",d.h=m+S,d.offset.l=w,d.l=-S,d.r=-S,d.b=-S,d.childBox.t=-S,d.childBox.l=S,p.t="auto",p.b=m,p.h=b-m+S,p.offset.l=w,p.l=-S,p.r=-S,p.childBox.t=0,p.childBox.l=S;break;case o.DOWN:var k=r*b;d.b="auto",d.h=k+S,d.offset.l=w,d.l=-S,d.r=-S,d.t=-S,d.childBox.t=S,d.childBox.l=S,p.b="auto",p.t=k,p.h=b-k+S,p.offset.l=w,p.l=-S,p.r=-S,p.childBox.t=0,p.childBox.l=S;break;case o.LEFT:var M=r*x;d.l="auto",d.w=M+S,d.offset.t=g,d.t=-S,d.b=-S,d.r=-S,d.childBox.t=S,d.childBox.l=-S,p.l="auto",p.r=M,p.w=x-M+S,p.offset.t=g,p.t=-S,p.b=-S,p.childBox.t=S,p.childBox.l=0;break;default:var T=r*x;d.r="auto",d.w=T+S,d.offset.t=g,d.t=-S,d.b=-S,d.l=-S,d.childBox.t=S,d.childBox.l=S,p.r="auto",p.l=T,p.w=x-T+S,p.offset.t=g,p.t=-S,p.b=-S,p.childBox.t=S,p.childBox.l=0}return{v:d,bg:p}}(e);function h(i){var h=t.create("div",{class:"esriGEAbsoluteStretched shapeContainer_svgContainer shapeContainer_svgContainerShowAsBar"},e.content);function c(t){var s=r(e,i?e.bgStyle:e.shapeStyle,h);s.style.top="auto",s.style.left="auto";var c=e.bar.spaceBetween||0;switch(e.bar.flowDirection){case o.UP:s.style.bottom=t*(a+c)+(i?-d.b:0)-d.childBox.t+"px",s.style.left=d.childBox.l+"px";break;case o.DOWN:s.style.top=t*(a+c)+(i?-d.t:0)+d.childBox.t+"px",s.style.left=d.childBox.l+"px";break;case o.LEFT:s.style.top=d.childBox.t+"px",s.style.right=t*(l+c)+(i?-d.r:0)-d.childBox.l+"px";break;default:s.style.top=d.childBox.t+"px",s.style.left=t*(l+c)+(i?-d.l:0)+d.childBox.l+"px"}}function n(t,e,o){"number"==typeof t&&(t=Math.round(t+e)+"px"),"string"==typeof t&&(h.style[o]=t)}var d=i?s.bg:s.v;n(d.t,d.offset.t,"top"),n(d.r,d.offset.r,"right"),n(d.b,d.offset.b,"bottom"),n(d.l,d.offset.l,"left"),n(d.w,0,"width"),n(d.h,0,"height");for(var p=i?s.bg.numShapes:s.v.numShapes,x=0;x<p;x++)c(x)}e.bar.showBackground&&h(!0),h()}(e):e.scale?function(e){var o=function(t){var e=i(t),o=Math.max("number"==typeof t.scale.minScale?t.scale.minScale:a.MIN_SCALE,Math.min(1,t.value)),r=t.shapeW,s=t.shapeH,h=r*o,c=s*o,n={t:0,l:0,w:h,h:c};switch(t.scale.anchorPosition){case l.TOP_LEFT:n.t=e.y*(1-o),n.l=e.x*(1-o);break;case l.TOP:n.t=e.y*(1-o),n.l=(r-h)/2;break;case l.TOP_RIGHT:n.t=e.y*(1-o),n.l=r-h-e.r*(1-o);break;case l.LEFT:n.t=(s-c)/2,n.l=e.x*(1-o);break;case l.CENTER:n.t=(s-c)/2,n.l=(r-h)/2;break;case l.RIGHT:n.t=(s-c)/2,n.l=r-h-e.r*(1-o);break;case l.BOTTOM_LEFT:n.t=s-c-e.b*(1-o),n.l=e.x*(1-o);break;case l.BOTTOM_RIGHT:n.t=s-c-e.b*(1-o),n.l=r-h-e.r*(1-o);break;default:n.t=s-c-e.b*(1-o),n.l=(r-h)/2}return n}(e);function s(l){var a=t.create("div",{class:"esriGEAbsoluteStretched shapeContainer_svgContainer"},e.content),i=l?{l:0,t:0}:o,s=e.borderWidth/2;s&&(a.style.left=-s+"px",a.style.top=-s+"px",a.style.right=-s+"px",a.style.bottom=-s+"px",i.t+=s,i.l+=s),r(e,l?e.bgStyle:e.shapeStyleBuilder(o),a,i)}e.scale.showBackground&&s(!0),s()}(e):function(e){var o,l=t.create("div",{class:"esriGEAbsoluteStretched shapeContainer_svgContainer"},e.content),a=e.borderWidth/2;a&&(l.style.left=-a+"px",l.style.top=-a+"px",l.style.right=-a+"px",l.style.bottom=-a+"px",o={l:a,t:a});r(e,e.shapeStyle,l,o)}(e)},a.MIN_SCALE=.2,a}));