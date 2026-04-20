# RideFlow Dispatch

Uber-style dispatch simulator with public-safe mock rides and driver operations.

## Features
- Create ride requests
- Assign drivers
- Progress ride status (`pending` -> `assigned` -> `in-progress` -> `completed`)
- Track active/completed/revenue metrics

## Run
```bash
npm install
npm run dev
```

## Safety
- Synthetic data only
- No map APIs or private geolocation
