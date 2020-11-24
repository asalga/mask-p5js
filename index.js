function maskGraphics(_main, _mask, doFlipMask){

	function flipMask(g){
		g.loadPixels();
		for(let i = 0; i < g.pixels.length; i += 4){
			g.pixels[i] = 255 - g.pixels[i];
		}
		g.updatePixels();
	}
	
	function copyGfxToImg(gfx, img){
		gfx.loadPixels();
		img.loadPixels();

		for(let i = 0; i < gfx.pixels.length; i++){
			img.pixels[i] = gfx.pixels[i];
		}

		img.updatePixels();
	}

	img = createImage(_main.width, _main.height);
	mask = createImage(_mask.width, _mask.height);

	copyGfxToImg(_mask, mask);
	copyGfxToImg(_main, img);
	
	if(doFlipMask){
		flipMask(mask);
	}

	img.mask(mask, 0, 0);
	
	return img;
}
