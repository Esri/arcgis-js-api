// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","./enums","./MaterialInfoUtils","./shaders/MaterialPrograms","../../../webgl/programUtils"],function(r,e,o,i,p,a){return function(){function r(r){this._programByKey=new Map,this._programCache=new a.ProgramCache(r)}return r.prototype.dispose=function(){this._programCache&&this._programCache.dispose()},r.prototype.getProgram=function(r,e){if(r|=e===o.WGLDrawPhase.HITTEST?8:0,r|=e===o.WGLDrawPhase.HIGHLIGHT?16:0,this._programByKey[r])return this._programByKey[r];var a=i.getMaterialVariations(r),t=null;switch(a.geometryType){case o.WGLGeometryType.MARKER:t=this._programCache.getProgram(p.icon,a.programOptions);break;case o.WGLGeometryType.TEXT:t=this._programCache.getProgram(p.text,a.programOptions);break;case o.WGLGeometryType.LABEL:t=this._programCache.getProgram(p.label,a.programOptions);break;case o.WGLGeometryType.FILL:t=this._programCache.getProgram(p.fill,a.programOptions);break;case o.WGLGeometryType.LINE:t=this._programCache.getProgram(p.line,a.programOptions)}return t&&(this._programByKey[r]=t),t},r}()});