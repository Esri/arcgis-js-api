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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["./Accessor","./accessorSupport/MultiOriginStore","./accessorSupport/read","./accessorSupport/utils"],function(r,e,t,s){e=e["default"];var o=r.createSubclass({declaredClass:"esri.core.MultiOriginJSONSupport",constructor:function(){{var r=s.getProperties(this);r.store}r.store=new e},read:t.read});return o});