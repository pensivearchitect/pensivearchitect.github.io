.PHONY: all clean

all: clean src/components/*.js src/index.* src/styles/*.scss
	parcel build src/index.html --out-dir .

clean:
	rm -rf ./dist
	rm *.js
	rm *.css
	rm *.map
