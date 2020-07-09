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

define(["require","exports","../../../../../../core/Logger","../../../../../webgl","../../definitions","./parameters"],(function(o,i,t,e,l,r){Object.defineProperty(i,"__esModule",{value:!0});var n=t.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");var h=[0,0,0,0],a=function(){function o(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:r.HIGHLIGHT_SIZING.outlinePosition,outlineWidth:r.HIGHLIGHT_SIZING.outlineWidth,innerHaloWidth:r.HIGHLIGHT_SIZING.innerHaloWidth,outerHaloWidth:r.HIGHLIGHT_SIZING.outerHaloWidth},this.shadeTexChanged=!0,this.texelData=new Uint8Array(4*r.SHADE_TEXTURE_SIZE),this.minMaxDistance=[0,0]}return o.prototype.setHighlightOptions=function(o){var i,t,e,l,a=this._convertedHighlightOptions;e=o,(l=a).fillColor[0]=e.color.r/255,l.fillColor[1]=e.color.g/255,l.fillColor[2]=e.color.b/255,l.fillColor[3]=e.color.a,e.haloColor?(l.outlineColor[0]=e.haloColor.r/255,l.outlineColor[1]=e.haloColor.g/255,l.outlineColor[2]=e.haloColor.b/255,l.outlineColor[3]=e.haloColor.a):(l.outlineColor[0]=l.fillColor[0],l.outlineColor[1]=l.fillColor[1],l.outlineColor[2]=l.fillColor[2],l.outlineColor[3]=l.fillColor[3]),l.fillColor[3]*=e.fillOpacity,l.outlineColor[3]*=e.haloOpacity,l.fillColor[0]*=l.fillColor[3],l.fillColor[1]*=l.fillColor[3],l.fillColor[2]*=l.fillColor[3],l.outlineColor[0]*=l.outlineColor[3],l.outlineColor[1]*=l.outlineColor[3],l.outlineColor[2]*=l.outlineColor[3],l.outlineWidth=r.HIGHLIGHT_SIZING.outlineWidth,l.outerHaloWidth=r.HIGHLIGHT_SIZING.outerHaloWidth,l.innerHaloWidth=r.HIGHLIGHT_SIZING.innerHaloWidth,l.outlinePosition=r.HIGHLIGHT_SIZING.outlinePosition;var s,u=a.outlinePosition-a.outlineWidth/2-a.outerHaloWidth,d=a.outlinePosition-a.outlineWidth/2,H=a.outlinePosition+a.outlineWidth/2,f=a.outlinePosition+a.outlineWidth/2+a.innerHaloWidth,C=Math.sqrt(Math.PI/2)*r.SIGMAS[3],g=Math.abs(u)>C?Math.round(10*(Math.abs(u)-C))/10:0,I=Math.abs(f)>C?Math.round(10*(Math.abs(f)-C))/10:0;g&&!I?n.error("The outer rim of the highlight is "+g+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!g&&I?n.error("The inner rim of the highlight is "+I+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):g&&I&&n.error("The highlight is "+Math.max(g,I)+"px away from the edge of the feature; consider reducing some width values.");var T=[void 0,void 0,void 0,void 0];function p(o,i,t){T[0]=(1-t)*o[0]+t*i[0],T[1]=(1-t)*o[1]+t*i[1],T[2]=(1-t)*o[2]+t*i[2],T[3]=(1-t)*o[3]+t*i[3]}for(var G=this.texelData,c=0;c<r.SHADE_TEXTURE_SIZE;++c)(s=u+c/(r.SHADE_TEXTURE_SIZE-1)*(f-u))<u?(T[4*c+0]=0,T[4*c+1]=0,T[4*c+2]=0,T[4*c+3]=0):s<d?p(h,a.outlineColor,(s-u)/(d-u)):s<H?(i=a.outlineColor,T[0]=i[0],T[1]=i[1],T[2]=i[2],T[3]=i[3]):s<f?p(a.outlineColor,a.fillColor,(s-H)/(f-H)):(t=a.fillColor,T[4*c+0]=t[0],T[4*c+1]=t[1],T[4*c+2]=t[2],T[4*c+3]=t[3]),G[4*c+0]=255*T[0],G[4*c+1]=255*T[1],G[4*c+2]=255*T[2],G[4*c+3]=255*T[3];this.minMaxDistance[0]=u,this.minMaxDistance[1]=f,this.shadeTexChanged=!0},o.prototype.applyHighlightOptions=function(o,i){this.shadeTex||(this.shadeTex=new e.Texture(o,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,width:r.SHADE_TEXTURE_SIZE,height:1,samplingMode:9729})),this.shadeTexChanged&&(this.shadeTex.updateData(0,0,0,r.SHADE_TEXTURE_SIZE,1,this.texelData),this.shadeTexChanged=!1),o.bindTexture(this.shadeTex,l.TEXTURE_BINDING_HIGHLIGHT_1),i.setUniform2fv("u_minMaxDistance",this.minMaxDistance)},o.prototype.destroy=function(){this.shadeTex&&(this.shadeTex.dispose(),this.shadeTex=null)},o}();i.default=a}));