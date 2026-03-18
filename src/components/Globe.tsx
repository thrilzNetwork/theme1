import { useEffect, useRef } from "react";

const CONFIG = {
  latLines: 10,
  lngLines: 14,
  nodeCount: 90,
  connectionDist: 0.55,
  rotationSpeed: 0.0015,
  highlightProbability: 0.14,
};

interface GlobeNode {
  theta: number;
  phi: number;
  highlighted: boolean;
  size: number;
}

function randomNode(): GlobeNode {
  return {
    theta: Math.random() * 2 * Math.PI,
    phi: Math.acos(2 * Math.random() - 1),
    highlighted: Math.random() < CONFIG.highlightProbability,
    size: Math.random() * 1.5 + 1,
  };
}

function project(theta: number, phi: number, rot: number, cx: number, cy: number, r: number) {
  const x = Math.sin(phi) * Math.cos(theta + rot);
  const y = Math.cos(phi);
  const z = Math.sin(phi) * Math.sin(theta + rot);
  return { x: cx + x * r, y: cy - y * r, z };
}

export const Globe = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let rotation = 0;
    let animId = 0;
    let W = 0, H = 0, CX = 0, CY = 0, R = 0;
    const nodes: GlobeNode[] = Array.from({ length: CONFIG.nodeCount }, randomNode);

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas!.width = Math.round(W * DPR);
      canvas!.height = Math.round(H * DPR);
      ctx.scale(DPR, DPR);
      CX = W / 2;
      CY = H / 2;
      R = Math.min(W, H) * 0.42;
    }

    function drawGrid(rot: number) {
      for (let i = 1; i < CONFIG.latLines; i++) {
        const phi = (Math.PI / CONFIG.latLines) * i;
        const sinPhi = Math.sin(phi);
        const cosPhi = Math.cos(phi);
        const ry = CY - cosPhi * R;
        const rx = sinPhi * R;
        ctx.beginPath();
        for (let s = 0; s <= 128; s++) {
          const a = (2 * Math.PI * s) / 128 + rot;
          const depth = Math.cos(a - rot);
          ctx.strokeStyle = `rgba(34,208,223,${depth > 0 ? 0.22 : 0.06})`;
          ctx.lineWidth = 0.6;
          const px = CX + Math.cos(a) * rx;
          if (s === 0) ctx.moveTo(px, ry);
          else ctx.lineTo(px, ry);
        }
        ctx.stroke();
      }
      for (let i = 0; i < CONFIG.lngLines; i++) {
        const theta = (2 * Math.PI * i) / CONFIG.lngLines + rot;
        const isFront = Math.cos(theta) > -0.15;
        ctx.beginPath();
        ctx.strokeStyle = isFront ? "rgba(34,208,223,0.22)" : "rgba(34,208,223,0.06)";
        ctx.lineWidth = 0.6;
        for (let s = 0; s <= 64; s++) {
          const phi2 = (Math.PI * s) / 64;
          const x = CX + Math.sin(phi2) * Math.cos(theta) * R;
          const y = CY - Math.cos(phi2) * R;
          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }

    function drawNodes(rot: number) {
      const projected = nodes.map((n) => ({ ...n, ...project(n.theta, n.phi, rot, CX, CY, R) }));
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i], b = projected[j];
          if (a.z < 0 || b.z < 0) continue;
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONFIG.connectionDist * R) {
            const alpha = (1 - dist / (CONFIG.connectionDist * R)) * 0.3 * Math.min(a.z, b.z) * 1.5;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34,208,223,${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of projected) {
        if (n.z < 0) continue;
        const alpha = n.z;
        if (n.highlighted) {
          const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.size * 5);
          grd.addColorStop(0, `rgba(214,216,216,${(alpha * 0.3).toFixed(3)})`);
          grd.addColorStop(1, "transparent");
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.size * 5, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.size + 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${(alpha * 0.9).toFixed(3)})`;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34,208,223,${(alpha * 0.8).toFixed(3)})`;
          ctx.fill();
        }
      }
    }

    function tick() {
      ctx.clearRect(0, 0, W, H);
      const grd = ctx.createRadialGradient(CX, CY, R * 0.7, CX, CY, R * 1.2);
      grd.addColorStop(0, "rgba(34,208,223,0.05)");
      grd.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(CX, CY, R * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
      drawGrid(rotation);
      drawNodes(rotation);
      rotation += CONFIG.rotationSpeed;
      animId = requestAnimationFrame(tick);
    }

    resize();
    tick();

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(animId);
      resize();
      tick();
    });
    ro.observe(canvas);

    const handleVisibility = () => {
      if (document.hidden) { cancelAnimationFrame(animId); animId = 0; }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
};
