Design a fully interactive Settings module for a premium Yoga & Fitness app called “Zenforge”. 
Use a modern neumorphic + glassmorphic UI style with smooth iOS-like transitions.

Create navigation flows for every clickable item in the Settings screen. Each option must open a new detailed screen with real functionality, not placeholders.

1. USER PROFILE CARD (Aditya – Zen Enthusiast)
On click:
- Open Profile Overview Screen
- Show profile photo (editable), name, bio, email, phone
- Add “Edit Profile” button
- Allow changing profile image, name, bio
- Save button with success animation

2. EDIT PROFILE
- Fields: Name, Profile Photo, Bio
- Image picker for photo upload
- Save changes → show toast “Profile Updated Successfully”

3. HEALTH GOALS
- Inputs: Weight, Target Weight, Fitness Goal (flexibility, strength, mindfulness)
- Slider + input fields
- Save goals → update AI recommendations

4. PROFILE DETAILS
- Show: Goals, preferences, yoga level, stats
- Editable sections
- Add toggle for “Update AI Preferences”

5. NOTIFICATIONS
- Toggle switches:
  - Daily Reminder
  - Workout Alerts
  - Progress Updates
- Time picker for reminders
- Save settings

6. APPEARANCE
- Options:
  - Light Mode / Dark Mode / System Default
- Theme preview cards
- Apply instantly with animation

7. SOUNDS & HAPTICS
- Toggle:
  - Sound Effects
  - Vibration Feedback
- Volume slider

8. SECURITY
- Options:
  - Change Password (old + new + confirm)
  - Enable/Disable 2FA (OTP via email)
- Show success/error validation states

9. DATA MANAGEMENT
- Options:
  - Export Data (download JSON/PDF)
  - Clear Data (confirmation modal)
- Add warning dialog before deletion

10. DELETE ACCOUNT (IMPORTANT)
- Add inside Data Management or Security
- On click:
  - Show full-screen warning modal:
    “This action is permanent”
  - Require password confirmation
  - Require typing “DELETE”
  - Final button: “Delete My Account”
  - Show loading + success exit → redirect to onboarding screen

11. HELP & FAQ
- Expandable accordion list of questions
- Search bar at top

12. RATE THE APP
- Star rating system (1–5 stars)
- Optional feedback text box
- Submit button

13. ABOUT
- Show app version, developer info, licenses
- Simple static page

14. LOG OUT BUTTON
- On click:
  - Show confirmation modal
  - “Are you sure you want to logout?”
  - Yes → redirect to login screen

15. GLOBAL BEHAVIOR
- All screens must have back navigation
- Smooth slide transitions
- Use floating bottom tab bar (persistent)
- Maintain consistent spacing, rounded cards, soft shadows

16. MICRO INTERACTIONS
- Button press animations
- Toggle smooth transitions
- Success/error toast messages
- Loading indicators for API actions

Ensure all flows are connected and clickable in prototype mode.
No dead ends. Every action should result in a visible response or navigation.
🔥 What this gives you:

Full real app behavior in Figma (not just UI)

Covers every button click

Includes Delete Account (important for projects)

Looks like a production-level app flow

If