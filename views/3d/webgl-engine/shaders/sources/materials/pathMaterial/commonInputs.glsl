uniform mat4 proj;
uniform mat4 view;

uniform vec3 camPos;
uniform vec3 localOrigin;

uniform mat4 model;
uniform mat4 modelNormal;

attribute vec3 position; // origin
attribute mat3 pathGeometryInfo;// additional information for reconstructing vertex positions on the fly


// ---------------------------------------------- ++