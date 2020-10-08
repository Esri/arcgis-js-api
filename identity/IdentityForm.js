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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/accessorSupport/decorators","../intl/substitute","../widgets/Widget","../widgets/support/widget"],(function(e,t,s,r,i,o,n){"use strict";var u="esri-identity-form",a="esri-identity-form__group",l="esri-identity-form__label",d="esri-identity-form__footer",p="esri-input",c="esri-button",_="esri-button--secondary";return function(e){function t(t,s){var r=e.call(this,t,s)||this;return r._usernameInputNode=null,r._passwordInputNode=null,r.messages=null,r.signingIn=!1,r.server=null,r.resource=null,r.error=null,r.oAuthPrompt=!1,r}return s.__extends(t,e),t.prototype.render=function(){var e=this,t=e.error,s=e.server,r=e.resource,o=e.signingIn,b=e.oAuthPrompt,h=e.messages,m=n.tsx("div",{class:a},i.substitute(b?h.oAuthInfo:h.info,{server:/\.arcgis\.com/i.test(s)?"ArcGIS Online":s,resource:"("+(r||h.lblItem)+")"})),v=b?null:n.tsx("div",{class:a},n.tsx("label",{class:l},h.lblUser,n.tsx("input",{value:"",required:!0,autofocus:!0,autocomplete:"off",spellcheck:!1,type:"text",bind:this,afterCreate:n.storeNode,"data-node-ref":"_usernameInputNode",class:p}))),y=b?null:n.tsx("div",{class:a},n.tsx("label",{class:l},h.lblPwd,n.tsx("input",{value:"",required:!0,type:"password",bind:this,afterCreate:n.storeNode,"data-node-ref":"_passwordInputNode",class:p}))),f=n.tsx("div",{class:this.classes(a,d)},n.tsx("input",{type:"submit",disabled:!!o,value:o?h.lblSigning:h.lblOk,class:c}),n.tsx("input",{type:"button",value:h.lblCancel,bind:this,onclick:this._cancel,class:this.classes(c,_)})),g=t?n.tsx("div",null,t.details&&t.details.httpStatus?h.invalidUser:h.noAuthService):null;return n.tsx("form",{class:u,bind:this,onsubmit:this._submit},m,g,v,y,f)},t.prototype._cancel=function(){this._set("signingIn",!1),this._usernameInputNode&&(this._usernameInputNode.value=""),this._passwordInputNode&&(this._passwordInputNode.value=""),this.emit("cancel")},t.prototype._submit=function(e){e.preventDefault(),this._set("signingIn",!0);var t=this.oAuthPrompt?{}:{username:this._usernameInputNode&&this._usernameInputNode.value,password:this._passwordInputNode&&this._passwordInputNode.value};this.emit("submit",t)},s.__decorate([r.property(),n.renderable(),n.messageBundle("esri/identity/t9n/identity")],t.prototype,"messages",void 0),s.__decorate([r.property(),n.renderable()],t.prototype,"signingIn",void 0),s.__decorate([r.property(),n.renderable()],t.prototype,"server",void 0),s.__decorate([r.property(),n.renderable()],t.prototype,"resource",void 0),s.__decorate([r.property(),n.renderable()],t.prototype,"error",void 0),s.__decorate([r.property(),n.renderable()],t.prototype,"oAuthPrompt",void 0),t=s.__decorate([r.subclass("esri.identity.IdentityForm")],t)}(o)}));