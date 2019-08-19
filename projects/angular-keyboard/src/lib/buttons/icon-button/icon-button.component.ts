import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {KeyboardCommandButton} from '../../keyboard-commands';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'tb-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: [
    '../keyboard-button.base.scss',
    './icon-button.component.scss'
  ]
})
export class IconButtonComponent implements OnInit {

  @Input() activated: boolean;

  @Input() btn: string;

  @Output() buttonClick = new EventEmitter<string>();

  constructor(
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
  }

  get ngClass() {
    return {
      activated: this.activated,
      ['icon-button-' + this.btn]: true
    };
  }

  get buttonDisplay() {
    // http://xahlee.info/comp/unicode_computing_symbols.html
    const buttons = {
      [KeyboardCommandButton.SHIFT]: `

<svg width="20px" height="17px" viewBox="0 0 20 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="shift" fill="#262626" fill-rule="nonzero">
            <path d="M7.82686371,1.86763986 C8.45413127,1.24812229 8.97685423,0.508332068 9.73139347,0.0295107916 C10.3086614,-0.131609164 10.7268398,0.403944492 11.1109276,0.742069469 C13.4836353,3.28821863 15.9836147,5.70955655 18.3995038,8.21031981 C18.9244995,8.75495065 19.5449489,9.23831051 19.8926734,9.92363765 C20.1403986,10.3684195 19.8949461,10.8631258 19.7972196,11.3124463 C18.1267788,11.4281803 16.4449745,11.1853658 14.7836246,11.4395268 C14.7290795,12.8079118 14.8631694,14.1785661 14.7427158,15.5446817 C14.647262,15.9395391 14.6722618,16.4955164 14.2290837,16.67706 C12.7677321,17.1513427 11.208654,16.9471061 9.69957555,16.9856842 C8.45640398,16.9584526 7.17914178,17.1218419 5.96778812,16.7655625 C5.65415435,16.67706 5.32461161,16.438784 5.28824827,16.0915819 C5.09961346,14.5121524 5.43370162,12.9032222 5.09506804,11.3351392 C3.40417289,11.2080587 1.67918711,11.5416451 0.0178371644,11.1218255 C-0.00488992101,10.4773457 -0.0867074285,9.73301686 0.463288038,9.26327276 C2.90872243,6.78974105 5.36779307,4.32528651 7.82686371,1.86763986 L7.82686371,1.86763986 Z M8.88367318,2.9274007 C6.73823632,5.20577303 4.39734652,7.30487105 2.37463592,9.69216954 C3.78371522,9.81925007 5.19961264,9.6672073 6.60869193,9.79882642 C7.18823261,11.5121443 6.62232818,13.3729663 6.92232571,15.1384779 C8.14731562,15.2655584 9.37912364,15.1906717 10.6063863,15.2110954 C11.4200159,15.2110954 12.2518272,15.2814435 13.0381844,15.0250131 C13.4040905,13.3661584 13.0631842,11.6573791 13.2450009,9.97810073 C14.6722618,9.51062593 16.1949766,9.87598245 17.6631463,9.69216954 C15.6654355,7.58172505 13.5881799,5.5484366 11.5904691,3.43799211 C11.0700188,2.94328577 10.6154771,2.31242171 9.9268464,2.04691418 C9.51094074,2.24888145 9.20412509,2.60743008 8.88367318,2.9274007 Z" id="Shape"></path>
        </g>
    </g>
</svg>
`,
      [KeyboardCommandButton.BACKSPACE]: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"/></svg>`,
      [KeyboardCommandButton.ONE_TWO_THREE]: '123'
    };
    return this.sanitizer.bypassSecurityTrustHtml(buttons[this.btn]) || '???';
  }

}
