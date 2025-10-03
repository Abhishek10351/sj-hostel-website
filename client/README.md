# SJ Hostel Website

A simple and minimalistic hostel website built with Next.js and Tailwind CSS.

## About

This website provides information about SJ Hostel, including facilities, contact details, and general information for current and prospective residents.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Simple Navigation**: Easy-to-use navigation with smooth scrolling
- **Modern UI**: Clean and minimalistic design using Tailwind CSS
- **Fast Loading**: Built with Next.js for optimal performance

## Sections

1. **Hero Section**: Welcome message and hostel introduction
2. **About**: Information about the hostel and its benefits
3. **Facilities**: Complete list of amenities and services
4. **Contact**: Warden details, address, and visiting hours

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

To customize the website for your hostel:

1. **Update hostel name**: Change "SJ Hostel" throughout the site
2. **Contact details**: Update warden information and contact details in the Contact section
3. **Address**: Add your actual hostel address
4. **Facilities**: Modify the facilities list according to your hostel's amenities
5. **Colors**: Customize the color scheme in the Tailwind CSS classes

## Structure

```
src/
  app/
    page.tsx          # Main homepage with all sections
    layout.tsx        # Root layout with metadata
    globals.css       # Global styles
```

## Built With

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vercel** - Deployment platform

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm run build
```

Then push to GitHub and connect to Vercel for automatic deployments.

---

Made with ❤️ for students
