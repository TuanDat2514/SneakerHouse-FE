import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,group
} from '@angular/animations';
const left = [
  query(':enter, :leave', style({position: 'absolute', width: '100%',height:'50px'}), {optional: true}),
  group([
    query(':enter', [style({transform: 'translateX(-100%)'}), animate('.9s ease-out', style({transform: 'translateX(0%)'}))], {
      optional: true,
    }),
    query(':leave', [style({transform: 'translateX(0%)'}), animate('.9s ease-out', style({transform: 'translateX(100%)'}))], {
      optional: true,
    }),
  ]),
];
const right = [
  query(':enter, :leave', style({position: 'absolute', width: '100%',height:'50px'}), {optional: true}),
  group([
    query(':enter', [style({transform: 'translateX(-100%)'}), animate('.9s ease-out', style({transform: 'translateX(0%)'}))], {
      optional: true,
    }),
    query(':leave', [style({transform: 'translateX(0%)'}), animate('.9s ease-out', style({transform: 'translateX(100%)'}))], {
      optional: true,
    }),
  ]),
];
export const SlideHorizontalAnimation = [
  trigger('SlideHorizontal', [
    transition(':increment', right),
    transition(':decrement', left),
  ]),
];

