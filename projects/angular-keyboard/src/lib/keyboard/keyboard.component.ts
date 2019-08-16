import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {KeyboardCommandButton} from '../keyboard-commands';
import {AngularKeyboardService} from '../angular-keyboard.service';

@Component({
  selector: 'tb-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Output() pressedKey = new EventEmitter();

  constructor(
    private keyboardService: AngularKeyboardService
  ) { }

  readonly keyboardCommandButton = KeyboardCommandButton;

  readonly uppercaseLettersTab = [
    ['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P', 'Ü'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ö', 'Ä'],
    [KeyboardCommandButton.SHIFT, 'Y', 'X', 'C', 'V', 'B', 'N', 'M', KeyboardCommandButton.BACKSPACE],
    [KeyboardCommandButton.ONE_TWO_THREE, KeyboardCommandButton.SPACEBAR, '.']
  ];

  readonly lowercaseLettersTab = this.uppercaseLettersTab.map(row => row.map(letterOrCommand => {
    const isLetter = letterOrCommand.length === 1;
    return isLetter
      ? letterOrCommand.toLowerCase()
      : letterOrCommand;
  }));

  readonly numbersTab = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['-', '/', ':', ';', '(', ')', '€', '&', '@', '"'],
    [KeyboardCommandButton.SPECIAL_CHARS, '.', ',', '?', '!', "'"]
  ];
  shiftedLettersTab;

  selectedTab = this.lowercaseLettersTab;

  _shiftPressed: boolean;
  set shiftPressed(newValue: boolean) {
    this._shiftPressed = newValue;
    if (this.shiftPressed) {
      this.selectedTab = this.uppercaseLettersTab;
    } else {
      this.selectedTab = this.lowercaseLettersTab;
    }
  }
  get shiftPressed() {
    return this._shiftPressed;
  }

  ngOnInit() {
    this.shiftPressed = false;
  }

  onKeyboardButtonClick(btn: string) {
    this.pressedKey.emit(btn);
    this.keyboardService.input$.next(btn);
  }

  pressShift() {
    this.shiftPressed = !this._shiftPressed;
  }

  isShiftButton(btn: KeyboardCommandButton) {
    return btn === KeyboardCommandButton.SHIFT;
  }

}