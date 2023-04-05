# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I am missing something here, by the time I realized it, it was too late to go back.

I prefer to break things out into a constants file, regardless if they are being reused or not. I do this for two reasons, I like having all of these in one place, especially if I have to break them out into .env variables later, and two you never know when you will have to re-use something later down the road. It feels cleaner to me, and is a personal prefrence.

I certainly think the code is cleaner. I prefer to break code out into helper functions so the primary file doesn't end up being 500 lines long. I also find it **much** easier to write functional tests this way. Whenever possible all of my functions return a value, it becomes harder when dealing with a UI, but this is a principal I try to always live by.

My tests are lacking, I know that, given more time I would have built them out. I always comment my code, it makes it easier for me to follow, and anyone else in the future that needs to work on the code do so, again time.

I always have trouble deciding between concise and readability, I think if you know what's going on the code I wrote is perfectly legible, if not you might have some issues, but that is where the comments come in.

I am running out of time and I need to get this submitted. I think you can tell from this submission I know how to code, just a matter of whether you want to talk to me more. It's hard when all you have been doing for the last 8 weeks is algorithm work, because generally that's what these code tests are.

-jeff
