while (true) {
    console.log("Rotation Level:" + input.rotation(Rotation.Pitch))
    console.log("Sound Level:" + input.soundLevel)
    if (input.rotation(Rotation.Pitch) > 25) {
        light.setAll(light.rgb(255, 0, 0))
    }
    
}
