# Flat

[Live Demo](https://catgrills.github.io/Flat/) of <i>Flat</i>.

About
-------------------------------

<i>Flat</i> is a startpage featuring six different themes.

Startpages are locally hosted, usually, webpage that serves as a homepage for your browser.

Instruction
-------------------------------

<strong>Step 1 : Right click on the <i>.htm</i> file and open it with a browser of your choice</strong>

<strong>Step 2 : Set the startpage as the homepage </strong>

<ol> 
<li> create a github account and fork this repository.</li>
<li> download <a href="https://desktop.github.com/">Github Desktop</a>, go to File/Options and Sign in with your current account.</li>
<li> go to File/Clone repository and select the one you forked (it'll be named <i>Username/Flat</i>). </li>
<li> click the <i>Current branch</i> tab and select <i>gh-pages</i>. Then go to Repository/Show in Explorer to customize the startpage. After modifying what you want, return to Github Desktop window and click the button <i>Commit to gh-pages</i> (you'll have to write a title in Summary before).</li>
<li> finally, click the button <i>Push origin</i>. After 10 minutes or less, you'll be able to go to https://username.github.io/Flat/.</li>
<li> go to your browser setting and set https://username.github.io/Flat/ as your default homepage.</li>
<li> download the add-on <i>New Tab Override</i> (<a href="https://chrome.google.com/webstore/detail/new-tab-override/fjcmlondipcnnpmbcollgifldmajfonf?hl=en-GB">Google Chrome</a> or <a href="https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/">Firefox Mozilla</a>), go to options and select <i>current home page</i></li>
</ol>

<strong>Step 3 : Install the font </strong>

I use several fonts for the startpage.
<ol>
<li> <a href="https://www.fontsquirrel.com/fonts/bebas-neue">Bebas Neue</a></li>
<li> <a href="https://www.fontsquirrel.com/fonts/droid-serif">Droid Serif</a></li>
<li> <a href="https://www.fontsquirrel.com/fonts/roboto">Roboto</a></li>
</ol>

Features
-------------------------------

<span><i>Flat</i> has three main features.</span>
<ol>
<li>You can set 6 (or more) themes with different background and illustrations. To switch between theme, you have to click one of the six colors bar at the bottom.</li>
<li>A random quote generator : each time you refresh the page, a random quote will be displayed.
<li>To activate the search bar, press the CTRL key. What's more, by entering some special keys, such as <i>-y jazz music</i>, you'll be able to search directly on youtube and not on Google. Another exemple with `-w moe`, it'll search 'moe' on wikipedia.</li>
</ol>

Customizing
-------------------------------

### Themes
- if you want to edit the themes available, first of all open the `background` folder and replace the backgrounds by the ones you want (be sure to rename them correctly, ie `blue_background_01.png`, ..., `blue_background_06.png`).
- you'll notice that in each theme the colors used are different. To personalize those colors, open one of the `theme.css` file in a text editor and edit the value of `background` and `text-shadow`. 

### Quotes
Open the `js` folder and edit `quote.js` in a text editor, you'll have to change the sentences in `var quotes`. For instance, for the first quote, 

``` javascript
quote: "I hate mondays.",
name:"Garfield"
```

### Search
- open the `js` folder and edit `search.js` in a text editor, you'll have to modify the following code 
``` javascript
case "-u":
query = query.substr(3);
window.location = "https://userstyles.org/styles/browse?search_terms=" 
break;
```
- first, you have to decide of a website (I will take bato.to) and a special key for this said site : I will take -b, thus you'll have the following code

``` javascript
case "-b":
query = query.substr(3);
window.location = "https://userstyles.org/styles/browse?search_terms=" 
break;
```
- after that, you'll need to replace the value of `window.location`, in the example of batoto you'll have to go to the site and search for something, for example if I'm looking for Hinamatsuri (a pretty gud manga, you should read it asap), the link will be `http://bato.to/search?name=Hinamatsuri&name_cond=c`, you'll have to copy the link before 'Hinamatsuri', namely `http://bato.to/search?name=`, and you'll have the following code 

``` javascript
case "-b":
query = query.substr(3);
window.location = "http://bato.to/search?name=" 
break;
```

Report
-------------------------------

If you find some issues or bug while using this startpage, don't hesitate to report it in the comments.
