# Guest User System - Testing Guide

## Quick Start Testing

### Test 1: Guest User First Generation
**Steps**:
1. Open app in a fresh browser (private/incognito window)
2. Verify you see "No images generated yet" in ImageBoard
3. Type prompt: `"A futuristic city with neon lights"`
4. Click "Generate Image" button
5. Wait for image to generate
6. Image should appear in ImageBoard

**Expected Result**: ✅ Image displays successfully

**Verification**:
```javascript
// Open DevTools → Console and run:
localStorage.getItem("guest_generated_image")
// Should return: "https://..." (the image URL)
```

---

### Test 2: Image Persists After Refresh
**Steps**:
1. After completing Test 1
2. Refresh the page (F5 or Cmd+R)
3. Wait for page to load

**Expected Result**: ✅ Image still visible in ImageBoard

**Verification**:
```javascript
// In Console:
localStorage.getItem("guest_image_timestamp")
// Should return: ISO timestamp of when image was saved
```

---

### Test 3: Second Generation Blocked
**Steps**:
1. After completing Test 1 & 2
2. Try to type in the prompt textarea
3. Notice textarea appears disabled/greyed
4. Try to click a choice chip (Cyberpunk, Realistic, etc.)
5. Chips don't respond (disabled)
6. Try to click "Generate Image" button
7. Button appears disabled with reduced opacity

**Expected Result**: ✅ UI is disabled, modal NOT shown yet

**Verification**:
```javascript
// In Console:
JSON.parse(localStorage.getItem("guest_generated_image"))
// Should show the image URL from Test 1
```

---

### Test 4: Login Modal Triggered
**Steps**:
1. Wait a few seconds to see if modal auto-opens (it shouldn't)
2. Try clicking the disabled "Generate Image" button anyway
3. Modal should appear with:
   - Lock icon
   - Title: "Generate More Images"
   - Description text
   - Sign In button
   - Create Account button
   - Close button
   - Benefits list

**Expected Result**: ✅ Modal appears with blur background

**Verification**:
- Modal is center-aligned
- Background is blurred/dark
- Buttons are responsive
- Close button (X) works

---

### Test 5: Modal "Sign In" Navigation
**Steps**:
1. Modal is open from Test 4
2. Click "Sign In" button
3. Should navigate to `/login` page
4. Modal should close

**Expected Result**: ✅ Redirected to login page

---

### Test 6: Modal "Create Account" Navigation
**Steps**:
1. Go back to home page (you should be logged out or guest again)
2. Generate a new image OR return to previous tab with guest image
3. Try to generate again to trigger modal
4. Click "Create Account" button
5. Should navigate to `/register` page

**Expected Result**: ✅ Redirected to register page

---

### Test 7: Modal Close Button
**Steps**:
1. Generate as guest to trigger modal again
2. Click X button (top right of modal)
3. Modal should close

**Expected Result**: ✅ Modal closes, page still visible

---

### Test 8: Logged-in User Unlimited Generations
**Steps**:
1. Log in to your account
2. Generate first image
3. Wait for completion
4. Generate second image
5. Both images should be visible
6. Continue generating (3rd, 4th, etc.)
7. Button never disables

**Expected Result**: ✅ Unlimited generations, no modal

**Verification**:
- Images appear in ImageBoard
- Button always stays enabled
- No warning banner visible

---

### Test 9: Guest to Logged-in User
**Steps**:
1. Open private window as guest
2. Generate one image
3. In another tab, log in to your account
4. Come back to guest tab
5. Refresh page
6. Notice `isLoggedIn` should now be true (if same session/localStorage)

**Expected Result**: ✅ User can generate more images

**Note**: If fresh browser context, tokens won't transfer. This is OK - behavior is correct.

---

### Test 10: localStorage Clear (Cleanup)
**Steps**:
1. Open DevTools → Application → Storage → localStorage
2. Find and delete `guest_generated_image` key
3. Refresh page
4. ImageBoard should show "No images generated yet"
5. Button should be enabled again

**Expected Result**: ✅ Guest can generate another image

---

## Advanced Testing Scenarios

### Scenario A: Browser Storage Disabled
**How to Simulate**:
1. Chrome: Settings → Privacy → Cookies → Block all
2. DevTools → Console, any `localStorage` call returns error

**Expected Behavior**:
- Error caught in try-catch
- Error logged: "Failed to save guest image"
- Image still displays (just not saved)
- No modal shown (since no localStorage)
- User can generate again

**Code Path**: `saveGuestImage()` catch block

---

### Scenario B: Very Old Browser (localStorage not supported)
**Expected**:
- Feature gracefully degrades
- Guest can still generate once per session
- No persistence after refresh
- No errors on page

---

### Scenario C: Token Expires
**Steps**:
1. Log in as user
2. Open another tab to admin panel
3. Log yourself out from other tab
4. Try to generate on first tab
5. Generation should fail (unauthorized)
6. User should log back in

**Expected**: Error handled by existing backend

---

## Performance Testing

### Test: Large Image URLs
**Purpose**: Verify localStorage handles large URLs

**Code**:
```javascript
// In Console:
const largeUrl = "data:image/png;base64," + "A".repeat(500000);
localStorage.setItem("guest_generated_image", largeUrl);
localStorage.getItem("guest_generated_image").length;
// Should store and retrieve successfully
```

---

### Test: Multiple Rapid Generations
**Steps**:
1. As logged-in user, click Generate multiple times rapidly
2. Verify all images load without errors
3. Check React DevTools for any warnings

**Expected**: No memory leaks or performance issues

---

## Mobile Testing

### Test: Mobile Guest Generation
**Steps** (using mobile emulator or device):
1. Open app on mobile
2. Generate image
3. Close app completely
4. Reopen app
5. Image should still be there

**Expected**: ✅ Works on mobile

**Devices to Test**:
- iPhone (Safari)
- Android (Chrome)
- Tablet

---

### Test: Mobile Modal
**Steps**:
1. Reach guest limit on mobile
2. Modal appears
3. Buttons are easily tappable
4. Modal closes on X tap

**Expected**: ✅ Mobile-friendly modal

---

## Accessibility Testing

### Keyboard Navigation
**Steps**:
1. Use Tab key to navigate through UI
2. Focus should reach all buttons
3. Press Enter/Space to activate buttons
4. Modal can be closed with Escape key (if implemented)

**Expected**: ✅ Full keyboard support

---

### Screen Reader Testing
**Steps**:
1. Use NVDA (Windows) or VoiceOver (Mac)
2. Read page content
3. Buttons should have proper labels
4. Modal should be announced properly

**Expected**: Semantic HTML makes it work

---

## Edge Cases & Known Behaviors

| Case | Behavior | Expected |
|------|----------|----------|
| Guest generates, then logs in | Old guest image forgotten, can generate new ones | ✅ Correct - starts fresh |
| Multiple browser tabs open as guest | Each tab has independent state | ✅ Correct - localStorage shared but state independent |
| Logout then visit as new guest | Can generate again | ✅ Correct - new session |
| Server down during generation | Error shown, guest image not saved | ✅ Correct - safe state |
| Corrupt localStorage data | Gracefully handled by try-catch | ✅ Correct - no crash |

---

## Browser DevTools Testing

### Check localStorage
```javascript
// View all guest-related keys
Object.entries(localStorage)
  .filter(([key]) => key.includes("guest"))
  .forEach(([key, value]) => {
    console.log(`${key}:`, value);
  });
```

### Check React State
```javascript
// If using React DevTools extension:
1. Open React DevTools
2. Select PromptSection component
3. Check:
   - isLoggedIn: true/false
   - guestLimitReached: true/false
   - showLoginModal: true/false
   - generatedImages: [...]
```

### Network Inspection
```
1. Open DevTools → Network tab
2. Generate image
3. Verify POST to /api/image/generate
4. Check response contains imageUrl
```

---

## Performance Benchmarks

### Expected Performance

| Operation | Expected Time |
|-----------|----------------|
| Save to localStorage | < 1ms |
| Load from localStorage | < 1ms |
| Check guest generated | < 1ms |
| Modal open animation | 300ms |
| Page refresh with guest image | < 100ms added |

---

## Regression Testing Checklist

Before pushing to production, verify:

- [ ] Existing logged-in users unaffected
- [ ] Multiple images still load for logged-in users
- [ ] Image download still works
- [ ] Image favorite button still works
- [ ] Logout clears user state properly
- [ ] Login redirects properly
- [ ] No console errors in DevTools
- [ ] No memory leaks in React DevTools
- [ ] Works on Chrome, Firefox, Safari, Edge
- [ ] Works on iOS and Android
- [ ] Modal closes on background click
- [ ] Button tooltip appears on hover
- [ ] History page still works for logged-in users

---

## Automated Testing (Optional)

### Jest Test Example
```javascript
// __tests__/guestImageStorage.test.js
import { 
  saveGuestImage, 
  getGuestImage, 
  hasGuestGenerated,
  clearGuestImage 
} from '../guestImageStorage';

describe('guestImageStorage', () => {
  beforeEach(() => clearGuestImage());

  test('should save and retrieve guest image', () => {
    const imageUrl = 'https://example.com/image.jpg';
    saveGuestImage(imageUrl, 'test prompt', 'Normal');
    
    const result = getGuestImage();
    expect(result.imageUrl).toBe(imageUrl);
    expect(result.prompt).toBe('test prompt');
  });

  test('should detect if guest generated', () => {
    expect(hasGuestGenerated()).toBe(false);
    saveGuestImage('url', 'prompt', 'style');
    expect(hasGuestGenerated()).toBe(true);
  });

  test('should clear guest image', () => {
    saveGuestImage('url', 'prompt', 'style');
    clearGuestImage();
    expect(hasGuestGenerated()).toBe(false);
  });
});
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Modal doesn't appear | Check browser console, ensure `/login` route exists |
| Image doesn't persist | Check localStorage enabled, try private window |
| Button always disabled | Check React state, verify token detection |
| Modal styling looks wrong | Check Tailwind CSS compilation |
| Textarea doesn't disable | Check CSS cascading, might need `!important` |

---

## Test Results Template

Use this to document your testing:

```
Test Date: ___________
Tester: ___________
Browser: ___________
Device: ___________

Test 1 - Guest Generation: ☐ PASS ☐ FAIL
Test 2 - Image Persistence: ☐ PASS ☐ FAIL
Test 3 - Generation Block: ☐ PASS ☐ FAIL
Test 4 - Modal Trigger: ☐ PASS ☐ FAIL
Test 5 - Modal Navigation: ☐ PASS ☐ FAIL

Issues Found:
_________________________________

Notes:
_________________________________
```

---

## Quick Command Reference

```bash
# Clear all localStorage
clear localStorage in DevTools

# Test on different devices
# Chrome: F12 → Toggle device toolbar (Ctrl+Shift+M)

# View production-like build
npm run build

# Check for TypeScript errors
npm run type-check

# Lint code
npm run lint
```

---

Done! Your guest user system is ready for testing! 🚀
