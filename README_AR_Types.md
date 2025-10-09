# 🚀 AR Experience - 3 Phiên bản

Dự án này cung cấp 3 loại trải nghiệm AR khác nhau tùy theo nhu cầu và khả năng thiết bị.

## 📋 **Danh sách file:**

| File | Loại AR | Mô tả | Yêu cầu |
|------|---------|-------|---------|
| `ar.html` | **Camera Overlay** | Model 3D hiển thị trên camera feed | Camera, HTTPS |
| `ar_plane.html` | **Plane Detection** | Quét mặt phẳng để đặt model | WebXR, Camera |
| `ar_marker.html` | **Marker Detection** | Sử dụng marker pattern | AR.js, Camera |
| `create_marker.html` | **Marker Generator** | Tạo marker pattern | Browser |

---

## 🎯 **1. Camera Overlay AR (`ar.html`)**

### ✨ **Tính năng:**
- **Camera feed** làm background
- **Touch controls** để xoay model
- **Transparency controls** để điều chỉnh độ trong suốt
- **Device orientation** support
- **Auto-rotate** khi không tương tác

### 🚀 **Cách sử dụng:**
1. Mở `ar.html` trên HTTPS
2. Nhấn "🚀 Bắt đầu AR"
3. Cho phép camera
4. Chạm và kéo để xoay model
5. Sử dụng nút +/- để zoom
6. Nhấn "👁️ Opacity" để điều chỉnh độ trong suốt

### 💡 **Phù hợp khi:**
- Muốn AR đơn giản, nhanh chóng
- Không cần tracking chính xác
- Muốn preview model trên camera

---

## 🌍 **2. Plane Detection AR (`ar_plane.html`)**

### ✨ **Tính năng:**
- **Plane scanning** - quét mặt phẳng trong không gian thực
- **Model placement** - đặt model trên mặt phẳng được quét
- **Spatial tracking** - camera di chuyển quanh model
- **WebXR API** - AR native của trình duyệt
- **Hit testing** - chạm để đặt model

### 🚀 **Cách sử dụng:**
1. Mở `ar_plane.html` trên HTTPS
2. Nhấn "🚀 Bắt đầu AR"
3. Di chuyển camera để **quét mặt phẳng**
4. **Chạm vào màn hình** để đặt model
5. **Di chuyển camera** quanh model để xem từ các góc độ
6. Nhấn "🔄 Reset" để đặt lại

### 💡 **Phù hợp khi:**
- Muốn AR thực sự với spatial tracking
- Có thiết bị hỗ trợ WebXR
- Muốn trải nghiệm AR chuyên nghiệp

### ⚠️ **Yêu cầu:**
- **WebXR support** (Chrome Android, Edge)
- **HTTPS** hoặc localhost
- **Camera** và **gyroscope**

---

## 🎯 **3. Marker Detection AR (`ar_marker.html`)**

### ✨ **Tính năng:**
- **Marker pattern** detection
- **Stable tracking** - model không di chuyển
- **Click interaction** - tương tác với model
- **Animation controls** - bật/tắt animation
- **Cross-platform** support

### 🚀 **Cách sử dụng:**
1. **Tạo marker:** Mở `create_marker.html` → Tạo và tải marker
2. **In marker** ra giấy (ít nhất 10x10cm)
3. Mở `ar_marker.html` trên HTTPS
4. **Hướng camera** vào marker
5. **Di chuyển camera** quanh marker để xem model
6. **Chạm vào model** để tương tác

### 💡 **Phù hợp khi:**
- Muốn tracking ổn định
- Không có WebXR support
- Muốn AR dễ setup và sử dụng
- Cần tương tác với model

### 📋 **Tạo Marker:**
1. Mở `create_marker.html`
2. Nhấn "🎲 Tạo Marker Mới"
3. Nhấn "📥 Tải Marker"
4. In marker ra giấy trắng

---

## 🔧 **Setup và Yêu cầu:**

### **HTTPS Server:**
```bash
# Chạy HTTPS server
python -m http.server 8443 --bind 127.0.0.1

# Hoặc sử dụng server.py đã tạo trước đó
python server.py
```

### **Truy cập:**
- **Local:** `https://localhost:8443/`
- **Network:** `https://[YOUR_IP]:8443/`

### **File cần thiết:**
- `tour360/ekana_stadium_low_poly_lucknow_city_game_asset.glb` - 3D Model
- `tour360/alma.jpg` - Background texture
- `marker.patt` - Marker pattern (cho marker AR)

---

## 📱 **So sánh các loại AR:**

| Tính năng | Camera Overlay | Plane Detection | Marker Detection |
|-----------|----------------|-----------------|------------------|
| **Setup** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| **Tracking** | ❌ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Stability** | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Interactivity** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Compatibility** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ |
| **Realism** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## 🎯 **Khuyến nghị sử dụng:**

### **Cho người mới:**
- Bắt đầu với **Camera Overlay** (`ar.html`)
- Sau đó thử **Marker Detection** (`ar_marker.html`)

### **Cho developer:**
- Sử dụng **Plane Detection** (`ar_plane.html`) cho AR thực sự
- **Marker Detection** cho demo và prototype

### **Cho production:**
- **Plane Detection** cho ứng dụng chuyên nghiệp
- **Marker Detection** cho marketing và demo

---

## 🐛 **Troubleshooting:**

### **Camera không hoạt động:**
- Đảm bảo sử dụng HTTPS
- Kiểm tra quyền camera trong trình duyệt
- Thử trên thiết bị khác

### **WebXR không hỗ trợ:**
- Sử dụng Chrome Android hoặc Edge
- Kiểm tra `chrome://flags` → WebXR
- Thử **Marker Detection** thay thế

### **Marker không detect:**
- Đảm bảo marker in rõ nét
- Ánh sáng đủ và đều
- Marker phẳng, không nhăn

---

**Chọn phiên bản AR phù hợp với nhu cầu và thiết bị của bạn!** 🎉
