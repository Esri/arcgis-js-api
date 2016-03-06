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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/has","./kernel","./Evented","dojo/has!extend-esri?./OperationBase"],function(i,t,o,n){var s=i([n],{declaredClass:"esri.UndoManager",maxOperations:10,canUndo:!1,canRedo:!1,position:0,length:0,onUndo:function(){},onRedo:function(){},onAdd:function(){},onChange:function(){},constructor:function(i){i=i||{},i.maxOperations&&(this.maxOperations=i.maxOperations),this._historyStack=[]},add:function(i){if(this.maxOperations>0)for(;this._historyStack.length>=this.maxOperations;)this._historyStack.shift();this._historyStack.splice(this.position,0,i),this.position++,this.clearRedo(),this.onAdd(),this._checkAvailability()},undo:function(){if(0===this.position)return null;var i=this.peekUndo();this.position--,i&&i.performUndo(),this.onUndo(),this._checkAvailability()},redo:function(){if(this.position===this._historyStack.length)return null;var i=this.peekRedo();this.position++,i&&i.performRedo(),this.onRedo(),this._checkAvailability()},_checkAvailability:function(){this.length=this._historyStack.length,0===this.length?(this.canRedo=!1,this.canUndo=!1):0===this.position?(this.canRedo=!0,this.canUndo=!1):this.position===this.length?(this.canUndo=!0,this.canRedo=!1):(this.canUndo=!0,this.canRedo=!0),this.onChange()},clearUndo:function(){this._historyStack.splice(0,this.position),this.position=0,this._checkAvailability()},clearRedo:function(){this._historyStack.splice(this.position,this._historyStack.length-this.position),this.position=this._historyStack.length,this._checkAvailability()},peekUndo:function(){return this._historyStack.length>0&&this.position>0?this.get(this.position-1):void 0},peekRedo:function(){return this._historyStack.length>0&&this.position<this._historyStack.length?this.get(this.position):void 0},get:function(i){return this._historyStack[i]},remove:function(i){this._historyStack.length>0&&(this._historyStack.splice(i,1),this.position>0&&i<this.position&&this.position--,this._checkAvailability())},destroy:function(){this._historyStack=null}});return t("extend-esri")&&(o.UndoManager=s),s});