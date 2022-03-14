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

define(["dojo/_base/lang","../ElementBuilder","../text/TextMeasurer","../text/TextStyleBuilder"],(function(t,e,x,o){var n={drawText:function(n,l,a,f){var h=x.getBoxes(n,l,a);if(!h||!h.boxes.length)return null;var u=[];return function(e,x){for(var o,n=[],l=0===x.style.whiteSpace.indexOf("pre"),a=x.style.textAlign,f=0;f<e.length;f++){var h=e[f];if(l||"justify"!==a||h.text.trim()){if(l&&"justify"===a&&o&&(h.text.trim()?o.text.trim()||(o=null):o.text.trim()&&(o=null)),o){var u=i.test(h.text),c=o._isRtl===u;if(s(o,h)&&c){var y=h.box.x+h.box.w/2>o.box.x+o.box.w/2,g=o.box.x-(h.box.x+h.box.w),w=h.box.x-(o.box.x+o.box.w),d=!u&&y&&Math.abs(w)<=.1,v=u&&!y&&Math.abs(g)<=.1;if(d||v){o.text+=h.text,o.box.h=Math.max(o.box.y+o.box.h,h.box.y+h.box.h)-Math.min(o.box.y,h.box.y),o.box.y=Math.min(o.box.y,h.box.y),o._isRtl?(o.box.x-=h.box.w+g,o.box.w+=h.box.w+g):o.box.w+=h.box.w+w,o._boxes.push(h);continue}}}o={_isRtl:i.test(h.text),text:h.text,box:t.mixin({},h.box),_boxes:[h]},n.push(o)}else o=null}l||"justify"!==a||b(n).forEach((function(t,e,o){if(!(t.boxes.length<2||e===o.length-1)){t.boxes.sort((function(t,e){t.box.x,e.box.x}));var n=0;t.boxes.forEach((function(t){n+=t.box.w}));var i=(x.style.cw-n)/(t.boxes.length-1),s=x.style.getPaddings().l+x.style.getBorder().l.width;t.boxes.forEach((function(t){t.box.x=s,s+=t.box.w+i}))}}));l&&"left"===a&&b(n).forEach((function(t,e,x){!t.isNewLine&&r(t)}));l&&"justify"===a&&b(n).forEach((function(t,e,o){if(t.boxes.length<2||t.isLastLine)t.isLastLine&&r(t);else{t.boxes.sort((function(t,e){t.box.x,e.box.x}));var n=0;t.isNewLine&&!t.boxes[0].text.trim()&&(n=t.boxes[0].box.w,t.boxes.shift()),t.boxes=t.boxes.filter((function(t){return!(!t.text.trim()&&t._boxes.length<2)}));var i=0;t.boxes.forEach((function(t){i+=t.box.w}));var s=(x.style.cw-n-i)/(t.boxes.length-1),b=n+x.style.getPaddings().l+x.style.getBorder().l.width;t.boxes.forEach((function(t){t.box.x=b,b+=t.box.w+s}))}}));return n}(h.boxes,a).forEach((function(t){if(t.text.trim()){var x={fill:a.style.color,x:a.box.x+t.box.x,y:a.box.y+t.box.y+(a.style.fontSize-(.5+.0375*(a.style.fontSize-10))),style:o.buildTextStyleString(a,a.isLink?{"text-decoration":"underline"}:void 0),opacity:a.style.opacity*a.style.colorOpacity,transform:a.style.transform,clipParams:f,"text-anchor":"start"},n=e.buildElement("text",x,t.text.replace("\n",""));a.isLink&&(n=e.buildElement("a",{"xlink:href":a.href,target:a.target},n)),u.push(n)}})),u}},i=new RegExp("^[^A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿Ⰰ-﬜﷾-﹯﻽-￿]*[֑-߿יִ-﷽ﹰ-ﻼ]");function s(t,e){var x=t.box.y+t.box.h/2;return x>e.box.y&&x<e.box.y+e.box.h}function b(t){var e,x=[];t.forEach((function(t,o){if(e&&s(e.boxes[0],t))e.boxes.push(t);else{var n=x.length&&x[x.length-1],i=n&&n.boxes[n.boxes.length-1];e={boxes:[t],isNewLine:0===o||i&&i.text.indexOf("\n")===i.text.length-1,isLastLine:!1},x.push(e)}}));for(var o=1;o<x.length;o++){var n=x[o],i=x[o-1];n.isNewLine&&(i.isLastLine=!0)}return x.length&&(x[x.length-1].isLastLine=!0),x}function r(t){var e=t.boxes[0],x=t.boxes[1],o=e._boxes[0],n=e._boxes[1]||x&&x._boxes[0];!o.text.trim()&&n&&n.text.trim()&&(e._boxes.shift(),e.text=e.text.replace(o.text,""),e.box.w-=o.box.w,t.boxes.forEach((function(t,e){e>0&&(t.box.x-=o.box.w)})))}return n}));