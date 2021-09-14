let i1 = 0
let i2 = 0
let i3 = 0
let i4 = 0
let i5 = 0
let i6 = 0
let i7 = 0
basic.forever(function () {
    i1 = pins.digitalReadPin(DigitalPin.P1)
    if (i1 == 1) {
        music.playTone(262, music.beat(BeatFraction.Breve))
    }
    i2 = pins.digitalReadPin(DigitalPin.P2)
    if (i2 == 1) {
        music.playTone(294, music.beat(BeatFraction.Double))
    }
    i3 = pins.digitalReadPin(DigitalPin.P3)
    if (i3 == 1) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
    i4 = pins.digitalReadPin(DigitalPin.P4)
    if (i4 == 1) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    i5 = pins.digitalReadPin(DigitalPin.P5)
    if (i5 == 1) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    i6 = pins.digitalReadPin(DigitalPin.P6)
    if (i6 == 1) {
        music.playTone(262, music.beat(BeatFraction.Half))
    }
    i7 = pins.digitalReadPin(DigitalPin.P7)
    if (i7 == 1) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
})
