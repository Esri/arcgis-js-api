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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","./enums","./MaterialInfoUtils","./shaders/MaterialPrograms","../../../webgl/programUtils"],function(r,e,a,t,i,o){return function(){function r(){this._programByKey=new Map,this.isInitialize=!1}return r.prototype.dispose=function(){this._programCache&&this._programCache.dispose()},r.prototype.initialize=function(r){this.isInitialize||(this._programCache=new o.ProgramCache(r),this.isInitialize=!0)},r.prototype.getProgram=function(r,e){if(r|=e===a.WGLDrawPhase.HITTEST?8:0,r|=e===a.WGLDrawPhase.HIGHLIGHT?16:0,this._programByKey[r])return this._programByKey[r];var o=t.getMaterialVariations(r),s=null;switch(o.geometryType){case a.WGLGeometryType.MARKER:s=this._programCache.getProgram(i.icon,o.programOptions);break;case a.WGLGeometryType.TEXT:s=this._programCache.getProgram(i.text,o.programOptions);break;case a.WGLGeometryType.LABEL:s=this._programCache.getProgram(i.label,o.programOptions);break;case a.WGLGeometryType.FILL:s=this._programCache.getProgram(i.fill,o.programOptions);break;case a.WGLGeometryType.LINE:s=this._programCache.getProgram(i.line,o.programOptions)}return s&&(this._programByKey[r]=s),s},r}()});