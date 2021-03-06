# Pose-world

## Motivation: In search of the possibilities of clubs in the remote age

Ever since Covid, it's become difficult to hold events at clubs due to the concern of the virus spreading.
On the other hand, there are no concerns with holding events online. However, online music events to be one way from artist to the crowd, with the crowd often solely listening nd o. This is in contrast to real events where the crowd would dance, enjoy music in their own taste, and interact with each other. With the lack of interaction between the crowds, the online music events lack the fun that clubs had so I wanted to think about the potentials of internet virtual musical events by creating a virtual club platform.

## Extracting Dance with Pose estimation

One thing that I would expect in a virtual music events is for the crowd to be able to dance. In other words, the crowd should be able to share their pose information and view each others pose information in real time.
A very simple solution is to live stream the webcam feeds of the crowds. However, this comes with the downside of the webcam feed including unaesthetic elements such as messy room in the background, or poor lighting.
A webcam feed has too much information and similar to how clubs in real life dim the lights, or apply strobe effect to obfuscate people for aesthetic purpose there should be some obfuscation of the webcam feed.
A solution to this is to use VR but VR devices are not in the hands of many, limiting those who would like to join. Hence a more available solution would be to use pose estimation on browser which is far more available than VR devices.

[Work in Progress Pose to 3D Model Demo](https://www.cactice.com/pose-world/)

## Applying audio and visual effects

With the method mentioned above it's possible to mimic the essence of a real club, however this would only be a mere imitation of real clubs and would be nowhere as interesting.

In order to make it more interesting than simply displaying dancing 3d models, I propose the concept of effect items. These effect items come in the form of a 3d object that we see in our normal lives and would apply visual and auditory effects to each user when the user interacts with it.
For example there might be an umbrella object which by opening it up applies a low pass filter both sonically and visually(blurring).
Another example would be a mirror which delays the input; a single mirror would give a delay effect and two mirrors could be faced together to achieve a reverb or looper like effect. Visually this might look like the music video of '[Earth, Wind & Fire - September](https://www.youtube.com/watch?v=Gs069dndIYk)'.

These effect items should be applied by users to themselves or others nearby. This allows for a form of nonverbal communication that is unseen in traditional clubs and adds to the experience.

(Technically this can be achieved with shaders & web audio api.)

## Handling delays

The current internet has lags which make it impossible to perform live musical performances. However dancing is a visual which is far less susceptible to lags in comparison to audio, and audio effects are not as jarring even if delayed as opposed to playing instruments.
So the delay should not be a big concern on this platform.
