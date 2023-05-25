# _Chapter-2_Igniting_Our_App_

## Q:What is *npm*?
A: *npm* manage the package and depedencies for our project.It provide a central repostory for package that can easily installed in a project. It provide developer to publish and share their own package.

  `npm install -> install package`
  `npm install -g-> install package globally`

## Q:What is *Parcel/Webpack*?Why do we need it?
A: It all are popular module bundler.In React project, there are multiple file with different extension like .js, .jsx, .css, .png etc. These file are not natively supported by the browser,so they need to be transformed into browser-compactible versions.
It help automate this transformation process by bundling these file into a single file and optimizing the code for performance.

## Q:What is *.parcel-cache*
A: The *.parcel-cache* directory is a cache directory used by the Parcel bundler.When running the Parcel bundler,it may generate and store intermediate file in this directory for faster builds and improved perfomance. 

## Q:What is *npx*?
A:*npx* is a command-line tool that come with npm 5.2+.It allows you to run a package without having to install it globally or locally on your machine.
Using *npx* instead of globally installing package also allow to easily try out different versions of the same package without conflicting installations.

## Q:What is difference between *depedencies* vs *devdependencies*?
A: The main difference between the two is the devdependencies are not included in the production build of the application.

## Q:What is *Tree Shaking*?
A: Tree Shaking is a technique used by modern JS bundler to eliminate unused code from a bundle.It help in reducing the size of the bundle making the webapp load faster.

## What is *Hot Module Replacement*?
A: HMR is a feature of modern web development that allows the app to update and refresh specific modules or components without requiring a full page load. 

## Q:List down your favourite 5 superpowers of parcel and describe any 3 of them in your own words?
A: 1. Image-Optimization
                        Parcel support resizing,converting and optimizing image
2. Caching while development
                            It support several optimization related to browser.
3. Compression
              It support compressing bundles using **Gzip** and **Brotli**
4. Compatible with older browser version
5. Tree Shaking

## Q:What should we add in .gitignore?
A: Follwoing file can be added:
- Build files or directories that contain compile code or build artifacts.
- System file or directories.
- Temporary files or directories that are created during dev or testing.
- Configuration file that contain senstive information.

## Q:What is the difference between *package.json* and *packagelock.json*.
A: *package.json* lists the dependencies required by the project and their minimum version requirement, while *packagelock.json* contain the exact version of those dependencies that installed in the project.

## Q:Why should i not modify *package.lock.json*?
A: Modifying the *package.lock.json* file manually can result in the installlation of incorrect or outdated package which create errror.

## Q:What is *node_modules*? Is it good idea to push *node_modules* on git?
A: *node_modules* is a directory that contains all the dependancies(third-parties libraries and module) that are needed to run an app.No, because it contain large number of files and can be very large in size. It can be easily install in your project so not put to in git.

## Q: What is *Distfolder*?
A: Short for distribution typically contain the bundled and optimized output files that are ready to be deployed to a web server.These file genersted by bundler.

## Q:What is *browserlists*?
A: It is a configuration file that allows developers to specify a list of browsers and browser version they want to support.

