// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/typescript","./errorMessages","./ExtensionBase","./messageHandler"],function(e,t,o,s,r,n,i,a){var c=function(e){function t(t){e.call(this),this.config=null}return o(t,e),t.prototype._setConfig=function(e){this.config=e||{}},t.prototype.__messageReceived=function(e){return"updateconfig"===e.functionName.toLowerCase()?(e.args={configuration:this.config},a._sendMessage(e)):void this.inherited(arguments)},t.prototype.readyToPersistConfig=function(e){if(!this._isHostInitialized())throw new Error(n.hostNotReady);a._sendMessage({functionName:"readyToPersistConfig",args:{canAccept:e}})},s([r.shared("esri.opsdashboard.ExtensionConfigurationBase")],t.prototype,"declaredClass",void 0),t=s([r.subclass()],t)}(i);return c});