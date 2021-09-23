/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../definitions","../enums","../number","./WGLBrush"],(function(t,e,i,n,a,r,o){"use strict";const l=1/65536;let s=function(t){function o(){var e;return(e=t.apply(this,arguments)||this)._fillProgramOptions={id:!1,pattern:!1},e._outlineProgramOptions={id:!1},e}e._inheritsLoose(o,t);var s=o.prototype;return s.dispose=function(){},s.drawMany=function(t,e){const{displayLevel:i,drawPhase:n,renderPass:o,spriteMosaic:l,styleLayerUID:s}=t;let f=!1;for(const a of e)if(a.layerData.has(s)){const t=a.layerData.get(s);if(t.fillIndexCount>0||t.outlineIndexCount>0){f=!0;break}}if(!f)return;const u=t.styleLayer,c=u.getPaintProperty("fill-pattern"),d=void 0!==c,_=d&&c.isDataDriven;let p;if(d&&!_){const t=c.getValue(i);p=l.getMosaicItemPosition(t,!0)}const T=!d&&u.getPaintValue("fill-antialias",i);let m=!0,y=1;if(!d){const t=u.getPaintProperty("fill-color"),e=u.getPaintProperty("fill-opacity");if(!(null!=t&&t.isDataDriven||null!=e&&e.isDataDriven)){const t=u.getPaintValue("fill-color",i);y=u.getPaintValue("fill-opacity",i)*t[3],y>=1&&(m=!1)}}if(m&&"opaque"===o)return;let P;n===a.WGLDrawPhase.HITTEST&&(P=r.u32to4Xu8(s+1));const g=u.getPaintValue("fill-translate",i),E=u.getPaintValue("fill-translate-anchor",i);(m||"translucent"!==o)&&this._drawFill(t,s,u,e,g,E,d,p,_,P);const v=!u.hasDataDrivenOutlineColor&&u.outlineUsesFillColor&&y<1;T&&"opaque"!==o&&!v&&this._drawOutline(t,s,u,e,g,E,P)},s._drawFill=function(t,e,r,o,s,f,u,c,d,_){if(u&&!d&&i.isNone(c))return;const{context:p,displayLevel:T,state:m,drawPhase:y,painter:P,pixelRatio:g,spriteMosaic:E}=t,v=r.fillMaterial,I=P.vectorTilesMaterialManager,M=g>n.VTL_HIGH_RES_CUTOFF?2:1,U=y===a.WGLDrawPhase.HITTEST,h=this._fillProgramOptions;h.id=U,h.pattern=u;const S=I.getMaterialProgram(p,v,h);if(p.useProgram(S),i.isSome(c)){const{page:t}=c,e=E.getPageSize(t);i.isSome(e)&&(E.bind(p,9729,t,n.VTL_TEXTURE_BINDING_UNIT_SPRITES),S.setUniform2fv("u_mosaicSize",e),S.setUniform1i("u_texture",n.VTL_TEXTURE_BINDING_UNIT_SPRITES))}S.setUniformMatrix3fv("u_displayMat3",1===f?m.displayMat3:m.displayViewMat3),S.setUniform2fv("u_fillTranslation",s),S.setUniform1f("u_depth",r.z+l),U&&S.setUniform4fv("u_id",_);let x=-1;for(const a of o){if(!a.layerData.has(e))continue;a.key.level!==x&&(x=a.key.level,v.setDataUniforms(S,T,r,x,E));const t=a.layerData.get(e);if(!t.fillIndexCount)continue;t.prepareForRendering(p);const o=t.fillVertexArrayObject;if(!i.isNone(o)){if(p.bindVAO(o),S.setUniformMatrix3fv("u_dvsMat3",a.transforms.dvs),p.setStencilFunction(514,a.stencilRef,255),u){const t=Math.max(2**(Math.round(T)-a.key.level),1),e=a.rangeX/(M*a.width*t);S.setUniform1f("u_patternFactor",e)}if(d){const e=t.patternMap;if(!e)continue;for(const[t,a]of e){const e=E.getPageSize(t);i.isSome(e)&&(E.bind(p,9729,t,n.VTL_TEXTURE_BINDING_UNIT_SPRITES),S.setUniform2fv("u_mosaicSize",e),S.setUniform1i("u_texture",n.VTL_TEXTURE_BINDING_UNIT_SPRITES),p.drawElements(4,a[1],5125,Uint32Array.BYTES_PER_ELEMENT*a[0]))}}else p.drawElements(4,t.fillIndexCount,5125,Uint32Array.BYTES_PER_ELEMENT*t.fillIndexStart);a.triangleCount+=t.fillIndexCount/3}}},s._drawOutline=function(t,e,n,r,o,s,f){const{context:u,displayLevel:c,state:d,drawPhase:_,painter:p,pixelRatio:T,spriteMosaic:m}=t,y=n.outlineMaterial,P=p.vectorTilesMaterialManager,g=.75/T,E=_===a.WGLDrawPhase.HITTEST,v=this._outlineProgramOptions;v.id=E;const I=P.getMaterialProgram(u,y,v);u.useProgram(I),I.setUniformMatrix3fv("u_displayMat3",1===s?d.displayMat3:d.displayViewMat3),I.setUniform2fv("u_fillTranslation",o),I.setUniform1f("u_depth",n.z+l),I.setUniform1f("u_outline_width",g),E&&I.setUniform4fv("u_id",f);let M=-1;for(const a of r){if(!a.layerData.has(e))continue;a.key.level!==M&&(M=a.key.level,y.setDataUniforms(I,c,n,M,m));const t=a.layerData.get(e);if(t.prepareForRendering(u),!t.outlineIndexCount)continue;const r=t.outlineVertexArrayObject;i.isNone(r)||(u.bindVAO(r),I.setUniformMatrix3fv("u_dvsMat3",a.transforms.dvs),u.setStencilFunction(514,a.stencilRef,255),u.drawElements(4,t.outlineIndexCount,5125,Uint32Array.BYTES_PER_ELEMENT*t.outlineIndexStart),a.triangleCount+=t.outlineIndexCount/3)}},o}(o);t.WGLBrushVTLFill=s,Object.defineProperty(t,"__esModule",{value:!0})}));
