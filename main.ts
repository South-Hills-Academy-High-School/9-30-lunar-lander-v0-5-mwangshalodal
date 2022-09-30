namespace SpriteKind {
    export const map = SpriteKind.create()
    export const rocketengine = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    apple.ay = 25 * Math.sin(angle)
    apple.ax = 25 * Math.cos(angle)
    fireball.setFlag(SpriteFlag.Invisible, false)
    rocketfleg = 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    angle += 15 * (3.14 / 180)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorthWest1, function (sprite, location) {
    if (Math.abs(apple.vx) > 20 || apple.vy > 50) {
        爆 = sprites.create(img`
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 4 4 4 5 5 4 4 4 2 2 2 . 
            . 2 2 5 5 d 4 5 5 5 4 4 4 4 2 . 
            . 2 4 5 5 5 5 d 5 5 5 4 5 4 2 2 
            . 2 4 d d 5 5 5 5 5 5 d 4 4 4 2 
            2 4 5 5 d 5 5 5 d d d 5 5 5 4 4 
            2 4 5 5 4 4 4 d 5 5 d 5 5 5 4 4 
            4 4 4 4 . . 2 4 5 5 . . 4 4 4 4 
            . . b b b b 2 4 4 2 b b b b . . 
            . b d d d d 2 4 4 2 d d d d b . 
            b d d b b b 2 4 4 2 b b b d d b 
            b d d b b b b b b b b b b d d b 
            b b d 1 1 3 1 1 d 1 d 1 1 d b b 
            . . b b d d 1 1 3 d d 1 b b . . 
            . . 2 2 4 4 4 4 4 4 4 4 2 2 . . 
            . . . 2 2 4 4 4 4 4 2 2 2 . . . 
            `, SpriteKind.Projectile)
        爆.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
        scene.cameraFollowSprite(爆)
        music.baDing.playUntilDone()
        pause(2000)
        game.over(false)
    } else {
        if (landingfleg == 0) {
            油 += 100
            landingfleg = 1
        }
    }
    apple.setVelocity(0, -1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    angle += -15 * (3.14 / 180)
})
function explotion () {
    apple.destroy()
    mySprite2 = sprites.create(img`
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 4 4 4 5 5 4 4 4 2 2 2 . 
        . 2 2 5 5 d 4 5 5 5 4 4 4 4 2 . 
        . 2 4 5 5 5 5 d 5 5 5 4 5 4 2 2 
        . 2 4 d d 5 5 5 5 5 5 d 4 4 4 2 
        2 4 5 5 d 5 5 5 d d d 5 5 5 4 4 
        2 4 5 5 4 4 4 d 5 5 d 5 5 5 4 4 
        4 4 4 4 . . 2 4 5 5 . . 4 4 4 4 
        . . b b b b 2 4 4 2 b b b b . . 
        . b d d d d 2 4 4 2 d d d d b . 
        b d d b b b 2 4 4 2 b b b d d b 
        b d d b b b b b b b b b b d d b 
        b b d 1 1 3 1 1 d 1 d 1 1 d b b 
        . . b b d d 1 1 3 d d 1 b b . . 
        . . 2 2 4 4 4 4 4 4 4 4 2 2 . . 
        . . . 2 2 4 4 4 4 4 2 2 2 . . . 
        `, SpriteKind.Text)
}
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    apple.ay = 20
    fireball.setFlag(SpriteFlag.Invisible, true)
    rocketfleg = 0
})
let mySprite2: Sprite = null
let 爆: Sprite = null
let apple: Sprite = null
let angle = 0
let fireball: Sprite = null
let landingfleg = 0
let rocketfleg = 0
let 油 = 1000
let Fuelsprites = textsprite.create(convertToText(油))
rocketfleg = 0
landingfleg = 0
fireball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . 4 4 4 5 5 4 4 4 . . . . 
    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
    . . . . 4 4 2 2 2 2 4 4 . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
fireball.setFlag(SpriteFlag.Invisible, true)
angle = 0
tiles.setCurrentTilemap(tilemap`level2`)
effects.clouds.startScreenEffect()
apple = sprites.create(img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `, SpriteKind.Player)
let engine = sprites.create(img`
    7 3 
    3 7 
    `, SpriteKind.rocketengine)
scene.cameraFollowSprite(apple)
scaling.scaleByPercent(apple, -25, ScaleDirection.Uniformly, ScaleAnchor.Middle)
apple.ay = 20
let myMinimap = minimap.minimap(MinimapScale.Eighth, 2, 0)
let minimap2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.map)
game.onUpdate(function () {
    Fuelsprites.destroy()
    Fuelsprites = textsprite.create(convertToText(油))
    Fuelsprites.setPosition(apple.x, apple.y)
    minimap2.destroy()
    myMinimap = minimap.minimap(MinimapScale.Eighth, 2, 0)
    minimap.includeSprite(myMinimap, apple, MinimapSpriteScale.MinimapScale)
    minimap2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.map)
    minimap2.setPosition(apple.x - 50, apple.y - 30)
    engine.setPosition(apple.x + -8 * Math.cos(angle), apple.y + -8 * Math.sin(angle))
    fireball.setPosition(apple.x + -8 * Math.cos(angle), apple.y + -8 * Math.sin(angle))
    if (rocketfleg == 1) {
        油 += -1
    }
    if (apple.y < 400) {
        landingfleg = 0
    }
})
