# Deployment & Setup Guide

This guide will help you get AquaGenius up and running locally and in a production environment.

## 1. Local Development Setup

### Prerequisites
- **Node.js**: v20 or higher (required for Next.js 15)
- **npm**: v10 or higher

### Step-by-Step Execution
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd AWebapp
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 2. Hosting Options (Demo & Production)

### Option A: Vercel (Recommended)
Vercel is the creator of Next.js and offers the most seamless "push-to-deploy" experience.
- **Cost**: Free for Hobby/Personal projects.
- **Ease of Use**: 10/10.
- **Setup**: Just connect your GitHub repo and click **Deploy**.

### Option B: Netlify
Netlify is a strong alternative that supports Next.js fully.
- **Cost**: Free Starter plan (300 mins/build).
- **Ease of Use**: 9/10.
- **Setup**: 
    1. Sign in to [Netlify](https://www.netlify.com/).
    2. Select "Import from git" and choose your repo.
    3. Ensure the build command is `npm run build` and directory is `.next`.
    4. Click **Deploy**.

### Option C: GitHub Pages (Static Export)
Perfect for hosting 100% free with no build time limits, but requires a small configuration change.
- **Cost**: Completely Free.
- **Ease of Use**: 7/10.
- **Setup**:
    1. **Modify `next.config.ts`**: Add `output: 'export'` to your configuration.
    2. **Build**: Run `npm run build`. This generates an `out` folder.
    3. **Deploy**: Push the contents of the `out` folder to a `gh-pages` branch or configure GitHub Actions to deploy from the root.
    > [!NOTE]
    > Static exports do not support Image Optimization (via `next/image`) by default unless using an external provider.

## 3. Free Demo Strategy Comparison

| Provider | Best For | SSL Config | Setup Speed |
| :--- | :--- | :--- | :--- |
| **Vercel** | Everything Next.js | Automatic | Sub-1 minute |
| **Netlify** | Generic Web Projects | Automatic | 2-3 minutes |
| **GitHub Pages** | Static documentation | via GitHub | Manual Sync |

## 4. Important Notes for Production

### Environment Variables
While the current app is largely static, you may need to configure the following in your hosting provider's dashboard:

| Variable | Description | Where to find it |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | The phone number for the WhatsApp bridge. | `src/components/common/WhatsAppButton` |
| `NEXT_PUBLIC_SITE_URL` | Used for SEO and metadata generation. | `src/app/layout.tsx` |

### What to change while hosting:
- **SEO Metadata**: Update the `metadata` object in `src/app/layout.tsx` to match your specific domain and brand.
- **WhatsApp Bridge**: Ensure the contact number in your configuration matches your sales team's line.
- **Analytics**: If adding Google Analytics or Vercel Insights, follow the platform-specific integration guides.

## 4. Building for Production
To test a production build locally:
```bash
npm run build
npm run start
```
This will generate an optimized bundle and serve it, allowing you to verify performance before deployment.
