# ReCarma Backend – ELV Lifecycle Management API

A production-ready backend for managing End-of-Life Vehicle (ELV) workflows, including authentication, vehicle lifecycle tracking, pickup scheduling, document uploads, and admin operations.

🔗 Live Backend URL  
https://recarma.onrender.com

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- Multer (File Uploads)
- GitHub Actions (Keep-alive workflow)
- Render (Deployment)

---

## ✨ Features
- 🔐 JWT-based Authentication & Role Management  
- 🚗 Vehicle lifecycle management  
- 🚚 Pickup scheduling workflow  
- 📂 Secure document uploads (RC, Aadhaar, PAN)  
- 🧑‍💼 Admin-only operations  
- 🩺 Health check for uptime & keep-alive  
- ☁️ Cloud deployment with MongoDB Atlas

---

## 🌍 Base URL
https://recarma.onrender.com

---

## API ROUTES

### 🔐 AUTH ROUTES

#### 1️⃣ Register User
- Method: POST  
- Endpoint: `/api/auth/register`  
- Body (JSON):
```json
{
  "name": "Veeraj",
  "email": "veeraj@test.com",
  "password": "123456",
  "role": "OWNER"
}
```

#### 2️⃣ Login User
- Method: POST  
- Endpoint: `/api/auth/login`  
- Body (JSON):
```json
{
  "email": "veeraj@test.com",
  "password": "123456"
}
```
- 📌 Response returns a JWT token  
- 👉 Save it in frontend using localStorage

---

### 🚗 VEHICLE ROUTES

#### 3️⃣ Create Vehicle (OWNER)
- Method: POST  
- Endpoint: `/api/vehicles`  
- Headers:
  - `Authorization: Bearer <TOKEN>`
  - `Content-Type: application/json`  
- Body (JSON):
```json
{
  "make": "Honda",
  "model": "City",
  "year": 2014,
  "conditionScore": 7
}
```

#### 4️⃣ Get My Vehicles (OWNER)
- Method: GET  
- Endpoint: `/api/vehicles/my`  
- Headers:
  - `Authorization: Bearer <TOKEN>`

#### 5️⃣ Update Vehicle Status (ADMIN / DEALER)
- Method: PATCH  
- Endpoint: `/api/vehicles/:vehicleId/status`  
- Headers:
  - `Authorization: Bearer <ADMIN_TOKEN>`
  - `Content-Type: application/json`  
- Body (JSON):
```json
{
  "status": "IN_TRANSIT"
}
```

---

### 🚚 PICKUP ROUTES

#### 6️⃣ Schedule Pickup (OWNER)
- Method: POST  
- Endpoint: `/api/pickups`  
- Headers:
  - `Authorization: Bearer <TOKEN>`
  - `Content-Type: application/json`  
- Body (JSON):
```json
{
  "vehicleId": "VEHICLE_ID",
  "pickupDate": "2025-01-20",
  "slot": "MORNING"
}
```

#### 7️⃣ Get All Pickups (ADMIN)
- Method: GET  
- Endpoint: `/api/pickups`  
- Headers:
  - `Authorization: Bearer <ADMIN_TOKEN>`

---

### 📂 DOCUMENT UPLOAD ROUTES

#### 8️⃣ Upload Document (RC / Aadhaar / PAN)
- Method: POST  
- Endpoint: `/api/documents/upload`  
- Headers:
  - `Authorization: Bearer <TOKEN>`  
- Body → form-data:
  - Key: `vehicleId` — Type: Text — Value: `VEHICLE_ID`
  - Key: `type` — Type: Text — Value: `RC`
  - Key: `document` — Type: File — Value: `PDF / Image`

#### 9️⃣ View Uploaded Document
- Method: GET  
- Endpoint: `/uploads/documents/<filename>`

---

### 🩺 SYSTEM ROUTE

#### 🔟 Health Check (Keep-alive)
- Method: GET  
- Endpoint: `/api/health`

---

## 🔑 Frontend Token Usage
Example usage (axios):
```js
const token = localStorage.getItem("token");

axios.get(
  "https://recarma.onrender.com/api/vehicles/my",
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);
```

---

## 🔄 Recommended Frontend Flow
1. Register / Login  
2. Save JWT token in localStorage  
3. Create Vehicle  
4. Get My Vehicles  
5. Schedule Pickup  
6. Upload Documents  
7. Admin updates vehicle status

---

## 🚀 Deployment
- Backend: Render  
- Database: MongoDB Atlas  
- CI: GitHub Actions (scheduled keep-alive every 20 days)

---
