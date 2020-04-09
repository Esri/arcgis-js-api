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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/tsSupport/assignHelper","../VertexStream","../WGLRasterUtils","./WGLBrush"],(function(e,t,r,s,a,i,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._desc={lut:{path:"raster/lut",attributes:{a_position:0,a_texcoord:1}},stretch:{path:"raster/stretch",attributes:{a_position:0,a_texcoord:1}}},t}return r(t,e),t.prototype.dispose=function(){this._quad&&this._quad.dispose()},t.prototype.prepareState=function(e,t){var r=e.context;r.setBlendingEnabled(!0),r.setBlendFunctionSeparate(1,771,1,771),r.setColorMask(!0,!0,!0,!0),r.setStencilWriteMask(0),r.setStencilTestEnabled(!0),r.setStencilFunction(514,t.stencilRef,255)},t.prototype.draw=function(e,t){var r=e.context,n=e.painter;if(t.source&&!t.suspended){e.timeline.begin(this.name),this._quad||(this._quad=new a(r,[0,0,1,0,0,1,1,1]));var o=n.materialManager.getProgram(e,this._desc[t.symbolizerParameters.type]);r.bindProgram(o);var u=i.getUniformInfos(r,o),p=t.getTextures(),c=p.names,d=p.textures;i.setTextures(r,o,c,d);var l=t.getUniforms(),f=s({u_opacity:t.opacity,u_coordScale:t.coordScale},l);f.u_flipY=!1,i.setUniforms(r,o,u,f),this._quad.draw(),e.timeline.end(this.name)}},t}(n.default);t.default=o}));