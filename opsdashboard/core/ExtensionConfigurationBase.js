// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/declare","./messageHandler","./errorMessages","./ExtensionBase"],(function(e,n,i,s){return e([s],{config:null,_setConfig:function(e){this.config=e||{}},__messageReceived:function(e){if("updateconfig"===e.functionName.toLowerCase())return e.args={configuration:this.config},n._sendMessage(e);this.inherited(arguments)},readyToPersistConfig:function(e){if(!this._isHostInitialized())throw new Error(i.hostNotReady);n._sendMessage({functionName:"readyToPersistConfig",args:{canAccept:e}})}})}));