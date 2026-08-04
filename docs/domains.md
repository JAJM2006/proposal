# Domain & Cloudflare Management Guide

This guide breaks down how **`spagetitii.com`** is configured, how shortlinks work, and how to safely navigate the **Cloudflare Dashboard** without accidentally incurring charges.

---

## Quick Reference: Active Shortlinks & Subdomains

All shortlinks automatically redirect visitors to your main channels and social profiles. You can use these exact URLs in your stream overlays, Twitch bio, and bot commands (e.g., `!discord`, `!yt`):

| Link / Subdomain | Destination | Primary Use Case |
| --- | --- | --- |
| **`spagetitii.com`** | Twitch Channel | Main bio link & stream overlays |
| **`www.spagetitii.com`** | Website Portal | Live website portal & blog |
| **`discord.spagetitii.com`** | Discord Server | Chat command (`!discord`) |
| **`yt.spagetitii.com`** | YouTube Channel | Chat command (`!yt`) |
| **`ig.spagetitii.com`** | Instagram Profile | Bio link & chat command (`!ig`) |
| **`tt.spagetitii.com`** | TikTok Profile | Bio link & chat command (`!tt`) |

---

### Rules when inside Cloudflare:

1. **Never toggle paid features:** Do not enable paid add-ons like *Argo Smart Routing*, *Cloudflare Registrar upgrades*, *Paid Worker Tiers*, or *Pro/Business plan upgrades*.
2. **Do not change DNS records unless guided:** Deleting or altering existing DNS records will break your website or shortlinks (`!discord`, `!yt`, etc.).
3. **Changing destination URLs:** If your Discord invite or social links ever change, update **only the Target URL** inside Page Rules (do not touch the DNS IP addresses).

---

## How the Infrastructure Works

1. **DNS & Hosting (Cloudflare Pages):**
* The website (`www.spagetitii.com`) is hosted for free using **Cloudflare Pages**.
* Every time a change is committed to the `main` branch on GitHub, Cloudflare automatically builds and deploys the new site in under 5 minutes.


2. **Redirects (Shortlinks):**
* Shortlinks like `discord.spagetitii.com` are handled directly at the Cloudflare edge level using **Page Rules / Redirect Rules**.
* They instantly forward visitors to the final destination without requiring a dedicated server.


3. **E-Mail Routing:**
* Custom domain emails (e.g., `mail@spagetitii.com`) use **Cloudflare Email Routing** to seamlessly forward incoming messages directly to your personal inbox without revealing your private email address.



---

## Emergency Handover Checklist

* [ ] Save your Cloudflare login credentials in a secure password manager.
* [ ] Test all shortlinks in an incognito window (`discord.spagetitii.com`, `yt.spagetitii.com`, etc.).
* [ ] Contact Joshua (**JAJM2006**) if any link breaks or if you need to set up a brand-new sub-domain!
