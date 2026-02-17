# Hybrid Workshop Plan

## Decision: Jitsi Meet

**Platform:** Jitsi Meet (meet.jit.si)
**Why:** Only free platform with breakout rooms + no time limit. No accounts needed for participants.

Alternatives considered:
- Google Meet - breakout rooms require Business Standard ($14/user/month). Too expensive for one-off.
- MS Teams - breakout rooms require paid/institutional plan. Check if Charite license includes this (fallback option).
- Zoom - has free breakout rooms but 40-minute limit. Disruptive for 3-hour workshop.
- Discord - too complex for non-technical researchers.

## Workshop Format

**Date:** February 17, 2026, 17:00-20:00
**Mode:** Hybrid (in-person at Charite + remote via Jitsi)
**Expected:** ~20-50 participants total

### Room Setup

**Main room:** `meet.jit.si/ai-teachathon-2026` (or similar)
- Password-protect to prevent random joins
- Host (you) joins first to become moderator

**Physical room:**
- Laptop connected to projector for slides/screen share
- External webcam pointed at the room (so remote people see in-person attendees)
- Good microphone (ideally a conference mic, not laptop mic)
- Large screen/projector showing Jitsi gallery view of remote participants

### Breakout Room Plan

During hands-on session (18:15-19:45):
- Create breakout rooms by project/topic (e.g., "KidneyQuest", "AlphaGenome", "Data Dashboard", etc.)
- Mix in-person and remote participants
- 6-8 people per room max
- Moderator can float between rooms to check on progress

## Agenda Adaptations for Hybrid

| Time | Segment | Hybrid Notes |
|------|---------|-------------|
| 17:00-17:15 | Welcome & Setup | Check remote audio/video. Ask remote folks to confirm they can hear/see. |
| 17:15-17:45 | Presentation | Screen share slides via Jitsi. Remote participants see slides directly. |
| 17:45-18:05 | AI Tool Landscape | Same as above. |
| 18:05-18:15 | Break | Keep Jitsi open. Good time to troubleshoot remote issues. |
| 18:15-19:45 | Hands-On | Create breakout rooms. Assign participants. Float between rooms. |
| 19:45-20:00 | Wrap-Up | Bring everyone back to main room. Screen share to show off work. |

## Roles

- **Host/Moderator (you):** Run Jitsi, manage breakout rooms, present
- **Virtual Facilitator (assign someone):** Monitor Jitsi chat, relay questions from remote participants, help with tech issues

Having a dedicated virtual facilitator is critical - you can't present and monitor chat at the same time.

## Pre-Event Checklist

### 1-2 Weeks Before
- [ ] Pick a Jitsi room name and test the link
- [ ] Test breakout rooms (create, assign, close)
- [ ] Test screen sharing with slides
- [ ] Find/assign a virtual facilitator
- [ ] Add "Joining Remotely" section to website

### Day Before
- [ ] Full dry run: physical room setup + Jitsi + breakout rooms
- [ ] Test room mic/speaker/camera setup
- [ ] Send final email to participants with Jitsi link + password

### Day Of
- [ ] Open Jitsi 15 min early
- [ ] Set password on room
- [ ] Verify remote participants can connect
- [ ] Pre-create breakout rooms during the break (18:05-18:15)

## Website Changes Needed

### 1. Update `docs/index.md`
- Add "Joining Remotely?" to hero tagline or features
- Or add a small note: "Can't make it in person? Join remotely via video call."

### 2. New page or section: "Joining Remotely"
Option A: New page `docs/remote.md` with sidebar entry
Option B: Section at bottom of `docs/agenda.md`

Content:
- Jitsi link (or "link will be shared via email")
- No account needed, just click the link
- Works in browser (Chrome/Firefox recommended)
- Tips: use headphones, mute when not speaking, use chat for questions
- Breakout rooms explanation: you'll be assigned to a small group during hands-on

### 3. Update `docs/agenda.md`
- Note that remote participants join via Jitsi
- Mention breakout rooms during hands-on segment

### 4. Update `docs/setup.md`
- Add note: "Joining remotely? You'll also need a working microphone and camera."

## Jitsi Quick Reference

**Start a meeting:**
1. Go to meet.jit.si
2. Type room name, click Start
3. Set password: click the lock icon in bottom bar

**Create breakout rooms:**
1. Click Participants icon (bottom bar)
2. Click "Add breakout room"
3. Repeat for each room
4. Drag participants or click three-dots > Send to room

**Bring everyone back:**
1. Click Participants icon
2. Click "Close all rooms" or manually close each room

**Useful settings:**
- Enable lobby (waiting room): Security > Enable lobby
- Mute all: Participants > Mute everyone
- Start recording: three-dot menu > Start recording (saves to Dropbox)

## Risk Mitigation

| Risk | Mitigation |
|------|-----------|
| Jitsi public server is slow | Have backup: meet.calyx.net or 8x8.vc (Jitsi-based) |
| Remote audio issues | Ask remote participants to use headphones. Mute when not speaking. |
| Can't hear in-person from remote | Use a proper conference mic, not laptop mic |
| Too many people for breakout rooms | Cap at 6-8 per room. Create overflow rooms. |
| Someone can't join Jitsi | Share direct link + password by email. Chrome/Firefox work best. |
| Moderator loses connection | Assign co-moderator who can take over |
