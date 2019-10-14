uniform mat4 proj;
uniform mat4 view;

uniform vec3 camPos;
uniform vec3 localOrigin;

uniform mat4 model;
uniform mat4 modelNormal;

attribute vec3 position; // origin
attribute vec4 profileRight; // right axis of the profile plane and an additional auxiliary float
attribute vec4 profileUp; // up axis of the profile plane and an additional auxiliary float
attribute vec4 profileVertexAndNormal; // profile vertex and normal both in profile coordinates
