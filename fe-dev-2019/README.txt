# Your Programming Problem

You're going to make some enhancements to our little photo gallery.  The
enhancements we're looking for are described below.  Please have a go at
carrying these out, and then send your work back to us for us to review.

Please note that while this is a relatively simple matter of programming, we
are particularly interested in seeing the construction of your solution. We'll
want to talk with you about your code's correctness, but also its design and
organization.  If you find parts of the spec unclear, implement what you think
makes sense and make a note of it.  Nothing in here is intended as a trick
question.

1.  Modify the draw code so that the color names are Title case, and always
    drawn in alphabetical order.

2.  The data for the images to be rendered is currently embedded in the HTML.
    Remove this, and instead fetch the data from
    http://frontendtest.jobs.fastmail.com.user.fm/data.json

3.  Presume the data is coming from an untrusted source. What security issue(s)
    might be present in the current code? Fix anything you find.

4.  Change the layout so the space between images on a line is evenly
    distributed, such that the left edge of the first most image and the right
    edge of the last image on each line always line up. Supporting modern
    browsers only is fine, but document what is, and is not, supported.

5.  There's a search box on the page, but it doesn't do anything at the moment.
    Make it work so that as you type, only matching images are shown. Add
    support for the following capabilities:

    a) Add support for typing a color name, e.g. "red".

    b) Add support for typing multiple color names, e.g. "red white". An image
    must have all given colors to match.

    c) Add support for "is:portrait" and "is:landscape" keywords, to only show
    portrait or landscape images respectively.

    d) Add support for the "OR" operator, e.g. "red OR white" to show images
    that match either color.

When you finish this work, send it back to us and we'll try to set up a time to
talk about your work soon!
