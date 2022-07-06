/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function i(i){return!!(i&&i.loaded&&"capabilities"in i&&i?.capabilities?.operations&&"supportsEditing"in i.capabilities.operations&&!0===i.capabilities.operations.supportsEditing)&&!("editingEnabled"in i&&!i.editingEnabled)}export{i as isEditableLayer};
