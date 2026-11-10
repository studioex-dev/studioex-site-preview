import{t as e}from"./preload-helper.DygEbaNj.js";var t=Object.defineProperty,n=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},r=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],i=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],a=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],o=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],s=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],c=e=>Math.hypot(e[0],e[1],e[2]),l=e=>{let t=c(e)||1;return[e[0]/t,e[1]/t,e[2]/t]},u=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n],d=(e,t,n)=>{let i=Math.acos(Math.max(-1,Math.min(1,o(e,t))));if(i<1e-6)return e;let u=s(e,t),d=c(u);u=d<1e-6?l(s(e,[0,1,.3])):a(u,1/d);let f=i*n;return r(a(e,Math.cos(f)),a(s(u,e),Math.sin(f)))},f=(e,t,n)=>r(r(a(e,Math.cos(n)),a(s(t,e),Math.sin(n))),a(t,o(t,e)*(1-Math.cos(n)))),p=e=>Math.max(0,Math.min(1,e)),m=e=>(e=p(e),e*e*(3-2*e)),h=e=>(e=p(e),e*e*e*(e*(e*6-15)+10)),g=Math.PI/180,_=(e,t)=>[Math.cos(e*g)*Math.sin(t*g),Math.sin(e*g),Math.cos(e*g)*Math.cos(t*g)],v=(e,t)=>{let n=Math.cos(t),r=Math.sin(t);return[n*e[0]+r*e[2],e[1],n*e[2]-r*e[0]]},y=[[40.71,-74],[34.05,-118.24],[6.52,3.38],[25.2,55.27],[35.68,139.69],[1.35,103.82],[48.86,2.35],[22.32,114.17],[-1.29,36.82],[-33.87,151.21]],b=[51.51,-.13],x=[13.08,80.27],S=[-23.55,-46.63],C=y,w=[[b,x],[b,S],[b,C[0]],[b,C[2]],[b,C[3]],[b,C[4]],[x,C[5]],[S,C[0]],[C[0],C[1]],[C[6],C[3]],[C[7],C[4]],[C[2],C[8]]].map(([e,t])=>({from:e,to:t}));function T(){let e={"Europe/London":[51.5,-.13],"Europe/Dublin":[53.35,-6.26],"Europe/Paris":[48.86,2.35],"Europe/Berlin":[52.52,13.4],"Europe/Madrid":[40.42,-3.7],"America/New_York":[40.7,-74],"America/Chicago":[41.88,-87.63],"America/Los_Angeles":[34.05,-118.24],"America/Sao_Paulo":[-23.55,-46.63],"Asia/Kolkata":[19.08,72.88],"Asia/Calcutta":[19.08,72.88],"Asia/Dubai":[25.2,55.27],"Asia/Tokyo":[35.68,139.69],"Asia/Singapore":[1.35,103.82],"Australia/Sydney":[-33.87,151.2]},t=``;try{t=Intl.DateTimeFormat().resolvedOptions().timeZone||``}catch{}return e[t]??[30,-new Date().getTimezoneOffset()/4]}var ee=.025,E={base:1.15,top:1.65,x0:-9,x1:11,z0:-9,z1:10},te=.06;function ne(e,t){let n=ee,i=_(e,t),o=l(s([0,1,0],i)),c=s(i,o),u=e=>r(r(a(o,e[0]),a(i,e[1])),a(c,e[2])),d=(e,t,o)=>r(i,a(u([e,t,o]),n)),f=d(0,.045/n,-1);return{U:i,E:o,N:c,dirW:u,L2W:d,P0:f,B:l(f)}}var D=ne(51.508,-.093),re=4.5,ie=3.5,O=l(_(22,-18)),k=.2,A=.6,j=3,M=3.5,N=6.5,ae=e=>l(i([0,1,0],a(e,e[1]))),oe=e=>v(O,e),P=[[0,1.8,-1],[.12,1.42,-1.08],[.45,1.02,-1.25],[1.15,.8,-1.5],[2.1,.62,-1.35],[2.5,.32,-.95],[2.12,.085,-.66],[1.55,.022,-.455]],F=[[0,0,-.99],[.18,0,-.85],[.55,0,-.4],[.5,.02,.15],[.35,.06,.4],[1,.05,-.2],[1.2,.05,-.3],[1.15,.06,-.25]],I=e=>m((e-(E.base-.12))/.2)*(1-m((e-(E.top-.05))/.2)),L=(()=>{let e=[0],t=z(P,0);for(let n=1;n<=320;n++){let r=z(P,n/320),i=Math.hypot(r[0]-t[0],r[1]-t[1],r[2]-t[2]);e.push(e[n-1]+i*(1+3*I((r[1]+t[1])/2))),t=r}return e.map(t=>t/e[320])})();function R(e){let t=L.length-1;if(e<=0)return 0;if(e>=1)return 1;let n=0,r=t;for(;r-n>1;){let t=n+r>>1;L[t]<e?n=t:r=t}return(n+(e-L[n])/Math.max(1e-9,L[r]-L[n]))/t}function z(e,t){let n=e.length-1,r=Math.min(Math.max(t,0)*n,n-1e-6),i=Math.floor(r),a=r-i,o=e[Math.max(0,i-1)],s=e[i],c=e[i+1],l=e[Math.min(n,i+2)],u=a*a,d=u*a;return[0,1,2].map(e=>.5*(2*s[e]+(-o[e]+c[e])*a+(2*o[e]-5*s[e]+4*c[e]-l[e])*u+(-o[e]+3*s[e]-3*c[e]+l[e])*d))}function B(e,t){let n=D;e=Math.min(e,A);let r=e<=k?e/k*j:j+(e-k)/.39999999999999997*M,p=h(r/N),g=d(t,n.B,p),_=Math.max(0,Math.min(1,(r-j)/M)),v=_*_*(2-_),y=c(n.P0)-1,b=Math.exp(Math.log(ie)+(Math.log(y)-Math.log(ie))*v),x=Math.acos(Math.max(-1,Math.min(1,o(t,n.B)))),S=s(t,n.B);S=c(S)<1e-6?l(s(t,[0,1,.3])):l(S);let C=ae(t),w=f(C,S,x),T=l(i(n.N,a(n.B,o(n.B,n.N)))),ee=Math.atan2(o(s(w,T),n.B),o(w,T));return{pos:a(g,1+b),fw:l(u(a(g,-1),a(n.U,-1),v)),up:f(f(C,S,x*p),g,ee*p),kc:v,dive:m((r-2.5)/4),rise:0,blast:0,burst:0,cloud:0,below:0,fog:0,sink:0,fade:m((r-4.225)/(M*.65)),on:1-m((r-j+.3)/1.5)}}function V(e){let t=D,n=R(1-(1-Math.max(0,(e-A)/.4))**1.6),r=z(P,n),a=l(i(z(F,n),r)),o=m(n/.4);return{pos:t.L2W(r[0],r[1],r[2]),fw:t.dirW(a),up:t.dirW(l([0,o,1-o])),kc:1,dive:1,rise:h(n/.75),blast:1,burst:0,cloud:0,below:m((E.base-.05-r[1])/.35),fog:m((E.top+.17-r[1])/.42)*(1-m((E.base+.02-r[1])/.13)),sink:Math.max(0,E.top-r[1]),fade:1,on:0}}var H=.08;function se(e,t){let n=Math.max(0,Math.min(1,e)),r=h((n-(A-H/2))/H),s;if(r<=0)s=B(n,t);else if(r>=1)s=V(n);else{let e=B(n,t),i=V(n);s={pos:u(e.pos,i.pos,r),fw:l(u(e.fw,i.fw,r)),up:l(u(e.up,i.up,r)),kc:e.kc+(i.kc-e.kc)*r,dive:e.dive+(i.dive-e.dive)*r,rise:e.rise+(i.rise-e.rise)*r,blast:0,burst:0,cloud:0,below:i.below*r,fog:i.fog*r,sink:i.sink,fade:e.fade+(i.fade-e.fade)*r,on:e.on+(i.on-e.on)*r}}return s.blast=m((n-.17)/.3),s.burst=Math.max(0,Math.min(1,(n-.14)/.78)),s.cloud=m((n-.4)/.14),s.up=l(i(s.up,a(s.fw,o(s.up,s.fw)))),s}var U=`precision highp float;
const vec3 BLUE = vec3(0.0, 0.0, 0.96863);
const vec3 WHITE = vec3(1.0);
uniform vec3 uCam;
uniform vec3 uRt;
uniform vec3 uUp;
uniform vec3 uFw;
uniform vec2 uC;
uniform vec2 uRes;
uniform float uFocal;
uniform float uT;
uniform float uDpr;
varying vec4 vC;
vec4 clipAt(vec2 sp) { return vec4(sp.x / uRes.x * 2.0 - 1.0, 1.0 - sp.y / uRes.y * 2.0, 0.0, 1.0); }
vec2 screen(vec3 v, float ez) { return uC + vec2(dot(v, uRt), -dot(v, uUp)) * uFocal / ez; }
#define CULL { gl_Position = vec4(0.0, 0.0, 2.0, 1.0); gl_PointSize = 1.0; vC = vec4(0.0); return; }
`,ce=`${U}
attribute vec3 aP;
attribute vec4 aS;
uniform vec3 uLight;
uniform vec3 uCityP;
uniform float uRef, uSize, uAlpha, uCityFade, uK0, uK1, uBlast;
void main() {
  vec3 n = normalize(aP);
  float disp = 0.006 * sin(uT * 0.6) + 0.004 * sin(uT * 0.8 + aS.x * 6.2831853);
  // The burst: the globe blows apart, straight out from its centre, as the
  // dive begins. VS_CITY moves the streamed points the same way.
  float b = uBlast * (0.55 + 0.45 * aS.z);
  vec3 w = aP * (1.0 + disp) + n * b * (0.3 + 2.0 * aS.x);
  vec3 v = w - uCam;
  float ez = dot(v, uFw);
  if (ez < 0.002) CULL
  gl_Position = clipAt(screen(v, ez));
  float facing = dot(n, normalize(uCam - w));
  float vis = mix(0.08, 1.0, smoothstep(-0.2, 0.25, facing));
  float lam = clamp(dot(n, uLight), 0.0, 1.0);
  vec3 col = mix(BLUE, WHITE, mix(uK0, uK1, lam * 0.9));
  float tw = 0.85 + 0.15 * sin(uT * (0.5 + aS.x * 1.2) + aS.y * 40.0);
  float keep = smoothstep(0.999, 0.99985, dot(n, uCityP));
  float a = uAlpha * vis * tw * mix(1.0, keep * 0.5, uCityFade) * (1.0 - smoothstep(0.25, 0.9, uBlast));
  col = mix(col, WHITE, 0.6 * smoothstep(0.0, 0.3, uBlast) * (1.0 - smoothstep(0.3, 0.9, uBlast)));
  gl_PointSize = max(1.0, uSize * uDpr * clamp(uRef / ez, 0.5, 2.4) * (0.75 + 0.5 * aS.y));
  vC = vec4(col * a, a);
}`,le=`${U}
attribute vec3 aG;
attribute vec4 aS;
attribute vec4 aK;
uniform vec3 uLight;
uniform vec3 uCityP;
uniform vec3 uE;
uniform vec3 uN;
uniform float uRef, uRefC, uFar, uSize, uSizeC, uAlpha, uAlphaC, uScale, uBurst, uBlast, uFill, uK0, uK1, uC0, uC1;
// Where London erupts from, local km: under the dive's line of sight.
const vec3 CORE = vec3(0.1, 0.0, -0.75);
float hash(vec3 p, float s) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719)) + s * 17.17) * 43758.5453); }
vec3 bez(vec3 a, vec3 b, vec3 c, vec3 d, float t) {
  float u = 1.0 - t;
  return u * u * u * a + 3.0 * u * u * t * b + 3.0 * u * t * t * c + t * t * t * d;
}
void main() {
  bool fill = uFill > 0.5;
  // Seeds: the streamed points carry theirs; the fill's come from its target.
  vec4 r = fill ? vec4(hash(aK.xyz, 1.0), hash(aK.xyz, 2.0), hash(aK.xyz, 3.0), hash(aK.xyz, 4.0)) : aS;
  vec3 up = uCityP;
  // When: the skeleton first, then the fill from the ground up.
  float tall = clamp(aK.y / 0.22, 0.0, 1.0);
  float d = fill ? 0.12 + 0.3 * r.w + 0.14 * tall : 0.1 + 0.2 * r.w;
  float t = clamp((uBurst - d) / (fill ? 0.42 : 0.45), 0.0, 1.0);
  // The fill has no globe phase: nothing to draw before it erupts.
  if (fill && t <= 0.0) CULL
  float e = t * t * (3.0 - 2.0 * t);
  // Fast out of the blast, slow into place.
  float f = 1.0 - (1.0 - e) * (1.0 - e) * (1.0 - e);
  vec3 w;
  vec3 g = aG * (1.0 + 0.006 * sin(uT * 0.6));
  vec3 gn = normalize(g);
  if (t <= 0.0) {
    // Still one of the globe's points: blown straight out with it.
    w = g + gn * uBlast * (0.55 + 0.45 * r.z) * (0.3 + 2.0 * r.x);
  } else {
    // The eruption, in local km: straight out from the centre, up and past
    // its building, then down onto it. Most land close; a few fly far wide.
    vec2 dir = aK.xz - CORE.xz;
    float rad = length(dir);
    vec2 kick = vec2(cos(r.y * 6.2831853), sin(r.y * 6.2831853));
    vec2 o = rad > 0.01 ? dir / rad : kick;
    float reach = rad + 0.2;
    float s = 1.0 + 2.2 * r.x * r.x * r.x;
    float lift = 0.3 + 0.9 * r.z;
    vec3 k0 = CORE + vec3(kick.x, 0.4, kick.y) * 0.03;
    vec3 k1 = vec3(CORE.x + o.x * reach * 0.8 * s, lift, CORE.z + o.y * reach * 0.8 * s);
    vec3 k2 = vec3(aK.x + o.x * reach * (s - 1.0) * 0.6, aK.y + lift * 0.4, aK.z + o.y * reach * (s - 1.0) * 0.6);
    vec3 k = bez(k0, k1, k2, aK.xyz, f);
    // In flight, a little drift with time (not scroll), so the eruption
    // stays alive when the scroll rests. Nothing moves once landed.
    float flight = 4.0 * f * (1.0 - f);
    k += vec3(sin(uT * 0.7 + r.x * 6.2831853), 0.5 * sin(uT * 0.5 + r.z * 6.2831853), cos(uT * 0.6 + r.y * 6.2831853)) * 0.05 * flight;
    w = up + uScale * (uE * k.x + uN * k.z + up * k.y);
  }
  vec3 v = w - uCam;
  float ez = dot(v, uFw);
  if (ez < 0.0003) CULL
  gl_Position = clipAt(screen(v, ez));
  // On the globe: its shading, flashing white as it blows. Erupting:
  // white-hot. Landed: the city's colours.
  float facing = dot(gn, normalize(uCam - g));
  float vis = mix(0.08, 1.0, smoothstep(-0.2, 0.25, facing));
  float lam = clamp(dot(gn, uLight), 0.0, 1.0);
  float flash = 0.6 * smoothstep(0.0, 0.3, uBlast) * (1.0 - smoothstep(0.3, 0.9, uBlast));
  float kG = mix(mix(uK0, uK1, lam * 0.9), 1.0, flash);
  float kC = mix(uC0, uC1, aK.w) * (1.0 - 0.25 * smoothstep(0.03, 0.09, ez));
  float hot = 1.0 - smoothstep(0.3, 0.95, f);
  float k = t > 0.0 ? mix(kC, 1.0, 0.75 * hot) : kG;
  vec3 col = mix(BLUE, WHITE, k);
  float fNear = smoothstep(0.0015, 0.01, ez);
  // Far away is quiet (uFar follows the camera's height), so the eruption reads.
  float fFar = 1.0 - smoothstep(uFar * 0.42, uFar, ez);
  float shimmer = 0.9 + 0.1 * sin(uT * (0.4 + r.x) + r.y * 40.0);
  float alpha;
  if (t <= 0.0) {
    // On the globe, fading with its burst and gone just before it erupts.
    alpha = uAlpha * vis * (1.0 - smoothstep(0.25, 0.9, uBlast)) * (1.0 - smoothstep(d - 0.04, d, uBurst));
  } else {
    // Appears once clear of the centre, so the centre doesn't burn out and
    // the burst reads as streaks flying out. The fill, ten times as many, is
    // fainter in flight and solid on landing.
    alpha = uAlphaC * (0.3 + 0.7 * aK.w) * smoothstep(0.04, 0.25, f);
    if (fill) alpha *= mix(0.2, 1.0, smoothstep(0.55, 0.95, f));
  }
  alpha *= fNear * fFar * shimmer;
  float sG = uSize * clamp(uRef / ez, 0.5, 2.4) * (0.75 + 0.5 * aS.y);
  float sC = uSizeC * clamp(uRefC / ez, 0.6, 2.2) * (0.8 + 0.4 * r.y) * (1.0 + 0.4 * hot);
  gl_PointSize = max(1.0, (t > 0.0 ? sC : sG) * uDpr);
  vC = vec4(col * alpha, alpha);
}`,ue=`${U}
attribute vec4 aK;
uniform vec3 uCityP;
uniform vec3 uE;
uniform vec3 uN;
uniform float uScale, uCloud, uAlpha, uFine, uMaxSize, uBelow;
varying float vS;
void main() {
  vS = uFine;
  // The deck sways slowly on the wind; the fine particles churn a little.
  float ph = fract(sin(dot(aK.xz, vec2(12.9898, 78.233))) * 43758.5453);
  vec3 k = aK.xyz + vec3(0.25 * sin(uT * 0.03), 0.0, 0.0);
  float tau = 6.2831853 * ph;
  k += uFine * 0.018 * vec3(sin(uT * 0.5 + tau), 0.5 * sin(uT * 0.37 + 2.0 * tau), cos(uT * 0.43 + tau));
  vec3 w = uCityP + uScale * (uE * k.x + uN * k.z + uCityP * k.y);
  vec3 v = w - uCam;
  float ez = dot(v, uFw);
  if (ez < 0.0002 || uCloud < 0.001) CULL
  gl_Position = clipAt(screen(v, ez));
  float lit = aK.w, a, px, tone;
  if (uFine > 0.5) {
    // Fine particles: about a pixel and a quarter at 400 m on a laptop
    // (less on a phone's narrower view), up to six times that as they rush
    // past, gone within 12 m and beyond 6 km.
    px = 1.25 * clamp(0.01 / ez, 0.75, 6.0) * clamp(uFocal / 900.0, 0.6, 1.2);
    a = smoothstep(0.0003, 0.0012, ez) * (1.0 - smoothstep(0.06, 0.16, ez)) * (0.4 + 0.6 * lit) * mix(1.0, 0.6, uBelow);
    tone = 0.55 + 0.45 * lit;
  } else {
    // Blobs, 400 to 700 m across: up close they would fill the screen, so
    // they fade there and the mist takes over. From beneath, only the
    // nearer ones show, and only half of those, so the ceiling stays light
    // on the skyline and on the GPU.
    px = 2.0 * (0.2 + 0.15 * ph) * uScale * uFocal / ez;
    float far = mix(0.18, 0.1, uBelow);
    a = smoothstep(0.0015, 0.006, ez) * (1.0 - smoothstep(far, far * 1.8, ez)) * (0.45 + 0.55 * lit);
    a *= mix(1.0, 0.45 * step(ph, 0.5), uBelow);
    tone = 0.4 + 0.5 * lit;
  }
  a *= uAlpha * uCloud;
  // Big soft points cost fill rate even when clear, so skip the clear ones.
  if (a < 0.002) CULL
  gl_PointSize = clamp(px * uDpr, 1.0, uMaxSize);
  vC = vec4(mix(BLUE, WHITE, tone) * a, a);
}`,de=`precision mediump float;
varying vec4 vC;
varying float vS;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = dot(c, c);
  if (d > 0.25) discard;
  gl_FragColor = vC * mix(exp(-d * 14.0), 1.0 - smoothstep(0.12, 0.25, d), vS);
}`,fe=`attribute vec2 aXY;
varying vec2 vU;
void main() {
  vU = aXY;
  gl_Position = vec4(aXY, 0.0, 1.0);
}`,pe=`#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
const vec3 BLUE = vec3(0.0, 0.0, 0.96863);
const vec3 WHITE = vec3(1.0);
uniform float uFog, uDepth, uT;
uniform vec2 uAspect;
varying vec2 vU;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) { return 0.55 * noise(p) + 0.3 * noise(p * 2.03 + 1.7) + 0.15 * noise(p * 4.01 + 3.1); }
void main() {
  vec2 p = vU * uAspect;
  float m = 0.0;
  for (int i = 0; i < 3; i++) {
    float f = fract(uDepth + float(i) / 3.0);
    float sc = exp2(f * 2.0);
    m += sin(3.1415927 * f) * fbm(p * 1.6 / sc + float(i) * 7.31 + vec2(uT * 0.015, 0.0));
  }
  m = clamp((m / 1.9 - 0.25) * 1.9, 0.0, 1.0);
  float a = uFog * (0.3 + 0.7 * m) * (0.9 + 0.1 * vU.y);
  gl_FragColor = vec4(mix(BLUE, WHITE, 0.32 + 0.4 * m) * a, a);
}`,me=`${U}
attribute vec3 aA;
attribute vec3 aB;
attribute vec4 aQ;
attribute vec2 aJ;
uniform float uOn, uRef;
void main() {
  float t = fract(aQ.x + uT * aQ.y) - aQ.z * 0.12;
  float on = step(0.0, t);
  t = clamp(t, 0.0, 1.0);
  float w = acos(clamp(dot(aA, aB), -1.0, 1.0));
  float sw = max(sin(w), 0.0001);
  vec3 pos = (sin((1.0 - t) * w) * aA + sin(t * w) * aB) / sw;
  vec3 side = normalize(cross(pos, aB - aA + vec3(0.0001)));
  pos = normalize(pos) * (1.0 + aQ.w * sin(3.1415927 * t)) + side * aJ.x * 0.004 * (1.0 + aQ.z * 2.0);
  vec3 v = pos - uCam;
  float ez = dot(v, uFw);
  if (ez < 0.01) CULL
  gl_Position = clipAt(screen(v, ez));
  vec3 dc = normalize(uCam - pos);
  float bq = dot(pos, dc);
  float cq = dot(pos, pos) - 1.0;
  float hid = (bq < 0.0 && bq * bq - cq > 0.0) ? 0.15 : 1.0;
  float ends = smoothstep(0.0, 0.03, t) * (1.0 - smoothstep(0.94, 1.0, t));
  float kk = 1.0 - aQ.z;
  float a = uOn * on * ends * hid * aJ.y * kk * kk * 0.8;
  gl_PointSize = max(1.0, uDpr * clamp(uRef / ez, 0.5, 2.0) * (0.8 + 1.6 * kk * kk));
  vC = vec4(mix(BLUE, WHITE, mix(0.5, 1.0, kk * kk)) * a, a);
}`,he=`precision mediump float;
varying vec4 vC;
void main() {
  // A crisp dot: solid to about two-thirds of its radius, then a short edge.
  vec2 c = gl_PointCoord - 0.5;
  float d = dot(c, c);
  if (d > 0.25) discard;
  gl_FragColor = vC * (1.0 - smoothstep(0.12, 0.25, d));
}`,ge=`precision highp float;
attribute vec2 aXY;
attribute vec2 aUV;
attribute vec4 aM;
uniform vec2 uRes;
varying vec2 vUV;
varying vec4 vM;
void main() {
  vUV = aUV;
  vM = aM;
  gl_Position = vec4(aXY.x / uRes.x * 2.0 - 1.0, 1.0 - aXY.y / uRes.y * 2.0, 0.0, 1.0);
}`,_e=`precision mediump float;
const vec3 BLUE = vec3(0.0, 0.0, 0.96863);
const vec3 WHITE = vec3(1.0);
varying vec2 vUV;
varying vec4 vM;
float disc(float r, float rad) { return 1.0 - smoothstep(rad - 0.6, rad + 0.6, r); }
void main() {
  float r = length(vUV) * vM.z;
  vec4 o;
  if (vM.x < 0.5) {
    // Hub: a white light that fades out through EX Blue, with a white core.
    float g = clamp(1.0 - r / vM.w, 0.0, 1.0);
    vec4 glow = vec4(mix(BLUE, WHITE, 0.5 + 0.5 * g), 1.0) * (0.85 * g);
    float core = disc(r, 2.2);
    o = vec4(WHITE, 1.0) * core + glow * (1.0 - core);
  } else {
    // You are here: a white ring with a dot in the centre.
    float ring = 1.0 - smoothstep(0.65, 1.45, abs(r - 7.0));
    float core = disc(r, 2.4);
    float a = max(ring, core);
    o = vec4(WHITE, 1.0) * a;
  }
  gl_FragColor = o * vM.y;
}`,ve=`/_astro/london.DBfygRB9.bin`,W=n({createGlobe:()=>G}),ye={high:8e4,mid:4e4,low:12e3},be={high:32e4,mid:14e4,low:7e4},xe={high:8e4,mid:4e4,low:12e3},Se={high:256,mid:180,low:110},Ce=.45;function we(){let e=navigator,t=e.hardwareConcurrency||4,n=e.deviceMemory;return t<=2||n!==void 0&&n<=2||t<=4&&n!==void 0&&n<=4?`low`:t>=8&&(n===void 0||n>=8)?`high`:`mid`}function Te(e){try{let t=String(e.getParameter(e.RENDERER)??``);if(/^webkit webgl$/i.test(t)){let n=e.getExtension(`WEBGL_debug_renderer_info`);n&&(t=String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)??``))}return/swiftshader|llvmpipe|softpipe|software|basic render/i.test(t)}catch{return!1}}var Ee=.03,De=.08,Oe=22,ke=262144,Ae=50,je=37297,Me=[.23,.925,.5],Ne=[0,.26,.2],Pe=[.855,1,.45],Fe=[.2,1,.62],Ie=.7,Le=.11,Re=.75,ze=.6,Be=2e5,Ve=[`pos`,`seed`,`gpos`,`gseed`,`city`,`fill`,`clouds`,`fl`];function G(t,n){let r=!!n.still,a=n.hubs.map(e=>({id:e.id,v:_(e.lat,e.lng)})),u=n.hubs.map(e=>({lat:e.lat,lng:e.lng})),d=n.routes??w,f=n.showVisitor===!1?null:_(...T()),p=n.worker!==!1&&typeof Worker<`u`,h=`mid`,g=0,v=1.5,y=0,b=0,x=0,S=0,C=0,E=!r,ne=0,ie=0,O=1,k=1/60,A=0,j=0,M=0,N=0,ae=0,P=!0,F=!0,I=!1,L=!1,R=!1,z=!1,B=null,V=null,H=0,U=0,W=null,G={setProgress(e){if(r||!Number.isFinite(e))return;let t=Math.max(0,Math.min(1,e));t!==b&&(b=t,P=!0,$())},play(){r||E||(E=!0,N=0,$())},pause(){E=!1},hubAt(e,t){let n=Oe,r=null;for(let i of G.hubScreenPositions()){if(!i.visible)continue;let a=Math.hypot(i.x-e,i.y-t);a<n&&(n=a,r=i.id)}return r},hubScreenPositions(){let e=t.clientWidth,n=t.clientHeight,r=st(e||1,n||1);return a.map(t=>{let i=ct(r,t.v);if(!i)return{id:t.id,x:NaN,y:NaN,visible:!1};let a=i[2]>.05&&r.cam.on>.5&&i[0]>=0&&i[0]<=e&&i[1]>=0&&i[1]<=n;return{id:t.id,x:i[0],y:i[1],visible:a}})},destroy(){if(L)return;L=!0,He();let e=q;if(e&&!e.isContextLost()){for(let t of[B?.b,V?.b,Y])if(t)for(let n of Object.values(t))e.deleteBuffer(n);for(let t of J)e.deleteProgram(t.p),t.s.forEach(t=>e.deleteShader(t))}B=V=null}};function He(){cancelAnimationFrame(M),M=0,We?.disconnect(),Ge?.disconnect(),W?.terminate(),W=null,document.removeEventListener(`visibilitychange`,qe),t.removeEventListener(`webglcontextlost`,Ke)}let K=e=>{I||L||(I=!0,He(),queueMicrotask(()=>n.onFail?.(e)))},Ue={alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1},q=null;try{q=t.getContext(`webgl2`,Ue)??t.getContext(`webgl`,Ue)}catch{q=null}let J=[],Y=null,We=null,Ge=null,Ke=()=>K(`context-lost`),qe=()=>{N=0,$()};if(!q||q.isContextLost())return K(`webgl-unavailable`),G;let X=q,Je=Te(X);h=n.tier??(Je?`low`:we()),g=Math.max(2e3,Math.round(n.particles??ye[h])),v=n.maxPixelRatio??(h===`low`?1:h===`mid`?1.5:2),y=Je?Ae:0;let Ye=X.getParameter(X.ALIASED_POINT_SIZE_RANGE),Xe=Math.max(16,Math.min(Ye?Ye[1]:64,Se[h])),Ze=!!X.getExtension(`KHR_parallel_shader_compile`),Qe=(e,t,n)=>{let r=X.createProgram();if(!r)throw Error(`createProgram`);let i=[X.VERTEX_SHADER,X.FRAGMENT_SHADER].map((n,i)=>{let a=X.createShader(n);if(!a)throw Error(`createShader`);return X.shaderSource(a,i?t:e),X.compileShader(a),X.attachShader(r,a),a});n.forEach((e,t)=>X.bindAttribLocation(r,t,e)),X.linkProgram(r);let a={p:r,s:i,u:{},done:!1};return J.push(a),a},Z=[[ce,he,[`aP`,`aS`]],[le,he,[`aG`,`aS`,`aK`]],[me,he,[`aA`,`aB`,`aQ`,`aJ`]],[ge,_e,[`aXY`,`aUV`,`aM`]],[ue,de,[`aK`]],[fe,pe,[`aXY`]]];try{Ze?Z.forEach(e=>Qe(...e)):Qe(...Z[0]),Y={mark:$e(),fog:$e()},X.bindBuffer(X.ARRAY_BUFFER,Y.fog),X.bufferData(X.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),X.STATIC_DRAW)}catch(e){return K(`webgl-setup: `+(e instanceof Error?e.message:String(e))),G}let Q={get globe(){return J[0]},get city(){return J[1]},get routes(){return J[2]},get mark(){return J[3]},get cloud(){return J[4]},get fog(){return J[5]}};function $e(){let e=X.createBuffer();if(!e)throw Error(`createBuffer`);return e}function et(){if(z)return!0;for(let e of J){if(e.done)continue;if(Ze&&!X.getProgramParameter(e.p,je))return!1;if(!X.getProgramParameter(e.p,X.LINK_STATUS)){let t=e.s.map(e=>X.getShaderInfoLog(e)||``).join(` `)+(X.getProgramInfoLog(e.p)||``);throw Error(t.trim()||`link`)}let t=X.getProgramParameter(e.p,X.ACTIVE_UNIFORMS);for(let n=0;n<t;n++){let t=X.getActiveUniform(e.p,n);t&&(e.u[t.name.replace(/\[0\]$/,``)]=X.getUniformLocation(e.p,t.name))}if(e.done=!0,!Ze)return J.length<Z.length&&Qe(...Z[J.length]),!1}return z=J.length===Z.length&&J.every(e=>e.done),z}t.addEventListener(`webglcontextlost`,Ke);function tt(t){H=t;let n=++U,r=Math.min(4e5,Math.round(be[h]*(t/ye[h]))),i=Math.min(1e5,Math.round(xe[h]*(t/ye[h]))),a={id:n,N:t,hubs:u,routes:d,city:{url:new URL(ve,location.href).href,fill:r},clouds:i};if(p)try{W||(W=new Worker(new URL(`/_astro/worker-DA1BK8p3.js`,``+import.meta.url),{type:`module`,name:`globe-build`}),W.onmessage=e=>nt(e.data),W.onerror=e=>{e.preventDefault(),W?.terminate(),W=null,p=!1,tt(H)}),W.postMessage(a);return}catch{p=!1}e(()=>import(`./build.BIAoGhqP.js`).then(e=>e.buildSliced(t,u,d,i)),[]).then(e=>nt({id:n,points:e}),e=>nt({id:n,error:e instanceof Error?e.message:String(e)}))}function nt(e){if(L||I||e.id!==U)return;if(`error`in e){K(`build: `+e.error);return}if(V)for(let e of Object.values(V.b))X.deleteBuffer(e);let t=e.points,n={},r=[];try{for(let e of Ve){n[e]=$e();let i=t[e];X.bindBuffer(X.ARRAY_BUFFER,n[e]),X.bufferData(X.ARRAY_BUFFER,i.byteLength,X.STATIC_DRAW),r.push({b:n[e],data:new Uint8Array(i.buffer,i.byteOffset,i.byteLength),off:0})}}catch(e){K(`webgl-setup: `+(e instanceof Error?e.message:String(e)));return}V={G:t,b:n,queue:r},$()}function rt(){if(!V)return;let e=ke;for(;V.queue.length&&e>0;){let t=V.queue[0],n=Math.min(e,t.data.byteLength-t.off);X.bindBuffer(X.ARRAY_BUFFER,t.b),X.bufferSubData(X.ARRAY_BUFFER,t.off,t.data.subarray(t.off,t.off+n)),t.off+=n,e-=n,t.off>=t.data.byteLength&&V.queue.shift()}if(!V.queue.length){if(B)for(let e of Object.values(B.b))X.deleteBuffer(e);B={G:V.G,b:V.b},V=null,P=!0}}let it=e=>Math.round(g*(e<700?Ce:1)),at=()=>!z||!!V;function $(){M||L||I||!F||document.hidden||(at()||P||E)&&(M=requestAnimationFrame(ot))}function ot(e){if(M=0,L||I)return;if(!F||document.hidden){N=0;return}let r=t.clientWidth,i=t.clientHeight;r&&i&&it(r)!==H&&tt(it(r));try{if(!z&&!et()){$();return}V&&rt()}catch(e){K(`webgl-setup: `+(e instanceof Error?e.message:String(e)));return}if(!B||!r||!i){at()&&$();return}if(!P&&R&&y&&e-ae<y){$();return}let a=N?Math.min(.05,Math.max(0,(e-N)/1e3)):0;N=e;let o=C?Math.min(.25,Math.max(0,(e-C)/1e3)):1/60;C=e;let s=!1;if(R||(x=b,S=0),x!==b||S!==0){for(let e=o;e>0;e-=1/240){let t=Math.min(e,1/240);S+=(49*(b-x)-14*S)*t,x+=S*t}Math.abs(b-x)<3e-4&&Math.abs(S)<.002?(x=b,S=0):s=!0,P=!0}E&&R&&a>0&&(ne+=a,ie+=a*Ee*(1-m(x/De)),k+=(a-k)*.05,A+=a,n.adaptive!==!1&&A-j>3&&A>4&&k>.034&&O>.36&&(O=O>.7?.6:.35,j=A,k=.02)),P=!1;try{ut(r,i,B.G,B.b)}catch(e){K(`render: `+(e instanceof Error?e.message:String(e)));return}ae=e,R||(R=!0,n.onReady?.()),s&&(P=!0),E||s||at()?$():N=C=0}typeof IntersectionObserver<`u`&&(We=new IntersectionObserver(e=>{F=e[e.length-1].isIntersecting,F?$():N=0}),We.observe(t)),typeof ResizeObserver<`u`&&(Ge=new ResizeObserver(()=>{P=!0,$()}),Ge.observe(t)),document.addEventListener(`visibilitychange`,qe),t.clientWidth&&tt(it(t.clientWidth)),$();function st(e,t){let n=se(r?0:x,oe(ie)),i=s(n.fw,n.up),a=e>900,o=a?e*.385:e*.5,c=t*.5,l=Math.min(a?e*.235:e*.35,t*.32,320),u=l*Math.sqrt(re*re-1);return{cam:n,rt:i,f:u+(Math.max(e,t*1.25)*.6-u)*n.kc,cx:o+(e*.5-o)*n.kc,cy:c+(t*.5-c)*n.kc,Rpx:l,W:e,H:t}}function ct(e,t){let{cam:n}=e,r=i(t,n.pos),a=o(r,n.fw);return a<1e-4?null:[e.cx+o(r,e.rt)*e.f/a,e.cy-o(r,n.up)*e.f/a,o(t,l(i(n.pos,t)))]}let lt=new Float32Array((a.length+1)*6*8);function ut(e,n,r,i){let o=Math.min(window.devicePixelRatio||1,v),s=Math.max(1,Math.round(e*o)),u=Math.max(1,Math.round(n*o));t.width!==s&&(t.width=s),t.height!==u&&(t.height=u);let d=st(e,n),{cam:p,rt:m}=d,h=s/e,g=Math.max(.6,Math.min(1.6,Math.sqrt(8e4/62500/(r.N/(d.Rpx*d.Rpx))))),_=l([-.45*m[0]+.55*p.up[0]-.7*p.fw[0],-.45*m[1]+.55*p.up[1]-.7*p.fw[1],-.45*m[2]+.55*p.up[2]-.7*p.fw[2]]);X.viewport(0,0,s,u),X.clearColor(0,0,0,0),X.clear(X.COLOR_BUFFER_BIT),X.disable(X.DEPTH_TEST),X.enable(X.BLEND),X.blendFunc(X.ONE,X.ONE);let y=t=>{let r=t.u;X.uniform3f(r.uCam,p.pos[0],p.pos[1],p.pos[2]),X.uniform3f(r.uRt,m[0],m[1],m[2]),X.uniform3f(r.uUp,p.up[0],p.up[1],p.up[2]),X.uniform3f(r.uFw,p.fw[0],p.fw[1],p.fw[2]),X.uniform2f(r.uC,d.cx,d.cy),X.uniform2f(r.uRes,e,n),X.uniform1f(r.uFocal,d.f),X.uniform1f(r.uT,ne),X.uniform1f(r.uDpr,h)},b=(e,t,n,r,i,a=0,o=0)=>{X.bindBuffer(X.ARRAY_BUFFER,t),X.enableVertexAttribArray(e),X.vertexAttribPointer(e,n,r,i,a,o)},x=(...e)=>e.forEach(e=>X.disableVertexAttribArray(e)),S=Q.globe,C=S.u;X.useProgram(S.p),y(S),X.uniform3f(C.uLight,_[0],_[1],_[2]),X.uniform3f(C.uCityP,D.U[0],D.U[1],D.U[2]),X.uniform1f(C.uRef,3.5),X.uniform1f(C.uCityFade,p.fade),X.uniform1f(C.uBlast,p.blast),b(0,i.pos,3,X.FLOAT,!1),b(1,i.seed,4,X.UNSIGNED_BYTE,!0),x(2,3);let w=(e,t,n,r,i)=>{X.uniform1f(C.uK0,n[0]),X.uniform1f(C.uK1,n[1]),X.uniform1f(C.uAlpha,n[2]*i),X.uniform1f(C.uSize,r),t>0&&X.drawArrays(X.POINTS,e,t)};w(r.NL+r.Nc,Math.round(r.No*O),Ne,1.3,g),w(0,Math.round(r.NL*O),Me,1.7,g),w(r.NL,r.Nc,Pe,2,1);let T=Q.city,E=T.u,re=c(p.pos)-1;if(X.useProgram(T.p),y(T),X.uniform3f(E.uLight,_[0],_[1],_[2]),X.uniform3f(E.uCityP,D.U[0],D.U[1],D.U[2]),X.uniform3f(E.uE,D.E[0],D.E[1],D.E[2]),X.uniform3f(E.uN,D.N[0],D.N[1],D.N[2]),X.uniform1f(E.uRef,3.5),X.uniform1f(E.uRefC,.015),X.uniform1f(E.uFar,Math.max(.095,re*2.2)),X.uniform1f(E.uSize,1.7),X.uniform1f(E.uSizeC,1.6),X.uniform1f(E.uAlpha,Me[2]*g),X.uniform1f(E.uAlphaC,Fe[2]),X.uniform1f(E.uScale,ee),X.uniform1f(E.uBurst,p.burst),X.uniform1f(E.uBlast,p.blast),X.uniform1f(E.uFill,0),X.uniform1f(E.uK0,Me[0]),X.uniform1f(E.uK1,Me[1]),X.uniform1f(E.uC0,Fe[0]),X.uniform1f(E.uC1,Fe[1]),b(0,i.gpos,3,X.FLOAT,!1),b(1,i.gseed,4,X.UNSIGNED_BYTE,!0),b(2,i.city,4,X.FLOAT,!1),X.drawArrays(X.POINTS,0,Math.round(r.K*O)),r.F>0&&p.burst>.12){x(0,1),X.vertexAttrib3f(0,D.U[0],D.U[1],D.U[2]),X.vertexAttrib4f(1,.5,.5,.5,0),X.uniform1f(E.uFill,1);let e=Math.max(1,Math.round(r.F*O)),t=Math.min(2.4,Math.max(1,Math.sqrt(Be/e)));X.uniform1f(E.uAlphaC,Math.min(1,Fe[2]*Ie*t)),X.uniform1f(E.uSizeC,1.6*Math.sqrt(t)),b(2,i.fill,4,X.FLOAT,!1),X.drawArrays(X.POINTS,0,Math.round(r.F*O))}if(x(2),r.C>0&&p.cloud>.001){let t=Q.cloud,a=t.u;X.useProgram(t.p),y(t),X.uniform3f(a.uCityP,D.U[0],D.U[1],D.U[2]),X.uniform3f(a.uE,D.E[0],D.E[1],D.E[2]),X.uniform3f(a.uN,D.N[0],D.N[1],D.N[2]),X.uniform1f(a.uScale,ee),X.uniform1f(a.uCloud,p.cloud),X.uniform1f(a.uBelow,p.below),X.uniform1f(a.uMaxSize,Xe),x(1,2,3),b(0,i.clouds,4,X.FLOAT,!1);let o=Math.round(r.C*te);if(X.blendFunc(X.ONE,X.ONE_MINUS_SRC_ALPHA),X.uniform1f(a.uFine,0),X.uniform1f(a.uAlpha,Le),X.drawArrays(X.POINTS,0,Math.round(o*O)),p.fog>.002&&Y){let r=Q.fog;X.useProgram(r.p),X.uniform1f(r.u.uFog,p.fog*ze),X.uniform1f(r.u.uDepth,p.sink/.12),X.uniform1f(r.u.uT,ne),X.uniform2f(r.u.uAspect,e/n,1),b(0,Y.fog,2,X.FLOAT,!1),X.drawArrays(X.TRIANGLES,0,3),X.useProgram(t.p),b(0,i.clouds,4,X.FLOAT,!1)}X.blendFunc(X.ONE,X.ONE),X.uniform1f(a.uFine,1),X.uniform1f(a.uAlpha,Re),X.drawArrays(X.POINTS,o,Math.round((r.C-o)*O))}if(p.on>.01){let t=Q.routes;X.useProgram(t.p),y(t),X.uniform1f(t.u.uOn,p.on),X.uniform1f(t.u.uRef,3.5),b(0,i.fl,3,X.FLOAT,!1,48,0),b(1,i.fl,3,X.FLOAT,!1,48,12),b(2,i.fl,4,X.FLOAT,!1,48,24),b(3,i.fl,2,X.FLOAT,!1,48,40),X.drawArrays(X.POINTS,0,r.nf),x(2,3);let o=0,s=(e,t,n,r,i,a)=>{for(let[s,c]of[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]])lt.set([e+s*i,t+c*i,s,c,n,r,i,a],o*8),o++};for(let e of a){let t=ct(d,e.v);t&&t[2]>.05&&s(t[0],t[1],0,Math.min(1,t[2]*p.on),10,10)}if(f){let e=ct(d,f);e&&e[2]>.05&&s(e[0],e[1],1,Math.min(1,e[2]*p.on),10,0)}if(o&&Y){let t=Q.mark;X.useProgram(t.p),X.uniform2f(t.u.uRes,e,n),X.blendFunc(X.ONE,X.ONE_MINUS_SRC_ALPHA),X.bindBuffer(X.ARRAY_BUFFER,Y.mark),X.bufferData(X.ARRAY_BUFFER,lt.subarray(0,o*8),X.DYNAMIC_DRAW),X.enableVertexAttribArray(0),X.vertexAttribPointer(0,2,X.FLOAT,!1,32,0),X.enableVertexAttribArray(1),X.vertexAttribPointer(1,2,X.FLOAT,!1,32,8),X.enableVertexAttribArray(2),X.vertexAttribPointer(2,4,X.FLOAT,!1,32,16),X.drawArrays(X.TRIANGLES,0,o),x(2)}}}return G}export{y as a,E as i,W as n,o,te as r,_ as s,G as t};