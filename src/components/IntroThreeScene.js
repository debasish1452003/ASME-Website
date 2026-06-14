import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const IntroThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, mount.clientWidth / mount.clientHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    camera.position.set(0, 0, 7.8);

    const rig = new THREE.Group();
    scene.add(rig);

    const blue = new THREE.MeshStandardMaterial({
      color: 0x29b6f6,
      emissive: 0x062c44,
      metalness: 0.82,
      roughness: 0.17,
    });
    const gold = new THREE.MeshStandardMaterial({
      color: 0xd6a84c,
      emissive: 0x2d1900,
      metalness: 0.9,
      roughness: 0.2,
    });
    const graphite = new THREE.MeshStandardMaterial({
      color: 0x121923,
      metalness: 0.95,
      roughness: 0.28,
    });

    const outer = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.035, 18, 180), blue);
    const mid = new THREE.Mesh(new THREE.TorusGeometry(1.56, 0.028, 18, 160), gold);
    const inner = new THREE.Mesh(new THREE.TorusGeometry(0.92, 0.024, 14, 120), blue);
    outer.rotation.x = Math.PI / 2.45;
    mid.rotation.x = Math.PI / 2.25;
    mid.rotation.z = 0.6;
    inner.rotation.x = Math.PI / 2.05;
    inner.rotation.z = -0.9;
    rig.add(outer, mid, inner);

    const hub = new THREE.Mesh(new THREE.DodecahedronGeometry(0.32, 1), graphite);
    rig.add(hub);

    for (let i = 0; i < 44; i += 1) {
      const angle = (i / 44) * Math.PI * 2;
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.014, 1.95), i % 3 === 0 ? gold : blue);
      spoke.position.set(Math.cos(angle) * 0.98, Math.sin(angle) * 0.98, 0);
      spoke.rotation.z = angle;
      spoke.rotation.x = Math.PI / 2.35;
      rig.add(spoke);
    }

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x86dfff, transparent: true, opacity: 0.2 });
    for (let i = 0; i < 18; i += 1) {
      const radius = 2.8 + i * 0.07;
      const curve = new THREE.EllipseCurve(0, 0, radius, radius * 0.34, 0, Math.PI * 2);
      const points = curve.getPoints(96).map((point) => new THREE.Vector3(point.x, point.y, -1.5 + i * 0.05));
      const orbit = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), lineMaterial);
      orbit.rotation.x = 0.7 + i * 0.025;
      orbit.rotation.z = i * 0.16;
      scene.add(orbit);
    }

    const particlePositions = [];
    for (let i = 0; i < 420; i += 1) {
      particlePositions.push((Math.random() - 0.5) * 11, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 6);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.Float32BufferAttribute(particlePositions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({ color: 0xbdefff, size: 0.015, transparent: true, opacity: 0.74 })
    );
    scene.add(particles);

    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    const keyLight = new THREE.PointLight(0x78dfff, 2.8, 12);
    keyLight.position.set(-3, 2.2, 4);
    const rimLight = new THREE.PointLight(0xffc86b, 1.7, 10);
    rimLight.position.set(3, -2, 3);
    scene.add(keyLight, rimLight);

    let frameId;
    let tick = 0;
    const animate = () => {
      tick += 0.01;
      rig.rotation.y += 0.008;
      rig.rotation.z = Math.sin(tick) * 0.06;
      outer.rotation.z += 0.006;
      mid.rotation.z -= 0.01;
      inner.rotation.z += 0.014;
      particles.rotation.y -= 0.001;
      particles.rotation.x = Math.sin(tick * 0.55) * 0.04;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const resize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="intro-three-scene" ref={mountRef} aria-hidden="true" />;
};

export default IntroThreeScene;
