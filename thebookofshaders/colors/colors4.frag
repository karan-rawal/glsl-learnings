#ifdef GL_ES
precision mediump float;
#endif

const float TWO_PI = 2. * 3.14159265359;

uniform vec2 u_resolution;
uniform float u_time;

vec3 hsv2rgb(float h, float s, float v) {
    vec3 rgb = clamp(abs(mod(vec3(h) * 6. + vec3(0.0, 4.0, 2.0), 6.) - 3.0) - 1.0, 0.0, 1.0);
    rgb = rgb * rgb * (3. - 2. * rgb);
    return v * mix(vec3(1.0), rgb, s);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);
    vec2 center = vec2(0.5) - st;
    float angle = atan(center.y, center.x);
    float radius = length(center) * 2.0;
    color = hsv2rgb((angle / TWO_PI) + 0.5, radius, 1.0);
    gl_FragColor = vec4(color, 1.0);
}