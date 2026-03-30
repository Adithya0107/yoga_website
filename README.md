# ZenForge – Yoga Fitness App

A full-stack yoga fitness tracking application with an iOS frontend and a dual-layer backend.

---

## 📁 Project Structure

```
yoga/
├── frontend/             → iOS Frontend (Swift / Xcode)
│   ├── yoga/
│   ├── yoga.xcodeproj/
│   ├── add_to_assets.py   → Script to add assets to Xcode
│   ├── download_poses.py  → Script to download pose images
│   └── yoga_pose_downloads/
│
└── backend/              → All Backend Code
    ├── flask/            → Python Flask API (Port 5001)
    │   ├── main.py
    │   ├── db_config.py
    │   ├── requirements.txt
    │   ├── run.sh
    │   └── ...
    │
    └── php/              → PHP API (XAMPP / Apache)
        ├── db.php
        ├── send_otp.php
        ├── ...
```

---

## 🖥️ Frontend

**Technology:** Swift, SwiftUI  
**Location:** `/frontend/` (Xcode Project)

Open `yoga.xcodeproj` in Xcode to build and run on a simulator or real device.

---

## ⚙️ Backend

### 1. Flask API (Python)
**Location:** `backend/flask/`  
**Live path (XAMPP):** `/Applications/XAMPP/xamppfiles/htdocs/yoga_backend/`  
**Port:** `5001`  
**Database:** `yoga_app_db` (MySQL via XAMPP)

**Endpoints:**
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/user/register` | Register new user |
| POST | `/user/login` | Login user |
| POST | `/user/update_profile` | Save onboarding survey |
| GET  | `/user/plan/<id>` | Get daily yoga plan |
| POST | `/user/change_password` | Change password |
| POST | `/user/add_progress` | Save progress entry |
| GET  | `/user/get_progress/<id>` | Get progress history |
| POST | `/user/upload_image` | Upload journey photo |

**To start the Flask server:**
```bash
cd backend/flask
source .venv/bin/activate  # if using a virtualenv
python main.py
```

---

### 2. PHP API
**Location:** `backend/php/`  
**Live path (XAMPP):** `/Applications/XAMPP/xamppfiles/htdocs/zen_api/`  
**Base URL:** `http://localhost/zen_api`

**Endpoints:**
| File | Description |
|------|-------------|
| `send_otp.php` | Generate & store 6-digit OTP (Gmail only) |
| `verify_otp.php` | Validate OTP for account creation |
| `save_session.php` | Save yoga session summary |
| `save_activity.php` | Log daily activity |
| `get_activity.php` | Fetch activity log |
| `get_progress.php` | Get user progress data |
| `save_changes.php` | Save profile changes |
| `upload_journey_shot.php` | Upload a journey photo |
| `get_journey_history.php` | Fetch journey photos |

**To start PHP/Apache:** Start XAMPP and enable Apache + MySQL.

---

## 🗄️ Database

**Name:** `yoga_app_db` (MySQL)  
**Host:** `localhost`  
**User:** `root` / **Password:** *(empty)*

**Tables:**
- `users` – User profiles and auth
- `otp_verifications` – Temporary OTP storage (5 min expiry)
- `yoga_poses` – Pose library
- `daily_plans` – Generated 7-day plans
- `sessions` – Per-pose session history
- `session_summaries` – Full session summaries
- `journey_shots` – Progress photos
- `activity_log` – Daily activity tracking

---

## 📱 iOS Base URLs in App

```swift
let flaskBaseURL = "http://127.0.0.1:5001/user"    // Flask
let phpBaseURL   = "http://localhost/zen_api"        // PHP
```
