# Pelican

Pelican is a library of components for prototyping designs in the browser. It has a modularized Sass implementation of Skeleton with tiny additional CSS modules.

All modules share Sass variables and are compiled into an 56kb unminified CSS file called pelican.css .

Pelican uses Gulp to compile Sass and inject changes live into the browser.

## Installation/Usage:

Run Pelican, do these:

**Step 1**: Clone this entire repo
```bash
$ git clone https://github.com/whaleen/pelican.git bs-recipes
```

**Step 2**: Move into the directory containing Pelican
```bash
$ cd pelican
```

**Step 3**: Install dependencies
```bash
$ npm install
```

**Step 4**: Run Pelican
```bash
$ npm start
```

### Use cases:

1. Designing with Sass in the browser.
2. Creating a Responsive Design
3. Using Gulp
4. All of the above

```
/scss
    /pelican.scss   # imports base scss and module css files
    /base
         /_base-styles
         /_functions.scss
         /_normalize.scss
         /_variables.scss   #  variables affecting all scss
    /modules
         /
```

People who understand how to work with Skeleton will understand how to work inside of Pelican. Though the original Skeleton CSS file has been separated into Sass modules, the CSS output remains the same. In other words your class names will still work if you run your Skeleton site on Pelican. Other CSS modules have been added that were previously not a part of Skeleton.
