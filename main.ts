input.onButtonPressed(Button.A, function () {
    Sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Sprite.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 8; index++) {
        Enemy.change(LedSpriteProperty.X, randint(-1, 1))
        basic.pause(500)
        Enemy.change(LedSpriteProperty.Y, randint(-1, 1))
        basic.pause(500)
    }
    Enemy_2 = game.createSprite(0, 0)
    for (let index = 0; index < 8; index++) {
        Enemy_2.change(LedSpriteProperty.X, randint(-1, 1))
        Enemy.change(LedSpriteProperty.X, randint(-1, 1))
        basic.pause(1000)
        Enemy_2.change(LedSpriteProperty.Y, randint(-1, 1))
        Enemy.change(LedSpriteProperty.Y, randint(-1, 1))
        basic.pause(1000)
    }
})
let Enemy_2: game.LedSprite = null
let Enemy: game.LedSprite = null
let Sprite: game.LedSprite = null
basic.showIcon(IconNames.Happy)
Sprite = game.createSprite(2, 2)
Enemy = game.createSprite(4, 4)
