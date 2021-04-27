while (true) {
    console.log("Rotation Level:" + input.rotation(Rotation.Pitch))
    console.log("Sound Level:" + input.soundLevel())
    if (input.rotation(Rotation.Pitch) > 25 || input.rotation(Rotation.Pitch) < -25) {
        console.log("You have passed the Angle Limit")
        pause(1000)
        console.log("Go back up")
        music.baDing.playUntilDone()
        light.setAll(light.rgb(255, 0, 0))
        pause(1000)
    } else {
        light.setAll(light.rgb(0, 255, 0))
    }
    
}
