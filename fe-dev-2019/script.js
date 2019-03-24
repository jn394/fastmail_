(function (document) {

    "use strict";

    fetch("http://frontendtest.jobs.fastmail.com.user.fm/data.json")
        .then(response => response.json())
        .then(json => {
            console.log(json);

            drawImages(json);

        })
        .catch(error => console.log(error))

    var search = document.getElementById('mySearch')

    var searchArray = [];

    search.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            searchArray = [];

            fetch("http://frontendtest.jobs.fastmail.com.user.fm/data.json")
                .then(response => response.json())
                .then(json => {
                    console.log(json);

                    var theSearch = document.getElementById("mySearch").value
                    console.log(theSearch);

                    // Two Colors
                    if (/\s/g.test(theSearch) && !(theSearch.includes("OR"))) {
                        var firstColor = theSearch.substring(0, theSearch.indexOf(" "));
                        var secondColor = theSearch.split(" ").pop();
                        console.log(firstColor);
                        console.log(secondColor);

                        for (var i = 0; i < json.images.length; i++) {
                            if (json.images[i].tags.includes(firstColor) && json.images[i].tags.includes(secondColor)) {
                                searchArray.push(json.images[i]);
                            }
                        }

                        json.images = searchArray;

                        drawImages(json);
                    }

                    // Orientation
                    else if (/\:/g.test(theSearch)) {
                        var orientation = theSearch.split(":").pop();
                        console.log(orientation);

                        if (orientation === "landscape") {
                            for (var i = 0; i < json.images.length; i++) {
                                if (json.images[i].width > 700) {
                                    searchArray.push(json.images[i]);
                                }
                            }

                            json.images = searchArray;

                            drawImages(json);
                        }
                        else if (orientation === "portrait") {
                            for (var i = 0; i < json.images.length; i++) {
                                if (json.images[i].width < 700) {
                                    searchArray.push(json.images[i]);
                                }
                            }

                            json.images = searchArray;

                            drawImages(json);
                        }

                    }

                    // OR
                    else if (theSearch.includes("OR")) {
                        var firstColor = theSearch.substring(0, theSearch.indexOf(" "));
                        var secondColor = theSearch.split("OR ").pop();
                        console.log(firstColor);
                        console.log(secondColor);

                        for (var i = 0; i < json.images.length; i++) {
                            if (json.images[i].tags.includes(firstColor) || json.images[i].tags.includes(secondColor)) {
                                searchArray.push(json.images[i]);
                            }
                        }

                        json.images = searchArray;

                        drawImages(json);
                    }

                    // One Color
                    else {
                        for (var i = 0; i < json.images.length; i++) {
                            for (var j = 0; j < json.images[i].tags.length; j++) {
                                if (theSearch === json.images[i].tags[j]) {
                                    searchArray.push(json.images[i]);
                                }
                            }
                        }

                        json.images = searchArray;

                        drawImages(json);
                    }
                    document.getElementById("mySearch").value = "";
                })
                .catch(error => console.log(error))

        }
    });

    var $ = document.getElementById.bind(document);

    var drawImage = function (datum, imagePath) {
        var figure = document.createElement('figure');
        var img = document.createElement('img');
        var caption = document.createElement('figcaption');

        var filtered = datum.tags.sort();

        for (var i = 0; i < filtered.length; i++) {
            filtered[i] = toTitleCase(filtered[i]);
        }

        img.src = imagePath + datum.name;
        caption.innerHTML = filtered.join(', ');

        figure.appendChild(img);
        figure.appendChild(caption);

        return figure;
    };

    var drawImages = function (data) {
        var images = document.createElement('div');
        images.id = 'images';

        data.images.forEach(function (datum) {
            images.appendChild(drawImage(datum, data.imagePath));
        });

        document.body.replaceChild(images, $('images'));
    };

    function toTitleCase(word) {
        var splitWord = word.split('');
        splitWord[0] = word.charAt(0).toUpperCase();
        var newWord = splitWord.join('');
        return newWord
    }

    // ---

}(document));
