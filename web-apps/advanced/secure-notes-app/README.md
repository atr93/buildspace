# Secure Notes App

Security-focused note-taking web app demonstrating local encryption and safe client-side data handling.

## Purpose
Show practical security-aware frontend engineering using password-derived encryption and lock/unlock workflow.

## Features
- Create, edit, and delete notes
- Lock/unlock vault with password
- AES-GCM encrypted note content in localStorage
- Note plaintext hidden when locked
- Dark mode UI with responsive layout
- Basic input validation and error feedback

## Run
```bash
npm install
npm run dev
```

## Screenshot / Expected UI
- Left panel with encrypted note index and delete controls
- Right panel editor with save action
- Lock screen requiring vault password
- Dark SOC-inspired theme

## Future Improvements
- Password reset flow with secure key rotation
- Add note tags and search
- Add inactivity auto-lock timer
- Use IndexedDB for larger encrypted vaults
