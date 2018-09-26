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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/when","dojo/dom-class","dojo/query"],function(s,e,r,o){return s(null,{progressNode:null,progressPromises:null,busyClass:null,errorClass:null,_allStates:null,constructor:function(s,e){e=e||{},this.busyClass=e.busyClass||"Wizard_Loading",this.errorClass=e.errorClass||"Wizard_Error",this._allStates=[this.busyClass,this.errorClass];var t=e.progressClass||"Wizard_Progress";s?(this.progressNode=s,r.add(this.progressNode,t)):e.queryNode&&(this.progressNode=o("."+t,e.queryNode)[0]),this.progressPromises={}},showProgress:function(s,r){function o(){if(t.progressPromises[r]===s)return delete t.progressPromises[r],!0}if(r=r||"",s=e(s),s.isFulfilled())return this.progressPromises[r]&&(delete this.progressPromises[r],this._setState("done")),s;this.progressPromises[r]=s;var t=this;return this._setState("busy"),s.then(function(){o()&&t._setState("done")},function(s){o()&&("CancelError"==s.name?t._setState("done"):t._setState("error",s.toString()))}),s},cancelProgress:function(s){s=s||"",this.progressPromises[s]&&this.progressPromises[s].cancel()},_setState:function(s,e){this.progressNode&&("done"==s&&Object.keys(this.progressPromises).length||(this.progressNode.innerHTML=e||"",r.remove(this.progressNode,this._allStates),"done"!=s&&r.add(this.progressNode,this[s+"Class"])))},destroy:function(){for(var s=Object.keys(this.progressPromises),e=0;e<s.length;e++)this.cancelProgress(s[e])}})});