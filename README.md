# Design System Starter

This is a starter build for a multi-branded design system.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Design Tokens

Design tokens are all the values needed to construct and maintain a design system.

These tokens cover areas like:

- Colours
- Typography
- Components
- Spacing
- Animation

Design tokens are used in place of hard-coded values in order to ensure flexibility and consistency.

For more information about design tokens and how they are generated visit https://amzn.github.io/style-dictionary/#/tokens.

### Build Setup

All tokens are defined within the `tokens` folder. These are automatically compiled into css variables once you run the build.

Tokens can be defined into 3 categories:

- Global (used across all brand)
- Components
- Brands (token overrides)

```
tokens/
  - brand/
    - brand-one
    - brand-two
    - ...
  - components
    - header
    - footer
    - container
    - ...
  - global
    - colors
    - typography
    - ...
```

All tokens are defined within JSON objects. Brand specific objects are essentially the override values for the global and components specific tokens.

##### Example brand object

```json
{
  "color": {
    "primary": { "value": "#000" }
  },
  "header": {
    "background-color": { "value": "{color.primary}" }
  },
  "footer": {
    "background-color": { "value": "{color.primary}" }
  }
}
```

## Tailwind CSS

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

For more information visit https://tailwindcss.com/
