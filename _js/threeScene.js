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
	camera.position.set(10, 15, 15);

	renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.outputEncoding = THREE.sRGBEncoding;
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	document.body.appendChild(renderer.domElement);

	function resize() {
		WIDTH = window.innerWidth
		HEIGHT = window.innerHeight
		renderer.setSize(WIDTH, HEIGHT)
		camera.aspect = aspectRatio()
		camera.updateProjectionMatrix()
	}
	resize();
	window.addEventListener('resize', resize);

	const controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.update();
	controls.addEventListener('change', animate);

	const hlight = new THREE.AmbientLight (0x404040,5);
	scene.add(hlight);

	const directionalLight = new THREE.DirectionalLight(0xc4c4c4,2);
	directionalLight.position.set(3,10,10);
	directionalLight.castShadow = true;
	directionalLight.shadow.camera.top = 2;
	directionalLight.shadow.camera.bottom = -2;
	directionalLight.shadow.camera.left = -2;
	directionalLight.shadow.camera.right = 2;
	directionalLight.shadow.camera.near = 0.1;
	directionalLight.shadow.camera.far = 10;
	scene.add(directionalLight);

	const light = new THREE.PointLight(0xc4c4c4,1);
	light.position.set(0,300,500);
	scene.add(light);

	// const light2 = new THREE.PointLight(0xc4c4c4,1);
	// light2.position.set(500,100,0);
	// scene.add(light2);
	//
	// const light3 = new THREE.PointLight(0xc4c4c4,1);
	// light3.position.set(0,100,-500);
	// scene.add(light3);
	//
	// const light4 = new THREE.PointLight(0xc4c4c4,1);
	// light4.position.set(-500,300,500);
	// scene.add(light4);

	const loader = new THREE.GLTFLoader();
	loader.load('assets/images/3dlibrary/DaV_giantBow/DaV_giantBowVR_R.gltf',
		function (gltf) {
			const bow = gltf.scene;
			gltf.scene.traverse(function (node) {
				if (node.isMesh || node.isLight) {
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
			scene.add(bow);
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

	let geo = new THREE.PlaneBufferGeometry(10000, 10000);
	let mat = new THREE.MeshBasicMaterial({
		map: tex
	});
	let mesh = new THREE.Mesh(geo, mat);

	mesh.position.set(0, 0, 0);
	mesh.rotation.set(Math.PI / -2, 0, 0);
	mesh.receiveShadow = true;
	scene.add(mesh);

	// const geometry = new THREE.BoxBufferGeometry();
	// const material = new THREE.MeshPhongMaterial();
	// const mesh = new THREE.Mesh( geometry, material )
	// scene.add( mesh );
}

function animate() {
	renderer.render(scene,camera);

	// Позволяет изменять размер окна, но загружает видеокарту
	// requestAnimationFrame(animate);

	// camera.lookAt(scene.position); // Отменяет перемещения правой кнопкой
}

init();
animate();