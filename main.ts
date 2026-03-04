/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan
 * Created on: Mar 2026
 * This program will make cookies
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

let cookies: number = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

//functions
input.onButtonPressed(Button.A, function () {
    cookies = cookies + 1
    basic.showNumber(cookies)
})

input.onButtonPressed(Button.B, function () {
    cookies = 0
    basic.showNumber(cookies)
})

