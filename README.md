# cs260startup

## Elevator Pitch

Hi, my name is Taft Lakey and today I'm going to introduce you to my start up, FishPics. This is a new state of the art website where you and your friends can upload the fish you catch as well as find new fishing holes with tips to catch fish there from other fishers! This will be a website for fishers maintained by other fishers who just happen to love web development. You won't have to worry about an outdated web app because this is our passion project!

## Key Features

- Upload your fishing photos
- Geo tracking which will update information about waters
- Option to show your gear used, which can inform other fishers about what you used
- Social media aspect which will involve sharing your fish with friends

## Technology

HTML - Provide the basic structure for the web pages. Multiple HTML pages, one for each feature.

CSS - Designing the aesthetic of the web page. Making sure that it works for varying devices. Matching the color scheme to the varying styles of photos.

JavaScript - Allows for interaction in the website. Logging in

React - React will be used to develop an interactive user interface for the website. This will help create a dynamic and responsive experience.

Web service - Service endpoints for:
    - retrieving photos and information about fish/fishing gear
    - retrieving comments
    - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation

Authentication: The authentication will be used to store information for our website's users. This will be neccesary to log into the website and communicate with other users. We will use an authentication service.

Database data: This will store our users data. This can be anything from the post they have made, liked and who their friends are. People can only post on the website if they have account information saved in our database

WebSocket data: This will be neccesary for a chat between users and updating users on new fish being caught in an area.

## Sketches

![This is an image of the website sketch that I made](fishwebsite(1).png)

## HTML Startup

### 1

At first, I skipped deploying the Simon HTML, not intentionally but I did it eventually. I got help from a TA changing my caddy file because I had changed the syntax improperly on a previous assignment.

I used the HTML example files to learn more of the syntax and structure of HTML. Then I would use VS codes dev tool to see how the HTML files would appear

### 2

For this step, I drew a lot of inspiration from the Simon HTML to add certain elements into my HTML files. Like I said previosuly I learned a good deal of the HTML structure from these files.

I created 5 html files that represent different sections of my website. These included links between eachother.

### 3

This step required me to think about the future things that I want my application to have. I had to go over some of my notes for what I had wanted the app to have and then think about how to implement them.

### 4

At first, I didn't have great representation of my future technology but I revised my html files and changed the file to show where I was planning on drawing future technologies.

I added in a spot to record the location of the pictures, which will be an API call.

I have a log in page which will require a data base to function, as well as posts which are linked to an account will require a data base.

In the feed section there will be comments and likes for the post which represent WebSocket data.

The create post file will add the information given by the user and store it in the database to create and store a post.

### 5

I just made sure to include an index.html file that would function as my log in page.

### 6, 7 & 8

I'm not very good at using GitHub consistently but I'm making it a goal to commit and push my code to GitHub as I finish mini projects.

I also need to be better at changing my notes.md file.

After I finished my project and made sure that it was well represented on my website, I pushed my final work to my GitHub.

### 9 & 10

At first I was struggling to deploy my HTML files to my server because of my caddy file. I called a TA and received help in fixing my error with my syntax. Then I was able to deploy my HTML files to my server. 