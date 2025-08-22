<!-- # Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat). -->


# Astro NFT Landing Page
Proyek ini adalah landing page bertema NFT yang dibuat menggunakan Astro dengan struktur komponen modular dan section yang dapat diakses melalui navigasi di navbar.

# Fitur
- **Desain Responsif** – Tampilan optimal di desktop, tablet, dan mobile.
- **Navigasi Smooth Scroll** – Klik menu di navbar langsung menuju ke section yang dituju.
- **Modular Components** – Setiap section dipisahkan dalam file .astro untuk memudahkan pengelolaan.
- **Optimasi Performa** – Menggunakan kemampuan Astro untuk meminimalkan beban render.
- **Asset Lokal** – Gambar dan aset disimpan di folder /public.

# Teknologi yang Digunakan
- **Astro – Static** site generator modern
- **Tailwind CSS** – Styling cepat dan konsisten
- **TypeScript** – Menjaga kode lebih aman
- **HTML5 & CSS3**

# Struktur Folder
```
public/                # Asset publik (gambar, icon, dll)
 └─ images/
     ├─ nft/
     ├─ artists/
     ├─ logos/
     └─ pattern/

src/
 ├─ components/        # Komponen kecil & reusable
 │   ├─ cards/         # Komponen kartu
 │   │   ├─ NFTCard.astro
 │   │   ├─ SellerCard.astro
 │   │   └─ ArtistCardNFT.astro
 │   ├─ ui/            # Komponen UI umum
 │   │   ├─ Button.astro
 │   │   ├─ Navbar.astro
 │   │   └─ Footer.astro
 │   └─ animation/     # Komponen animasi khusus
 │       ├─ TopSellerAnimation.tsx
 │       └─ ScrollHorizontal.ts

 ├─ sections/          # Bagian halaman (Hero, Explore, News, dll)
 │   ├─ HeroSection.astro
 │   ├─ ExploreSection.astro
 │   ├─ NewsSection.astro
 │   ├─ TopSellerSection.astro
 │   └─ ArtistSection.astro

 ├─ layouts/           # Template layout
 │   └─ MainLayout.astro

 ├─ data/              # Data dummy / static JSON
 │   ├─ nftData.ts
 │   ├─ sellerData.ts
 │   └─ categories.ts

 ├─ pages/             # Halaman utama
 │   ├─ index.astro
 │   ├─ about.astro
 │   └─ contact.astro

 ├─ styles/            # CSS / Tailwind config
 │   ├─ global.css
 │   └─ variables.css

astro.config.mjs
package-lock.json
package.json
postcss.config.js
README.md
tailwind.config.js
tsconfig.json
```

# Cara Menjalankan
**1. Clone Repository**
git clone https://github.com/username/astro-nft-landing.git
cd astro-nft-landing

**2. Install Dependencies**
npm install

**3. Jalankan Development Server**
npm run dev

**4. Build untuk Production**
npm run build

**5. Install Dependencies**
npm run preview
