// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["dojo/_base/declare","../../../core/kebabDictionary"],function(e,t){return e(null,{declaredClass:"esri.tasks.workflow.support.Enum",changeConditionJsonDict:t({0:"always",1:"changed-from",2:"changed-to"}),changeTypeJsonDict:t({1:"add",2:"modify",4:"delete",7:"all"}),compareOperatorJsonDict:t({0:"equal",1:"not-equal",2:"greater-than",3:"greater-or-equal",4:"less-than",5:"less-or-equal",6:"contains"}),extendedPropertyDisplayTypeJsonDict:t({0:"default",1:"text",2:"date",4:"domain",5:"file",6:"geo-file",7:"folder",8:"list",9:"table-list",10:"multi-level-table-list"}),fieldTypeJsonDict:t({0:"small-integer",1:"integer",2:"single",3:"double",4:"string",5:"date",6:"oid",7:"geometry",8:"blob",9:"raster",10:"guid",11:"global-id",12:"xml"}),jobAssignmentTypeJsonDict:t({"-1":"none",0:"unassigned",1:"user",2:"group"}),jobAttachmentTypeJsonDict:t({1:"linked-file",2:"embedded",3:"url"}),jobDependencyTypeJsonDict:t({1:"step",2:"stage",3:"status"}),jobTypeStateJsonDict:t({0:"draft",1:"active",2:"retired"}),jobStageJsonDict:t({"-1":"none",1:"created",2:"ready",3:"working",4:"done",5:"closed"}),spatialRelJsonDict:t({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),stepDescriptionTypeJsonDict:t({1:"none",2:"embedded-html",3:"link"}),stepExecutionResultJsonDict:t({1:"executed",2:"dependent-on-step",3:"dependent-on-stage",4:"dependent-on-status",5:"job-on-hold",6:"step-depends-on-step",7:"check",8:"step-assigned-to-other-user",9:"step-assigned-to-other-group",10:"job-assigned-to-others",11:"job-closed",12:"invalid-platform",13:"invalid-step",14:"dependent-on-job",15:"not-current-step"}),stepExecutionTypeJsonDict:t({1:"executable",2:"function",3:"procedural",4:"launch-url",5:"question",6:"open-file"}),stepIndicatorTypeJsonDict:t({1:"rounded-rectangle",2:"rectangle",3:"oval",4:"diamond",5:"parallelogram"}),stepPlatformTypeJsonDict:t({0:"desktop",1:"server",2:"both"}),stepRunnableStatusJsonDict:t({1:"can-run",2:"dependent-on-step",3:"dependent-on-stage",4:"dependent-on-status",5:"job-on-hold",6:"step-depends-on-step",8:"step-assigned-to-other-user",9:"step-assigned-to-other-group",10:"job-assigned-to-others",11:"job-closed",12:"invalid-platform",13:"invalid-step",14:"dependent-on-job",15:"not-current-step"}),tableRelationshipTypeJsonDict:t({1:"one-to-one",2:"one-to-many"})})});