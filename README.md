# `Символы & генераторы`

[![Build status](https://ci.appveyor.com/api/projects/status/gpwr4khitgs6tpsj?svg=true)](https://ci.appveyor.com/project/Maksim-Gavr-04/ajs-11-generators)

## Легенда

Реализовывать итераторы не так уж здорово, правда? Давайте посмотрим, как нам могут помочь генераторы при переборе.

## Описание

Используйте следующую заготовку для организации перебора класса `Team`:

```javascript
class Team {
  *[Symbol.iterator]() {
    // Это генератор.
    // И здесь есть доступ к this.
    // Остаётся лишь правильно написать yield.
  }
}
```

В этом задании предполагается, что все персонажи содержат следующий набор полей:

```javascript
const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}
```

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете. Обратите 
внимание, что вы тестируете асинхронный код.