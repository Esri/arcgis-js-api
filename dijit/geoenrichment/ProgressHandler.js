// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/when","dojo/dom-class","dojo/query"],function(s,e,r,o,t){return s(null,{progressNode:null,progressPromises:null,busyClass:null,errorClass:null,_allStates:null,constructor:function(s,e){e=e||{},this.busyClass=e.busyClass||"Wizard_Loading",this.errorClass=e.errorClass||"Wizard_Error",this._allStates=[this.busyClass,this.errorClass];var r=e.progressClass||"Wizard_Progress";s?(this.progressNode=s,o.add(this.progressNode,r)):e.queryNode&&(this.progressNode=t("."+r,e.queryNode)[0]),this.progressPromises={}},showProgress:function(s,e){function o(){if(t.progressPromises[e]===s)return delete t.progressPromises[e],!0}if(e=e||"",s=r(s),s.isFulfilled())return this.progressPromises[e]&&(delete this.progressPromises[e],this._setState("done")),s;this.progressPromises[e]=s;var t=this;return this._setState("busy"),s.then(function(){o()&&t._setState("done")},function(s){o()&&("CancelError"==s.name?t._setState("done"):t._setState("error",s.toString()))}),s},cancelProgress:function(s){s=s||"",this.progressPromises[s]&&this.progressPromises[s].cancel()},_setState:function(s,e){this.progressNode&&("done"==s&&Object.keys(this.progressPromises).length||(this.progressNode.innerHTML=e||"",o.remove(this.progressNode,this._allStates),"done"!=s&&o.add(this.progressNode,this[s+"Class"])))},destroy:function(){for(var s=Object.keys(this.progressPromises),e=0;e<s.length;e++)this.cancelProgress(s[e])}})});