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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../input/InputHandler"],(function(e,i,n,t){Object.defineProperty(i,"__esModule",{value:!0});var a=function(e){function i(i,n,t){var a,o=e.call(this,!0)||this;return o.view=i,o.keys=n,o._pressed=!1,o._keyMap=((a={})[n.left]="left",a[n.right]="right",a[n.up]="up",a[n.down]="down",a),o.registerIncoming("key-down",t,(function(e){return o._handleKeyDown(e)})),o.registerIncoming("key-up",t,(function(e){return o._handleKeyUp(e)})),o.registerIncoming("blur",t,(function(){return o._handleBlur()})),o}return n.__extends(i,e),i.prototype._handleKeyDown=function(e){e.data.repeat||this._handleKey(e,!0)},i.prototype._handleKeyUp=function(e){this._handleKey(e,!1)},i.prototype._handleBlur=function(){this._pressed&&(this._pressed=!1,this.view.mapViewNavigation.stop())},i.prototype._handleKey=function(e,i){var n=this._keyMap[e.data.key];if(this._pressed=null!=n,this._pressed){if(i)switch(this.view.mapViewNavigation.begin(),n){case"left":this.view.mapViewNavigation.continousPanLeft();break;case"right":this.view.mapViewNavigation.continousPanRight();break;case"up":this.view.mapViewNavigation.continousPanUp();break;case"down":this.view.mapViewNavigation.continousPanDown()}else this._pressed=!1,this.view.mapViewNavigation.stop();e.stopPropagation()}},i}(t.InputHandler);i.KeyPan=a}));