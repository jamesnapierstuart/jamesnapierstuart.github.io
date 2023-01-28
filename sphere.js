// vertex shader
var vertex_shader = `
    attribute vec4 vPosition;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vPosition;
    }
`;

// fragment shader
var fragment_shader = `
    precision mediump float;
    uniform vec4 color;
    void main() {
        gl_FragColor = color;
    }
`;

// setup webgl context
var canvas = document.getElementById("gl-canvas");
var gl = canvas.getContext("webgl");

// create program, shaders and buffer
var program = createProgram(gl, vertex_shader, fragment_shader);
var vPosition = gl.getAttribLocation(program, "vPosition");
var modelViewMatrix = gl.getUniformLocation(program, "modelViewMatrix");
var projectionMatrix = gl.getUniformLocation(program, "projectionMatrix");
var color = gl.getUniformLocation(program, "color");
var buffer = gl.createBuffer();

// setup sphere geometry
var num_segments = 32;
var num_rings = 16;
var radius = 0.5;
var vertex_data = [];
for (var i = 0; i <= num_rings; i++) {
    var phi = i * Math.PI / num_rings;
    var sin_phi = Math.sin(phi);
    var cos_phi = Math.cos(phi);
    for (var j = 0; j <= num_segments; j++) {
        var theta = j * 2 * Math.PI / num_segments;
        var sin_theta = Math.sin(theta);
        var cos_theta = Math.cos(theta);
        var x = cos_theta * sin_phi;
        var y = cos_phi;
        var z = sin_theta * sin_phi;
        vertex_data.push(radius * x);
        vertex_data.push(radius * y);
        vertex_data.push(radius * z);
    }
}
var index_data = [];
for (var i = 0; i < num_rings; i++) {
    for (var j = 0; j < num_segments; j++) {
        var first = i * (num_segments + 1) + j;
        var second = first + num_segments + 1;
        index_data.push(first);
        index_data.push(second);
        index
