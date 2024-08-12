This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.










# Personal Blog with Next.js and Sanity CMS

## Project Overview

This project is a personal blog website that utilizes modern web technologies for dynamic content display and management. Users can browse blog posts, view detailed posts, and enjoy a responsive, user-friendly interface.

## Key Features

- Dynamic blog post listing with pagination
- Detailed blog post view
- Author information display
- Category-based filtering
- Responsive design
- Optimized image loading

## Technology Stack

- **Frontend:**
  - [Next.js](https://nextjs.org/): React framework for server-side rendering and static site generation
  - [React](https://reactjs.org/): JavaScript library for building user interfaces
  - [TypeScript](https://www.typescriptlang.org/): Typed JavaScript for better code quality and developer experience

- **Backend & CMS:**
  - [Sanity.io](https://www.sanity.io/): Headless CMS for content management
  
- **Styling:**
  - [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for rapid and flexible design

- **Image Handling:**
  - [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization): Automatic image optimization and lazy loading

- **Icons:**
  - [Heroicons](https://heroicons.com/): SVG icon set

## Installation and Running

1. Clone the repo:
git clone https://github.com/your-username/joobadam/personal_blog
2. Navigate to the project directory:
cd your-repo-name
3. Install dependencies:
npm install
4. Set up environment variables:
Create a `.env.local` file in the root directory and add your Sanity project ID:
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
5. Start the development server:
npm run dev
6. Open in your browser: `http://localhost:3000`

## Sanity Studio

The Sanity Studio is accessible at the `/studio` route. Here you can manage the blog content.

## Contributing

If you'd like to contribute to the project, please open a pull request or report an issue in the Issues section.

## License

This project is under the [MIT license](https://opensource.org/licenses/MIT).