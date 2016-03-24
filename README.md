
##Prevent opener
This small example to prevent the opener hack.

#### Opener hack ?
i tell that it's an hack, because this method is often uses for *to bypass adBlockers*, and push many /$%=+ things on your device.
They replace target link by the same url and add opener method for load in previous page a new page contain may pubs and sure, malware, virus, and all other malicious scripts !!

### What is an opener ?
You should find all informations necessary for understand this in follow the next link.
https://developer.mozilla.org/en/docs/Web/API/Window/opener

### What this script made ?
Just add an rel attribute on link tag who prevent if the destination page contain an configured window.opener object.

Add this parameter on links contain a target attribute
>  rel=noopener

Render your link like that
> &lt;a href="#onelink" rel="noopener" target="_blank"> My link &lt;/a>

#### TODO
Transform this naive example for all usecase, js modules, browser plugin ...

## Usage
just a simple static server with simple example for understand this issue

### Start
This small script use a static server, just enter this command for start it
> node app

if you obtain an error with previous command, please install dependencies.
> npm install
