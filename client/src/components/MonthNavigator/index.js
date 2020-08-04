import './styles.scss';
import { element } from 'utils/element';
import { bindEvent } from 'utils/bindEvent';
import { store } from 'models/store';

export default class MonthNavigator {
  constructor($target) {
    this.$target = $target;
    this.store = store;
    this.store.subscribe((data) => this.render(data), 'moveMonth');

    this.$MonthNavigator = element('div', {
      className: 'month-navigator',
    });

    this.$target.appendChild(this.$MonthNavigator);
  }

  render(data) {
    this.$MonthNavigator.innerHTML = `
      <div class="month">2020년 ${data.currentMonth}월</div>
      <div class="prev-next-month-buttons">
        <button class="prev-month-button">← 이전 달</button>
        <button class="next-month-button">다음 달 →</button>
      </div>
    `;

    bindEvent('.prev-month-button', 'click', () => {
      this.store.moveMonth(--data.month);
    });

    bindEvent('.next-month-button', 'click', () => {
      this.store.moveMonth(++data.month);
    });
  }
}