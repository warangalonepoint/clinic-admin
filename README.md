# 🏥 WarangalOneStop Clinic Admin Panel (BookingBot)

This is a mobile-first, offline-capable Progressive Web App (PWA) built for small clinics to manage patient bookings, staff attendance, and appointment logs — all powered by simple CSV files, no backend required.

Live Demo: [https://warangalonepoint.github.io/clinic-admin/](https://warangalonepoint.github.io/clinic-admin/)

---

## 🧩 Included Files

| File                  | Purpose                                                  |
|-----------------------|----------------------------------------------------------|
| `index.html`          | PIN-protected login screen                               |
| `dashboard.html`      | Admin dashboard with charts and shortcut buttons         |
| `bookings.html`       | Live bookings page for patients (shows available slots)  |
| `confirmation.html`   | Displays booking confirmation before WhatsApp redirect   |
| `logs.html`           | Booking logs dashboard + daily summary export            |
| `staff.html`          | Staff attendance page (manual entry / daily role)        |
| `sync.html`           | (Optional) Sync CSV with Google Sheets                   |
| `backup.html`         | Backup download of key files                             |
| `pin-reset.html`      | Reset PIN + activate pricing tiers                       |
| `manifest.json`       | PWA configuration (Add-to-Home-Screen)                   |
| `service-worker.js`   | Offline caching logic                                    |
| `Slots.csv`           | Backend file for available time slots                    |
| `logs.csv`            | Backend file for all bookings                            |

---

## 📱 Key Features

- ✅ WhatsApp booking without monthly fees
- ✅ Manual and automated slot systems
- ✅ Light/Dark theme toggle
- ✅ Offline support (PWA-enabled)
- ✅ Fully mobile-compatible
- ✅ PIN login for admin
- ✅ Booking logs with date filters
- ✅ Add to Home Screen on Android

---

## 📦 Folder Setup Instructions

> Recommended: Use [GitHub Pages](https://pages.github.com/) for free hosting

1. Fork this repository or upload files to your own GitHub repo  
2. Make sure all `.html` and `.csv` files are in the root folder (`/clinic-admin/`)
3. In **`manifest.json`**, update:
   - `"name"` and `"short_name"` with your clinic’s name
   - `"start_url"` if needed
4. To enable offline/PWA:
   - Keep `service-worker.js` in the same root folder
   - Make sure file paths are correct inside the JS

---

## 🛠 CSV File Formats

### Slots.csv
```
Date,Time,Status
30/07/2025,09:00,Available
30/07/2025,09:10,Booked
```

### logs.csv
```
Date,Time,Name,Reason,Status
30/07/2025,09:00,John,Check-up,Booked
```

---

## 🔐 PIN Access Levels

| PIN     | Access Level     |
|---------|------------------|
| `2525`  | Admin (Full Access) |
| Custom  | Can be tied to Pricing Plan in future |

---

## 📞 Support or Questions?

This system was built for local clinics and small service centers using only mobile devices.

For any help or to request a branded version:
📩 Visit [https://warangalonestop.in](https://warangalonestop.in)

---

© 2025 Warangal OneStop BookingBot | Built with ❤️ for Tier 2/3 Clinics
