# NextEvents

A small event browsing app built with Next.js (Pages Router) and TypeScript. It was built to practice routing and pre-rendering, so the data is a hardcoded list instead of a real backend.

## Features

- Home page with featured events
- Page with all events and a year/month search form
- Event detail page
- Filtered results page (`/events/2021/5`) with validation and empty states

## Routes

| Route | Description | Rendering |
| --- | --- | --- |
| `/` | Featured events | Static (`getStaticProps`) |
| `/events` | All events and search form | Static (`getStaticProps`) |
| `/events/[eventId]` | Single event | Static (`getStaticProps` + `getStaticPaths`) |
| `/events/[...slug]` | Events filtered by year and month | Client-side |

## Tech Stack

- Next.js 13 (Pages Router)
- React 18
- TypeScript
- CSS Modules

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build       # production build
npm run start       # run the production build
npm run typecheck   # tsc --noEmit
```

## Project Structure

```
components/   UI, layout, event list and event detail components
pages/        Routes
public/       Static assets and event images
styles/       Global styles
dummy-data.ts Event type, mock data and helper functions
```

## Notes

- Events live in `dummy-data.ts`, and the helper functions there act as a fake data layer.
- The year filter only accepts values from 2021 to 2030, and the search form offers 2021 and 2022.
- The filtered page still reads the route on the client. Moving it to `getServerSideProps` is a natural next step.
