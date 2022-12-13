// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/aspect","./PageOptionsDialogContent","dijit/Dialog","esri/dijit/geoenrichment/ReportPlayer/PlayerCommands","dojo/i18n!esri/nls/jsapi"],(function(i,n,o,t,e,a){var l;return a=a.geoenrichment.dijit.ReportPlayer.PageOptionsDialog,i(null,{_dialog:null,show:function(i){var d=this;function g(i){d._dialog&&(l=s.getSettings(),i&&d.onCancel(),d._dialog.destroy(),d._dialog=null)}if(!this._dialog||!this._dialog.open){var s=new o({onPrint:function(){d.onPrint(s.getSettings()),g(!1)},onCancel:function(){g(!0)}});this._dialog=new t({title:i.commandId===e.PRINT?a.dialogTitlePrint:a.dialogTitleExport,content:s}),this._dialog.own(s),this._dialog.show(),this._dialog.own(n.after(this._dialog,"hide",(function(){g(!0)}))),s.update(i),l&&s.setState(l)}},onPrint:function(i){},onCancel:function(){}})}));