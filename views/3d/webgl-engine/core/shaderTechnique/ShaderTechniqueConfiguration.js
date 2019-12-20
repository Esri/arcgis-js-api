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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/mathUtils"],function(e,t,r){function i(e){return void 0===e&&(e={}),function(t,i){var o=t;o.__configurationParameters=o.__configurationParameters||[],o.__configurationParameters.push(i);var n="_"+i;void 0===o.__configurationParameters__offset&&(o.__configurationParameters__offset=0);var a=o.__configurationParameters__offset,f=e.count||2,u=Math.ceil(r.log2(f)),s=(1<<u)-1,_=s<<a;if(o.__configurationParameters__offset+=u,o.__configurationParameters__offset>=32)throw new Error("ShaderTechniqueConfiguration is too complex, requiring more than 32 bits to encode.\n      Either the configuration must be simplified, or this restriction must be relaxed.(Currently used: "+o.__configurationParameters__offset+")");Object.defineProperty(o,i,{get:function(){return this[n]},set:function(e){this.key=this.key&~_|e<<a&_,this[n]=e}})}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){this.key=0}return e}();t.ShaderTechniqueConfiguration=o,t.parameter=i});