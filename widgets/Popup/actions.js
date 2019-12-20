// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","dojo/i18n!../../nls/common","dojo/i18n!./nls/Popup","../../core/Error","../../core/promiseUtils","../../support/actions/ActionButton"],function(e,r,i,o,t,n,a){Object.defineProperty(r,"__esModule",{value:!0});var c={iconZoom:"esri-icon-zoom-in-magnifying-glass",iconTrash:"esri-icon-trash"};r.zoomToFeature=new a({id:"zoom-to-feature",title:o.zoom,className:c.iconZoom}),r.removeSelectedFeature=new a({id:"remove-selected-feature",title:i.remove,className:c.iconTrash}),r.all=[r.zoomToFeature,r.removeSelectedFeature],r.triggerAction=function(e){var i=e.event,o=e.view,a=i.action,c=o&&o.popup;if(!a)return n.reject(new t("trigger-action:missing-arguments","Event has no action"));if(!c)return n.reject(new t("trigger-action:missing-arguments","view.popup is missing"));var s=a.disabled,u=a.id;if(!u)return n.reject(new t("trigger-action:invalid-action","action.id is missing"));if(s)return n.reject(new t("trigger-action:invalid-action","Action is disabled"));if(u===r.zoomToFeature.id)return c.viewModel.zoomToLocation();if(u===r.removeSelectedFeature.id){c.close();var m=c.selectedFeature;if(!m)return n.reject(new t("trigger-action:"+r.removeSelectedFeature.id,"selectedFeature is required",{selectedFeature:m}));var d=m.sourceLayer;return d?d.remove(m):o.graphics.remove(m),n.resolve()}return n.reject(new t("trigger-action:unknown-action","Unable to identify action to perform",{action:a,popup:c}))}});