input.onButtonPressed(Button.A, function () {
    Rounds += 1
    PA += 1
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    updateScore()
})
input.onButtonPressed(Button.AB, function () {
    Ties += 1
    Rounds += 1
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    updateScore()
})
input.onButtonPressed(Button.B, function () {
    Rounds += 1
    PB += 1
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
    updateScore()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    PA = 0
    PB = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("Would you like to play a game?")
    basic.pause(2000)
    updateScore()
}
function updateScore () {
    OLED.init(128, 64)
    OLED.clear()
    OLED.writeStringNewLine("Player A: " + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B: " + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:  " + Rounds)
}
let PB = 0
let Ties = 0
let PA = 0
let Rounds = 0
reset()
