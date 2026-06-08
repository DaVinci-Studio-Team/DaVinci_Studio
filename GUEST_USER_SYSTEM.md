# Guest User System Implementation Guide

## Overview
This document describes the implementation of a guest user image generation system for the DaVinci Studio AI image generator. Guest users can generate ONE image which persists after refresh. A second generation attempt is blocked with a modal prompting login/signup.

---

## Architecture

### Frontend Only (No Backend Changes)
All guest logic is handled on the frontend:
- **Login Detection**: Check for JWT token in localStorage
- **Image Persistence**: Store image URL in localStorage
- **Generation Limit**: Check if guest has already generated
- **UI State Management**: React state for modals and disabled states

### Key Files Created/Modified

```
frontend/src/
├── utils/
│   └── guestImageStorage.js          [ENHANCED]
├── components/
│   ├── modals/
│   │   └── LoginRequiredModal.jsx     [NEW]
│   └── common/
│       ├── PromptSection.jsx          [UPDATED]
│       ├── PromptButton.jsx           [UPDATED]
│       └── ImageBoard.jsx             [NO CHANGES NEEDED]
```

---

## Implementation Details

### 1. guestImageStorage.js
**Purpose**: Manage localStorage operations for guest images

**Functions**:
- `saveGuestImage(imageUrl, prompt, style)` - Save image with metadata
- `getGuestImage()` - Retrieve saved image as object
- `hasGuestGenerated()` - Check if guest already generated
- `clearGuestImage()` - Clear all stored data (for cleanup)
- `getGuestRemainingGenerations()` - Get remaining generations (0 or 1)

**Storage Keys**:
- `guest_generated_image` - Image URL
- `guest_image_timestamp` - ISO timestamp
- `guest_image_prompt` - Original prompt
- `guest_image_style` - Style used

### 2. LoginRequiredModal.jsx
**Purpose**: Premium modal shown when guest reaches limit

**Features**:
- Glassmorphism design with blur effect
- Icon and benefits list
- Sign In / Create Account buttons
- Close button and footer link
- Smooth animations
- Dark premium aesthetic

**Props**:
- `isOpen` (boolean) - Control modal visibility
- `onClose` (function) - Callback to close modal

### 3. PromptSection.jsx - Key Changes

**New Imports**:
```javascript
import { useState, useEffect } from 'react';
import LoginRequiredModal from '../modals/LoginRequiredModal';
import { 
  saveGuestImage, 
  getGuestImage, 
  hasGuestGenerated,
  clearGuestImage 
} from '../../utils/guestImageStorage';
```

**New State**:
```javascript
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [showLoginModal, setShowLoginModal] = useState(false);
const [guestLimitReached, setGuestLimitReached] = useState(false);
```

**useEffect Hook**:
- Checks localStorage for token on mount
- Loads guest image if exists
- Sets login state accordingly

**handleGenerateImage Logic**:
```javascript
if (!isLoggedIn && hasGuestGenerated()) {
  setShowLoginModal(true);
  return;  // Block generation
}
// ... API call ...
if (res.success && !isLoggedIn) {
  saveGuestImage(images[0], prompt, style);
  setGuestLimitReached(true);
}
```

**UI Updates**:
- Warning banner shown when limit reached
- Textarea disabled when limit reached
- Choice chips disabled when limit reached
- Button shows disabled state with tooltip

### 4. PromptButton.jsx - Changes

**New Props**:
- `disabled` - Controls disabled state
- `title` - Tooltip text

**Enhanced Styling**:
- `disabled:opacity-50 disabled:cursor-not-allowed`
- Smooth transitions
- Enhanced shadow on hover

---

## User Flow Diagram

```
┌─ Guest Opens App ─┐
│  No token in LS   │
└────────┬──────────┘
         │
         v
┌─────────────────────┐
│ Load Guest Image    │
│ (if exists)         │
└────────┬────────────┘
         │
         v
┌─────────────────────┐
│ First Generation    │
│ (User clicks button)│
└────────┬────────────┘
         │
         v
┌─────────────────────┐
│ Save to localStorage│
│ + Show image        │
└────────┬────────────┘
         │
         v
┌─────────────────────┐
│ Page Refresh        │
│ Image persists ✓    │
└────────┬────────────┘
         │
         v
┌─────────────────────┐
│ Second Generation   │
│ Attempt            │
└────────┬────────────┘
         │
         v
┌──────────────────────┐
│ Block + Show Modal   │
│ "Sign in to continue"│
└──────┬───────────────┘
       │
       ├─→ Click "Sign In" → Navigate to /login
       │
       └─→ Click "Sign Up" → Navigate to /register
```

---

## Testing Checklist

### Guest User Scenario
- [ ] Open app as guest (no login)
- [ ] Generate first image
- [ ] Verify image appears in ImageBoard
- [ ] Open DevTools → Application → localStorage
- [ ] Verify `guest_generated_image` exists
- [ ] Refresh page
- [ ] Image persists after refresh ✓
- [ ] Try to generate second image
- [ ] Modal appears with login message
- [ ] Button is disabled with cursor-not-allowed
- [ ] Textarea is disabled/greyed out
- [ ] Click "Sign In" → Navigate to /login
- [ ] Click modal close button → Modal closes

### Logged-in User Scenario
- [ ] Log in to app
- [ ] Generate first image
- [ ] Image appears in ImageBoard
- [ ] Generate second image
- [ ] Both images appear ✓
- [ ] No modal shown
- [ ] Button never disables
- [ ] Generate unlimited images

### Edge Cases
- [ ] Clear localStorage manually
  - Generate first image
  - Guest image saved
  - Clear `guest_generated_image` key
  - User can generate again
  - Verify new image is saved

- [ ] Token expires while viewing page
  - No special handling needed
  - User just needs to refresh/login
  - On refresh, token check will fail
  - User treated as guest

- [ ] localStorage is full/disabled
  - Try-catch blocks in utility prevent crashes
  - Error logged to console
  - User can still generate (just not saved)

---

## Integration with Backend

### No Changes Required
The backend doesn't need any changes because:
- Guest images aren't stored in database
- Guest images are ephemeral (localStorage only)
- Login/registration endpoints already exist
- Image generation API remains the same

### When Guest Logs In
1. User gets JWT token in localStorage
2. Next page refresh/revisit
3. PromptSection detects `isLoggedIn = true`
4. Guest image removed from UI
5. User can generate unlimited
6. New images saved to MongoDB via existing backend

### Optional: Future Enhancement
- Add endpoint to migrate guest image to user gallery
- Populate user history with guest-generated image
- Implement this before clearing guest localStorage

---

## File Structure

```
frontend/src/
├── utils/
│   ├── guestImageStorage.js     [Primary file]
│   ├── downloadImage.js
│   └── ...
├── components/
│   ├── modals/
│   │   └── LoginRequiredModal.jsx     [New directory]
│   ├── common/
│   │   ├── PromptSection.jsx          [Main logic]
│   │   ├── PromptButton.jsx           [Button state]
│   │   ├── ImageBoard.jsx             [Display)
│   │   └── ...
│   ├── button/
│   │   └── LogoutBtn.jsx
│   └── ...
└── ...
```

---

## Styling & UX Notes

### LoginRequiredModal
- Glassmorphism: `bg-white/10 backdrop-blur-2xl`
- Border: `border-white/20`
- Premium gradient: `from-purple-500 to-pink-500`
- Smooth animations: `animate-in fade-in zoom-in`
- Accessible: Uses semantic HTML, ARIA labels

### PromptButton
- Disabled state: `opacity-50 cursor-not-allowed`
- Hover effect: Enhanced shadow (only when enabled)
- Smooth transitions: `transition-all duration-200`
- Tooltip: Shows reason why disabled

### PromptSection
- Warning banner: `bg-amber-500/10 border-amber-500/30`
- Disabled textarea: Reduces opacity, shows not-allowed cursor
- Disabled chips: Also respect `isGenerateDisabled` check

---

## Error Handling

### localStorage Failures
```javascript
try {
  localStorage.setItem(key, value);
} catch (error) {
  console.error("Failed to save guest image:", error);
  return false;  // Graceful degradation
}
```

### Missing Token
- `localStorage.getItem("token")` safely returns null
- `!!null` becomes false
- User treated as guest correctly

### Failed Image Generation
- Existing error state handles this
- Error message shown to user
- Guest image NOT saved if generation fails

---

## Performance Considerations

### localStorage
- Image URLs typically 2-5KB
- Metadata < 1KB
- Total: < 6KB per guest image
- No performance impact

### useEffect
- Runs once on mount (empty dependency array not used - checks on isLoggedIn changes)
- Simple localStorage read
- No API calls
- Minimal performance cost

### Re-renders
- New state properly managed
- Modal only renders when `isOpen={true}`
- No unnecessary re-renders

---

## Browser Compatibility

### localStorage
- ✓ Chrome 4+
- ✓ Firefox 3.5+
- ✓ Safari 4+
- ✓ IE 8+
- ✓ Mobile browsers

### CSS (Glassmorphism)
- ✓ Modern browsers
- ✓ Tailwind classes for backdrop-blur
- ✓ Graceful degradation for older browsers

---

## Future Enhancements

1. **Guest Image Migration**
   - Endpoint to save guest image to user gallery
   - Call on login with stored guest image

2. **Analytics**
   - Track guest conversion rate
   - Monitor how many guests reach limit vs generate
   - Measure conversion from guest → signed up user

3. **Multiple Guest Generations**
   - Change limit from 1 to N
   - Update `getGuestRemainingGenerations()` logic
   - Show counter: "3 generations left"

4. **Expiring Guest Images**
   - Add TTL to localStorage
   - Clear old guest images automatically
   - Implement in `getGuestImage()`

5. **Guest Session Analytics**
   - Track guest session duration
   - Monitor which prompts are used
   - Identify popular styles

---

## Cleanup & Migration

### When User Logs In
Consider clearing guest image:

```javascript
useEffect(() => {
  if (isLoggedIn) {
    clearGuestImage();  // Optional
  }
}, [isLoggedIn]);
```

Or keep it for reference - decision depends on UX goals.

---

## Support & Debugging

### Common Issues

**Issue**: Image doesn't persist after refresh
- Check: Is localStorage enabled in browser?
- Check: Is image URL valid when saved?
- Solution: Open DevTools → Application → Storage

**Issue**: Button never enables for second user
- Check: Is token being cleared on logout?
- Check: Are you clearing guest localStorage on logout?
- Solution: Verify token properly removed from localStorage

**Issue**: Modal shows for logged-in user
- Check: Is `isLoggedIn` state correct?
- Solution: Add console.log to verify token check

### Debug Commands

```javascript
// In browser console:
localStorage.getItem("guest_generated_image")      // See image URL
localStorage.getItem("guest_image_timestamp")      // See when saved
Object.keys(localStorage)                           // All keys
localStorage.clear()                                // Clear all
```

---

## Summary

This guest user system provides:
- ✅ 1 free generation for guests
- ✅ Image persists after refresh
- ✅ Generation limit enforced
- ✅ Beautiful modal for upgrade
- ✅ Zero backend changes
- ✅ Seamless login integration
- ✅ Premium UX with glassmorphism

Total implementation time: Quick and efficient!
Total lines changed: ~150 lines across 4 files
