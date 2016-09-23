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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["dojo/_base/lang","../../core/Accessor","../../tasks/PrintTask","../../tasks/support/PrintTemplate","../../tasks/support/PrintParameters"],function(t,e,i,r,n){var s={disabled:"disabled",ready:"ready",printoutReady:"printoutReady"};return e.createSubclass({declaredClass:"esri.widgets.Print.PrintViewModel",constructor:function(){this.print=this.print.bind(this),this._printComplete=this._printComplete.bind(this)},properties:{templates:{type:[r]},view:{},printServiceUrl:{value:null,type:String},printoutUrl:{value:null,type:String},_printTask:{dependsOn:["printServiceUrl"],get:function(){return new i(this.printServiceUrl,{updateDelay:this.updateDelay})}},state:{value:s.disabled,get:function(){return this.get("view.ready")?this._printTaskComplete?s.printoutReady:s.ready:s.disabled},dependsOn:["view.ready"],readOnly:!0},updateDelay:{value:1e3,type:Number}},_printTaskComplete:!1,print:function(t){var e=new n({view:this.view,template:t});return this._printTask.execute(e).then(this._printComplete)},openPrintout:function(){"printoutReady"===this.state&&window.open(this.printoutUrl),this._printTaskComplete=!1,this.notifyChange("state")},_printComplete:function(t){return this._printTaskComplete=!0,this.notifyChange("state"),this.printoutUrl=t.url,this.printoutUrl}})});