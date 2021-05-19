# Lab 4: Platform Client

*description*

[URL.](https://condescending-beaver-755764.netlify.app/)

## What Worked Well

A lot of knowledge carried over from the Notes lab: I saved myself a lot of grief by just keeping better track of function, state, etc. names.

I had a really fun time with Semantic-UI. Namely, I really enjoyed styling my posts' tags with it. At first, it was confusing when I kept trying to access `this.props.thisPost.tags` and it would turn up `undefined` — but upon a closer look at the DevTools, I noticed that the `undefined` would quickly disappear. I figured it was because the props were taking a while to load. So by only converting the tags into `Label`s *after* that nested field became, well, defined, my problem was easily solved.

## What Didn't

I sunk in more hours than it was worth into attempting to build an inline editable UI — one that wouldn't require the user to click an edit button at the top first. The recorded demo at the top of the instructions seemed to have it, so I tried my hand at it... and, after an inordinate amount of time, decided my attention was better spent elsewhere.

First, I tried rendering an `input` element in lieu of a text field when said text field's `onClick` got triggered. The text field would be re-rendered and replace the `input` upon `onBlur` (the user clicks away from the input field). This seemed promising, but it ended up not working. I have a feeling that certain tweaks would have made it viable, but again, I decided to move on after already having spent a couple hours on this...

To then trying out a variety of component libraries, such as [react-inline-editing](https://www.npmjs.com/package/react-inline-editing), [React Inline Edit Kit (riek)](https://github.com/kaivi/riek), and [react-contenteditable](https://github.com/lovasoa/react-contenteditable). The last one got me the closest, but it was unwieldy to work with, most notably because its `ContentEditable`s only stored HTML values.

In short, I decided, yeah, I'll just use the edit button, and style the `input`/`textarea` fields to most closely resemble the post's text fields as much as possible. :(

## Extra Credit

...:).

## Screenshots
