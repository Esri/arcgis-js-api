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

define(["require","exports","dojo/i18n!../../nls/common","dojo/i18n!./nls/Popup","../../core/Error","../../core/promiseUtils","../../support/actions/ActionButton"],(function(e,r,i,t,o,n,a){Object.defineProperty(r,"__esModule",{value:!0});var s="esri-icon-zoom-in-magnifying-glass",c="esri-icon-trash";r.zoomToFeature=new a({id:"zoom-to-feature",title:t.zoom,className:s}),r.removeSelectedFeature=new a({id:"remove-selected-feature",title:i.remove,className:c}),r.all=[r.zoomToFeature,r.removeSelectedFeature],r.triggerAction=function(e){var i=e.event,t=e.view,a=i.action,s=t&&t.popup;if(!a)return n.reject(new o("trigger-action:missing-arguments","Event has no action"));if(!s)return n.reject(new o("trigger-action:missing-arguments","view.popup is missing"));var c=a.disabled,u=a.id;if(!u)return n.reject(new o("trigger-action:invalid-action","action.id is missing"));if(c)return n.reject(new o("trigger-action:invalid-action","Action is disabled"));if(u===r.zoomToFeature.id)return s.viewModel.zoomToLocation();if(u===r.removeSelectedFeature.id){s.close();var d=s.selectedFeature;if(!d)return n.reject(new o("trigger-action:"+r.removeSelectedFeature.id,"selectedFeature is required",{selectedFeature:d}));var l=d.sourceLayer;return l?l.remove(d):t.graphics.remove(d),n.resolve()}return n.resolve()}}));