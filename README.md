# Multistep form

## Demo

Register flow is on the `/register` route.

https://multistep-form.arm1.nemanjamitic.com/register

## Screenshots

https://github.com/user-attachments/assets/0c5ceb52-017f-4e8c-a0af-22f5230d2f0b

## Installation and running

```bash
# install dependencies
yarn install

# run in dev mode, visit http://localhost:3000/register
yarn dev

# build
yarn build

# run in prod mode
yarn start

```

## Notes

- I built it using server actions and the latest Next.js, Shadcn, Tailwind, React Hook Form, Zod.
- The form performs a real request to the server action, so it requires a Node.js runtime. That is why I used Docker and Github Actions to deploy the live demo.
- The server action is connected to the form via the `action` attribute to allow submission with JavaScript disabled. I used React state for navigating form steps, which of course requires JavaScript. If JavaScript is a requirement, I can implement separate routes and forms for each page. Each form would call its own server action, and the data would need to be handled and merged on the server.
- The server action does nothing except log the status and forward the data to the client, which displays it in a toast popup.
- This project has been updated and reused as a starter project: [shadcn-ui/next-template](https://github.com/shadcn-ui/next-template) (and mirror: [shadcn-ui/ui/blob/main/templates/next-template](https://github.com/shadcn-ui/ui/blob/main/templates/next-template))
- In few places I used on-off values for colors, otherwise I would need to restructure entire semantic colors palette (all components are dependent on the palette) which would require much more work.
- The folder/file structure and naming can be improved and refactored once I have more context about the rest of the app.
- The widths on large screens are approximate, as I used screenshot mockups, they can be further adjusted.
- Form is validated `onBlur`, can be modified to `onChange` or `onSubmit`.

#### Tailwind breakpoints

- mobile - 0 - sm (`min-w-80` = 320px)
- tablet - sm - lg
- desktop - lg - max (`max-w-screen-2xl` = 1536px)

For the main content width, it uses the default Tailwind container class, which sets the `max-width` to the `min-width` of the breakpoint. This is a reasonable default, but it can be adjusted to match different preferences if needed.
