![Banner](https://cloud-ctv2ma97y-hack-club-bot.vercel.app/0github_header.png)

## 🚀 About

**sdcard.photos** is a landing page for a group of photography enthusiasts who each have their own photo blog. The goal
of
this project is to create a smooth, minimalist webpage that showcases photos uploaded by the entire group, serving as a
central hub for their individual photo blogs.

- The landing page is built using _Next.js_, _TypeScript_, and _TailwindCSS_, smooth animations powered by _Anime.js_.
- The photos and EXIF information displayed on the landing page are fetched from a Postgres database
  which are synced with the groups' individual photo blogs. Database is hosted on Vercel Postgres and Object Storage on
  Cloudflare.
- Each member of the group has their own subdomain to showcase
  their individual photography, with the sdcard.photos landing page acting as a central hub for the collective.
- The landing page has a responsive design, ensuring that it looks great on all devices.
- _There's also a lil' easter egg hidden in the landing page, can you find it? 🤔_

## ⬇️ API for Fetching Photos

From https://sdcard.photos/api/photos

```
{
  "images": [
    {
      "url": "https://joshbucket.sdcard.photos/photo-ohwECiDo59EmaRMZ.jpg",
      "title": "Plains Zebra & Birds",
      "make": "SONY",
      "model": "DSC-RX10M3",
      "taken_at_naive": "2018-08-25 22:04:53"
    },
    {
      "url": "https://joshbucket.sdcard.photos/photo-3NWmlEFXhNSfW8Hm.jpg",
      "title": "Vulture's Vigil: Lions in the Golden Grassland",
      "make": "SONY",
      "model": "DSC-RX10M3",
      "taken_at_naive": "2018-08-22 13:04:03"
    },
    {
      "url": "https://joshbucket.sdcard.photos/photo-5vEcbjvjVg4qaoyV.jpg",
      "title": "Lion Eating",
      "make": "SONY",
      "model": "DSC-RX10M3",
      "taken_at_naive": "2018-08-22 13:21:47"
    },
...
```

## 🪪 License

This project uses a split licensing approach:

- **Software**: The codebase of **sdcard.photos** is licensed under the [BSD 3-Clause License](LICENSE). You are free
  to use, modify, and distribute the software according to the terms of this license.
- **Media**: All photographs, images, logos, and other media content (excluding react-icons assets) hosted on **sdcard.photos** are
  `Copyright (c) 2024 Jayx2u, all rights reserved.` These files require explicit permission for any use, copying,
  modification, or distribution.

*Note: Photos uploaded by members remain their exclusive property and or not covered by the BSD license. All member photos should be treated as copyrighted material. 
Copying, downloading, or redistributing members' photos is prohibited without explicit permission from the photo owner.*

## ❤️ Acknowledgement

- [sambecker/exif-photo-blog](https://github.com/sambecker/exif-photo-blog): An amazing and clean photo blog, reporting
  EXIF camera details (aperture, shutter speed, ISO) for each image.
