---
layout: post.html
title: Back To Clipmaps 
---

I've been thinking and experimenting with procedurally generated for a little over a year now, and I think I've finally found The Way&trade;

I originally started with GPU clipmaps about a year ago and tried several different implementations. After getting a spherical geometric clipmap implementation working, I became stumped on the problem of precision. The issue being that the GPU only works with 32 bit floats (and sometimes smaller), yet an to get sub meter precision in a terrain as large as the Earth's requires 64 bit doubles.

I wrestled with this problem for quite some time, only to realize there is no way to solve for a position on a sphere without using some derivative of that sphere's radius. 

So next I created a quadtree cubemap implementation aka a quadsphere. This was a bit tricky to get going, but worked quite well. It's only drawback was code c
complexity. And as I started work on creating heightmaps I realized it was quite a bit more complex than I wanted to deal with.

Then Google's new implementation of its WebGL maps came out using clipmaps and a friend on irc noticed that on zooming in, their implementation switched from a spherical projection of the terrain to a planar projection. You can clearly seen the horizon jump when the switch in projections takes place. If this is good enough for Google, then it is good enough for anything I might create.
 
So now I'm back to a [CDLOD](http://www.vertexasylum.com/downloads/cdlod/cdlod_latest.pdf) clipmap implementation with a hybrid spherical then planar terrain 
projection, simply switching between the two at the point where 32 bit floats are no longer accurate enough to place a vertex in a single pixel.

You can follow my progress at my project's Github [site](https://github.com/merpnderp/webglclipmapplanet).
