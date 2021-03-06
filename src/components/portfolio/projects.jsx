import tile_symova from '../../../resource/img/tile_symova.jpg'
import tile_basicux from '../../../resource/img/tile_basicux.jpg'
import tile_lessdoing from '../../../resource/img/tile_lessdoing.jpg'
import tile_pmr from '../../../resource/img/tile_pmr.jpg'
import tile_sonicsmith from '../../../resource/img/tile_sonicsmith.jpg'
import tile_triniso from '../../../resource/img/tile_triniso.jpg'

const projects = [{
  name: 'ALERT MANAGER',
  description: 'Разработан и реализован UI\UX дизайн центра управления оповещениями - Alert manager. \
  Alert manager Выполнен в виде приложения of Universal Machine Data Platform Splunk и используется \
  крупным оператором сотовой связи. Разработанный интерфейс позволяет с использованием дашборда быстро \
  и легко настраивать условия срабатывания alert, а также гибко настраивать правила рассылки \
  email or push уведомлений о сработавшем alert.',
  tool: 'Splunk Enterprise, Figma, Vue.JS, Vuex, Vue Router',
  img: tile_symova,
}, {
  name: 'СИСТЕМА МОНИТОРИНГА ЗВОНКОВ В CALL CENTER',
  description: 'Разработан и реализован UI\UX дизайн системы мониторинга отклонений звонков, поступающих \
  в call center. Реализованный интерфейс включает в себя несколько дашбордов, которые 24/7 контролируются \
  администраторами call center. Дашборды отображают ожидаемый прогноз звонков в call center, рассчитываемый \
  математической моделью, с доверительным интервалом, а также фактическое число звонков. Разработана консоль \
  администратора, позволяющая конфигурировать дашборды. Разработанная и реализованная система мониторинга звонков \
  используется в call center крупного банка',
  tool: 'Sketch, Adobe illustrator, React, Redux, React Router',
  img: tile_basicux,
}, {
  name: ' MEDEX - РЕКОМЕНДАТЕЛЬНАЯ СИСТЕМА ЛЕЧЕНИЯ ОНКОЛОГИЧЕСИХ ЗАБОЛЕВАНИЙ',
  description: 'Разработан и реализован UI\UX дизайн системы рекомендаций используемая докторами крупного \
  онкологический центра. Интерфейс системы позволяет быстро определить наиболее оптимальный тип лечения пациента.',
  tool: 'Figma, Adobe illustrator, React, Redux, React Router',
  img: tile_lessdoing,
}, {
  name: ' FIND OUT',
  description: 'Разработан и реализован UI\UX дизайн системы рекомендаций используемая докторами крупного \
  онкологический центра. Интерфейс системы позволяет быстро определить наиболее оптимальный тип лечения пациента.',
  tool: 'Figma, Adobe illustrator, React, Redux, React Router',
  img: tile_pmr,
}]

const selfProjects = [{
  name: 'Система планирования вычислительных заданий в территориально распределённой сети hight performance center',
  description: 'Разработана система планирования, позволяющая на основе английского аукциона распределять \
  задания в разные крупные HPC единой сети. Подготовлена диссертационная работа. Научные статьи:  a.	springer  b.	springer',
  tool: 'Java Spring, Docker, Vagrant, Docker Compose, Elastic Search, Nginx',
  img: tile_sonicsmith,
}, {
  name: 'Система моделирования работы сети суперкомпьютерных центров',
  description: '',
  tool: '',
  img: tile_triniso,
},]

export {projects, selfProjects}
