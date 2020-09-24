var scene, camera, renderer;


scene = new THREE.Scene()
scene.background = new THREE.Color(0xdddddd)

camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000)
camera.rotation.y = 45 / 180 * Math.PI
camera.position.x = 800
camera.position.y = 100
camera.position.z = 1000

// var abint = new THREE.AmbientLight(0x555500)
var abint = new THREE.AmbientLight(0xffffff)
scene.add(abint);

renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)

var controls = new THREE.OrbitControls(camera, renderer.domElement);
document.body.appendChild(renderer.domElement)


let loader = new THREE.GLTFLoader()
loader.load('models/ugandan/scene.gltf', function (gltf) {
    var car = gltf.scene.children[0]
    car.scale.set(2.0, 2.0, 2.0)
    scene.add(gltf.scene);
    animate();

})


function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate()
