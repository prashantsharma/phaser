/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

/**
 * [description]
 *
 * @function Phaser.Math.Easing.Expo.InOut
 * @since 3.0.0
 *
 * @param {number} v - [description]
 *
 * @return {number} [description]
 */
var InOut = function (v)
{
    if ((v *= 2) < 1)
    {
        return 0.5 * Math.pow(2, 10 * (v - 1));
    }
    else
    {
        return 0.5 * (2 - Math.pow(2, -10 * (v - 1)));
    }
};

module.exports = InOut;
