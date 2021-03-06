import menu from './menu/menu.module';
import list from './list/list.module';
import handlebar from './handlebar/handlebar.module';
import handlelist from './handlelist/handlelist.module';
import dynamicForm from './dynamic-form/dynamic-form.module';
import feedback from './feedback/feedback.module';

export default angular
  .module('my-app.components', [
    menu,
    list,
    handlebar,
    handlelist,
    dynamicForm,
    feedback
  ])
  .run(function () {
    'ngInject';

    console.log('Components modules loaded.');
  })
  .name;