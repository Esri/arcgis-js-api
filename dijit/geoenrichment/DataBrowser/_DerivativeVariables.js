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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/i18n!../../../nls/jsapi"],(function(e,t,i,r){r=r.geoenrichment.dijit.VariableStore;var a=function(){function e(e,t){var i=r[e];return void 0!==i?i:t}var t=e("number","#"),i=e("percent","%"),a=e("average","Avg"),s=e("index","Index"),n=e("reliability","Reliability");return{_N_P:{labels:[t,i],names:["_N","_P"]},_N_A:{labels:[t,a],names:["_N","_A"]},_N_I:{labels:[t,s],names:["_N","_I"]},_N_R:{labels:[t,n],names:["_N","_R"]},_N_P_I:{labels:[t,i,s],names:["_N","_P","_I"]},_N_A_I:{labels:[t,a,s],names:["_N","_A","_I"]},_N_P_R:{labels:[t,i,n],names:["_N","_P","_R"]}}};return a=a(),e(null,{_statesHash:null,_getDataCollections:function(e){var t=this.variableFields;return t&&(t=t.slice()).push("derivative"),this._statesHash={},this._getGeoenrichmentTask().getDataCollections(e,null,t,["all"])},_processDataCollections:function(e){this.inherited(arguments),i.forEach(this._data,this._processDerivativeVariable,this)},_processDerivativeVariable:function(e){e.derivative=!!e.derivative;var t=this._getDerivingState(e);if(t){var i=this._getBaseVariable(e,t);i&&(i._base=!0,i[t]=!0,e.derivative=t,this._registerTogether(e,i))}},_getDerivingState:function(e){var t=e.id;return e.derivative?t.substr(t.length-2):"US"==this.getCurrentCountryID()&&"REL"==t.substr(0,3)?"_R":null},_getBaseVariable:function(e,t){var i=e.id,r="_R"===t?"ACS"+i.substr(3):i.substr(0,i.length-2);return this.get(this._composeIdentity(e,r))},_registerTogether:function(e,t){var i=this._composeIdentity(t,e.id);this._variables[i]=e},_composeIdentity:function(e,t){var i=e[this.idProperty];return(i=i.substr(0,i.length-e.id.length-1))+"."+t},queryFilter:function(e){return"string"!=typeof e.derivative},getStates:function(e){var t=this.get(e);if(t&&"string"==typeof t.derivative&&(t=this._getBaseVariable(t,t.derivative)),!t||!t._base)return null;var i=this._statesHash[t[this.idProperty]];return void 0===i&&(i=this._createStates(t),this._statesHash[t[this.idProperty]]=i),i},_createStates:function(e){var r="_N";e._P&&(r+="_P"),e._A&&(r+="_A"),e._I&&(r+="_I"),e._R&&(r+="_R");var s=a[r];return s&&((s=t.mixin({},s)).ids=i.map(s.names,(function(t){return this._getRelatedVariable(e,t)[this.idProperty]}),this)),s||null},_getRelatedVariable:function(e,t){if("_N"==t)return e;var i=e.id,r="_R"===t?"REL"+i.substr(3):i+t;return this.get(this._composeIdentity(e,r))}})}));