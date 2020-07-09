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

define(["require","exports","../../core/Error","../../core/promiseUtils","../../support/actions/ActionButton"],(function(e,r,i,t,o){Object.defineProperty(r,"__esModule",{value:!0});var n="esri-icon-zoom-in-magnifying-glass",a="esri-icon-trash";r.zoomToFeature=new o({id:"zoom-to-feature",title:"{messages.zoom}",className:n}),r.removeSelectedFeature=new o({id:"remove-selected-feature",title:"{messages.remove}",className:a}),r.all=[r.zoomToFeature,r.removeSelectedFeature],r.triggerAction=function(e){var o=e.event,n=e.view,a=o.action,s=n&&n.popup;if(!a)return t.reject(new i("trigger-action:missing-arguments","Event has no action"));if(!s)return t.reject(new i("trigger-action:missing-arguments","view.popup is missing"));var c=a.disabled,u=a.id;if(!u)return t.reject(new i("trigger-action:invalid-action","action.id is missing"));if(c)return t.reject(new i("trigger-action:invalid-action","Action is disabled"));if(u===r.zoomToFeature.id)return s.viewModel.zoomToLocation();if(u===r.removeSelectedFeature.id){s.close();var m=s.selectedFeature;if(!m)return t.reject(new i("trigger-action:"+r.removeSelectedFeature.id,"selectedFeature is required",{selectedFeature:m}));var d=m.sourceLayer;return d?d.remove(m):n.graphics.remove(m),t.resolve()}return t.resolve()}}));