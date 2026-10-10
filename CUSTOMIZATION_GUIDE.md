# Customization Guide (Beginner Friendly)

Almost everything is controlled from ONE file: `src/config/gymConfig.js`.
Open it in any text editor (VS Code, Notepad). Change only the text between the quotes `" "`.

## Step 1: Change gym name
Find `gymName: "IRON FORGE FITNESS"` and change it.

## Step 2: Replace logo
Replace `public/images/gym-logo.png` with the new logo (keep the same filename), or change the `logo` line.

## Step 3: Replace hero image
Replace `public/images/hero-gym.jpg`. Use a wide landscape photo, at least 1920px wide.

## Step 4: Change colors
In `colors`, change `primary` (button and accent color) and `secondary` (background).
Use hex codes such as `#E63946` (red), `#1E63FF` (blue), `#22C55E` (green).

## Step 5: Phone
Change `phone: "+91 98765 43210"`.

## Step 6: WhatsApp
Change `whatsapp` to country code + number, with no `+` or spaces: `"919876543210"`.

## Step 7: Instagram / Facebook
Change `instagram` and `facebook` to the full profile URLs.

## Step 8: Address and map
Change `address`. For `mapEmbedUrl`: open Google Maps, search your gym, click Share > Embed a map, and copy the `src` link.

## Step 9: Programs
Edit the `programs` list. Each item has `title`, `description`, `icon` and `image`.

## Step 10: Trainers
Edit the `trainers` list and put each trainer's photo in `public/images/` (for example `trainer-01.jpg`).

## Step 11: Membership plans
Edit the `membership` list. Set `popular: true` on the plan you want highlighted (only one).

## Step 12: FAQ
Edit the `faqs` list.

## Step 13: Images
Every image lives in `public/images/`. Use the same filename to replace it:
- `gym-logo.png`: navbar, footer
- `hero-gym.jpg`: hero background
- `strength.jpg`, `personal-training.jpg`, `cardio.jpg`, `training.jpg`, `group-training.jpg`: program cards
- `trainer-01.jpg`, `trainer-02.jpg`, `trainer-03.jpg`: trainer photos

If an image is missing, the site shows a dark box instead of a broken image.

## Step 14: Run locally
```bash
npm install
npm run dev
```

## Step 15: Deploy to Vercel
1. Push the project to GitHub.
2. Go to vercel.com, click "Add New Project", and import the repo.
3. Framework preset: Vite. Click Deploy.

## Step 16: Reuse for another gym
Copy the project folder, edit `gymConfig.js`, replace the images in `public/images/`, and deploy again.
