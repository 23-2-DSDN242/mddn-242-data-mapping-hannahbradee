[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/fhdOjw6q)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12028665&assignment_repo_type=AssignmentRepo)
## Creative Coding 2: Custom Pixel

The images above are photos of my cat Bertie, algorithmically processed with a lightly modified version of the [p5.js Pointillism example](https://p5js.org/examples/image-pointillism.html). The masks for each photo highlight various objects.

Title: Bertie in Cosplay

For my project, I wanted to use my cat to portray things I'm fond of. these included a singer from a band I'm really enjoying listening too at the moment. The main character from the Wednesday series that I have watched a few times.
Queen Elizabeth, as I love my cats personality, and she's definitely the queen of the house. Bertie in a Barbie themed box. I really enjoyed the movie (I watched it 3 times in the cinema). these were the only images that fit my theme.
The remainder images were to test the AI mask generator. I felt the images that I processed, trained the AI quite well. it worked best with the images I had lassoed the outline around Bertie. when I changed the I input pictures to have masks of a single shape around Bertie, AI could only generate a mask with her body outline, rather than Bertie inside of a circle . Output_6 for example, was meant to have a circle as a mask but AI could only detect some of Bertie's body, not all of it. I think there's an error in the AI mask which is causing it to get distorted in places it shouldn't. I thought it would be good to include an AI fail in my assignment.

The style I wanted to try to do for my images was a slip scan style. I was inspired by an old snapchat filter. as I researched the style more, I found it is an effect that has been around for years and was originally created with a film camera.
The main challenge for getting this style to work in code, was getting the stretched/dragged look. I did manage to find the right numbers to use that stretched the eyes in a way that i liked. I wasn’t keen on only having it wavy. so I'm glad I stuck with it.
the next idea I had was to make a mask for the whole picture. I wanted to create a shape border (using either triangles, ellipses or rectangles) with a splatter design. I wanted the source image to only show up within the shapes and splatter. I had originally made masks with different opacity. this didn’t work. I also felt the roundedness didn’t suit some of the sharp edges. So I changed it to solid white and repeated lines. I am much happier with this outcome.

I will add, I did need a lot of help from Tom to help bring my vision to fruition. I found lots of tutorials to make slip scan code, however these all needed video input. with creating my texture/border mask, I tried following tutorials that added an extra layer to the canvas and coding a mask from scratch using erase() and noErase(). This however wouldn’t work in the code. I do want to try these in my own time, as I enjoyed learning about both techniques.


I have taken all photos of Bertie myself. below is where I have sourced the images that she is photoshopped into from. 

image1: Bertie photoshopped into Glen Danzig from the band The Misfits
image source: https://facebook.com/Danzig/
mask: my own
texture mask: my own

image2: Bertie photoshopped into Wednesday Addams.
image source: https://hero.fandom.com/wiki/Wednesday_Addams
mask: my own
texture mask: my own

image3: Bertie photoshopped into Queen Elizabeth.
image source: https://www.themoviedb.org/tv/13291-elizabeth-i
mask: my own
texture mask: my own

image4: Bertie photoshopped into a barbie themed box.
image source: from a Persian cat Facebook group.
mask: AI generated
texture mask: my own

image5: Bertie as a kitten, photoshopped/cut & pasted in with other kittens of her breed to see if AI could recognise her as a kitten amongst other kittens.
image source: https://www.peakpx.com/en/hd-wallpaper-desktop-gfprg
mask: AI generated
texture mask: my own

image6: Bertie photoshopped/cut & pasted in with a crowd of other cats to see if AI could recognise her amongst lots of different cats.
image source: https://imgur.com/gallery/pCeA37G
mask: AI generated
texture mask: my own

image7: Bertie photoshopped/cut & pasted in with a crowd of other cats to see if AI could recognise her amongst lots of different cats.
image source: https://www.theatlantic.com/photo/2015/03/a-visit-to-aoshima-a-cat-island-in-japan/386647/
mask: AI generated
texture mask: my own


If I had more time for this assignment, I think an area I would focus on would be how to implement a grid/mesh that would warp a picture by moving different points. Just like using the grid warping tool in photoshop. 
![image](https://github.com/23-2-DSDN242/mddn-242-data-mapping-hannahbradee/assets/135017357/09b70d8b-2024-4af3-8c9a-42c58c0c7832)
