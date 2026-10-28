# Deliverable_Design-System-Specimen

The purpose of this site is to provide resources for new residents of Butte County, CA. The website acts as a public-information welcome guide to help ease the process in connecting to the community. The website provides information on great local eats, hot spots to explore, and places to get important information needed by locals. 

Website URL:   
    https://enappen.github.io/Deliverable_Design-System-Specimen/index 

Fonts:
    The custom web font Lato is the primary typeface for its readability. Lato is designed by Lukasz Dziedzic and licensed under the Open Font License. 
    Licensing Information: https://openfontlicense.org/ 

    Fallback fonts include Arial and sans-serif to maintain the same style. To prevent any additional line wrapping from a fallback font being used, a font size adjust property was assigned 0.507 (the x-height of Lato). 

Foundation and Reset:
    I chose to reset the global the box sizing property to border-box to have the container of elements include the padding so it is included in the width values provided. To keep links on theme, I set color to inherit for anchored links and hovering. The title was redundant of heading 1 and unnecessary to be displayed, so display was reset to none. To keep navigation on theme after being linked to section ID's, background and text color was set to inherit and the list-style was set to none to remove the bullet points.

Token Inventory:
    Design tokens were made to cover font families, text sizing, text color, text weight, padding, margin, and borders. The naming for each item starts with its purpose: 
    -   font is for the typeface (starting from preferred to fallbacks); 
    -   size is for font size followed by the targets text type (such as body for 
        body text, h1 for the h1 element and so on); 
    -   color is for text color followed by the place it would occur (dark meaning  
        the darkest color on the page, contrast is the secondary color used on the site to create contrast and break up the page to support the layout, accent is the neutral color that supports and accents the theme, nav is for the navigation background,  indicator is the color of the visual focus indicator), alt dark and alt accent are the different colors for the alt theme that act like the aforementioned named tokens; 
    -   action weight is for elements that prompt action and apply bold;
    -   action outline is for consistent visual focus indicators throughout the 
        document (including the form);
    -   padding supplies the padding (with card and card-row named after the    
        classes they impact and small for small cushions of padding throughout the page to maintain consistent spacing);
    -   margin for the card is needed to define the card row better;
    -   and border if for consistent borders on the elements form, navigation, and card class. 
    These tokens were included because they all effect major layout and color theme elements. Defining them early creates consistency, reduces repetition, and reduces potential for error.

Alternative Theme:
    At the bottom of the page in the footer you will find the "Dark Mode" button. This acts as a theme switcher. The JavaScript file toggles activates the dark mode class in the CSS file, which contains swapped dark and light values on the design tokens controlling background and text colors. This works because the button on the html page has an onClick attribute of the function in the JavaScript file. The function themeSwitch also makes the buttons appearance change depending on if dark mode is activated or not. This color change makes it easier to find the button and makes contextual sense as you would be switching to light mode if dark mode is already present. This also doesn't duplicate any component rules because no new color needs to be reassigned a new value for each element. The design tokens that are applied are simply overwritten. This same process was used to have a consistent alternative theme for the watch duty card. As being fire prepared is an urgent matter, having an alternative theme call extra attention to it, while staying on theme with its contents, is a great way to break up visuals. This alternative theme also stays consistent in dark mode and light mode.     

Accessibility and Contrast Decisions:
    Alt text was provided for each photo describing the image and context for screen readers or if the image does not load. The site is navigable by keyboard including the form at the bottom. Visual focus indicators were included with a high contrasting color in both value and hue. Settings were updated for the form to have a consistent indicator throughout the entire page. The maintain this consistency, I added a property to the hover selector so that the hovering over links and inputs would have the same effect as the visual focus indicator when navigating by keyboard. A small offset for the outline was included to make reading the text easier when outlined. External links remain underlined to indicate to the user that the text contains a link. The site maintains a mobile-first design style to accommodate small and large screens without overflow. Navy blue was used to mark the background of the header and footer to make identifying website components easier with a high contrasting color to the soft white background. Additionally, navy blue is commonly associated with security and safety--a feeling most people seek when moving to a new area. Soft white was used to reduce some of the blue light emitted and eye fatigue that comes from looking at a true white. 

Testing Evidence:
    Testing evidence is located here: /Test-Record/Test-Record.doc
    In the test record there are screenshots of each test accompanied by a detailed explanation of the condition, what was expected, the observed result, and 3 revisions made because of the testing.

AI Disclosure:
No generative AI was used.
