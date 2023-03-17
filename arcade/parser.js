/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./treeAnalysis","./lib/arcade-parser","./lib/types"],(function(r,e,n,i){"use strict";function o(r,o=[]){const d=n.parse(r);if(null===d.body||void 0===d.body)throw new i.ParsingError({index:0,line:0,column:0,data:null,description:"",code:i.ParsingErrorCodes.InvalidExpression});if(0===d.body.length)throw new i.ParsingError({index:0,line:0,column:0,data:null,description:"",code:i.ParsingErrorCodes.InvalidExpression});if(0===d.body.length)throw new i.ParsingError({index:0,line:0,column:0,data:null,description:"",code:i.ParsingErrorCodes.InvalidExpression});return d.loadedModules={},e.findScriptDependencies(d,o),d}r.parseScript=o,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
