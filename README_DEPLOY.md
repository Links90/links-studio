# LINKS Studio Astro Deployment

This project is a standalone Astro 5 app intended to be mounted into the existing Webflow site at `/studio`.

## Webflow Cloud Steps

1. Push this repository to GitHub.
2. In Webflow, open the existing site and add a Webflow Cloud app.
3. Connect the GitHub repository.
4. Use these build settings:
   - Framework: Astro
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: `dist`
5. Set the mount path to `/studio`.
6. Deploy and verify:
   - `/studio` loads the LINKS Studio page.
   - Navigation anchors scroll within `/studio`.
   - The LINKS Studio logo links back to `/`.
   - Contact buttons keep the existing `mailto:` behaviour.

The app does not hard-code a production domain. Asset paths are scoped to the `/studio` mount.
