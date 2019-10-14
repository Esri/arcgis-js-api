// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/Logger","../../../../../webgl","../../definitions","./parameters"],function(o,i,t,e,l,p){Object.defineProperty(i,"__esModule",{value:!0});var G=t.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");var c=[0,0,0,0],r=function(){function o(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:p.HIGHLIGHT_SIZING.outlinePosition,outlineWidth:p.HIGHLIGHT_SIZING.outlineWidth,innerHaloWidth:p.HIGHLIGHT_SIZING.innerHaloWidth,outerHaloWidth:p.HIGHLIGHT_SIZING.outerHaloWidth},this.shadeTexChanged=!0,this.texelData=new Uint8Array(4*p.SHADE_TEXTURE_SIZE),this.minMaxDistance=[0,0]}return o.prototype.setHighlightOptions=function(o){var i,t,e,l,r=this._convertedHighlightOptions;e=o,(l=r).fillColor[0]=e.color.r/255,l.fillColor[1]=e.color.g/255,l.fillColor[2]=e.color.b/255,l.fillColor[3]=e.color.a,e.haloColor?(l.outlineColor[0]=e.haloColor.r/255,l.outlineColor[1]=e.haloColor.g/255,l.outlineColor[2]=e.haloColor.b/255,l.outlineColor[3]=e.haloColor.a):(l.outlineColor[0]=l.fillColor[0],l.outlineColor[1]=l.fillColor[1],l.outlineColor[2]=l.fillColor[2],l.outlineColor[3]=l.fillColor[3]),l.fillColor[3]*=e.fillOpacity,l.outlineColor[3]*=e.haloOpacity,l.fillColor[0]*=l.fillColor[3],l.fillColor[1]*=l.fillColor[3],l.fillColor[2]*=l.fillColor[3],l.outlineColor[0]*=l.outlineColor[3],l.outlineColor[1]*=l.outlineColor[3],l.outlineColor[2]*=l.outlineColor[3],l.outlineWidth=p.HIGHLIGHT_SIZING.outlineWidth,l.outerHaloWidth=p.HIGHLIGHT_SIZING.outerHaloWidth,l.innerHaloWidth=p.HIGHLIGHT_SIZING.innerHaloWidth,l.outlinePosition=p.HIGHLIGHT_SIZING.outlinePosition;var n,h=r.outlinePosition-r.outlineWidth/2-r.outerHaloWidth,a=r.outlinePosition-r.outlineWidth/2,s=r.outlinePosition+r.outlineWidth/2,u=r.outlinePosition+r.outlineWidth/2+r.innerHaloWidth,d=Math.sqrt(Math.PI/2)*p.SIGMAS[3],H=Math.abs(h)>d?Math.round(10*(Math.abs(h)-d))/10:0,f=Math.abs(u)>d?Math.round(10*(Math.abs(u)-d))/10:0;H&&!f?G.error("The outer rim of the highlight is "+H+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!H&&f?G.error("The inner rim of the highlight is "+f+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):H&&f&&G.error("The highlight is "+Math.max(H,f)+"px away from the edge of the feature; consider reducing some width values.");var C=[void 0,void 0,void 0,void 0];function g(o,i,t){C[0]=(1-t)*o[0]+t*i[0],C[1]=(1-t)*o[1]+t*i[1],C[2]=(1-t)*o[2]+t*i[2],C[3]=(1-t)*o[3]+t*i[3]}for(var I=this.texelData,T=0;T<p.SHADE_TEXTURE_SIZE;++T)(n=h+T/(p.SHADE_TEXTURE_SIZE-1)*(u-h))<h?(C[4*T+0]=0,C[4*T+1]=0,C[4*T+2]=0,C[4*T+3]=0):n<a?g(c,r.outlineColor,(n-h)/(a-h)):n<s?(i=r.outlineColor,C[0]=i[0],C[1]=i[1],C[2]=i[2],C[3]=i[3]):n<u?g(r.outlineColor,r.fillColor,(n-s)/(u-s)):(t=r.fillColor,C[4*T+0]=t[0],C[4*T+1]=t[1],C[4*T+2]=t[2],C[4*T+3]=t[3]),I[4*T+0]=255*C[0],I[4*T+1]=255*C[1],I[4*T+2]=255*C[2],I[4*T+3]=255*C[3];this.minMaxDistance[0]=h,this.minMaxDistance[1]=u,this.shadeTexChanged=!0},o.prototype.applyHighlightOptions=function(o,i){this.shadeTex||(this.shadeTex=new e.Texture(o,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,width:p.SHADE_TEXTURE_SIZE,height:1,samplingMode:9729})),this.shadeTexChanged&&(this.shadeTex.updateData(0,0,0,p.SHADE_TEXTURE_SIZE,1,this.texelData),this.shadeTexChanged=!1),o.bindTexture(this.shadeTex,l.TEXTURE_BINDING_HIGHLIGHT_1),i.setUniform2fv("u_minMaxDistance",this.minMaxDistance)},o.prototype.destroy=function(){this.shadeTex&&(this.shadeTex.dispose(),this.shadeTex=null)},o}();i.default=r});