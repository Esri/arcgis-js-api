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

define(["require","exports","../../core/Error","../../core/promiseUtils","../../support/actions/ActionButton"],(function(e,r,t,i,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.triggerAction=r.all=r.removeSelectedFeature=r.zoomToFeature=void 0;var n="esri-icon-zoom-in-magnifying-glass",a="esri-icon-trash";r.zoomToFeature=new o({id:"zoom-to-feature",title:"{messages.zoom}",className:n}),r.removeSelectedFeature=new o({id:"remove-selected-feature",title:"{messages.remove}",className:a}),r.all=[r.zoomToFeature,r.removeSelectedFeature],r.triggerAction=function(e){var o=e.event,n=e.view,a=o.action,s=n&&n.popup;if(!a)return i.reject(new t("trigger-action:missing-arguments","Event has no action"));if(!s)return i.reject(new t("trigger-action:missing-arguments","view.popup is missing"));var c=a.disabled,u=a.id;if(!u)return i.reject(new t("trigger-action:invalid-action","action.id is missing"));if(c)return i.reject(new t("trigger-action:invalid-action","Action is disabled"));if(u===r.zoomToFeature.id)return s.viewModel.zoomToLocation();if(u===r.removeSelectedFeature.id){s.close();var l=s.selectedFeature;if(!l)return i.reject(new t("trigger-action:"+r.removeSelectedFeature.id,"selectedFeature is required",{selectedFeature:l}));var m=l.sourceLayer;return m?m.remove(l):n.graphics.remove(l),i.resolve()}return i.resolve()}}));