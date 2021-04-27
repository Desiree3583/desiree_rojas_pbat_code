while True:
    print("Rotation Level:" + input.rotation(Rotation.PITCH))
    print("Sound Level:" + input.sound_level())
    if input.rotation(Rotation.PITCH) > 25 or input.rotation(Rotation.Pitch) < -25:
        print("You have passed the Angle Limit")
        pause(1000)
        print("Go back up")
        music.ba_ding.play_until_done()
        light.set_all(light.rgb(255, 0, 0))
        pause(1000)
    else:
        light.set_all(light.rgb(0, 255, 0))

