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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","./polyfill/tsSupport/awaiter","./polyfill/tsSupport/generator"],(function(t,e,r,i){"use strict";return function(){function t(){this.declaredRootClass="esri.arcade.featureSetCollection",this._layerById={},this._layerByName={}}return t.prototype.add=function(t,e,r){this._layerById[e]=r,this._layerByName[t]=r},t.prototype.featureSetByName=function(t,e,o){return void 0===e&&(e=!0),void 0===o&&(o=["*"]),r(this,void 0,void 0,(function(){return i(this,(function(e){return void 0===this._layerByName[t]?[2,null]:[2,this._layerByName[t]]}))}))},t.prototype.featureSetById=function(t,e,o){return void 0===e&&(e=!0),void 0===o&&(o=["*"]),r(this,void 0,void 0,(function(){return i(this,(function(e){return void 0===this._layerById[t]?[2,null]:[2,this._layerById[t]]}))}))},t.prototype.castToText=function(t){return void 0===t&&(t=!1),"object, FeatureSetCollection"},t}()}));