# Adventure Saathi — Website

A website for Adventure Saathi (treks & travel across India). Everything — HTML, CSS, and JavaScript — lives in `index.html`. There's nothing else to upload.

## What's inside

- Homepage with hero, About, 6 trek listings (Kedarkantha, Hampta Pass, Roopkund, Valley of Flowers, Chadar, Markha Valley), a season calendar, destinations, testimonials, an Instagram section, and a contact form.
- A WhatsApp button in the header (top right) and a floating WhatsApp bubble.
- The contact form opens WhatsApp with the visitor's details pre-filled — it doesn't send email, since the site has no backend.
- Trek photos load live from Wikimedia Commons (openly licensed, credited on each card). Fonts load live from Google Fonts. Both need an internet connection to show — normal for any live website, nothing to configure.

## Deploying on GitHub Pages

1. Create a GitHub repo (any name, or `yourusername.github.io` for a root domain).
2. Upload `index.html` to the root of the repo — not inside a folder.
3. Go to the repo's **Settings → Pages**, set the source to your main branch and `/root`, save.
4. GitHub gives you a live link, usually `https://yourusername.github.io/repo-name/`.

To use your own domain later (like adventuresaathi.com), add a `CNAME` file with your domain name and point your domain's DNS at GitHub — ask if you want help with this step when you're ready.

## Contact details currently on the site

- WhatsApp / phone: +91 88089 70991
- Email: info@adventuresaathi.com
- Instagram: @adventuresaathi

If any of these change, they appear in a few places in `index.html` — the header WhatsApp button, the floating WhatsApp bubble, the contact section, the footer, and the WhatsApp number inside the form's script tag near the bottom of the file. Easiest to just ask for the update and it'll be applied everywhere at once.

## Things to swap in before a real launch

- Trek and destination photos are currently Wikimedia Commons images — replace with your own photography whenever you have it.
- Prices, dates, and trek stats (duration, altitude, distance) are placeholders — update with your real batch pricing and calendar.
- Testimonials are placeholder quotes — swap in real trekker feedback once you have it.
- The contact form only works if the visitor has WhatsApp on their device or WhatsApp Web on desktop — there's no email fallback yet. Let me know if you'd like one added.

## Pages
- `index.html` — homepage
- Treks: `kedarkantha`, `hampta-pass`, `roopkund`, `valley-of-flowers`, `chadar`, `markha-valley`, `brahmatal`, `pangarchulla`, `sar-pass` (all `.html`)
- Yatra: `jagannath-puri-yatra.html`
- `team.html`
- All trek/yatra pages load `assets/styles.css` and `assets/script.js` — keep the `assets/` folder in the repo.

## Testing copy
Do not add a `CNAME` file to the test repo — it would claim the live domain. (Add it only to the production repo, named exactly `CNAME`, no extension.)

## Placeholders still to replace
- New pages (Brahmatal, Pangarchulla, Sar Pass, Jagannath Puri) use placeholder pictures — swap in real photos.
- Their prices show "Price on request".
