/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/screenUtils","../cim/CIMSymbolRasterizer","./cimSymbolUtils"],(function(e,t,l,a,i){"use strict";const n=new a.CIMSymbolRasterizer(null,!0),o=120;function s(e){return c.apply(this,arguments)}function c(){return(c=t._asyncToGenerator((function*(e,t={}){const{size:a,maxSize:s,node:c,opacity:r}=t,u=t.cimOptions||t,{feature:y,fieldMap:m,geometryType:p,style:d}=u,h=i.getCIMSymbolSize(e),b=Math.min(null!=a?a:h,null!=s?s:l.px2pt(o));b!==h&&(e=e.clone(),i.scaleCIMSymbolTo(e,b,{preserveOutlineWidth:!0}));let g=3;e&&e.data&&e.data.symbol&&"CIMPointSymbol"!==e.data.symbol.type&&(g=1);const M=yield n.rasterizeCIMSymbolAsync(e,y,m,p,{scaleFactor:g,style:d}),S=document.createElement("canvas");S.width=M.imageData.width,S.height=M.imageData.height;S.getContext("2d").putImageData(M.imageData,0,0);let f=S.width/g,C=S.height/g;if(null!=a&&(null==(null==t?void 0:t.scale)||(null==t?void 0:t.scale))){const e=f/C;f=e<=1?Math.ceil(b*e):b,C=e<=1?b:Math.ceil(b/e)}const I=new Image(f,C);return I.src=S.toDataURL(),null!=r&&(I.style.opacity=`${r}`),c&&c.appendChild(I),I}))).apply(this,arguments)}e.previewCIMSymbol=s,Object.defineProperty(e,"__esModule",{value:!0})}));
