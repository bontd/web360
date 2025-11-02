window.onload = function() {
    const panoEl = document.getElementById('pano');
    const viewer = new Marzipano.Viewer(panoEl, { controls: { mouseViewMode: 'drag' } });

    // ✅ Zoom bằng chuột (tự xử lý)
    panoEl.addEventListener('wheel', (e) => {
        e.preventDefault();
        const view = viewer.view();
        let fov = view.fov(); // current Field of View (góc nhìn)
        const delta = e.deltaY > 0 ? 1.05 : 0.95; // cuộn xuống → zoom out
        fov = Math.min(Math.max(fov * delta, Math.PI/180 * 30), Math.PI/180 * 100); // giới hạn zoom
        view.setFov(fov);
      }, { passive: false });

    // Function tạo scene
    function createScene(imageUrl) {
      const source = Marzipano.ImageUrlSource.fromString(imageUrl);
      const geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);
      const limiter = Marzipano.RectilinearView.limit.traditional(1024, 100*Math.PI/180);
      const view = new Marzipano.RectilinearView({ yaw: 0, pitch: 0 }, limiter);
      const scene = viewer.createScene({ source, geometry, view, pinFirstLevel: true });
      return scene;
    }
  
      // Hai cảnh
      const scene1 = createScene("https://www.marzipano.net/media/equirect/angra.jpg");
      const scene2 = createScene("https://pannellum.org/images/cerro-toco-0.jpg");
  
      // Hotspot chuyển scene1 → scene2
      const btn1 = document.createElement('div');
      btn1.className = 'hotspot-btn';
      btn1.innerHTML = '👉 Sang phòng 2 <span class="tooltip">Click để chuyển cảnh</span>';
      btn1.addEventListener('click', () => scene2.switchTo({ transitionDuration: 1000 }));
      scene1.hotspotContainer().createHotspot(btn1, { yaw: 100, pitch: 200 });
  
      // Hotspot chuyển scene2 → scene1
      const btn2 = document.createElement('div');
      btn2.className = 'hotspot-btn';
      btn2.innerHTML = '👈 Quay lại phòng 1 <span class="tooltip">Click để quay lại</span>';
      btn2.addEventListener('click', () => scene1.switchTo({ transitionDuration: 1000 }));
      scene2.hotspotContainer().createHotspot(btn2, { yaw: 0, pitch: 0 });
  
      // Hiển thị cảnh đầu tiên
      scene1.switchTo();
};
  