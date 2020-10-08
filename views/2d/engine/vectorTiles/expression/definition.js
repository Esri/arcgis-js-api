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

define(["require","exports","./color","./data","./decision","./interpolate","./lookup","./math","./string","./types"],(function(e,l,a,t,o,n,r,c,s,u){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.ops=void 0,l.ops={array:u.Assert,boolean:u.Assert,collator:null,format:null,literal:u.Literal,image:null,number:u.Assert,"number-format":null,object:u.Assert,string:u.Assert,"to-boolean":u.Coerce,"to-color":u.Coerce,"to-number":u.Coerce,"to-string":u.Coerce,typeof:u.TypeOf,accumulated:null,"feature-state":null,"geometry-type":t.GeomType,id:t.ID,"line-progress":null,properties:t.Properties,at:r.At,get:r.Get,has:r.Has,in:r.In,"index-of":r.IndexOf,length:r.Length,slice:r.Slice,"!":o.NOT,"!=":o.NE,"<":o.LT,"<=":o.LE,"==":o.EQ,">":o.GT,">=":o.GE,all:o.ALL,any:o.ANY,case:o.Case,coalesce:o.Coalesce,match:o.Match,within:null,interpolate:n.Interpolate,"interpolate-hcl":n.Interpolate,"interpolate-lab":n.Interpolate,step:n.Step,let:null,var:null,concat:s.Concat,downcase:s.String,"is-supported-script":null,"resolved-locale":null,upcase:s.String,rgb:a.Rgb,rgba:a.Rgba,"to-rgba":a.ToRgba,"-":c.Sub,"*":c.Mul,"/":c.Div,"%":c.Mod,"^":c.Pow,"+":c.Add,abs:c.Calculate,acos:c.Calculate,asin:c.Calculate,atan:c.Calculate,ceil:c.Calculate,cos:c.Calculate,e:c.Calculate,floor:c.Calculate,ln:c.Calculate,ln2:c.Calculate,log10:c.Calculate,log2:c.Calculate,max:c.Calculate,min:c.Calculate,pi:c.Calculate,round:c.Calculate,sin:c.Calculate,sqrt:c.Calculate,tan:c.Calculate,zoom:t.Zoom,"heatmap-density":null,"has-id":r.HasID,none:o.NONE}}));