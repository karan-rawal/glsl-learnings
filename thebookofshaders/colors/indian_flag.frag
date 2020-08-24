#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

const float PI = 3.14159265359;

vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.833,0.224);

float plot(vec2 st, float pct) {
    return smoothstep(pct - 0.01, pct, st.y) - smoothstep(pct, pct + 0.01, st.y);
}

float drawCircle(vec2 position, float radius, float offset) {
    return smoothstep(radius - 0.01, radius, length((position - offset))) - smoothstep(radius, radius + 0.01, length((position - offset)));
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.0);

    float offset = sin(st.x + u_time) * 0.05;

    float greenPart = 1. - step((1./3.) + offset, abs(st.y));
    float whitePart = (1. - step(1./3. * 2. + offset, st.y)) - greenPart;
    float redPart = 1. - (greenPart + whitePart);

    st -= 0.5;
    float circlePart = drawCircle(st, 0.1, offset);
    whitePart = whitePart - circlePart;
    st += 0.5;

    vec3 green = vec3(0.0275, 0.5255, 0.0275) * greenPart;
    vec3 white = vec3(1.0, 1.0, 1.0) * whitePart;
    vec3 red = vec3(1.0, 0.6, 0.0) * redPart;

    color = color + green + white + red;

    gl_FragColor = vec4(color, 1.0);
}