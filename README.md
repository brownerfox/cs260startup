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

## CSS Startup

### 1

The first expectation of this assignment wasn't something that I could do. I'm going to give a better explanation of this when addressing parts 6, 7 & 8. For now, I will just say that I was unable to push the SimonCSS to my production environment due to several technical errors that I ahve been facing with EC2 and Route 53. However, I was able to draw a lot of inspiration from the SimonCSS files which helped me finish my assignment.

### 2

I designed the CSS for my startup application to ensure a visually appealing interface. I used a variety of new features that I learned. The main one being the hover attribute, which enables me to make an interactive environment for my user as they visit my website. I also got to learn how to better implement flex in CSS so that the users can experience a dynamic environment that will match up to their needs.

### 3

I tried to be better about making periodic commits as I was working through my project. If I'm being honest, this week has had me so swamped that I've struggled to work on my project throughout the week, unless it was one of the many futile attempts that I made in starting up my instance again with a connected domain. Because of this, all of my commits have been made in the last 3 hours as I've tried to cram this part of the project as fast as possible.

### 4

I updated my notes.md with all of the little information and tools that I've found.

### 5

I have git pushed my final CSS startup additions but I think that I'm going to go and take screenshots of all my html pages function on my live server version, hoping that it might appease you as you are grading my assignment.

### 6, 7 & 8

So here is the fun part of my last 2 weeks. I uploaded my html assignment. It went into the gradebook as a 0 which was quite alarming at first. I was pleased to see that it was because I had forgotten to update my README.md file, AKA, what I'm doing right now for my HTML Startup assignment. I then went to reupload my assignment and it was put in once again as a 0. This time the message was far less appealing. I was told that my website was no longer running. I went to check and it was true. I restarted my instance and reached out to a TA, all to no avail. My website had stopped funcitoning. I found that I had not yet verified my email so they shut down my down. I reverified my email and then recreated the instance inorder to get my production environment running. It still would not let me use my domain that had worked only a week before. I then bought a new domain, talked to another TA and was incapable of getting my production environment up and running again. I reached out to Professor Venture over email and discord with no response. So after all of this experience, I decided to do my CSS Startup regardless of my current incapabilities of successfully running my production environment. Thanks for listening to my TEDtalk.

## React Startup

### 1

I started working right away on uploading my Simon. It was a little difficult setting up npm and I also didn't know initially that I had to use powershell to make it work. I got it working eventually. Afterwards I started looking through the jsx files and such to get a good idea of how react works. I used the simon startup for a ton of starter code for my project.

### 2

This was honestly such a struggle for me. The hardest part was restructuring my files so that they made sense in the react format. I had to figure out about what type of files react uses. It was hard because I didn't want to do the bare minimum but it was still very hard for me.

### 3, 4, 5, 6

I struggled to remember to upload to github because I was really struggling to get a good grasp on how to use react. This led me to be kind of confused as I would switch back and forth between the simon files and the startup files. I just tried to make little changes and then remember to commit.

### 7, 8, 9

I had to once again remember that I had to use powershell to actually upload my files to my server. I was able to connect to my website and it looked good so I decided it was time to submit it.

## Service Startup

### 1

So I initially started working on getting simon up and running. This was a pretty easy step, this one gave me little to no issues, especially because I've started to learn a lot more about Node.js. The simon service had a lot of really good tools to show me how a service was supposed to be built. I learned a lot by looking at how the index.js was built in the service module. The examples of the api endpoints were really useful, especially considering how similar the majority of mine are to the simon endpoints. One of the biggest things that I'm looking back on now, after getting my website entirely running was the importance of learning Node and vite through Simon. This was a huge help

### 2

This step took a lot of learning and time. One of the biggest issues that I was facing seemed to be that the port initially given to me wasnt working while I was testing it. I'm not certain if this was an issue that I was facing specifically or if this was more widespread but it wasn't working super well. Over time, I started to get my endpoints to work. The one issue that I haven't been able to entirely solve as of yet is my create a post endpoint. I'm not certain if it needs to be able to save the post yet, so I decided that I did enough and I'll talk to a TA for help setting it up! Scratch what I said preiously, I got the post to work now. The only thing missing is my photos being used, even though they are showing up when I run the website locally.