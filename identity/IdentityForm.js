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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./nls/identity","../core/Error","../core/accessorSupport/decorators","../intl/substitute","../widgets/Widget","../widgets/support/widget"],(function(e,t,s,r,o,i,n,u,l,a){var p="esri-identity-form",d="esri-identity-form__group",c="esri-identity-form__label",h="esri-identity-form__footer",b="esri-input",v="esri-button",m="esri-button--secondary";return function(e){function t(t){var s=e.call(this,t)||this;return s._usernameInputNode=null,s._passwordInputNode=null,s.signingIn=!1,s.server=null,s.resource=null,s.error=null,s.oAuthPrompt=!1,s}return s(t,e),t.prototype.render=function(){var e=this,t=e.error,s=e.server,r=e.resource,i=e.signingIn,n=e.oAuthPrompt,l=a.tsx("div",{class:d},u.substitute(n?o.oAuthInfo:o.info,{server:/\.arcgis\.com/i.test(s)?"ArcGIS Online":s,resource:"("+(r||o.lblItem)+")"})),y=n?null:a.tsx("div",{class:d},a.tsx("label",{class:c},o.lblUser,a.tsx("input",{value:"",required:!0,autofocus:!0,autocomplete:"off",spellcheck:!1,type:"text",bind:this,afterCreate:a.storeNode,"data-node-ref":"_usernameInputNode",class:b}))),_=n?null:a.tsx("div",{class:d},a.tsx("label",{class:c},o.lblPwd,a.tsx("input",{value:"",required:!0,type:"password",bind:this,afterCreate:a.storeNode,"data-node-ref":"_passwordInputNode",class:b}))),f=a.tsx("div",{class:this.classes(d,h)},a.tsx("input",{type:"submit",disabled:!!i,value:i?o.lblSigning:o.lblOk,class:v}),a.tsx("input",{type:"button",value:o.lblCancel,bind:this,onclick:this._cancel,class:this.classes(v,m)})),I=t?a.tsx("div",null,t.details&&t.details.httpStatus?o.invalidUser:o.noAuthService):null;return a.tsx("form",{class:p,bind:this,onsubmit:this._submit},l,I,y,_,f)},t.prototype._cancel=function(){this._set("signingIn",!1),this._usernameInputNode&&(this._usernameInputNode.value=""),this._passwordInputNode&&(this._passwordInputNode.value=""),this.emit("cancel")},t.prototype._submit=function(e){e.preventDefault(),this._set("signingIn",!0);var t=this.oAuthPrompt?{}:{username:this._usernameInputNode&&this._usernameInputNode.value,password:this._passwordInputNode&&this._passwordInputNode.value};this.emit("submit",t)},r([a.renderable(),n.property()],t.prototype,"signingIn",void 0),r([a.renderable(),n.property()],t.prototype,"server",void 0),r([a.renderable(),n.property()],t.prototype,"resource",void 0),r([a.renderable(),n.property({type:i})],t.prototype,"error",void 0),r([a.renderable(),n.property()],t.prototype,"oAuthPrompt",void 0),t=r([n.subclass("esri.identity.IdentityForm")],t)}(n.declared(l))}));