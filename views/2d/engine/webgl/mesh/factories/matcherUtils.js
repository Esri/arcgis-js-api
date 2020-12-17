/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../../core/Logger","../../../../../../core/Error","../../util/Matcher"],(function(e,r,t,n){"use strict";const a=r.getLogger("esri/views/2d/engine/webgl/mesh/factories/matcherUtils");e.createMatcher=async function(e,r,c){switch(e.type){case"simple":return n.FeatureMatcher.fromBasicRenderer(e,r,c);case"map":return n.MapMatcher.fromUVRenderer(e,r,c);case"interval":return n.IntervalMatcher.fromCBRenderer(e,r,c);case"dictionary":return n.DictionaryMatcher.fromDictionaryRenderer(e,r,c);default:return a.error(new t("mapview-mesh:invalid-renderer","Unable to handle unknown renderer type")),null}},Object.defineProperty(e,"__esModule",{value:!0})}));
