# mask-p5js

// returns an image object
getMaskImage(mainGraphics, maskGraphics, flipMask)

## Usage
Create two graphics objects: main and mask. Draw to the graphics objects as normal. Call getMaskImage() to get the image result.

	gfxMain = createGraphics(width, height);
	gfxMask = createGraphics(width, height);
    // draw to main and mask grahics
    // ...
	let img = getMaskImage(gfxMain, gfxMask, false);

