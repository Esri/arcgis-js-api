/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./treeAnalysis","./lib/arcade-parser","./lib/types"],(function(e,r,n,i){"use strict";function o(e,o=[]){const d=n.parse(e);if(null===d.body||void 0===d.body)throw new i.ParsingError({index:0,line:0,column:0,data:null,description:"",code:i.ParsingErrorCodes.InvalidExpression});if(0===d.body.length)throw new i.ParsingError({index:0,line:0,column:0,data:null,description:"",code:i.ParsingErrorCodes.InvalidExpression});if(0===d.body.length)throw new i.ParsingError({index:0,line:0,column:0,data:null,description:"",code:i.ParsingErrorCodes.InvalidExpression});return d.loadedModules={},r.findScriptDependencies(d,o),d}e.parseScript=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
