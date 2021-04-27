while True:
    print("Rotation Level:" + input.rotation(Rotation.PITCH))
    print("Sound Level:" + input.sound())
    if input.rotation(Rotation.PITCH) > 25 :
        light.set_all(light.rgb(255, 0, 0))
