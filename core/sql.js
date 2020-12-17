/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["require","exports"],(function(e,r){"use strict";r.parseWhereClause=async function(r,n){const{WhereClause:s}=await new Promise((function(r,n){e(["./sql/WhereClause"],r,n)}));return s.create(r,n)},Object.defineProperty(r,"__esModule",{value:!0})}));
