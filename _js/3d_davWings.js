let scene, camera, renderer;
let WIDTH;
let HEIGHT;
let aspectRatio = function() {
  return WIDTH / HEIGHT
};

function init() {
	scene = new THREE.Scene();
	scene.background = new THREE.Color('skyBLue');
	THREE.Cache.enabled = true;

	camera = new THREE.PerspectiveCamera(40 ,window.innerWidth / window.innerHeight, 1, 5000);
	// camera.rotation.y = 45/180*Math.PI;
	camera.position.x = 6;
	camera.position.y = 5;
	camera.position.z = 3;

	renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	function resize() {
		WIDTH = window.innerWidth
		HEIGHT = window.innerHeight
		renderer.setSize(WIDTH, HEIGHT)
		camera.aspect = aspectRatio()
		camera.updateProjectionMatrix()
	}
	resize();

	window.addEventListener("resize", resize);

	const controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.addEventListener('change', render);

	const hlight = new THREE.AmbientLight (0x404040,10);
	scene.add(hlight);

	// const directionalLight = new THREE.DirectionalLight(0xc4c4c4,1);
	// directionalLight.position.set(0,1,0);
	// directionalLight.castShadow = true;
	// scene.add(directionalLight);

	const light = new THREE.PointLight(0xc4c4c4,1);
	light.position.set(0,300,500);
	scene.add(light);

	const light2 = new THREE.PointLight(0xc4c4c4,1);
	light2.position.set(500,100,0);
	scene.add(light2);

	const light3 = new THREE.PointLight(0xc4c4c4,1);
	light3.position.set(0,100,-500);
	scene.add(light3);

	const light4 = new THREE.PointLight(0xc4c4c4,1);
	light4.position.set(-500,300,500);
	scene.add(light4);

	const loader = new THREE.GLTFLoader();
	loader.load('assets/images/3dlibrary/DaV_wings/DaV_wings.glb',
		function (gltf) {
			// const car = gltf.scene.children[0];
			// car.scale.set(0.5,0.5,0.5);
			scene.add(gltf.scene);
			animate();
		},
		function (xhr) {
			//the percentage loaded based on the tween's progress
			// loadingProgress = Math.round(progressTl.progress() * 100);
			//we put the percentage in the screen
			// $(".txt-perc").text(loadingProgress + '%');
			console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
		}
	);

	// const planeSize = 10;
	// const loaderTexture = new THREE.TextureLoader();
	// const texture = loaderTexture.load('assets/images/3dlibrary/DaV_giantBow/ALNG-Grass-02.jpg');
	// texture.wrapS = THREE.RepeatWrapping;
	// texture.wrapT = THREE.RepeatWrapping;
	// texture.magFilter = THREE.NearestFilter;
	// const repeats = planeSize;
	// texture.repeat.set(repeats, repeats);

	// const planeGeo = new THREE.PlaneGeometry(25, 10);
	// const planeMat = new THREE.MeshBasicMaterial({
	// 	map: texture,
	// 	color: 0x7a97ab
	// });
	// const ground = new THREE.Mesh(planeGeo, planeMat);
	// ground.rotation.x = Math.PI * -.5;
	// ground.receiveShadow = true;
	// scene.add(ground);

	const onProgress = function ( xhr ) {
		if ( xhr.lengthComputable ) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round(percentComplete, 2) + '% downloaded' );
		}
	};

	let tex = new THREE.TextureLoader().load("assets/images/3dlibrary/DaV_giantBow/ALNG-Grass-02.jpg");
	const planeSize = 5000;
	tex.anisotropy = 64;
	tex.repeat.set(planeSize, planeSize);
	tex.wrapT = THREE.RepeatWrapping;
	tex.wrapS = THREE.RepeatWrapping;
	geo = new THREE.PlaneBufferGeometry(10000, 10000);
	mat = new THREE.MeshBasicMaterial({
	  map: tex
	});
	mesh = new THREE.Mesh(geo, mat);
	mesh.position.set(0, 0, 0);
	mesh.rotation.set(Math.PI / -2, 0, 0);
	scene.add(mesh);

	// const geometry = new THREE.BoxBufferGeometry();
	// const material = new THREE.MeshPhongMaterial();
	// const mesh = new THREE.Mesh( geometry, material )
	// scene.add( mesh );
}

function animate() {
	// controls.update();
	renderer.render(scene,camera);
	// requestAnimationFrame(animate);
}

function render() {
	renderer.render(scene, camera);
	camera.lookAt(scene.position)
}

init();
render();