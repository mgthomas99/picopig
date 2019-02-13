[github-index-url]: https://github.com/mgthomas99/picopig/blob/master/index.html
[github-license-url]: https://github.com/mgthomas99/picobrain/blob/master/LICENSE
[github-license-shield-url]: https://img.shields.io/github/license/mgthomas99/picobrain.svg?style=flat-square
[github-size-shield-url]: https://img.shields.io/github/size/mgthomas99/picopig/index.html.svg?style=flat-square

# picopig

[![Github file size][github-size-shield-url]][github-index-url]
[![GitHub][github-license-shield-url]][github-license-url]

A 139-byte implementation of the dice game [Pig](https://en.wikipedia.org/wiki/Pig_(dice_game)).

## How to Play

Open the `index.html` file in your preferred web browser. Alternatively, the
game can be played via Node.JS by running `node index.js` from the command line,
but note that this will actually polyfill some browser functions and therefore
you will be playing an *ungolfed* version of the game.

The prompt that is displayed will show three numbers:
- The first number is the player's ID (it will be either `0` or `1`).
- The second number is the player's total.
- The third number is the player's turn total.

If you want to roll the dice, type something into the prompt, then confirm. If
you want to stick with what you have rolled so far, just leave the box empty,
and your score will be updated and the next player's turn will begin.

## License

This code is unlicensed.
