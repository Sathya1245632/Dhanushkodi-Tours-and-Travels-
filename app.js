/**
 * DHANUSHKODI TOURS & TRAVELS — COMPLETE PRODUCTION WEB APPLICATION ENGINE
 * Integrated with `agency-senior-developer` & `scroll-experience` Patterns:
 * - Three.js Custom GLSL Dual-Ocean Shaders, Moving Pamban Train & Golden Sky Particles
 * - 4 Interactive Signature Tour Packages + 6 Outstation Corridors
 * - Interactive 3D Fleet Selector, AC/Non-AC Toggle & Day/Sunset Theme Switcher
 * - GSAP ScrollTrigger Scrubbing, Section Reveals, Top Progress Bar & Magnetic Buttons
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. CATALOGS: LANDMARKS, SIGNATURE TOUR PACKAGES, ROUTES & 3D FLEET
  // =========================================================================
  const LANDMARKS = {
    pamban: {
      id: 'pamban',
      num: '01',
      name: 'Pamban Sea Bridge & Vertical Lift Span',
      coords: '09°16\'58"N 79°12\'20"E — Pamban Bridge',
      desc: "Suspended above emerald Palk Strait shallows, India's first sea bridge (2.06 km) and the new vertical-lift railway span carry moving trains and coastal highway traffic.",
      dist: '12 km West of Rameswaram',
      time: '06:30 AM – 08:00 AM (Sunrise)',
      pkg: 'All Local & Outstation Packages',
      pos3D: { x: -12, y: 2.6, z: 12 },
      flyCam: { pos: { x: -14.5, y: 5.2, z: 18.5 }, look: { x: -11.5, y: 2.2, z: 11.8 }, fov: 44 }
    },
    temple: {
      id: 'temple',
      num: '02',
      name: 'Sri Ramanathaswamy Jyotirlinga Temple',
      coords: '09°17\'17"N 79°19\'02"E — Rameswaram Sanctum',
      desc: "Home to the world's longest sculpted pillared corridor (1,219 granite pillars) and 22 sacred Theertham wells. Our chauffeurs coordinate smooth VIP drop-off at the East Gopuram gate.",
      dist: '0 km (Rameswaram Town Hub)',
      time: '05:00 AM Spatika Lingam / 04:00 PM',
      pkg: 'Rameswaram Local & Temple Circuit',
      pos3D: { x: -5, y: 3.4, z: 7 },
      flyCam: { pos: { x: -5.2, y: 4.8, z: 13.8 }, look: { x: -5.0, y: 2.2, z: 7.0 }, fov: 42 }
    },
    ruins: {
      id: 'ruins',
      num: '03',
      name: 'Dhanushkodi Ghost Town Ruins (1964 Heritage)',
      coords: '09°10\'42"N 79°24\'58"E — Ghost Town Ruins',
      desc: 'Windswept coral-limestone remnants of the 1964 cyclone—featuring the iconic St. Antony’s Church altar, railway water tank, and meter-gauge station frozen in coastal sand.',
      dist: '18 km Southeast of Rameswaram',
      time: '07:30 AM – 05:00 PM (NH-87 Corridor)',
      pkg: 'Dhanushkodi Sunrise/Sunset Tour',
      pos3D: { x: 2.5, y: 2.2, z: 4 },
      flyCam: { pos: { x: 1.8, y: 3.9, z: 10.2 }, look: { x: 2.5, y: 1.5, z: 4.0 }, fov: 42 }
    },
    arichal: {
      id: 'arichal',
      num: '04',
      name: 'Arichal Munai (Twin-Ocean Confluence Point)',
      coords: '09°09\'09"N 79°26\'46"E — Arichal Munai',
      desc: 'The dramatic final land tip of India overlooking the Ram Setu (Adam’s Bridge) shoals, where calm turquoise waves of the Bay of Bengal meet deep indigo Indian Ocean swells.',
      dist: '24 km (End of NH-87 Highway)',
      time: '06:00 AM Sunrise / 04:30 PM Golden Hour',
      pkg: 'Dhanushkodi Sunrise/Sunset Tour',
      pos3D: { x: 9.5, y: 2.0, z: 1.5 },
      flyCam: { pos: { x: 12.2, y: 4.2, z: 8.5 }, look: { x: 9.5, y: 1.2, z: 1.5 }, fov: 40 }
    }
  };

  // Unified Catalog of the 4 Signature Tour Packages + 6 Outstation Corridors
  const ROUTES = {
    // --- 4 SIGNATURE TOUR PACKAGES ---
    rameswaram_local: {
      isPackage: true,
      code: 'RMD',
      city: 'Rameswaram Local Sightseeing',
      category: 'temple',
      gps: '09°17\'17"N 79°19\'02"E — Rameswaram 12-Spot Circuit',
      highway: 'ISLAND HERITAGE CIRCUIT',
      title: 'Rameswaram Local Sightseeing (12 Sacred Spots)',
      desc: 'Complete full-day island darshan covering Sri Ramanathaswamy Temple 22 Theerthams, APJ Abdul Kalam Memorial, Pamban Sea Bridge, Panchamukhi Hanuman, and Villoondi Theertham.',
      km: 85,
      duration: 'Full Day (8 hrs)',
      topo: 'Pamban Coral Island (+10m)',
      pkgRatesAc: { sedan: 2800, innova: 3800, tempo: 6200, coach: 12500 },
      pkgRatesNonAc: { sedan: 2400, innova: 3300, tempo: 5400, coach: 10800 },
      linkedPin: 'temple',
      flyCam: { pos: { x: -5.2, y: 4.8, z: 13.8 }, look: { x: -5.0, y: 2.2, z: 7.0 }, fov: 42 }
    },
    dhanushkodi_sunset: {
      isPackage: true,
      code: 'SUN',
      city: 'Dhanushkodi Sunrise/Sunset Tour',
      category: 'coastal',
      gps: '09°09\'09"N 79°26\'46"E — Arichal Munai Golden Hour',
      highway: 'NH-87 TWIN-OCEAN CORRIDOR',
      title: 'Dhanushkodi Sunrise/Sunset Confluence Expedition',
      desc: 'Golden-hour coastal journey along NH-87 to Arichal Munai twin-ocean merging point, 1964 Ghost Town Coral Church & Railway Station ruins, and Kothandaramaswamy Lagoon Temple.',
      km: 60,
      duration: '6 Hours (Sunrise or Sunset)',
      topo: 'Twin-Ocean Sandbar Spit (+2m)',
      pkgRatesAc: { sedan: 2400, innova: 3400, tempo: 5600, coach: 11500 },
      pkgRatesNonAc: { sedan: 2000, innova: 2950, tempo: 4800, coach: 9800 },
      linkedPin: 'arichal',
      flyCam: { pos: { x: 12.2, y: 4.2, z: 8.5 }, look: { x: 9.5, y: 1.2, z: 1.5 }, fov: 40 }
    },
    temple_circuit: {
      isPackage: true,
      code: 'TRI',
      city: 'Madurai-Rameswaram-Kanyakumari Circuit',
      category: 'temple',
      gps: '08°04\'43"N 77°33\'04"E — Grand Temple Triangle',
      highway: 'NH-87 & ECR SPIRITUAL TRIANGLE',
      title: 'Madurai-Rameswaram-Kanyakumari Temple Circuit',
      desc: '3-Day / 2-Night flagship spiritual circuit linking Madurai Meenakshi Amman Temple, Pamban Bridge, Rameswaram Jyotirlinga, Arichal Munai, Tiruchendur, and Kanyakumari Sunrise.',
      km: 520,
      duration: '3 Days / 2 Nights',
      topo: 'Vaigai Plains to Three-Ocean Cape',
      pkgRatesAc: { sedan: 9800, innova: 13500, tempo: 21500, coach: 42000 },
      pkgRatesNonAc: { sedan: 8500, innova: 11800, tempo: 18500, coach: 36500 },
      linkedCity: 'kanyakumari',
      flyCam: { pos: { x: -7.5, y: 14.0, z: 9.5 }, look: { x: -9.5, y: 1.0, z: 0.5 }, fov: 44 }
    },
    hills_coast: {
      isPackage: true,
      code: 'H&C',
      city: 'Hills & Coast Package',
      category: 'hills',
      gps: '10°05\'20"N 77°03\'35"E — Ocean to Western Ghats',
      highway: 'NH-85 COAST-TO-GHATS',
      title: 'Hills & Coast Package (Dhanushkodi to Munnar & Kodai)',
      desc: '5-Day / 4-Night contrast expedition from the turquoise sandbars of Dhanushkodi and Rameswaram up to the misty emerald tea estates of Munnar and Kodaikanal Star Lake.',
      km: 780,
      duration: '5 Days / 4 Nights',
      topo: 'Sea Level (0m) to High Ghats (+2,133m)',
      pkgRatesAc: { sedan: 15800, innova: 21500, tempo: 32800, coach: 64000 },
      pkgRatesNonAc: { sedan: 13900, innova: 18900, tempo: 28500, coach: 56000 },
      linkedCity: 'munnar',
      flyCam: { pos: { x: -8.0, y: 16.5, z: 3.5 }, look: { x: -11.5, y: 3.2, z: -8.5 }, fov: 42 }
    },

    // --- 6 OUTSTATION POINT-TO-POINT CORRIDORS ---
    madurai: {
      isPackage: false,
      code: 'IXM',
      city: 'Madurai',
      category: 'temple',
      gps: '09°55\'31"N 78°07\'10"E — Madurai Meenakshi Hub',
      highway: 'NH-87 EXPRESSWAY',
      title: 'Madurai Temple & Airport Corridor',
      desc: 'Four-lane coastal-to-plains highway linking Pamban Island to Sri Meenakshi Amman Temple, Thirumalai Nayakkar Palace, and Madurai International Airport.',
      km: 175,
      duration: '3 hrs 15 mins',
      topo: 'Coastal Causeway to Vaigai Plains (+101m)',
      pos3D: { x: -8, y: 1.5, z: -10 },
      flyCam: { pos: { x: -4.5, y: 14.5, z: 4.5 }, look: { x: -6.5, y: 1.5, z: -6.5 }, fov: 44 }
    },
    kanyakumari: {
      isPackage: false,
      code: 'CAPE',
      city: 'Kanyakumari',
      category: 'coastal',
      gps: '08°04\'43"N 77°33\'04"E — Triveni Sangamam Cape',
      highway: 'ECR COASTAL HIGHWAY',
      title: 'Kanyakumari Triveni Sangamam Coastal Arc',
      desc: 'Scenic shoreline drive past Tuticorin pearl coast and Tiruchendur sea temple to India’s southernmost tip at Vivekananda Rock Memorial and Thiruvalluvar Statue.',
      km: 310,
      duration: '5 hrs 30 mins',
      topo: 'Gulf of Mannar Coastline (+30m)',
      pos3D: { x: -12, y: 1.1, z: -2 },
      flyCam: { pos: { x: -7.5, y: 14.0, z: 9.5 }, look: { x: -9.5, y: 1.0, z: 0.5 }, fov: 44 }
    },
    munnar: {
      isPackage: false,
      code: 'MNR',
      city: 'Munnar Hills',
      category: 'hills',
      gps: '10°05\'20"N 77°03\'35"E — Munnar Tea High Range',
      highway: 'NH-85 WESTERN GHATS',
      title: 'Munnar Emerald Tea Estate Ascent',
      desc: 'Climbs from the temple plains through Bodi Mettu hairpin viewpoints into rolling 5,000-ft Western Ghats tea plantations, Top Station, and Eravikulam National Park.',
      km: 335,
      duration: '7 hrs 00 mins',
      topo: 'High Western Ghats Ridge (+1,532m)',
      pos3D: { x: -14, y: 4.6, z: -12 },
      flyCam: { pos: { x: -8.0, y: 16.5, z: 3.5 }, look: { x: -11.5, y: 3.2, z: -8.5 }, fov: 42 }
    },
    kodaikanal: {
      isPackage: false,
      code: 'KODAI',
      city: 'Kodaikanal',
      category: 'hills',
      gps: '10°14\'17"N 77°29\'21"E — Kodaikanal Palani Crest',
      highway: 'PALANI GHAT ROAD',
      title: 'Kodaikanal Princess of Hill Stations',
      desc: 'Winds past Silver Cascade waterfalls and eucalyptus shola forests to Kodaikanal Star Lake, Coaker’s Walk, and Pillar Rocks cloud viewpoints.',
      km: 290,
      duration: '6 hrs 00 mins',
      topo: 'Palani Hills Plateau (+2,133m)',
      pos3D: { x: -10, y: 5.2, z: -14 },
      flyCam: { pos: { x: -5.5, y: 17.5, z: 2.0 }, look: { x: -8.5, y: 3.5, z: -10.0 }, fov: 42 }
    },
    ooty: {
      isPackage: false,
      code: 'OOTY',
      city: 'Ooty (Nilgiris)',
      category: 'hills',
      gps: '11°24\'36"N 76°41\'42"E — Doddabetta Nilgiri Peak',
      highway: 'NH-83 & 36 HAIRPIN BENDS',
      title: 'Ooty & Coonoor Nilgiri Blue Mountains',
      desc: 'Grand Southern expedition through Coimbatore and Mettupalayam up the famous 36 hairpin bends to Doddabetta Peak, Botanical Gardens, and Nilgiri Mountain Railway.',
      km: 455,
      duration: '8 hrs 30 mins',
      topo: 'Nilgiri Biosphere Summit (+2,240m)',
      pos3D: { x: -16, y: 5.8, z: -19 },
      flyCam: { pos: { x: -8.5, y: 19.5, z: 1.0 }, look: { x: -12.5, y: 3.8, z: -13.5 }, fov: 44 }
    },
    tirupati: {
      isPackage: false,
      code: 'TIR',
      city: 'Tirupati',
      category: 'temple',
      gps: '13°40\'59"N 79°20\'49"E — Tirumala Seven Hills',
      highway: 'NH-38 TEMPLE SPINE',
      title: 'Tirupati & Rameshwaram Sacred Darshan Spine',
      desc: 'Connects the Southern Jyotirlinga of Rameswaram with the sacred Seven Hills of Lord Venkateswara at Tirumala via Trichy, Vellore Golden Temple, and Kanchipuram.',
      km: 610,
      duration: '10 hrs 30 mins',
      topo: 'Eastern Ghats Seshachalam Hills (+853m)',
      pos3D: { x: -2, y: 3.8, z: -22 },
      flyCam: { pos: { x: 0.5, y: 18.5, z: 1.5 }, look: { x: -1.5, y: 2.8, z: -14.0 }, fov: 44 }
    }
  };

  const FLEET = {
    innova: {
      id: 'innova',
      name: 'Innova Crysta SUV',
      shortName: 'Innova Crysta',
      rateAc: 18,
      rateNonAc: 16,
      bata: 400,
      pax: '6–7 Guests + Chauffeur',
      bags: '4 Large Suitcases + Roof Carrier',
      minKm: '250 km / day outstation avg',
      dims: { length: 4.6, width: 1.9, height: 1.55, cabinLen: 2.9, color: 0xf8fafc, accent: 0xf59e0b, wheels: 4 }
    },
    tempo: {
      id: 'tempo',
      name: 'Luxury Tempo Traveller',
      shortName: 'Tempo Traveller',
      rateAc: 26,
      rateNonAc: 22,
      bata: 600,
      pax: '12 / 17 Maharaja Pushback Seats',
      bags: '12 Large Bags + Rear & Roof Bay',
      minKm: '300 km / day outstation avg',
      dims: { length: 6.1, width: 2.15, height: 2.25, cabinLen: 4.8, color: 0xf8fafc, accent: 0x00e5ff, wheels: 4 }
    },
    sedan: {
      id: 'sedan',
      name: 'Etios / Dzire Comfort Sedan',
      shortName: 'Comfort Sedan',
      rateAc: 13,
      rateNonAc: 11,
      bata: 350,
      pax: '4 Guests + Chauffeur',
      bags: '2 Large + 1 Cabin Bag (500L Boot)',
      minKm: '250 km / day outstation avg',
      dims: { length: 4.1, width: 1.75, height: 1.25, cabinLen: 2.1, color: 0xe2e8f0, accent: 0x14b8a6, wheels: 4 }
    },
    coach: {
      id: 'coach',
      name: 'Luxury AC Coach (35/45 Seater)',
      shortName: 'Luxury AC Coach',
      rateAc: 48,
      rateNonAc: 40,
      bata: 900,
      pax: '35–45 Reclining Air-Suspension Seats',
      bags: 'Under-belly Walk-in Luggage Hold',
      minKm: '350 km / day outstation avg',
      dims: { length: 8.2, width: 2.45, height: 2.75, cabinLen: 7.4, color: 0x0a192f, accent: 0xf59e0b, wheels: 6 }
    }
  };

  const SCENE_HUD_META = [
    {
      code: 'SCENE 1 · 00%–20% SCROLL',
      beat: 'HERO · TWIN-OCEAN GLSL SHADERS',
      emotion: 'Golden Sunset Awe & Discovery',
      lens: '35mm · 45°',
      gps: '09°09\'09"N 79°26\'46"E — Arichal Munai'
    },
    {
      code: 'SCENE 2 · 20%–45% SCROLL',
      beat: 'PAMBAN BRIDGE & TOUR PACKAGES',
      emotion: 'Spatial Wonder & Heritage Pride',
      lens: '24mm · 58°',
      gps: '09°16\'58"N 79°12\'20"E — Pamban Sea Bridge'
    },
    {
      code: 'SCENE 3 · 45%–70% SCROLL',
      beat: 'SOUTH INDIA 3D ROUTE ARCS',
      emotion: 'Regional Mastery & Clarity',
      lens: '40mm · 42°',
      gps: '09°55\'31"N 78°07\'10"E — South India Hub'
    },
    {
      code: 'SCENE 4 · 70%–90% SCROLL',
      beat: '3D CAB & FLEET SHOWCASE',
      emotion: 'Confidence & Transparent Value',
      lens: '50mm · 38°',
      gps: '09°17\'17"N 79°19\'02"E — Rameswaram Fleet Bay'
    },
    {
      code: 'SCENE 5 · 90%–100% SCROLL',
      beat: 'BOARDING PASS CHECKOUT',
      emotion: 'Bioluminescent Calm & Confirmation',
      lens: '50mm · 40°',
      gps: '09°09\'09"N 79°26\'46"E — Gate Pamban-01'
    }
  ];

  // =========================================================================
  // 2. APPLICATION STATE & MOBILE LOD DETECTION
  // =========================================================================
  const isMobile = window.innerWidth < 768;

  const state = {
    scrollProgress: 0,
    targetScroll: 0,
    activeSceneIndex: 0,
    lightingMode: 'sunset', // 'sunset' | 'day'
    motionMode: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'calm' : 'cinematic',
    hudVisible: true,
    audioPlaying: false,
    selectedPin: 'pamban',
    selectedPackage: 'dhanushkodi_sunset',
    selectedRoute: 'madurai',
    activeBookingKey: 'dhanushkodi_sunset',
    routeFilter: 'all',
    selectedFleet: 'innova',
    acEnabled: true,
    tariffMode: 'perkm',
    turntableAngleDeg: -28,
    pointer: { x: 0, y: 0 },
    shockwaveTime: -10,
    camCurrentPos: null,
    camCurrentLook: null,
    camCurrentFov: 45,
    camCurrentRoll: 0,
    flyToOverride: null
  };

  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const qbDate = document.getElementById('qb-date');
  const bpDate = document.getElementById('bp-date');
  if (qbDate) qbDate.value = tomorrow;
  if (bpDate) bpDate.value = tomorrow;

  // =========================================================================
  // 3. CUSTOM GLSL WATER SHADERS (CALM TURQUOISE VS. DEEP INDIGO WAVES)
  // =========================================================================
  const WATER_VERTEX_SHADER = `
    uniform float uTime;
    uniform float uWaveAmp;
    uniform float uWaveFreq;
    uniform float uChoppiness;
    varying vec2 vUv;
    varying float vElevation;
    varying vec3 vWorldPos;

    void main() {
      vUv = uv;
      vec3 pos = position;

      float w1 = sin(pos.x * uWaveFreq + uTime * 1.8) * cos(pos.z * (uWaveFreq * 0.85) + uTime * 1.3);
      float w2 = sin((pos.x * 0.7 - pos.z * 0.9) * (uWaveFreq * 1.6) - uTime * 2.3) * 0.45;
      float elevation = (w1 + w2 * uChoppiness) * uWaveAmp;

      pos.y += elevation;
      vElevation = elevation;

      vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
      vWorldPos = worldPosition.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `;

  const WATER_FRAGMENT_SHADER = `
    uniform vec3 uDeepColor;
    uniform vec3 uSurfaceColor;
    uniform vec3 uCrestColor;
    uniform vec3 uSunColor;
    uniform float uBioFactor;
    uniform float uTime;
    varying vec2 vUv;
    varying float vElevation;
    varying vec3 vWorldPos;

    void main() {
      float mixStrength = clamp((vElevation + 0.35) * 1.45, 0.0, 1.0);
      vec3 waterCol = mix(uDeepColor, uSurfaceColor, mixStrength);

      float crestMask = smoothstep(0.16, 0.38, vElevation);
      vec3 activeCrest = mix(uCrestColor, vec3(0.0, 0.96, 0.83), uBioFactor);
      waterCol = mix(waterCol, activeCrest, crestMask * (0.55 + uBioFactor * 0.35));

      float sunCorridor = exp(-abs(vWorldPos.x - 6.0) * 0.08) * smoothstep(-5.0, -45.0, vWorldPos.z);
      waterCol += uSunColor * sunCorridor * (0.28 + crestMask * 0.35) * (1.0 - uBioFactor * 0.7);

      gl_FragColor = vec4(waterCol, 0.95);
    }
  `;

  // =========================================================================
  // 4. THREE.JS 3D SCENE CONSTRUCTION
  // =========================================================================
  const canvas = document.getElementById('webgl-canvas');
  const pinsLayer = document.getElementById('world-pins-layer');

  let renderer, scene, camera;
  let bengalOceanMesh, indianOceanMesh, bengalUniforms, indianUniforms;
  let sandbarMesh, sunsetSunMesh, sunGlowMesh, globeWireframe;
  let bridgeGroup, expressTrainGroup, highwayTrafficCurve, highwayCarsMesh;
  let landmarkPinMeshes = {};
  let topoGroup, routeArcMeshes = {}, routeParticleSystems = [];
  let fleetStageGroup, vehicleAssembly, acParticleSystem;
  let goldenSkyParticles, starField, shockwaveRing;
  let ambientLight, sunLight, studioLight;

  function initThreeScene() {
    if (typeof THREE === 'undefined') return;

    state.camCurrentPos = new THREE.Vector3(0, 13.5, 34);
    state.camCurrentLook = new THREE.Vector3(2, 1.0, 2);

    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: !isMobile,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x040d1a);
    scene.fog = new THREE.FogExp2(0x040d1a, 0.012);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 260);
    camera.position.copy(state.camCurrentPos);

    ambientLight = new THREE.AmbientLight(0xdbeafe, 0.85);
    scene.add(ambientLight);

    sunLight = new THREE.DirectionalLight(0xf59e0b, 2.4);
    sunLight.position.set(16, 18, -32);
    scene.add(sunLight);

    studioLight = new THREE.PointLight(0x00e5ff, 1.6, 45);
    studioLight.position.set(18, 8, -14);
    scene.add(studioLight);

    buildScene1OceansAndSandbar();
    buildScene2PambanTrainAndHighway();
    buildScene3SouthIndiaRouteMap();
    buildScene4FleetTurntable();
    buildScene5SkyParticlesAndBioluminescence();
    buildDomProjectedPins();
  }

  function buildScene1OceansAndSandbar() {
    const segs = isMobile ? 42 : 84;

    bengalUniforms = {
      uTime: { value: 0 },
      uWaveAmp: { value: 0.24 },
      uWaveFreq: { value: 0.34 },
      uChoppiness: { value: 0.7 },
      uDeepColor: { value: new THREE.Color(0x083d48) },
      uSurfaceColor: { value: new THREE.Color(0x14b8a6) },
      uCrestColor: { value: new THREE.Color(0x00e5ff) },
      uSunColor: { value: new THREE.Color(0xf59e0b) },
      uBioFactor: { value: 0.0 }
    };
    const bengalGeo = new THREE.PlaneGeometry(95, 95, segs, segs);
    bengalGeo.rotateX(-Math.PI / 2);
    const bengalMat = new THREE.ShaderMaterial({
      vertexShader: WATER_VERTEX_SHADER,
      fragmentShader: WATER_FRAGMENT_SHADER,
      uniforms: bengalUniforms,
      transparent: true
    });
    bengalOceanMesh = new THREE.Mesh(bengalGeo, bengalMat);
    bengalOceanMesh.position.set(-44, 0, 0);
    scene.add(bengalOceanMesh);

    indianUniforms = {
      uTime: { value: 0 },
      uWaveAmp: { value: 0.36 },
      uWaveFreq: { value: 0.22 },
      uChoppiness: { value: 1.15 },
      uDeepColor: { value: new THREE.Color(0x040d1a) },
      uSurfaceColor: { value: new THREE.Color(0x0a192f) },
      uCrestColor: { value: new THREE.Color(0x38bdf8) },
      uSunColor: { value: new THREE.Color(0xfde68a) },
      uBioFactor: { value: 0.0 }
    };
    const indianGeo = new THREE.PlaneGeometry(95, 95, segs, segs);
    indianGeo.rotateX(-Math.PI / 2);
    const indianMat = new THREE.ShaderMaterial({
      vertexShader: WATER_VERTEX_SHADER,
      fragmentShader: WATER_FRAGMENT_SHADER,
      uniforms: indianUniforms,
      transparent: true
    });
    indianOceanMesh = new THREE.Mesh(indianGeo, indianMat);
    indianOceanMesh.position.set(44, 0, 0);
    scene.add(indianOceanMesh);

    const sandbarGroup = new THREE.Group();
    const spitShape = new THREE.Shape();
    spitShape.moveTo(-18, 18);
    spitShape.quadraticCurveTo(-4, 8, 9.8, 1.5);
    spitShape.quadraticCurveTo(10.8, 1.2, 9.5, 0.7);
    spitShape.quadraticCurveTo(-4, 4, -18, 11);
    spitShape.closePath();

    const extrudeSettings = {
      depth: 0.44,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.4,
      bevelThickness: 0.24
    };
    const spitGeo = new THREE.ExtrudeGeometry(spitShape, extrudeSettings);
    spitGeo.rotateX(Math.PI / 2);
    const spitMat = new THREE.MeshStandardMaterial({
      color: 0xfde68a,
      emissive: 0x453012,
      emissiveIntensity: 0.2,
      roughness: 0.6,
      metalness: 0.12
    });
    sandbarMesh = new THREE.Mesh(spitGeo, spitMat);
    sandbarMesh.position.y = 0.34;
    sandbarGroup.add(sandbarMesh);

    for (let i = 1; i <= 8; i++) {
      const shoalGeo = new THREE.CylinderGeometry(0.92 - i * 0.07, 1.35 - i * 0.07, 0.26, 16);
      const shoal = new THREE.Mesh(shoalGeo, spitMat);
      shoal.position.set(9.8 + i * 2.15, 0.1, 1.2 - i * 0.52);
      shoal.scale.set(1.4, 1, 0.65);
      sandbarGroup.add(shoal);
    }
    scene.add(sandbarGroup);

    const sunGeo = new THREE.SphereGeometry(6.5, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    sunsetSunMesh = new THREE.Mesh(sunGeo, sunMat);
    sunsetSunMesh.position.set(14, 11, -55);
    scene.add(sunsetSunMesh);

    const haloGeo = new THREE.RingGeometry(6.8, 13.0, 48);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xfde68a,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.36
    });
    sunGlowMesh = new THREE.Mesh(haloGeo, haloMat);
    sunGlowMesh.position.copy(sunsetSunMesh.position);
    scene.add(sunGlowMesh);

    const globeGeo = new THREE.SphereGeometry(48, 28, 20);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.07
    });
    globeWireframe = new THREE.Mesh(globeGeo, globeMat);
    globeWireframe.position.set(0, -44, 0);
    scene.add(globeWireframe);
  }

  function buildScene2PambanTrainAndHighway() {
    bridgeGroup = new THREE.Group();

    const pierMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.6 });
    const deckMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.4, roughness: 0.4 });
    const goldTrussMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0x92400e,
      emissiveIntensity: 0.45,
      metalness: 0.8,
      roughness: 0.25
    });

    for (let i = 0; i < 12; i++) {
      const px = -18 + i * 1.15;
      const pz = 16.0 - i * 0.62;
      const pier = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.25, 2.4, 8), pierMat);
      pier.position.set(px, 1.0, pz);
      bridgeGroup.add(pier);
    }

    highwayTrafficCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-18, 2.05, 16),
      new THREE.Vector3(-12, 2.35, 12),
      new THREE.Vector3(-5, 1.45, 7),
      new THREE.Vector3(2.5, 0.72, 4),
      new THREE.Vector3(9.5, 0.58, 1.5)
    ]);
    const roadGeo = new THREE.TubeGeometry(highwayTrafficCurve, 72, 0.24, 8, false);
    const roadMesh = new THREE.Mesh(roadGeo, deckMat);
    bridgeGroup.add(roadMesh);

    const towerLeft = new THREE.Mesh(new THREE.BoxGeometry(0.36, 4.0, 0.36), goldTrussMat);
    towerLeft.position.set(-12.6, 3.3, 12.6);
    const towerRight = new THREE.Mesh(new THREE.BoxGeometry(0.36, 4.0, 0.36), goldTrussMat);
    towerRight.position.set(-11.2, 3.3, 11.8);
    const topBeam = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.32, 0.36), goldTrussMat);
    topBeam.position.set(-11.9, 5.1, 12.2);
    topBeam.rotation.y = 0.48;
    bridgeGroup.add(towerLeft, towerRight, topBeam);

    expressTrainGroup = new THREE.Group();
    const coachMat = new THREE.MeshStandardMaterial({ color: 0x0a192f, metalness: 0.6, roughness: 0.3 });
    const windowGlowMat = new THREE.MeshBasicMaterial({ color: 0xfde68a });
    const locoHeadlightMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff });

    for (let c = 0; c < 4; c++) {
      const coach = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.34, 0.28), coachMat);
      coach.position.x = -c * 1.08;
      const winStrip = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.1, 0.3), windowGlowMat);
      winStrip.position.set(-c * 1.08, 0.04, 0);
      expressTrainGroup.add(coach, winStrip);
    }
    const headlight = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), locoHeadlightMat);
    headlight.position.set(0.52, 0.02, 0);
    expressTrainGroup.add(headlight);
    bridgeGroup.add(expressTrainGroup);

    const carCount = 24;
    const carGeo = new THREE.BufferGeometry();
    const carPositions = new Float32Array(carCount * 3);
    const carColors = new Float32Array(carCount * 3);
    for (let i = 0; i < carCount; i++) {
      const isHeadlight = i % 2 === 0;
      const col = new THREE.Color(isHeadlight ? 0xfde68a : 0xf59e0b);
      carColors[i * 3] = col.r;
      carColors[i * 3 + 1] = col.g;
      carColors[i * 3 + 2] = col.b;
    }
    carGeo.setAttribute('position', new THREE.BufferAttribute(carPositions, 3));
    carGeo.setAttribute('color', new THREE.BufferAttribute(carColors, 3));
    const carMat = new THREE.PointsMaterial({
      size: 0.36,
      vertexColors: true,
      transparent: true,
      opacity: 0.95
    });
    highwayCarsMesh = new THREE.Points(carGeo, carMat);
    bridgeGroup.add(highwayCarsMesh);

    const gopuramGroup = new THREE.Group();
    for (let tier = 0; tier < 5; tier++) {
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(1.3 - tier * 0.2, 0.55, 0.9 - tier * 0.12),
        goldTrussMat
      );
      box.position.y = 0.8 + tier * 0.52;
      gopuramGroup.add(box);
    }
    gopuramGroup.position.set(-5, 0.2, 7);
    bridgeGroup.add(gopuramGroup);

    const ruinWall = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.5, 0.25), pierMat);
    ruinWall.position.set(2.5, 1.0, 4);
    bridgeGroup.add(ruinWall);

    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.25, 1.6, 12), goldTrussMat);
    pillar.position.set(9.5, 1.1, 1.5);
    bridgeGroup.add(pillar);

    Object.keys(LANDMARKS).forEach((key) => {
      const lm = LANDMARKS[key];
      const pinGroup = new THREE.Group();
      pinGroup.position.set(lm.pos3D.x, lm.pos3D.y, lm.pos3D.z);

      const orbGeo = new THREE.OctahedronGeometry(0.46, 0);
      const orbMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
      const orb = new THREE.Mesh(orbGeo, orbMat);

      const ringGeo = new THREE.RingGeometry(0.55, 0.82, 24);
      ringGeo.rotateX(-Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x00e5ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.y = -0.5;

      pinGroup.add(orb, ring);
      bridgeGroup.add(pinGroup);
      landmarkPinMeshes[key] = { group: pinGroup, orb, ring };
    });

    scene.add(bridgeGroup);
  }

  function buildScene3SouthIndiaRouteMap() {
    topoGroup = new THREE.Group();

    const ghatsMat = new THREE.MeshStandardMaterial({
      color: 0x0a192f,
      emissive: 0x040d1a,
      roughness: 0.5,
      metalness: 0.4,
      flatShading: true
    });

    const hubOrigin = new THREE.Vector3(-1, 1.0, 5.5);

    Object.keys(ROUTES).forEach((cityKey) => {
      const route = ROUTES[cityKey];
      if (route.isPackage || !route.pos3D) return;
      const dest = new THREE.Vector3(route.pos3D.x, route.pos3D.y, route.pos3D.z);

      const peakHeight = Math.max(1.2, route.pos3D.y);
      const coneGeo = new THREE.ConeGeometry(1.6, peakHeight, 6);
      const cone = new THREE.Mesh(coneGeo, ghatsMat);
      cone.position.set(dest.x, peakHeight / 2, dest.z);
      topoGroup.add(cone);

      const nodeGeo = new THREE.OctahedronGeometry(0.45, 0);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0xfde68a });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(dest);
      topoGroup.add(nodeMesh);

      const midPoint = new THREE.Vector3().addVectors(hubOrigin, dest).multiplyScalar(0.5);
      midPoint.y += 4.5 + route.km * 0.008;

      const curve = new THREE.CatmullRomCurve3([hubOrigin, midPoint, dest]);
      const tubeGeo = new THREE.TubeGeometry(curve, 52, 0.085, 8, false);
      const isDefault = cityKey === state.selectedRoute;
      const tubeMat = new THREE.MeshBasicMaterial({
        color: isDefault ? 0x00e5ff : 0xf59e0b,
        transparent: true,
        opacity: isDefault ? 0.96 : 0.35
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      topoGroup.add(tubeMesh);
      routeArcMeshes[cityKey] = { tubeMesh, tubeMat, nodeMesh, curve, category: route.category };

      const particleCount = isMobile ? 12 : 20;
      const pGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const pMat = new THREE.PointsMaterial({
        color: isDefault ? 0x00e5ff : 0xfde68a,
        size: isDefault ? 0.52 : 0.3,
        transparent: true,
        opacity: 0.92
      });
      const points = new THREE.Points(pGeo, pMat);
      topoGroup.add(points);
      routeParticleSystems.push({ cityKey, category: route.category, curve, points, pGeo, pMat, count: particleCount });
    });

    scene.add(topoGroup);
  }

  function buildScene4FleetTurntable() {
    fleetStageGroup = new THREE.Group();
    fleetStageGroup.position.set(18, 1.2, -16);

    const discGeo = new THREE.CylinderGeometry(5.2, 5.6, 0.35, 48);
    const discMat = new THREE.MeshStandardMaterial({
      color: 0x0a192f,
      metalness: 0.75,
      roughness: 0.22
    });
    const disc = new THREE.Mesh(discGeo, discMat);
    fleetStageGroup.add(disc);

    const rimGeo = new THREE.RingGeometry(5.05, 5.25, 64);
    rimGeo.rotateX(-Math.PI / 2);
    const rimMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff, side: THREE.DoubleSide });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.position.y = 0.19;
    fleetStageGroup.add(rim);

    vehicleAssembly = new THREE.Group();
    vehicleAssembly.position.y = 0.22;
    fleetStageGroup.add(vehicleAssembly);

    const acCount = isMobile ? 40 : 70;
    const acGeo = new THREE.BufferGeometry();
    const acPos = new Float32Array(acCount * 3);
    for (let i = 0; i < acCount; i++) {
      acPos[i * 3] = (Math.random() - 0.5) * 4.5;
      acPos[i * 3 + 1] = 0.6 + Math.random() * 1.8;
      acPos[i * 3 + 2] = (Math.random() - 0.5) * 2.2;
    }
    acGeo.setAttribute('position', new THREE.BufferAttribute(acPos, 3));
    const acMat = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 0.18,
      transparent: true,
      opacity: 0.88
    });
    acParticleSystem = new THREE.Points(acGeo, acMat);
    vehicleAssembly.add(acParticleSystem);

    rebuild3DVehicleGeometry(state.selectedFleet);
    scene.add(fleetStageGroup);
  }

  function rebuild3DVehicleGeometry(fleetKey) {
    if (!vehicleAssembly) return;
    const spec = FLEET[fleetKey] || FLEET.innova;
    const d = spec.dims;

    for (let i = vehicleAssembly.children.length - 1; i >= 0; i--) {
      const child = vehicleAssembly.children[i];
      if (child !== acParticleSystem) {
        vehicleAssembly.remove(child);
      }
    }

    const bodyMat = new THREE.MeshStandardMaterial({
      color: d.color,
      metalness: 0.58,
      roughness: 0.2
    });
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x040d1a,
      metalness: 0.92,
      roughness: 0.08
    });
    const accentMat = new THREE.MeshStandardMaterial({
      color: d.accent,
      emissive: d.accent,
      emissiveIntensity: 0.4,
      metalness: 0.8,
      roughness: 0.2
    });
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.7 });

    const lowerBody = new THREE.Mesh(
      new THREE.BoxGeometry(d.length, d.height * 0.52, d.width),
      bodyMat
    );
    lowerBody.position.y = 0.42 + (d.height * 0.52) / 2;
    vehicleAssembly.add(lowerBody);

    const upperCabin = new THREE.Mesh(
      new THREE.BoxGeometry(d.cabinLen, d.height * 0.48, d.width * 0.88),
      glassMat
    );
    upperCabin.position.set(-0.15, 0.42 + d.height * 0.52 + (d.height * 0.48) / 2, 0);
    vehicleAssembly.add(upperCabin);

    const stripe = new THREE.Mesh(
      new THREE.BoxGeometry(d.length + 0.04, 0.08, d.width + 0.04),
      accentMat
    );
    stripe.position.y = 0.42 + d.height * 0.5;
    vehicleAssembly.add(stripe);

    const roofPod = new THREE.Mesh(
      new THREE.BoxGeometry(d.cabinLen * 0.65, 0.14, d.width * 0.6),
      accentMat
    );
    roofPod.position.set(-0.15, 0.42 + d.height + 0.07, 0);
    vehicleAssembly.add(roofPod);

    const hlGeo = new THREE.BoxGeometry(0.08, 0.16, 0.35);
    const hlMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
    const hlLeft = new THREE.Mesh(hlGeo, hlMat);
    hlLeft.position.set(d.length / 2 + 0.02, 0.72, d.width * 0.32);
    const hlRight = hlLeft.clone();
    hlRight.position.z = -d.width * 0.32;
    vehicleAssembly.add(hlLeft, hlRight);

    const wheelGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.28, 20);
    wheelGeo.rotateX(Math.PI / 2);
    const wheelXPositions = d.wheels === 6
      ? [-d.length * 0.34, -d.length * 0.16, d.length * 0.32]
      : [-d.length * 0.32, d.length * 0.32];

    wheelXPositions.forEach((wx) => {
      [-d.width / 2, d.width / 2].forEach((wz) => {
        const wheel = new THREE.Mesh(wheelGeo, wheelMat);
        wheel.position.set(wx, 0.42, wz);
        vehicleAssembly.add(wheel);
      });
    });

    vehicleAssembly.rotation.y = THREE.MathUtils.degToRad(state.turntableAngleDeg);
  }

  function buildScene5SkyParticlesAndBioluminescence() {
    const skyPCount = isMobile ? 160 : 320;
    const skyPGeo = new THREE.BufferGeometry();
    const skyPPos = new Float32Array(skyPCount * 3);
    for (let i = 0; i < skyPCount; i++) {
      skyPPos[i * 3] = (Math.random() - 0.5) * 65;
      skyPPos[i * 3 + 1] = 1.2 + Math.random() * 18;
      skyPPos[i * 3 + 2] = -25 + Math.random() * 50;
    }
    skyPGeo.setAttribute('position', new THREE.BufferAttribute(skyPPos, 3));
    const skyPMat = new THREE.PointsMaterial({
      color: 0xfde68a,
      size: 0.24,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    goldenSkyParticles = new THREE.Points(skyPGeo, skyPMat);
    scene.add(goldenSkyParticles);

    const starCount = isMobile ? 800 : 1500;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 180;
      starPositions[i * 3 + 1] = 8 + Math.random() * 65;
      starPositions[i * 3 + 2] = -10 - Math.random() * 110;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xfde68a,
      size: 0.28,
      transparent: true,
      opacity: 0.25
    });
    starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    const ringGeo = new THREE.RingGeometry(0.5, 1.4, 48);
    ringGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0
    });
    shockwaveRing = new THREE.Mesh(ringGeo, ringMat);
    shockwaveRing.position.set(4, 0.45, 2);
    scene.add(shockwaveRing);
  }

  // -------------------------------------------------------------------------
  // DAY VS SUNSET 3D THEME SWITCHER
  // -------------------------------------------------------------------------
  function apply3DLightingMode() {
    const isDay = state.lightingMode === 'day';
    document.documentElement.setAttribute('data-lighting', state.lightingMode);

    const iconEl = document.getElementById('lighting-icon');
    const labelEl = document.getElementById('lighting-state-label');
    if (iconEl) iconEl.textContent = isDay ? '☀️' : '🌅';
    if (labelEl) labelEl.textContent = isDay ? 'Tropical Day' : 'Sunset Gold';

    if (!scene || !sunLight || !ambientLight) return;

    if (isDay) {
      scene.background.setHex(0x0a192f);
      scene.fog.color.setHex(0x0a192f);
      sunLight.color.setHex(0x00e5ff);
      sunLight.intensity = 2.6;
      ambientLight.intensity = 1.15;
      if (sunsetSunMesh) sunsetSunMesh.material.color.setHex(0xfde68a);
      if (sunGlowMesh) sunGlowMesh.material.color.setHex(0x00e5ff);
      if (bengalUniforms) bengalUniforms.uSunColor.value.setHex(0x00e5ff);
    } else {
      scene.background.setHex(0x040d1a);
      scene.fog.color.setHex(0x040d1a);
      sunLight.color.setHex(0xf59e0b);
      sunLight.intensity = 2.4;
      ambientLight.intensity = 0.85;
      if (sunsetSunMesh) sunsetSunMesh.material.color.setHex(0xf59e0b);
      if (sunGlowMesh) sunGlowMesh.material.color.setHex(0xfde68a);
      if (bengalUniforms) bengalUniforms.uSunColor.value.setHex(0xf59e0b);
    }
  }

  // -------------------------------------------------------------------------
  // WORLD-SPACE TO 2D DOM PIN PROJECTION
  // -------------------------------------------------------------------------
  const domPinElements = {};
  function buildDomProjectedPins() {
    if (!pinsLayer) return;
    pinsLayer.innerHTML = '';
    Object.keys(LANDMARKS).forEach((key) => {
      const lm = LANDMARKS[key];
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'world-pin-marker' + (key === state.selectedPin ? ' active' : '');
      btn.dataset.pin = key;
      btn.innerHTML = `
        <span class="pin-tag"><span>✦ ${lm.num}</span> <span>${lm.name.split(' (')[0]}</span></span>
        <span class="pin-stem"></span>
      `;
      btn.addEventListener('click', () => selectLandmarkPin(key, true));
      pinsLayer.appendChild(btn);
      domPinElements[key] = btn;
    });
  }

  function updateDomProjectedPins() {
    if (!camera || !pinsLayer) return;
    const showPins = state.scrollProgress >= 0.14 && state.scrollProgress <= 0.48;
    pinsLayer.style.opacity = showPins ? '1' : '0';
    if (!showPins) return;

    const widthHalf = window.innerWidth / 2;
    const heightHalf = window.innerHeight / 2;

    Object.keys(LANDMARKS).forEach((key) => {
      const lm = LANDMARKS[key];
      const el = domPinElements[key];
      if (!el) return;
      const vec = new THREE.Vector3(lm.pos3D.x, lm.pos3D.y + 0.9, lm.pos3D.z);
      vec.project(camera);

      if (vec.z > 1) {
        el.style.opacity = '0';
        return;
      }
      const x = vec.x * widthHalf + widthHalf;
      const y = -(vec.y * heightHalf) + heightHalf;
      el.style.opacity = '1';
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
    });
  }

  // =========================================================================
  // 5. CAMERA SPLINE & SMOOTH LERP FLY-TO TRANSITIONS
  // =========================================================================
  const cameraKeyframes = [
    { p: 0.0, pos: new THREE.Vector3(0, 13.5, 34), look: new THREE.Vector3(2, 1.0, 2), fov: 45, roll: 0 },
    { p: 0.20, pos: new THREE.Vector3(-15, 6.2, 22), look: new THREE.Vector3(-10, 1.8, 10), fov: 54, roll: -3.2 },
    { p: 0.35, pos: new THREE.Vector3(-2, 5.0, 14), look: new THREE.Vector3(4, 1.2, 3), fov: 58, roll: -3.8 },
    { p: 0.55, pos: new THREE.Vector3(-7, 22.0, 14), look: new THREE.Vector3(-8, 1.5, -10), fov: 42, roll: 0 },
    { p: 0.80, pos: new THREE.Vector3(18, 4.2, -5.2), look: new THREE.Vector3(18, 1.8, -16), fov: 38, roll: 0 },
    { p: 1.0, pos: new THREE.Vector3(4, 3.2, 14), look: new THREE.Vector3(6, 1.5, -20), fov: 40, roll: 0 }
  ];

  function getSplineCameraTarget(progress) {
    const p = Math.max(0, Math.min(1, progress));
    let k0 = cameraKeyframes[0];
    let k1 = cameraKeyframes[cameraKeyframes.length - 1];

    for (let i = 0; i < cameraKeyframes.length - 1; i++) {
      if (p >= cameraKeyframes[i].p && p <= cameraKeyframes[i + 1].p) {
        k0 = cameraKeyframes[i];
        k1 = cameraKeyframes[i + 1];
        break;
      }
    }

    const span = k1.p - k0.p || 1;
    const rawT = (p - k0.p) / span;
    const t = state.motionMode === 'calm'
      ? (rawT < 0.5 ? 0 : 1)
      : rawT * rawT * (3 - 2 * rawT);

    const pos = new THREE.Vector3().lerpVectors(k0.pos, k1.pos, t);
    const look = new THREE.Vector3().lerpVectors(k0.look, k1.look, t);
    const fov = THREE.MathUtils.lerp(k0.fov, k1.fov, t);
    const roll = state.motionMode === 'calm' ? 0 : THREE.MathUtils.lerp(k0.roll, k1.roll, t);

    return { pos, look, fov, roll };
  }

  function triggerCameraFlyTo(flyCamSpec) {
    if (!flyCamSpec || typeof THREE === 'undefined') return;
    state.flyToOverride = {
      pos: new THREE.Vector3(flyCamSpec.pos.x, flyCamSpec.pos.y, flyCamSpec.pos.z),
      look: new THREE.Vector3(flyCamSpec.look.x, flyCamSpec.look.y, flyCamSpec.look.z),
      fov: flyCamSpec.fov || 42,
      scrollAnchor: state.targetScroll
    };
  }

  // =========================================================================
  // 6. 60FPS ANIMATION LOOP
  // =========================================================================
  const clock = typeof THREE !== 'undefined' ? new THREE.Clock() : null;

  function animate() {
    requestAnimationFrame(animate);
    if (document.hidden || !renderer || !scene || !camera) return;

    const elapsed = clock ? clock.getElapsedTime() : performance.now() * 0.001;

    state.scrollProgress += (state.targetScroll - state.scrollProgress) * 0.085;
    const p = state.scrollProgress;

    if (state.flyToOverride && Math.abs(state.targetScroll - state.flyToOverride.scrollAnchor) > 0.035) {
      state.flyToOverride = null;
    }

    const desiredCam = state.flyToOverride
      ? { pos: state.flyToOverride.pos, look: state.flyToOverride.look, fov: state.flyToOverride.fov, roll: 0 }
      : getSplineCameraTarget(p);

    const lerpAlpha = state.motionMode === 'calm' ? 0.25 : 0.075;
    state.camCurrentPos.lerp(desiredCam.pos, lerpAlpha);
    state.camCurrentLook.lerp(desiredCam.look, lerpAlpha);
    state.camCurrentFov = THREE.MathUtils.lerp(state.camCurrentFov, desiredCam.fov, lerpAlpha);
    state.camCurrentRoll = THREE.MathUtils.lerp(state.camCurrentRoll, desiredCam.roll, lerpAlpha);

    camera.position.copy(state.camCurrentPos);
    if (state.motionMode === 'cinematic') {
      camera.position.x += state.pointer.x * 0.55;
      camera.position.y += state.pointer.y * 0.3;
    }
    camera.fov = state.camCurrentFov;
    camera.updateProjectionMatrix();
    camera.lookAt(state.camCurrentLook);
    camera.rotation.z = THREE.MathUtils.degToRad(state.camCurrentRoll);

    const bioFactor = THREE.MathUtils.smoothstep(p, 0.78, 0.94);
    if (bengalUniforms && indianUniforms) {
      if (state.motionMode === 'cinematic') {
        bengalUniforms.uTime.value = elapsed;
        indianUniforms.uTime.value = elapsed;
      }
      bengalUniforms.uBioFactor.value = bioFactor;
      indianUniforms.uBioFactor.value = bioFactor;
    }

    if (expressTrainGroup && state.motionMode === 'cinematic') {
      const trainT = (elapsed * 0.08) % 1;
      const tx = THREE.MathUtils.lerp(-17.5, -5.5, trainT);
      const tz = THREE.MathUtils.lerp(16.2, 7.6, trainT);
      expressTrainGroup.position.set(tx, 2.38, tz);
      expressTrainGroup.rotation.y = 0.62;
    }

    if (highwayCarsMesh && highwayTrafficCurve && state.motionMode === 'cinematic') {
      const carPosArr = highwayCarsMesh.geometry.attributes.position.array;
      const count = carPosArr.length / 3;
      for (let i = 0; i < count; i++) {
        const u = ((i / count) + elapsed * 0.065) % 1;
        const pt = highwayTrafficCurve.getPointAt(u);
        carPosArr[i * 3] = pt.x;
        carPosArr[i * 3 + 1] = pt.y + 0.28;
        carPosArr[i * 3 + 2] = pt.z;
      }
      highwayCarsMesh.geometry.attributes.position.needsUpdate = true;
    }

    if (goldenSkyParticles && state.motionMode === 'cinematic') {
      const spArr = goldenSkyParticles.geometry.attributes.position.array;
      for (let i = 0; i < spArr.length / 3; i++) {
        spArr[i * 3 + 1] += Math.sin(elapsed + i) * 0.004;
        spArr[i * 3] += 0.008;
        if (spArr[i * 3] > 32) spArr[i * 3] = -32;
      }
      goldenSkyParticles.geometry.attributes.position.needsUpdate = true;
    }

    if (starField) {
      starField.material.opacity = THREE.MathUtils.lerp(0.22, 0.96, bioFactor);
    }
    if (sunsetSunMesh && sunGlowMesh) {
      const baseSunY = state.lightingMode === 'day' ? 18 : 11;
      sunsetSunMesh.position.y = THREE.MathUtils.lerp(baseSunY, -8, bioFactor);
      sunGlowMesh.position.copy(sunsetSunMesh.position);
    }

    Object.keys(landmarkPinMeshes).forEach((key, idx) => {
      const item = landmarkPinMeshes[key];
      const isSelected = key === state.selectedPin;
      item.orb.rotation.y = elapsed * 1.8 + idx;
      const scale = isSelected ? 1.38 + Math.sin(elapsed * 4) * 0.15 : 0.95;
      item.group.scale.setScalar(scale);
    });

    routeParticleSystems.forEach((sys) => {
      const posArr = sys.pGeo.attributes.position.array;
      const speed = sys.cityKey === state.selectedRoute ? 0.28 : 0.1;
      for (let i = 0; i < sys.count; i++) {
        const u = ((i / sys.count) + elapsed * speed) % 1;
        const pt = sys.curve.getPointAt(u);
        posArr[i * 3] = pt.x;
        posArr[i * 3 + 1] = pt.y;
        posArr[i * 3 + 2] = pt.z;
      }
      sys.pGeo.attributes.position.needsUpdate = true;
    });

    if (acParticleSystem) {
      acParticleSystem.visible = state.acEnabled;
      if (state.acEnabled && state.motionMode === 'cinematic') {
        const acArr = acParticleSystem.geometry.attributes.position.array;
        for (let i = 0; i < acArr.length / 3; i++) {
          acArr[i * 3] += 0.025;
          if (acArr[i * 3] > 2.3) acArr[i * 3] = -2.3;
        }
        acParticleSystem.geometry.attributes.position.needsUpdate = true;
      }
    }

    if (shockwaveRing && state.shockwaveTime > 0) {
      const dt = elapsed - state.shockwaveTime;
      if (dt >= 0 && dt < 2.4) {
        const s = 1 + dt * 16;
        shockwaveRing.scale.setScalar(s);
        shockwaveRing.material.opacity = Math.max(0, 0.9 - dt * 0.38);
      } else {
        shockwaveRing.material.opacity = 0;
      }
    }

    updateDomProjectedPins();
    updateDirectorHud(p);
    renderer.render(scene, camera);
  }

  // =========================================================================
  // 7. DIRECTOR'S STORYBOARD HUD & SCROLL EXPERIENCE BAR
  // =========================================================================
  function getSceneIndexFromScroll(p) {
    if (p < 0.20) return 0;
    if (p < 0.45) return 1;
    if (p < 0.70) return 2;
    if (p < 0.90) return 3;
    return 4;
  }

  let gpsTickerTimer = null;

  function setLiveGpsDisplay(gpsString, bearingText, compassAngleDeg) {
    const navGps = document.getElementById('nav-live-gps');
    const hudGps = document.getElementById('hud-gps-coords');
    const bearingEl = document.getElementById('nav-compass-bearing');
    const needleGroup = document.getElementById('compass-needle-group');

    if (bearingEl && bearingText) {
      bearingEl.textContent = bearingText;
    }
    if (needleGroup && typeof compassAngleDeg === 'number') {
      needleGroup.style.transform = `rotate(${compassAngleDeg}deg)`;
    }

    if (state.motionMode === 'calm') {
      if (navGps) navGps.textContent = gpsString;
      if (hudGps) hudGps.textContent = gpsString;
      return;
    }

    // Animated Cartographic Coordinate Scramble Ticker (`design-spells` polish)
    if (gpsTickerTimer) clearInterval(gpsTickerTimer);
    if (navGps) navGps.classList.add('gps-flash');
    let step = 0;
    const totalSteps = 6;
    const digits = '0123456789';

    gpsTickerTimer = setInterval(() => {
      step++;
      if (step >= totalSteps) {
        clearInterval(gpsTickerTimer);
        if (navGps) {
          navGps.textContent = gpsString;
          navGps.classList.remove('gps-flash');
        }
        if (hudGps) hudGps.textContent = gpsString;
        return;
      }
      const scrambled = gpsString.replace(/\d/g, (ch, idx) =>
        idx < (step / totalSteps) * 18 ? ch : digits[Math.floor(Math.random() * 10)]
      );
      if (navGps) navGps.textContent = scrambled;
      if (hudGps) hudGps.textContent = scrambled;
    }, 36);
  }

  const SCENE_BEARINGS = ['138° SE', '284° WNW', '312° NW', '045° NE', '118° ESE'];
  const SCENE_ANGLES = [138, 284, 312, 45, 118];

  function updateDirectorHud(p) {
    const pctNum = Math.max(0, Math.min(100, p * 100));
    const pctText = pctNum.toFixed(1) + '%';
    const elScrollPct = document.getElementById('hud-scroll-pct');
    const elProgressFill = document.getElementById('hud-progress-fill');
    const elTopBarFill = document.getElementById('top-scroll-progress');
    const elCamPos = document.getElementById('hud-cam-pos');
    const elRoll = document.getElementById('hud-roll');
    const needleGroup = document.getElementById('compass-needle-group');

    if (elScrollPct) elScrollPct.textContent = pctText;
    if (elProgressFill) elProgressFill.style.width = `${Math.max(2, pctNum)}%`;
    if (elTopBarFill) elTopBarFill.style.width = `${pctNum}%`;

    if (elCamPos && state.camCurrentPos) {
      elCamPos.textContent = `${state.camCurrentPos.x.toFixed(1)}, ${state.camCurrentPos.y.toFixed(1)}, ${state.camCurrentPos.z.toFixed(1)}`;
    }
    if (elRoll) elRoll.textContent = `${state.camCurrentRoll.toFixed(1)}°`;

    const sIdx = getSceneIndexFromScroll(p);
    if (needleGroup && state.motionMode === 'cinematic') {
      const baseAngle = SCENE_ANGLES[sIdx] || 138;
      needleGroup.style.transform = `rotate(${(baseAngle + p * 72).toFixed(1)}deg)`;
    }

    if (sIdx !== state.activeSceneIndex) {
      state.activeSceneIndex = sIdx;
      const meta = SCENE_HUD_META[sIdx];
      document.getElementById('hud-scene-code').textContent = meta.code;
      document.getElementById('hud-narrative-beat').textContent = meta.beat;
      document.getElementById('hud-emotion').textContent = meta.emotion;
      document.getElementById('hud-lens').textContent = meta.lens;
      setLiveGpsDisplay(meta.gps, SCENE_BEARINGS[sIdx], SCENE_ANGLES[sIdx]);

      document.querySelectorAll('.scene-nav-btn').forEach((btn, idx) => {
        btn.classList.toggle('active', idx === sIdx);
      });
      document.querySelectorAll('.sb-frame').forEach((btn, idx) => {
        btn.classList.toggle('active', idx === sIdx);
      });
    }
  }

  function updateScrollProgressFromWindow() {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    state.targetScroll = Math.max(0, Math.min(1, window.scrollY / maxScroll));
  }

  function setupScrollTriggerAndEvents() {
    window.addEventListener('scroll', updateScrollProgressFromWindow, { passive: true });
    updateScrollProgressFromWindow();

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: '#main-content',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.8,
        onUpdate: (self) => {
          state.targetScroll = self.progress;
        }
      });

      // Scroll-Triggered Section Reveals (`scroll-experience` pattern)
      if (state.motionMode === 'cinematic') {
        gsap.utils.toArray('.gs-reveal').forEach((panel) => {
          gsap.fromTo(
            panel,
            { opacity: 0.25, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: panel,
                start: 'top 86%',
                end: 'top 45%',
                scrub: 0.5
              }
            }
          );
        });
      }
    }

    window.addEventListener('resize', () => {
      if (!renderer || !camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    window.addEventListener('pointermove', (e) => {
      state.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      state.pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });
  }

  // =========================================================================
  // 8. INTERACTIVE TOUR PACKAGES, LANDMARKS, ROUTES & FLEET LOGIC
  // =========================================================================
  function selectSignaturePackage(pkgKey, flyCamera) {
    const pkg = ROUTES[pkgKey];
    if (!pkg || !pkg.isPackage) return;

    state.selectedPackage = pkgKey;
    state.activeBookingKey = pkgKey;

    document.querySelectorAll('.sig-pkg-card').forEach((card) => {
      const isAct = card.dataset.pkg === pkgKey;
      card.classList.toggle('active', isAct);
      card.setAttribute('aria-selected', String(isAct));
      const ctaEl = card.querySelector('.sp-cta');
      if (ctaEl) ctaEl.textContent = isAct ? 'Active Package ✦' : 'Select Package →';
    });

    const pkgTitleEl = document.getElementById('pkg-selected-title');
    const hudFocusEl = document.getElementById('hud-focus');
    if (pkgTitleEl) pkgTitleEl.textContent = pkg.city;
    if (hudFocusEl) hudFocusEl.textContent = pkg.city;
    setLiveGpsDisplay(pkg.gps);

    // Sync Quick-Book Bar & Boarding Pass dropdowns
    const qbPkg = document.getElementById('qb-package');
    const bpRoute = document.getElementById('bp-route-select');
    if (qbPkg) qbPkg.value = pkgKey;
    if (bpRoute) bpRoute.value = pkgKey;

    if (pkg.linkedPin) {
      selectLandmarkPin(pkg.linkedPin, false);
    }
    if (pkg.linkedCity) {
      selectRouteCorridor(pkg.linkedCity, false, true);
    }
    if (flyCamera && pkg.flyCam) {
      triggerCameraFlyTo(pkg.flyCam);
    }

    updateFleetShowcaseUI();
    recalculateBoardingPass();
  }

  function selectLandmarkPin(pinKey, flyCamera) {
    const lm = LANDMARKS[pinKey];
    if (!lm) return;
    state.selectedPin = pinKey;

    document.querySelectorAll('.landmark-pin-btn').forEach((btn) => {
      const active = btn.dataset.pin === pinKey;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    });

    Object.keys(domPinElements).forEach((k) => {
      domPinElements[k].classList.toggle('active', k === pinKey);
    });

    document.getElementById('pin-hud-coords').textContent = lm.coords;
    document.getElementById('pin-hud-title').textContent = lm.name;
    document.getElementById('pin-hud-desc').textContent = lm.desc;
    document.getElementById('pin-hud-dist').textContent = lm.dist;
    document.getElementById('pin-hud-time').textContent = lm.time;
    document.getElementById('pin-hud-pkg').textContent = lm.pkg;
    setLiveGpsDisplay(lm.coords);

    if (flyCamera && lm.flyCam) {
      triggerCameraFlyTo(lm.flyCam);
    }
  }

  function applyRouteCategoryFilter(filterKey) {
    state.routeFilter = filterKey;
    document.querySelectorAll('.route-filter-pill').forEach((pill) => {
      pill.classList.toggle('active', pill.dataset.filter === filterKey);
    });

    let firstMatch = null;
    document.querySelectorAll('.route-city-btn').forEach((btn) => {
      const matches = filterKey === 'all' || btn.dataset.category === filterKey;
      btn.classList.toggle('filtered-out', !matches);
      if (matches && !firstMatch) firstMatch = btn.dataset.city;
    });

    Object.keys(routeArcMeshes).forEach((cityKey) => {
      const arc = routeArcMeshes[cityKey];
      const matches = filterKey === 'all' || arc.category === filterKey;
      arc.tubeMesh.visible = matches;
      arc.nodeMesh.visible = matches;
    });
    routeParticleSystems.forEach((sys) => {
      sys.points.visible = filterKey === 'all' || sys.category === filterKey;
    });

    if (firstMatch && filterKey !== 'all') {
      selectRouteCorridor(firstMatch, true, false);
    }
  }

  function selectRouteCorridor(cityKey, flyCamera, preserveBookingKey) {
    const route = ROUTES[cityKey];
    if (!route) return;
    state.selectedRoute = cityKey;
    if (!preserveBookingKey) {
      state.activeBookingKey = cityKey;
    }

    document.querySelectorAll('.route-city-btn').forEach((btn) => {
      const active = btn.dataset.city === cityKey;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    });

    Object.keys(routeArcMeshes).forEach((k) => {
      const isAct = k === cityKey;
      routeArcMeshes[k].tubeMat.opacity = isAct ? 0.98 : 0.28;
      routeArcMeshes[k].tubeMat.color.setHex(isAct ? 0x00e5ff : 0xf59e0b);
    });
    routeParticleSystems.forEach((sys) => {
      const isAct = sys.cityKey === cityKey;
      sys.pMat.color.setHex(isAct ? 0x00e5ff : 0xfde68a);
      sys.pMat.size = isAct ? 0.52 : 0.26;
    });

    document.getElementById('corridor-code').textContent = `GOLDEN ARC: RAMESWARAM / DHANUSHKODI ➔ ${route.city.toUpperCase()}`;
    document.getElementById('corridor-highway').textContent = route.highway;
    document.getElementById('corridor-title').textContent = route.title;
    document.getElementById('corridor-desc').textContent = route.desc;
    document.getElementById('corridor-km').textContent = `${route.km} KM (${route.duration})`;
    document.getElementById('corridor-topo').textContent = route.topo;

    const sedanEst = Math.round(route.km * FLEET.sedan.rateAc + FLEET.sedan.bata);
    const innovaEst = Math.round(route.km * FLEET.innova.rateAc + FLEET.innova.bata);
    document.getElementById('corridor-price').textContent = `₹${sedanEst.toLocaleString('en-IN')} / ₹${innovaEst.toLocaleString('en-IN')}`;
    document.getElementById('corridor-btn-city').textContent = route.city;
    setLiveGpsDisplay(route.gps);

    if (flyCamera && route.flyCam) {
      triggerCameraFlyTo(route.flyCam);
    }

    if (!preserveBookingKey) {
      const bpRouteSelect = document.getElementById('bp-route-select');
      if (bpRouteSelect) bpRouteSelect.value = cityKey;
      recalculateBoardingPass();
    }
  }

  function getActivePackageFareForFleet(pkgKey, fleetKey, isAc) {
    const pkg = ROUTES[pkgKey] || ROUTES.dhanushkodi_sunset;
    if (pkg.isPackage) {
      const table = isAc ? pkg.pkgRatesAc : pkg.pkgRatesNonAc;
      return table[fleetKey] || table.innova;
    }
    const fSpec = FLEET[fleetKey] || FLEET.innova;
    const perKm = isAc ? fSpec.rateAc : fSpec.rateNonAc;
    return Math.round(pkg.km * perKm + fSpec.bata);
  }

  function updateFleetShowcaseUI() {
    const spec = FLEET[state.selectedFleet] || FLEET.innova;
    const activePkg = ROUTES[state.selectedPackage] || ROUTES.dhanushkodi_sunset;

    document.querySelectorAll('.fleet-tab').forEach((btn) => {
      const fKey = btn.dataset.fleet;
      const fSpec = FLEET[fKey];
      const active = fKey === state.selectedFleet;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));

      const pill = btn.querySelector('.fcc-rate-pill');
      if (pill && fSpec) {
        const r = state.acEnabled ? fSpec.rateAc : fSpec.rateNonAc;
        pill.textContent = `₹${r}/km`;
      }
      const pkgRateEl = btn.querySelector('.fcc-pkg-rate');
      if (pkgRateEl && fSpec) {
        const pFare = getActivePackageFareForFleet(state.selectedPackage, fKey, state.acEnabled);
        pkgRateEl.textContent = `Pkg: ₹${pFare.toLocaleString('en-IN')}`;
      }
    });

    document.getElementById('ac-on-btn').classList.toggle('active', state.acEnabled);
    document.getElementById('ac-off-btn').classList.toggle('active', !state.acEnabled);
    document.getElementById('mode-perkm-btn').classList.toggle('active', state.tariffMode === 'perkm');
    document.getElementById('mode-pkg-btn').classList.toggle('active', state.tariffMode === 'package');

    const rate = state.acEnabled ? spec.rateAc : spec.rateNonAc;
    const pkgPrice = getActivePackageFareForFleet(state.selectedPackage, state.selectedFleet, state.acEnabled);

    if (state.tariffMode === 'perkm') {
      document.getElementById('fleet-tariff-kicker').textContent =
        `TRANSPARENT OUTSTATION PER-KM RATE (${state.acEnabled ? 'DUAL-ZONE AC' : 'NON-AC'})`;
      document.getElementById('fleet-main-price').textContent = `₹${rate}`;
      document.getElementById('fleet-price-unit').textContent = '/ km';
    } else {
      document.getElementById('fleet-tariff-kicker').textContent =
        `${activePkg.city.toUpperCase()} (${state.acEnabled ? 'AC' : 'NON-AC'})`;
      document.getElementById('fleet-main-price').textContent = `₹${pkgPrice.toLocaleString('en-IN')}`;
      document.getElementById('fleet-price-unit').textContent = `(${activePkg.duration})`;
    }

    document.getElementById('fleet-bata').textContent = `₹${spec.bata} / day`;
    document.getElementById('spec-pax').textContent = spec.pax;
    document.getElementById('spec-bags').textContent = spec.bags;
    document.getElementById('spec-local-pkg').textContent = `₹${pkgPrice.toLocaleString('en-IN')} (${activePkg.city})`;
    document.getElementById('spec-min-km').textContent = spec.minKm;
    document.getElementById('lock-fleet-name').textContent = `${spec.name} (${state.acEnabled ? 'AC' : 'Non-AC'})`;

    const bpFleet = document.getElementById('bp-fleet-select');
    const bpAc = document.getElementById('bp-ac-select');
    if (bpFleet) bpFleet.value = state.selectedFleet;
    if (bpAc) bpAc.value = String(state.acEnabled);
    recalculateBoardingPass();
  }

  function recalculateBoardingPass() {
    const routeKey = document.getElementById('bp-route-select')?.value || state.activeBookingKey;
    const fleetKey = document.getElementById('bp-fleet-select')?.value || state.selectedFleet;
    const acVal = document.getElementById('bp-ac-select')?.value !== 'false';

    const item = ROUTES[routeKey] || ROUTES.dhanushkodi_sunset;
    const fleet = FLEET[fleetKey] || FLEET.innova;

    const totalFare = getActivePackageFareForFleet(routeKey, fleetKey, acVal);

    document.getElementById('bp-to-code').textContent = item.code;
    document.getElementById('bp-to-name').textContent = item.city;
    document.getElementById('bp-route-dist').textContent = `${item.km} KM · ${item.duration.toUpperCase()}`;
    document.getElementById('bp-class-badge').textContent =
      `${fleet.shortName.toUpperCase()} · ${acVal ? 'AC' : 'NON-AC'}`;
    document.getElementById('bp-fare-total').textContent = `₹${totalFare.toLocaleString('en-IN')}`;
    document.getElementById('stub-stops').textContent = item.city;
    document.getElementById('stub-fleet').textContent = `${fleet.shortName} ${acVal ? 'AC' : 'Non-AC'}`;
  }

  function scrollToFraction(targetFraction) {
    state.flyToOverride = null;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({
      top: maxScroll * targetFraction,
      behavior: state.motionMode === 'calm' ? 'auto' : 'smooth'
    });
  }

  // =========================================================================
  // 9. WEB AUDIO API PROCEDURAL OCEAN SOUNDSCAPE
  // =========================================================================
  let audioCtx = null;

  function toggleOceanSoundscape() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();

      const bufferSize = audioCtx.sampleRate * 3;
      const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = output[i];
        output[i] *= 0.25;
      }

      const whiteNoise = audioCtx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 340;

      const audioGain = audioCtx.createGain();
      audioGain.gain.value = 0.14;

      whiteNoise.connect(filter);
      filter.connect(audioGain);
      audioGain.connect(audioCtx.destination);
      whiteNoise.start();
    }

    if (state.audioPlaying) {
      audioCtx.suspend();
      state.audioPlaying = false;
    } else {
      audioCtx.resume();
      state.audioPlaying = true;
    }

    const btn = document.getElementById('toggle-audio-btn');
    const lbl = document.getElementById('audio-state-label');
    if (btn) btn.setAttribute('aria-pressed', String(state.audioPlaying));
    if (lbl) lbl.textContent = state.audioPlaying ? 'Ocean Live' : 'Muted';
  }

  // =========================================================================
  // 10. WHIMSY INJECTOR & DESIGN SPELLS: CONFETTI, 3D CARD TILT & MICRO-POLISH
  // =========================================================================
  function launchConfettiAndSparkles(originElement) {
    if (state.motionMode === 'calm') return;
    const layer = document.getElementById('confetti-sparkle-layer');
    if (!layer) return;

    const rect = originElement
      ? originElement.getBoundingClientRect()
      : { left: window.innerWidth * 0.45, top: window.innerHeight * 0.5, width: 120, height: 60 };
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const glyphs = ['✦', '✧', '⋆', '◆', '❖', '✨'];
    const colors = ['#f59e0b', '#fde68a', '#00e5ff', '#14b8a6', '#f8fafc'];

    for (let i = 0; i < 44; i++) {
      const p = document.createElement('span');
      p.className = 'confetti-particle';
      p.textContent = glyphs[i % glyphs.length];
      const angle = (Math.PI * 2 * i) / 44 + (Math.random() - 0.5) * 0.35;
      const dist = 70 + Math.random() * 240;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist - 65;

      p.style.left = `${cx}px`;
      p.style.top = `${cy}px`;
      p.style.color = colors[i % colors.length];
      p.style.fontSize = `${11 + Math.random() * 13}px`;
      p.style.textShadow = `0 0 10px ${colors[i % colors.length]}`;
      p.style.setProperty('--dx', `${dx.toFixed(1)}px`);
      p.style.setProperty('--dy', `${dy.toFixed(1)}px`);
      p.style.setProperty('--dur', `${(1.05 + Math.random() * 0.65).toFixed(2)}s`);

      layer.appendChild(p);
      setTimeout(() => p.remove(), 1800);
    }
  }

  function showWhimsyToast(text) {
    const existing = document.querySelector('.whimsy-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'whimsy-toast';
    toast.textContent = text;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3800);
  }

  function attach3DPerspectiveTilt(selector, maxDeg) {
    document.querySelectorAll(selector).forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        if (state.motionMode === 'calm') return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${(x * maxDeg).toFixed(2)}deg) rotateX(${(-y * maxDeg).toFixed(2)}deg) translateZ(5px)`;
      });
      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
      });
    });
  }

  function bindEvents() {
    document.querySelectorAll('.scene-nav-btn').forEach((btn) => {
      btn.addEventListener('click', () => scrollToFraction(parseFloat(btn.dataset.target)));
    });
    document.querySelectorAll('.sb-frame').forEach((btn) => {
      btn.addEventListener('click', () => scrollToFraction(parseFloat(btn.dataset.scroll)));
    });

    // Magnetic Button Micro-Interactions (`design-spells` + `agency-whimsy-injector`)
    document.querySelectorAll('.magnetic-btn').forEach((btn) => {
      btn.addEventListener('pointermove', (e) => {
        if (state.motionMode === 'calm') return;
        const rect = btn.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.22;
        const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.22;
        btn.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px) scale(1.02)`;
      });
      btn.addEventListener('pointerleave', () => {
        btn.style.transform = 'translate(0px, 0px) scale(1)';
      });
    });

    // Universal 3D Perspective Card Tilt on Mouse Move
    attach3DPerspectiveTilt('.sig-pkg-card', 10);
    attach3DPerspectiveTilt('.tilt-dest-card', 14);
    attach3DPerspectiveTilt('.route-city-btn', 9);
    attach3DPerspectiveTilt('.fleet-comp-card', 9);

    // Header Compass 3x Click Easter Egg
    let compassClicks = [];
    document.getElementById('brand-compass-trigger')?.addEventListener('click', (e) => {
      const now = Date.now();
      compassClicks.push(now);
      compassClicks = compassClicks.filter((t) => now - t < 1800);
      if (compassClicks.length >= 3) {
        e.preventDefault();
        compassClicks = [];
        launchConfettiAndSparkles(e.currentTarget);
        showWhimsyToast('✨ Arichal Munai Twin-Ocean Blessing Activated! Fair Winds & Calm Seas.');
      }
    });

    // Day/Sunset 3D Theme Switcher
    document.getElementById('toggle-lighting-btn')?.addEventListener('click', () => {
      state.lightingMode = state.lightingMode === 'sunset' ? 'day' : 'sunset';
      apply3DLightingMode();
    });

    document.getElementById('toggle-hud-btn')?.addEventListener('click', (e) => {
      state.hudVisible = !state.hudVisible;
      document.documentElement.setAttribute('data-hud', state.hudVisible ? 'visible' : 'hidden');
      e.currentTarget.classList.toggle('active', state.hudVisible);
      e.currentTarget.setAttribute('aria-pressed', String(state.hudVisible));
      document.getElementById('hud-state-label').textContent = state.hudVisible ? 'ON' : 'OFF';
    });

    document.getElementById('toggle-motion-btn')?.addEventListener('click', (e) => {
      state.motionMode = state.motionMode === 'cinematic' ? 'calm' : 'cinematic';
      document.documentElement.setAttribute('data-motion', state.motionMode);
      e.currentTarget.setAttribute('aria-pressed', String(state.motionMode === 'calm'));
      document.getElementById('motion-state-label').textContent =
        state.motionMode === 'cinematic' ? 'Cinematic' : 'Calm (WCAG)';
    });

    document.getElementById('toggle-audio-btn')?.addEventListener('click', toggleOceanSoundscape);

    // Scene 1: Floating Quick-Book Bar
    document.getElementById('quick-book-bar')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const pkgKey = document.getElementById('qb-package').value;
      const veh = document.getElementById('qb-vehicle').value;
      const dt = document.getElementById('qb-date').value;
      state.selectedFleet = veh;
      rebuild3DVehicleGeometry(veh);
      selectSignaturePackage(pkgKey, false);
      if (dt && document.getElementById('bp-date')) {
        document.getElementById('bp-date').value = dt;
      }
      recalculateBoardingPass();
      scrollToFraction(0.96);
    });

    // Scene 2: 4 Signature Tour Package Cards
    document.querySelectorAll('.sig-pkg-card').forEach((card) => {
      card.addEventListener('click', () => selectSignaturePackage(card.dataset.pkg, true));
    });

    // Scene 2: 3D Tilt Destination Cards
    document.querySelectorAll('.tilt-dest-card').forEach((card) => {
      card.addEventListener('click', () => selectLandmarkPin(card.dataset.pin, true));
    });

    document.getElementById('add-pin-to-pass-btn')?.addEventListener('click', (e) => {
      const lm = LANDMARKS[state.selectedPin];
      e.currentTarget.innerHTML = `<span>✓ ${lm.name.split(' (')[0]} Locked on Pass</span>`;
      launchConfettiAndSparkles(e.currentTarget);
    });

    // Scene 3: Route Filter Pills & Destination Cards
    document.querySelectorAll('.route-filter-pill').forEach((pill) => {
      pill.addEventListener('click', () => applyRouteCategoryFilter(pill.dataset.filter));
    });
    document.querySelectorAll('.route-city-btn').forEach((btn) => {
      btn.addEventListener('click', () => selectRouteCorridor(btn.dataset.city, true, false));
    });
    document.getElementById('select-corridor-btn')?.addEventListener('click', () => {
      scrollToFraction(0.96);
    });

    // Scene 4: Fleet Comparison Cards & Toggles
    document.querySelectorAll('.fleet-tab').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.selectedFleet = btn.dataset.fleet;
        rebuild3DVehicleGeometry(state.selectedFleet);
        updateFleetShowcaseUI();
      });
    });

    document.getElementById('ac-on-btn')?.addEventListener('click', () => {
      state.acEnabled = true;
      updateFleetShowcaseUI();
    });
    document.getElementById('ac-off-btn')?.addEventListener('click', () => {
      state.acEnabled = false;
      updateFleetShowcaseUI();
    });

    document.getElementById('mode-perkm-btn')?.addEventListener('click', () => {
      state.tariffMode = 'perkm';
      updateFleetShowcaseUI();
    });
    document.getElementById('mode-pkg-btn')?.addEventListener('click', () => {
      state.tariffMode = 'package';
      updateFleetShowcaseUI();
    });

    document.getElementById('fleet-rotate-slider')?.addEventListener('input', (e) => {
      state.turntableAngleDeg = parseFloat(e.target.value);
      if (vehicleAssembly) {
        vehicleAssembly.rotation.y = THREE.MathUtils.degToRad(state.turntableAngleDeg);
      }
    });

    document.getElementById('lock-fleet-btn')?.addEventListener('click', () => {
      scrollToFraction(0.96);
    });

    // Scene 5: Perforated Boarding Pass 3D Tilt & Golden Stamp + Confetti
    const bpPerspective = document.getElementById('bp-perspective');
    const bpCard = document.getElementById('boarding-pass-3d');
    const bpGlare = document.getElementById('bp-glare');

    if (bpPerspective && bpCard) {
      bpPerspective.addEventListener('pointermove', (e) => {
        if (state.motionMode === 'calm') return;
        const rect = bpPerspective.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        bpCard.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
        if (bpGlare) {
          bpGlare.style.opacity = '1';
          bpGlare.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(0,229,255,0.16), transparent 60%)`;
        }
      });
      bpPerspective.addEventListener('pointerleave', () => {
        bpCard.style.transform = 'rotateY(0deg) rotateX(0deg)';
        if (bpGlare) bpGlare.style.opacity = '0';
      });
    }

    ['bp-route-select', 'bp-fleet-select', 'bp-ac-select'].forEach((id) => {
      document.getElementById(id)?.addEventListener('change', (e) => {
        if (id === 'bp-route-select') {
          const val = e.target.value;
          state.activeBookingKey = val;
          if (ROUTES[val]?.isPackage) {
            state.selectedPackage = val;
            updateFleetShowcaseUI();
          }
        }
        document.getElementById('ready-stamp')?.classList.remove('stamped');
        recalculateBoardingPass();
      });
    });

    document.getElementById('boarding-pass-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const passenger = document.getElementById('bp-passenger').value.trim() || 'VOYAGER';
      const refNum = 'DHK-' + Math.floor(100000 + Math.random() * 900000);
      const fareText = document.getElementById('bp-fare-total')?.textContent || '₹3,400';

      document.getElementById('stamp-ref-id').textContent = `VERIFIED • ${refNum} • ${fareText}`;
      document.getElementById('stub-pnr').textContent = `PNR: ${refNum} • ${passenger.toUpperCase()}`;

      const statusEl = document.getElementById('stub-status');
      statusEl.textContent = 'CONFIRMED • EXPRESS';
      statusEl.className = 'status-confirmed';

      const stampEl = document.getElementById('ready-stamp');
      stampEl.classList.remove('stamped');
      void stampEl.offsetWidth;
      stampEl.classList.add('stamped');

      // Launch Golden & Turquoise Sparkle Confetti + 3D Ocean Shockwave
      launchConfettiAndSparkles(stampEl);
      showWhimsyToast(`🎉 Boarding Pass Stamped: CONFIRMED • ARICHAL MUNAI EXPRESS (${refNum})`);

      if (clock) state.shockwaveTime = clock.getElapsedTime();

      const announcer = document.getElementById('sr-announcer');
      if (announcer) {
        announcer.textContent = `Boarding pass stamped CONFIRMED ARICHAL MUNAI EXPRESS for ${passenger}. Estimated fare ${fareText}. Reference ${refNum}.`;
      }
    });
  }

  // =========================================================================
  // 11. BOOTSTRAP
  // =========================================================================
  initThreeScene();
  setupScrollTriggerAndEvents();
  bindEvents();
  updateFleetShowcaseUI();
  recalculateBoardingPass();
  animate();
})();
