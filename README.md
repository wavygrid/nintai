# Nintai & Partners Website

A modern, responsive React website for Nintai & Partners - Expert Branding and Market Access Solutions.

## Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern Layout**: Clean, professional design with elegant typography
- **Netlify Forms Integration**: Contact form with server-side processing
- **Mobile-Optimized Experience**: Single-page scroll layout on mobile devices
- **Performance Optimized**: Fast loading with optimized images and code

## Pages

1. **Home/Landing Page**: Hero section with company overview and call-to-action
2. **About Us**: Company story, mission, and values
3. **Services**: Comprehensive list of business solutions offered
4. **Book Now**: Contact form for consultation requests

## Design Specifications

- **Fonts**:
  - Headings: Playfair Display (elegant serif)
  - Body text: Crimson Text (readable serif)
- **Color Scheme**: Professional neutrals with warm accents
- **Background**: Modern conference room image for visual appeal

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: CSS3 with responsive design
- **Forms**: Netlify Forms for server-side form processing
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

### Netlify Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Netlify will automatically detect and enable form processing

3. **Form Configuration**:
   - Forms are automatically detected by Netlify
   - Form submissions will appear in your Netlify admin panel
   - Configure email notifications in Netlify settings

## Mobile Experience

The website features a responsive design with special mobile optimizations:

- **Desktop**: Traditional multi-page navigation
- **Mobile**: Single-page scroll experience with smooth navigation

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner in interactive watch mode

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
