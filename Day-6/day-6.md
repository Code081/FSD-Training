# learning about react
- first name f-bolt then faxjs, then react
- first deploted in 2011, 2013 first official release by meta(facebook) from jordan walker(ver 0.3.0)
- the version contains 3 numbers are x.y.z  (z (changes)= patches, y(changes) = minor, x(changes) = major)
- react is not a framework (no addons) it is a libraby(add ons available)
- Changes are reflected very quickly therefore it is called react(current ver 18.3.1) as of nov,12 ,2024
## Working of react
- React works on a single page application(SPA). that means there is only one `index.html` and everything is loaded there . Therefore no need to make requests after clicking a link(rest of the layout is not refreshed only the requested area), {example timesofindia vs react.dev }
- for Mobile application we use react native
- for web we need react and react DOM.
- There are two ways to make react project CDN and Bundler (CRA(create react app)- webpack, Vite - Esbuild, parcle - parcle)
- CDN (content delivery network) is used when we don't want to install any files locally so we can access required files from CDNs
Reconsilation process is when we use algo diffing algorithm to make changes in the virtual dom (orignal DOM - > Virtual DOM-> Changes made in Virtual DOM).

## Using Bable
- Writing HTML in Javascript