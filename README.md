```
    ███        ▄████████   ▄▄▄▄███▄▄▄▄      ▄███████▄  ▄█          ▄████████     ███        ▄████████ 
▀█████████▄   ███    ███ ▄██▀▀▀███▀▀▀██▄   ███    ███ ███         ███    ███ ▀█████████▄   ███    ███ 
   ▀███▀▀██   ███    █▀  ███   ███   ███   ███    ███ ███         ███    ███    ▀███▀▀██   ███    █▀  
    ███   ▀  ▄███▄▄▄     ███   ███   ███   ███    ███ ███         ███    ███     ███   ▀  ▄███▄▄▄     
    ███     ▀▀███▀▀▀     ███   ███   ███ ▀█████████▀  ███       ▀███████████     ███     ▀▀███▀▀▀     
    ███       ███    █▄  ███   ███   ███   ███        ███         ███    ███     ███       ███    █▄  
    ███       ███    ███ ███   ███   ███   ███        ███▌    ▄   ███    ███     ███       ███    ███ 
   ▄████▀     ██████████  ▀█   ███   █▀   ▄████▀      █████▄▄██   ███    █▀     ▄████▀     ██████████ 
                                                      ▀                                               
```

Source for ASCII-fonts: https://www.coolgenerator.com/ascii-text-generator
(Font: Delta Corps Priest 1


# What is this?

This is template for TypeScript project in VS Code with linting.

# What's the motivation?

To have an easier start for my projects.

# Installation
Place keys and environment variable values inside a .env file in the project's root folder.
```
NAME=value
```

Just use it as template.
```
npm install
```


# Update all packages to the latest version

1. Ensure to have 'NPM Check Updates' installed (you might need root priviliges).
```
npm install -g npm-check-updates
```

2. Use `ncu` to check for available updates in the current project.

3. Run `ncu -u` to update to all latest versions in the package file.

4. Run `npm install` to actually update to the latest versions.




# How to use
```
    The code you would write
```

# Release History

## v0.4.1
- Template restrictions removed in linting.
## v0.4.0
- NCU guide added to readme.
- Upgraded to latest versions of TypeScript (4.5.2), Jest (27.4.3) and the rest.

## v0.3.0
- Upgrade of TypeScript to 4.3

## v0.2.0
- Support for dotenv

## v0.1.0
- Initial commit.
