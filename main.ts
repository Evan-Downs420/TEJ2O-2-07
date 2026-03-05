/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan
 * Created on: Mar 2026
 * This program will make cookies.
*/

// variable
let cookies: number = 0

// clear 
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// press A
input.onButtonPressed(Button.A, function () {
  cookies = cookies + 1
  basic.showNumber(cookies)
})

// press B
input.onButtonPressed(Button.B, function () {
  cookies = 0
  basic.showNumber(cookies)
})
