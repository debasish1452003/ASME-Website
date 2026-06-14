import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeHero = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    camera.position.set(0, 0.4, 7);

    const group = new THREE.Group();
    scene.add(group);

    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x1db8ff,
      metalness: 0.8,
      roughness: 0.18,
      emissive: 0x052033,
    });
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd7a642,
      metalness: 0.75,
      roughness: 0.22,
      emissive: 0x2c1800,
    });

    const torus = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.045, 16, 160), ringMaterial);
    const innerTorus = new THREE.Mesh(new THREE.TorusGeometry(1.03, 0.03, 12, 120), goldMaterial);
    const hub = new THREE.Mesh(new THREE.IcosahedronGeometry(0.48, 1), ringMaterial);
    torus.rotation.x = Math.PI / 2.7;
    innerTorus.rotation.x = Math.PI / 2.1;
    hub.rotation.x = 0.4;
    group.add(torus, innerTorus, hub);

    for (let i = 0; i < 36; i += 1) {
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.018, 1.55), goldMaterial);
      spoke.position.set(Math.cos((i / 36) * Math.PI * 2) * 0.78, Math.sin((i / 36) * Math.PI * 2) * 0.78, 0);
      spoke.rotation.z = (i / 36) * Math.PI * 2;
      spoke.rotation.x = Math.PI / 2.6;
      group.add(spoke);
    }

    const points = [];
    for (let i = 0; i < 180; i += 1) {
      points.push((Math.random() - 0.5) * 9, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({ color: 0x8ddcff, size: 0.018, transparent: true, opacity: 0.75 })
    );
    scene.add(particles);

    const blueLight = new THREE.PointLight(0x61d6ff, 2.4, 12);
    blueLight.position.set(-3, 2, 4);
    const warmLight = new THREE.PointLight(0xffc66d, 1.2, 10);
    warmLight.position.set(3, -1.5, 3);
    scene.add(new THREE.AmbientLight(0xffffff, 0.35), blueLight, warmLight);

    let frameId;
    const animate = () => {
      group.rotation.y += 0.006;
      group.rotation.z += 0.002;
      particles.rotation.y -= 0.0008;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="three-hero" ref={mountRef} aria-hidden="true" />;
};

export default ThreeHero;
