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

define(["dojo/_base/declare","dojo/aspect","./PageOptionsDialogContent","dijit/Dialog","esri/dijit/geoenrichment/ReportPlayer/PlayerCommands","dojo/i18n!../../../../../nls/jsapi"],function(i,n,o,t,e,a){a=a.geoenrichment.dijit.ReportPlayer.PageOptionsDialog;var l;return i(null,{_dialog:null,show:function(i){function d(i){g._dialog&&(l=r.getSettings(),i&&g.onCancel(),g._dialog.destroy(),g._dialog=null)}var g=this;if(!this._dialog||!this._dialog.open){var r=new o({onPrint:function(){g.onPrint(r.getSettings()),d(!1)},onCancel:function(){d(!0)}});this._dialog=new t({title:i.commandId===e.PRINT?a.dialogTitlePrint:a.dialogTitleExport,content:r}),this._dialog.own(r),this._dialog.show(),n.after(this._dialog,"hide",function(){d(!0)}),r.update(i),l&&r.setState(l)}},onPrint:function(i){},onCancel:function(){}})});