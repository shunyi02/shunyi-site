# Ng Shun Yi · Personal site

Static personal website: experience, delivery approach, projects, products and contact.
No build step, no dependencies. Plain HTML, CSS and JavaScript.

## Structure

```
index.html          Main page
products.html       Product details (Shipped · In progress · Coming soon)
404.html            Not-found page
assets/styles.css   Shared styles (light and dark theme)
assets/favicon.svg  Site icon
vercel.json         Vercel settings (clean URLs, asset caching)
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Other**. Leave the build command and output directory empty.
4. Deploy. Add a custom domain later under **Settings → Domains**.

## Notes

- The hero background uses the [Shaders](https://shaders.com) library (WebGPU), loaded from jsDelivr.
  Browsers without WebGPU show a static gradient instead.
- Animations respect the visitor's "reduce motion" setting.
- To add a headshot, replace the `SY` monogram (`<span class="mark">`) with an `<img>`.
