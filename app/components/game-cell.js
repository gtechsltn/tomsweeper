import Component from '@glimmer/component';
import { computed } from '@ember/object';

const sprites = {
  clock: '◷',
  clues: '◻➊➋➌➍➎➏➐➑',
  flag: '✖', // ⚑ Flag does not work in curses?
  mark: '⍰',
  mine: '☀',
  square: '◼',
  face_win: '☻',
  face_play: '☺',
  face_lose: '☹',
};

const colors = [
  'blue',
  'green',
  'red',
  'purple',
  'pink',
  'teal',
  'orange',
  'indigo',
];

export default class GameCell extends Component {
  @computed('args.value')
  get color() {
    return colors[this.args.value - 1];
  }

  @computed('args.{revealed,value}')
  get backgroundColor() {
    if (this.args.revealed && this.args.value === 0) {
      return 'bg-white';
    }

    return 'bg-gray-200';
  }
}