# Big Fish Example

## Build Process
This implementation utilises Gulp and Node for its build process.

1. HTML templates are included by gulp. The resulting HTML is linted and minified.
2. Raw images from Photoshop are compressed and output.
3. Ruby SASS is used to produce the CSS.
4. Browserify bundles the React Slider component and all its dependencies to a single JS file.

## Dependencies

### JavaScript
All dependecies are managed through NPM. See package.json.

### SASS
Grid System: Jeet - http://jeet.gs/
Normalise: https://www.npmjs.com/package/normalize-scss

### CSS
Lato - Google Webfonts
Icons - Font Awesome

## Known Issues
- React component needs amending. External dependency causes console warning.
