This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Demo

[https://blog-test-task-i9mwiue6r-ruslan-amirovs-projects.vercel.app/posts](https://blog-test-task-i9mwiue6r-ruslan-amirovs-projects.vercel.app/posts/)

## Getting Started

First, run the development server:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)  with your browser to see the result.

## Some technical details

- I used [Strapi](https://github.com/tengri/blog-strapi-backend) as a backend for this project.
- I used Tailwindcss for the styling.
- I decided use fetch api to get data from Strapi because it's very qucik way to get data from backend.
- I prefer to generate types/api methods by swagger/graphql schema, but I am not happy with result of this generation. I don't have to improve it.
- I saw a button to add new comment, but it's impossible to do on Strappi backend in good way.
- API with pagination doesn't work for this case. I decided to not implement this feature.


