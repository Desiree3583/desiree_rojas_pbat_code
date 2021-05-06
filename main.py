while True:
    print("Rotation Level:" + input.rotation(Rotation.PITCH))
    print("Sound Level:" + input.sound_level())
    if input.rotation(Rotation.PITCH) > 74 :
        print("You have passed the Angle Limit")
        pause(1000)
        print("Go back up")
        music.ba_ding.play_until_done()
        light.set_pixel_color(5, light.rgb(255, 0, 0))
        light.set_pixel_color(6, light.rgb(255, 0, 0))
        light.set_pixel_color(7, light.rgb(255, 0, 0))
        light.set_pixel_color(8, light.rgb(255, 0, 0))
        light.set_pixel_color(9, light.rgb(255, 0, 0))
        pause(1000)
    else:
        light.set_all(light.rgb(255, 255, 255))
    if input.rotation(Rotation.PITCH) < -74 :
        print("You have passed the Angle Limit")
        pause(1000)
        print("Go back up")
        music.ba_ding.play_until_done()
        light.set_pixel_color(0, light.rgb(255, 0, 0))
        light.set_pixel_color(1, light.rgb(255, 0, 0))
        light.set_pixel_color(2, light.rgb(255, 0, 0))
        light.set_pixel_color(3, light.rgb(255, 0, 0))
        light.set_pixel_color(4, light.rgb(255, 0, 0))
        pause(1000)
    else:
        light.set_all(light.rgb(255, 255, 255))
