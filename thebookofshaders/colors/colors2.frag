#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

const float PI = 3.14159265359;

vec3 colorA = vec3(0.912,0.381,0.355);
vec3 colorB = vec3(1.000,0.833,0.224);

float plot(vec2 st, float pct) {
  return smoothstep(pct - 0.01, pct, st.y) - smoothstep(pct, pct + 0.01, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.201,0.660,0.603);

    vec3 pct = vec3(0.0);

    pct.r = smoothstep(0.0, 1.0, st.x);
    pct.g = sin(st.x * PI);
    pct.b = pow(st.x, 0.3);

    color = mix(colorA, colorB, st.x);

    color = mix(color, vec3(1.0, 0.0, 0.0), plot(st, pct.r));
    color = mix(color, vec3(0.0, 1.0, 0.0), plot(st, pct.g));
    color = mix(color, vec3(0.0, 0.0, 1.0), plot(st, pct.b));

    gl_FragColor = vec4(color, 1.0);
}