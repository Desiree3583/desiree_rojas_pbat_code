while (true) {
    console.log("Rotation Level:" + input.rotation(Rotation.Pitch))
    console.log("Sound Level:" + input.soundLevel())
    if (input.rotation(Rotation.Pitch) > 74) {
        console.log("You have passed the Angle Limit")
        pause(1000)
        console.log("Go back up")
        music.baDing.playUntilDone()
        light.setPixelColor(5, light.rgb(255, 0, 0))
        light.setPixelColor(6, light.rgb(255, 0, 0))
        light.setPixelColor(7, light.rgb(255, 0, 0))
        light.setPixelColor(8, light.rgb(255, 0, 0))
        light.setPixelColor(9, light.rgb(255, 0, 0))
        pause(1000)
    } else {
        light.setAll(light.rgb(255, 255, 255))
    }
    
    if (input.rotation(Rotation.Pitch) < -74) {
        console.log("You have passed the Angle Limit")
        pause(1000)
        console.log("Go back up")
        music.baDing.playUntilDone()
        light.setPixelColor(0, light.rgb(255, 0, 0))
        light.setPixelColor(1, light.rgb(255, 0, 0))
        light.setPixelColor(2, light.rgb(255, 0, 0))
        light.setPixelColor(3, light.rgb(255, 0, 0))
        light.setPixelColor(4, light.rgb(255, 0, 0))
        pause(1000)
    } else {
        light.setAll(light.rgb(255, 255, 255))
    }
    
}
